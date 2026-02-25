import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { FrameworkView } from './components/FrameworkView';
import { Settings } from './components/Settings';
import { useComplianceStore } from './hooks/useComplianceStore';
import { Shield, LayoutDashboard, Settings as SettingsIcon } from 'lucide-react';
import './App.css';

type View = 'dashboard' | 'framework' | 'settings';

function App() {
  const {
    state,
    updateAssessment,
    setOrganizationName,
    exportData,
    importData,
    resetAll,
  } = useComplianceStore();

  const [view, setView] = useState<View>('dashboard');
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string>('');

  const handleSelectFramework = (id: string) => {
    setSelectedFrameworkId(id);
    setView('framework');
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-brand">
          <Shield size={24} />
          <span>Compliance Tracker</span>
        </div>
        <ul className="sidebar-nav">
          <li>
            <button
              className={view === 'dashboard' ? 'active' : ''}
              onClick={() => setView('dashboard')}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button
              className={view === 'settings' ? 'active' : ''}
              onClick={() => setView('settings')}
            >
              <SettingsIcon size={18} />
              <span>Settings</span>
            </button>
          </li>
        </ul>
        {state.organizationName && (
          <div className="sidebar-org">{state.organizationName}</div>
        )}
        <div className="sidebar-footer">
          <small>Data saved locally</small>
          {state.lastSaved && (
            <small>Last: {new Date(state.lastSaved).toLocaleTimeString()}</small>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="main-content">
        {view === 'dashboard' && (
          <Dashboard
            assessments={state.assessments}
            onSelectFramework={handleSelectFramework}
          />
        )}
        {view === 'framework' && selectedFrameworkId && (
          <FrameworkView
            frameworkId={selectedFrameworkId}
            assessments={state.assessments}
            onBack={() => setView('dashboard')}
            onUpdateAssessment={updateAssessment}
          />
        )}
        {view === 'settings' && (
          <Settings
            organizationName={state.organizationName}
            onSetOrganizationName={setOrganizationName}
            onExport={exportData}
            onImport={importData}
            onReset={resetAll}
          />
        )}
      </main>
    </div>
  );
}

export default App;
