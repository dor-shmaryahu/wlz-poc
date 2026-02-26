import { useMemo } from 'react';
import type { Requirement, RequirementAssessment } from '../types/compliance';
import { STATUS_COLORS } from '../types/compliance';
import { frameworks } from '../data/frameworks';
import { craRequirements } from '../data/cra-requirements';
import { iec62443Requirements } from '../data/iec62443-requirements';
import { calculateFrameworkScore } from '../utils/scoring';
import type { FrameworkScore } from '../utils/scoring';
import { Shield, AlertTriangle, CheckCircle2, Clock, BarChart3 } from 'lucide-react';

interface DashboardProps {
  assessments: Record<string, RequirementAssessment>;
  onSelectFramework: (id: string) => void;
}

const allRequirements: Record<string, Requirement[]> = {
  cra: craRequirements,
  iec62443: iec62443Requirements,
};

function ProgressRing({ percentage, size = 120 }: { percentage: number; size?: number }) {
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const color = percentage >= 80 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444';

  return (
    <svg width={size} height={size} className="progress-ring">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#1e293b"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 0.6s ease' }}
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="progress-text">
        {percentage}%
      </text>
    </svg>
  );
}

function SeverityBar({ label, total, completed }: { label: string; total: number; completed: number }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="severity-bar">
      <div className="severity-bar-header">
        <span className={`severity-badge severity-${label}`}>{label}</span>
        <span className="severity-stat">{completed}/{total}</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function Dashboard({ assessments, onSelectFramework }: DashboardProps) {
  const scores = useMemo(() => {
    const result: Record<string, FrameworkScore> = {};
    for (const fw of frameworks) {
      const reqs = allRequirements[fw.id];
      if (reqs && reqs.length > 0) {
        result[fw.id] = calculateFrameworkScore(reqs, assessments);
      }
    }
    return result;
  }, [assessments]);

  const totalReqs = Object.values(scores).reduce((s, v) => s + v.totalRequirements, 0);
  const totalCompleted = Object.values(scores).reduce((s, v) => s + v.completedRequirements, 0);
  const overallPct = totalReqs > 0 ? Math.round((totalCompleted / totalReqs) * 100) : 0;

  // Count statuses across all
  const statusCounts = useMemo(() => {
    let notStarted = 0, inProgress = 0, implemented = 0, verified = 0;
    const allReqs = [...craRequirements, ...iec62443Requirements];
    for (const req of allReqs) {
      const status = assessments[req.id]?.status || 'not_started';
      switch (status) {
        case 'not_started': notStarted++; break;
        case 'in_progress': inProgress++; break;
        case 'implemented': implemented++; break;
        case 'verified': verified++; break;
      }
    }
    return { notStarted, inProgress, implemented, verified };
  }, [assessments]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1><Shield size={28} /> Compliance Readiness Dashboard</h1>
        <p className="subtitle">Track your organization's readiness for CRA and IEC 62443 certification</p>
      </div>

      {/* Overall readiness */}
      <div className="overall-card">
        <div className="overall-ring">
          <ProgressRing percentage={overallPct} size={160} />
          <div className="overall-label">Overall Readiness</div>
        </div>
        <div className="overall-stats">
          <div className="stat-card">
            <AlertTriangle size={20} color={STATUS_COLORS.not_started} />
            <div>
              <div className="stat-value">{statusCounts.notStarted}</div>
              <div className="stat-label">Not Started</div>
            </div>
          </div>
          <div className="stat-card">
            <Clock size={20} color={STATUS_COLORS.in_progress} />
            <div>
              <div className="stat-value">{statusCounts.inProgress}</div>
              <div className="stat-label">In Progress</div>
            </div>
          </div>
          <div className="stat-card">
            <BarChart3 size={20} color={STATUS_COLORS.implemented} />
            <div>
              <div className="stat-value">{statusCounts.implemented}</div>
              <div className="stat-label">Implemented</div>
            </div>
          </div>
          <div className="stat-card">
            <CheckCircle2 size={20} color={STATUS_COLORS.verified} />
            <div>
              <div className="stat-value">{statusCounts.verified}</div>
              <div className="stat-label">Verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Per-framework cards */}
      <div className="framework-cards">
        {frameworks.map((fw) => {
          const score = scores[fw.id];
          if (!score) return null;
          return (
            <div
              key={fw.id}
              className="framework-card"
              onClick={() => onSelectFramework(fw.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onSelectFramework(fw.id); }}
            >
              <div className="fw-card-header">
                <h2>{fw.shortName}</h2>
                <ProgressRing percentage={score.percentage} size={90} />
              </div>
              <p className="fw-card-desc">{fw.description}</p>
              <div className="fw-card-meta">
                <span>{score.totalRequirements} requirements</span>
                <span>{score.completedRequirements} completed</span>
              </div>
              <div className="severity-bars">
                {(['critical', 'high', 'medium', 'low'] as const).map((sev) => (
                  <SeverityBar
                    key={sev}
                    label={sev}
                    total={score.bySeverity[sev]?.total || 0}
                    completed={score.bySeverity[sev]?.completed || 0}
                  />
                ))}
              </div>
              <div className="fw-card-action">View Requirements &rarr;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
