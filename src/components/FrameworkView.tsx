import { useMemo, useState } from 'react';
import { Requirement, RequirementAssessment, ComplianceStatus, STATUS_LABELS } from '../types/compliance';
import { frameworks } from '../data/frameworks';
import { craRequirements } from '../data/cra-requirements';
import { iec62443Requirements } from '../data/iec62443-requirements';
import { calculateFrameworkScore } from '../utils/scoring';
import { RequirementDetail } from './RequirementDetail';
import { ArrowLeft, Filter, Search } from 'lucide-react';

const allRequirements: Record<string, Requirement[]> = {
  cra: craRequirements,
  iec62443: iec62443Requirements,
};

interface FrameworkViewProps {
  frameworkId: string;
  assessments: Record<string, RequirementAssessment>;
  onBack: () => void;
  onUpdateAssessment: (reqId: string, update: Partial<RequirementAssessment>) => void;
}

export function FrameworkView({ frameworkId, assessments, onBack, onUpdateAssessment }: FrameworkViewProps) {
  const framework = frameworks.find((f) => f.id === frameworkId)!;
  const requirements = allRequirements[frameworkId] || [];
  const score = useMemo(() => calculateFrameworkScore(requirements, assessments), [requirements, assessments]);

  const [selectedReq, setSelectedReq] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ComplianceStatus | 'all'>('all');
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    return requirements.filter((req) => {
      const assessment = assessments[req.id];
      const status = assessment?.status || 'not_started';

      if (statusFilter !== 'all' && status !== statusFilter) return false;
      if (severityFilter !== 'all' && req.severity !== severityFilter) return false;
      if (categoryFilter !== 'all' && req.category !== categoryFilter) return false;
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        return (
          req.id.toLowerCase().includes(term) ||
          req.title.toLowerCase().includes(term) ||
          req.description.toLowerCase().includes(term)
        );
      }
      return true;
    });
  }, [requirements, assessments, statusFilter, severityFilter, categoryFilter, searchTerm]);

  // Group filtered by category
  const grouped = useMemo(() => {
    const map = new Map<string, Requirement[]>();
    for (const req of filtered) {
      const list = map.get(req.category) || [];
      list.push(req);
      map.set(req.category, list);
    }
    return map;
  }, [filtered]);

  if (selectedReq) {
    const req = requirements.find((r) => r.id === selectedReq)!;
    return (
      <RequirementDetail
        requirement={req}
        assessment={assessments[req.id] || { requirementId: req.id, status: 'not_started', notes: '', evidenceLinks: [], lastUpdated: '', updatedBy: '' }}
        onUpdate={(update) => onUpdateAssessment(req.id, update)}
        onBack={() => setSelectedReq(null)}
      />
    );
  }

  return (
    <div className="framework-view">
      <div className="fw-view-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Dashboard
        </button>
        <div>
          <h1>{framework.shortName}</h1>
          <p className="subtitle">{framework.name} &mdash; {framework.version}</p>
        </div>
        <div className="fw-view-score">
          <div className="score-big">{score.percentage}%</div>
          <div className="score-label">
            {score.completedRequirements}/{score.totalRequirements} completed
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search requirements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <Filter size={14} />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as ComplianceStatus | 'all')}>
            <option value="all">All Statuses</option>
            {(Object.keys(STATUS_LABELS) as ComplianceStatus[]).map((s) => (
              <option key={s} value={s}>{STATUS_LABELS[s]}</option>
            ))}
          </select>
          <select value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)}>
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="all">All Categories</option>
            {framework.categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category progress bars */}
      <div className="category-progress-list">
        {score.categories.map((cat) => (
          <div key={cat.category} className="category-progress-item">
            <div className="cat-progress-header">
              <span className="cat-name">{cat.category}</span>
              <span className="cat-pct">{cat.percentage}%</span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${cat.percentage}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Requirements list */}
      <div className="requirements-list">
        {Array.from(grouped.entries()).map(([category, reqs]) => (
          <div key={category} className="category-group">
            <h3 className="category-heading">{category}</h3>
            {reqs.map((req) => {
              const assessment = assessments[req.id];
              const status = assessment?.status || 'not_started';
              return (
                <div
                  key={req.id}
                  className={`requirement-row status-${status}`}
                  onClick={() => setSelectedReq(req.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedReq(req.id); }}
                >
                  <div className="req-id">{req.id}</div>
                  <div className="req-info">
                    <div className="req-title">{req.title}</div>
                    <div className="req-desc">{req.description.substring(0, 120)}...</div>
                  </div>
                  <div className="req-meta">
                    <span className={`severity-badge severity-${req.severity}`}>{req.severity}</span>
                    <span className={`status-badge status-${status}`}>{STATUS_LABELS[status]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="empty-state">No requirements match your filters.</div>
        )}
      </div>
    </div>
  );
}
