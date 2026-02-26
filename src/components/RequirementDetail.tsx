import { useState } from 'react';
import type { Requirement, RequirementAssessment, ComplianceStatus } from '../types/compliance';
import { STATUS_LABELS, STATUS_COLORS } from '../types/compliance';
import { ArrowLeft, FileText, Link, MessageSquare, Calendar, User } from 'lucide-react';

interface RequirementDetailProps {
  requirement: Requirement;
  assessment: RequirementAssessment;
  onUpdate: (update: Partial<RequirementAssessment>) => void;
  onBack: () => void;
}

export function RequirementDetail({ requirement, assessment, onUpdate, onBack }: RequirementDetailProps) {
  const [notes, setNotes] = useState(assessment.notes);
  const [evidenceInput, setEvidenceInput] = useState('');
  const [updatedBy, setUpdatedBy] = useState(assessment.updatedBy);

  const handleStatusChange = (status: ComplianceStatus) => {
    onUpdate({ status, updatedBy });
  };

  const handleSaveNotes = () => {
    onUpdate({ notes, updatedBy });
  };

  const handleAddEvidence = () => {
    if (!evidenceInput.trim()) return;
    const updated = [...(assessment.evidenceLinks || []), evidenceInput.trim()];
    onUpdate({ evidenceLinks: updated, updatedBy });
    setEvidenceInput('');
  };

  const handleRemoveEvidence = (index: number) => {
    const updated = assessment.evidenceLinks.filter((_, i) => i !== index);
    onUpdate({ evidenceLinks: updated, updatedBy });
  };

  return (
    <div className="requirement-detail">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={18} /> Back to Requirements
      </button>

      <div className="req-detail-header">
        <div className="req-detail-id">{requirement.id}</div>
        <h2>{requirement.title}</h2>
        <span className={`severity-badge severity-${requirement.severity}`}>{requirement.severity}</span>
      </div>

      <div className="req-detail-body">
        {/* Description */}
        <section className="detail-section">
          <h3><FileText size={16} /> Description</h3>
          <p>{requirement.description}</p>
        </section>

        {/* Required Evidence */}
        <section className="detail-section">
          <h3><FileText size={16} /> Required Evidence</h3>
          <ul className="evidence-list">
            {requirement.evidence.map((ev, i) => (
              <li key={i}>{ev}</li>
            ))}
          </ul>
        </section>

        {/* Status Selection */}
        <section className="detail-section">
          <h3>Compliance Status</h3>
          <div className="status-selector">
            {(Object.keys(STATUS_LABELS) as ComplianceStatus[]).map((s) => (
              <button
                key={s}
                className={`status-option ${assessment.status === s ? 'active' : ''}`}
                style={assessment.status === s ? { borderColor: STATUS_COLORS[s], backgroundColor: STATUS_COLORS[s] + '22' } : {}}
                onClick={() => handleStatusChange(s)}
              >
                <span className="status-dot" style={{ backgroundColor: STATUS_COLORS[s] }} />
                {STATUS_LABELS[s]}
              </button>
            ))}
          </div>
        </section>

        {/* Updated By */}
        <section className="detail-section">
          <h3><User size={16} /> Updated By</h3>
          <input
            type="text"
            className="text-input"
            placeholder="Your name"
            value={updatedBy}
            onChange={(e) => setUpdatedBy(e.target.value)}
            onBlur={() => onUpdate({ updatedBy })}
          />
        </section>

        {/* Notes */}
        <section className="detail-section">
          <h3><MessageSquare size={16} /> Notes &amp; Observations</h3>
          <textarea
            className="notes-input"
            placeholder="Add notes about the current state, gaps, actions needed..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={5}
          />
          <button className="btn-primary" onClick={handleSaveNotes}>Save Notes</button>
        </section>

        {/* Evidence Links */}
        <section className="detail-section">
          <h3><Link size={16} /> Evidence &amp; Documentation Links</h3>
          <div className="evidence-input-row">
            <input
              type="text"
              className="text-input"
              placeholder="Add link to evidence document, ticket, or artifact..."
              value={evidenceInput}
              onChange={(e) => setEvidenceInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleAddEvidence(); }}
            />
            <button className="btn-primary" onClick={handleAddEvidence}>Add</button>
          </div>
          {assessment.evidenceLinks && assessment.evidenceLinks.length > 0 && (
            <ul className="evidence-links-list">
              {assessment.evidenceLinks.map((link, i) => (
                <li key={i}>
                  <span className="evidence-link-text">{link}</span>
                  <button className="btn-remove" onClick={() => handleRemoveEvidence(i)}>&times;</button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Last updated */}
        {assessment.lastUpdated && (
          <div className="last-updated">
            <Calendar size={14} />
            Last updated: {new Date(assessment.lastUpdated).toLocaleString()}
            {assessment.updatedBy && <span> by {assessment.updatedBy}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
