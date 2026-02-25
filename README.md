# Compliance Readiness Tracker

A web application to manage your organization's compliance readiness for **EU Cyber Resilience Act (CRA)** and **IEC 62443** certification.

## Features

- **Dashboard** with overall and per-framework readiness scores
- **CRA requirements** – 30 requirements across 10 categories (Security by Design, Vulnerability Handling, Supply Chain, Documentation, Conformity Assessment, Incident Reporting, etc.)
- **IEC 62443 requirements** – 42 requirements across 16 categories covering IEC 62443-2-1 (Security Management), 4-1 (Secure Development Lifecycle), and 4-2 (Component Security)
- **Per-requirement assessment** – track status (Not Started / In Progress / Implemented / Verified / N/A), add notes, and link evidence documents
- **Filtering & search** – filter by status, severity, category; full-text search across requirements
- **Progress tracking** – category-level and severity-level progress bars
- **Data persistence** – all data saved to browser localStorage
- **Import/Export** – export assessment data as JSON; import to restore progress
- **Responsive design** – works on desktop and mobile

## Getting Started

```bash
npm install
npm run dev
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Lucide React (icons)
- localStorage for persistence
