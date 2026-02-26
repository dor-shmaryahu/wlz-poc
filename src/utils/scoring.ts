import type { Requirement, RequirementAssessment, ComplianceStatus } from '../types/compliance';

export interface CategoryScore {
  category: string;
  total: number;
  notStarted: number;
  inProgress: number;
  implemented: number;
  verified: number;
  notApplicable: number;
  percentage: number;
}

export interface FrameworkScore {
  frameworkId: string;
  totalRequirements: number;
  completedRequirements: number;
  percentage: number;
  categories: CategoryScore[];
  bySeverity: Record<string, { total: number; completed: number; percentage: number }>;
}

function isCompleted(status: ComplianceStatus): boolean {
  return status === 'implemented' || status === 'verified' || status === 'not_applicable';
}

export function calculateCategoryScore(
  requirements: Requirement[],
  assessments: Record<string, RequirementAssessment>,
): CategoryScore {
  if (requirements.length === 0) {
    return { category: '', total: 0, notStarted: 0, inProgress: 0, implemented: 0, verified: 0, notApplicable: 0, percentage: 0 };
  }

  const category = requirements[0].category;
  let notStarted = 0, inProgress = 0, implemented = 0, verified = 0, notApplicable = 0;

  for (const req of requirements) {
    const status = assessments[req.id]?.status || 'not_started';
    switch (status) {
      case 'not_started': notStarted++; break;
      case 'in_progress': inProgress++; break;
      case 'implemented': implemented++; break;
      case 'verified': verified++; break;
      case 'not_applicable': notApplicable++; break;
    }
  }

  const applicable = requirements.length - notApplicable;
  const completed = implemented + verified;
  const percentage = applicable > 0 ? Math.round((completed / applicable) * 100) : 100;

  return { category, total: requirements.length, notStarted, inProgress, implemented, verified, notApplicable, percentage };
}

export function calculateFrameworkScore(
  requirements: Requirement[],
  assessments: Record<string, RequirementAssessment>,
): FrameworkScore {
  const frameworkId = requirements[0]?.frameworkId || '';

  // Group by category
  const byCategory = new Map<string, Requirement[]>();
  for (const req of requirements) {
    const list = byCategory.get(req.category) || [];
    list.push(req);
    byCategory.set(req.category, list);
  }

  const categories: CategoryScore[] = [];
  for (const [, reqs] of byCategory) {
    categories.push(calculateCategoryScore(reqs, assessments));
  }

  // Overall
  let totalApplicable = 0;
  let totalCompleted = 0;
  for (const req of requirements) {
    const status = assessments[req.id]?.status || 'not_started';
    if (status !== 'not_applicable') {
      totalApplicable++;
      if (isCompleted(status)) totalCompleted++;
    }
  }

  // By severity
  const severities = ['critical', 'high', 'medium', 'low'];
  const bySeverity: Record<string, { total: number; completed: number; percentage: number }> = {};
  for (const sev of severities) {
    const sevReqs = requirements.filter((r) => r.severity === sev);
    let sevTotal = 0, sevCompleted = 0;
    for (const req of sevReqs) {
      const status = assessments[req.id]?.status || 'not_started';
      if (status !== 'not_applicable') {
        sevTotal++;
        if (isCompleted(status)) sevCompleted++;
      }
    }
    bySeverity[sev] = { total: sevTotal, completed: sevCompleted, percentage: sevTotal > 0 ? Math.round((sevCompleted / sevTotal) * 100) : 100 };
  }

  return {
    frameworkId,
    totalRequirements: requirements.length,
    completedRequirements: totalCompleted,
    percentage: totalApplicable > 0 ? Math.round((totalCompleted / totalApplicable) * 100) : 100,
    categories,
    bySeverity,
  };
}
