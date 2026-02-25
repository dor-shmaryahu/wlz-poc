import { Framework } from '../types/compliance';

export const frameworks: Framework[] = [
  {
    id: 'cra',
    name: 'EU Cyber Resilience Act',
    shortName: 'CRA',
    description:
      'European regulation (EU) 2024/2847 establishing horizontal cybersecurity requirements for products with digital elements placed on the EU market. Entered into force 10 December 2024, with main obligations applying from 11 December 2027.',
    version: 'Regulation (EU) 2024/2847',
    categories: [
      'Security by Design (Annex I, Part I)',
      'Vulnerability Handling (Annex I, Part II)',
      'Manufacturer Obligations (Art. 13)',
      'Conformity Assessment (Art. 28-30)',
      'Incident & Vulnerability Reporting (Art. 14)',
      'Documentation & Transparency (Annex II, VII)',
      'Supply Chain Security',
      'Secure Default Configuration',
      'Data Protection & Encryption',
      'Update Mechanism',
      'Monitoring & Logging',
      'Post-Market Obligations',
    ],
  },
  {
    id: 'iec62443',
    name: 'IEC 62443 – Industrial Automation and Control Systems Security',
    shortName: 'IEC 62443',
    description:
      'International series of standards addressing cybersecurity for industrial automation and control systems (IACS), covering organizational, system, and component-level requirements. Applicable to asset owners, product suppliers, and system integrators.',
    version: 'IEC 62443 (2-1:2024, 4-1:2018, 4-2:2019)',
    categories: [
      // IEC 62443-2-1:2024 — Security Program Elements (SPEs)
      'SPE 1 – Organizational Security (2-1)',
      'SPE 2 – Configuration Management (2-1)',
      'SPE 3 – Network Security (2-1)',
      'SPE 4 – Component Security (2-1)',
      'SPE 5 – Protection of Data (2-1)',
      'SPE 6 – User Access Control (2-1)',
      'SPE 7 – Event & Incident Management (2-1)',
      'SPE 8 – System Integrity & Availability (2-1)',
      // IEC 62443-4-1:2018 — Secure Development Lifecycle Practices
      'Practice 1 – Security Management (4-1)',
      'Practice 2 – Security Requirements (4-1)',
      'Practice 3 – Secure by Design (4-1)',
      'Practice 4 – Secure Implementation (4-1)',
      'Practice 5 – Security Verification & Validation (4-1)',
      'Practice 6 – Defect Management (4-1)',
      'Practice 7 – Security Update Management (4-1)',
      'Practice 8 – Security Guidelines (4-1)',
      // IEC 62443-4-2:2019 — Component Technical Security Requirements
      'FR1 – Identification & Authentication Control (4-2)',
      'FR2 – Use Control (4-2)',
      'FR3 – System Integrity (4-2)',
      'FR4 – Data Confidentiality (4-2)',
      'FR5 – Restricted Data Flow (4-2)',
      'FR6 – Timely Response to Events (4-2)',
      'FR7 – Resource Availability (4-2)',
    ],
  },
];
