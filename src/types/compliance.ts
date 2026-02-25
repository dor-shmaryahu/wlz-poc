export type ComplianceStatus = 'not_started' | 'in_progress' | 'implemented' | 'verified' | 'not_applicable';

export interface Requirement {
  id: string;
  frameworkId: string;
  category: string;
  title: string;
  description: string;
  evidence: string[];
  severity: 'critical' | 'high' | 'medium' | 'low';
}

export interface RequirementAssessment {
  requirementId: string;
  status: ComplianceStatus;
  notes: string;
  evidenceLinks: string[];
  lastUpdated: string;
  updatedBy: string;
}

export interface Framework {
  id: string;
  name: string;
  shortName: string;
  description: string;
  version: string;
  categories: string[];
}

export interface ComplianceState {
  assessments: Record<string, RequirementAssessment>;
  organizationName: string;
  lastSaved: string;
}

export const STATUS_LABELS: Record<ComplianceStatus, string> = {
  not_started: 'Not Started',
  in_progress: 'In Progress',
  implemented: 'Implemented',
  verified: 'Verified',
  not_applicable: 'N/A',
};

export const STATUS_COLORS: Record<ComplianceStatus, string> = {
  not_started: '#6b7280',
  in_progress: '#f59e0b',
  implemented: '#3b82f6',
  verified: '#10b981',
  not_applicable: '#9ca3af',
};
