import { useState, useEffect, useCallback } from 'react';
import { ComplianceState, RequirementAssessment, ComplianceStatus } from '../types/compliance';

const STORAGE_KEY = 'compliance-readiness-tracker';

const defaultState: ComplianceState = {
  assessments: {},
  organizationName: '',
  lastSaved: new Date().toISOString(),
};

function loadState(): ComplianceState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as ComplianceState;
    }
  } catch {
    // ignore corrupt data
  }
  return defaultState;
}

function saveState(state: ComplianceState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useComplianceStore() {
  const [state, setState] = useState<ComplianceState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const updateAssessment = useCallback(
    (requirementId: string, update: Partial<RequirementAssessment>) => {
      setState((prev) => {
        const existing = prev.assessments[requirementId] || {
          requirementId,
          status: 'not_started' as ComplianceStatus,
          notes: '',
          evidenceLinks: [],
          lastUpdated: new Date().toISOString(),
          updatedBy: '',
        };
        return {
          ...prev,
          assessments: {
            ...prev.assessments,
            [requirementId]: {
              ...existing,
              ...update,
              lastUpdated: new Date().toISOString(),
            },
          },
          lastSaved: new Date().toISOString(),
        };
      });
    },
    [],
  );

  const setOrganizationName = useCallback((name: string) => {
    setState((prev) => ({ ...prev, organizationName: name, lastSaved: new Date().toISOString() }));
  }, []);

  const getAssessment = useCallback(
    (requirementId: string): RequirementAssessment => {
      return (
        state.assessments[requirementId] || {
          requirementId,
          status: 'not_started' as ComplianceStatus,
          notes: '',
          evidenceLinks: [],
          lastUpdated: '',
          updatedBy: '',
        }
      );
    },
    [state.assessments],
  );

  const exportData = useCallback(() => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compliance-tracker-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [state]);

  const importData = useCallback((json: string) => {
    try {
      const imported = JSON.parse(json) as ComplianceState;
      if (imported.assessments) {
        setState(imported);
        return true;
      }
    } catch {
      // invalid JSON
    }
    return false;
  }, []);

  const resetAll = useCallback(() => {
    setState(defaultState);
  }, []);

  return {
    state,
    updateAssessment,
    setOrganizationName,
    getAssessment,
    exportData,
    importData,
    resetAll,
  };
}
