import { useRef, useState } from 'react';
import { Download, Upload, Trash2, Building2 } from 'lucide-react';

interface SettingsProps {
  organizationName: string;
  onSetOrganizationName: (name: string) => void;
  onExport: () => void;
  onImport: (json: string) => boolean;
  onReset: () => void;
}

export function Settings({ organizationName, onSetOrganizationName, onExport, onImport, onReset }: SettingsProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [importMsg, setImportMsg] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = onImport(reader.result as string);
      setImportMsg(result ? 'Data imported successfully!' : 'Invalid file format.');
      setTimeout(() => setImportMsg(''), 3000);
    };
    reader.readAsText(file);
  };

  return (
    <div className="settings-view">
      <h1>Settings</h1>

      <section className="detail-section">
        <h3><Building2 size={16} /> Organization</h3>
        <input
          type="text"
          className="text-input"
          placeholder="Your organization name"
          value={organizationName}
          onChange={(e) => onSetOrganizationName(e.target.value)}
        />
      </section>

      <section className="detail-section">
        <h3><Download size={16} /> Export Data</h3>
        <p>Download all your assessment data as a JSON file for backup or sharing.</p>
        <button className="btn-primary" onClick={onExport}>
          <Download size={16} /> Export Assessment Data
        </button>
      </section>

      <section className="detail-section">
        <h3><Upload size={16} /> Import Data</h3>
        <p>Import a previously exported assessment data file to restore your progress.</p>
        <input
          type="file"
          ref={fileRef}
          accept=".json"
          onChange={handleImport}
          style={{ display: 'none' }}
        />
        <button className="btn-primary" onClick={() => fileRef.current?.click()}>
          <Upload size={16} /> Import Assessment Data
        </button>
        {importMsg && <div className="import-msg">{importMsg}</div>}
      </section>

      <section className="detail-section danger-section">
        <h3><Trash2 size={16} /> Reset All Data</h3>
        <p>This will permanently delete all your assessment data. This action cannot be undone.</p>
        {!confirmReset ? (
          <button className="btn-danger" onClick={() => setConfirmReset(true)}>
            <Trash2 size={16} /> Reset All Data
          </button>
        ) : (
          <div className="confirm-reset">
            <p><strong>Are you sure?</strong> All data will be permanently deleted.</p>
            <div className="confirm-btns">
              <button className="btn-danger" onClick={() => { onReset(); setConfirmReset(false); }}>
                Yes, Delete Everything
              </button>
              <button className="btn-secondary" onClick={() => setConfirmReset(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
