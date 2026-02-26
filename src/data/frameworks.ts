import type { Framework } from '../types/compliance';

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
      'Security Management System (2-1)',
      'Security Risk Assessment (2-1)',
      'Security Policy & Organization (2-1)',
      'Staff Security (2-1)',
      'Secure Development Lifecycle (4-1)',
      'Security Requirements Definition (4-1)',
      'Security by Design (4-1)',
      'Secure Implementation (4-1)',
      'Security Verification & Validation (4-1)',
      'Defect & Patch Management (4-1)',
      'Component Security – Identification & Auth (4-2)',
      'Component Security – Use Control (4-2)',
      'Component Security – Data Integrity (4-2)',
      'Component Security – Data Confidentiality (4-2)',
      'Component Security – Resource Availability (4-2)',
      'Component Security – Timely Response to Events (4-2)',
    ],
  },
];
