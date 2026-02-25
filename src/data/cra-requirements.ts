import { Requirement } from '../types/compliance';

export const craRequirements: Requirement[] = [
  // ── Security by Design ──
  {
    id: 'CRA-SD-01',
    frameworkId: 'cra',
    category: 'Security by Design',
    title: 'Risk-based security design',
    description:
      'Products with digital elements shall be designed, developed and produced in a way that ensures an appropriate level of cybersecurity based on the risks.',
    evidence: [
      'Threat model documentation',
      'Security architecture review records',
      'Risk assessment reports',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-SD-02',
    frameworkId: 'cra',
    category: 'Security by Design',
    title: 'No known exploitable vulnerabilities',
    description:
      'Products shall be delivered without any known exploitable vulnerabilities.',
    evidence: [
      'Vulnerability scan reports',
      'Penetration test results',
      'Static/dynamic analysis reports',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-SD-03',
    frameworkId: 'cra',
    category: 'Security by Design',
    title: 'Secure by default configuration',
    description:
      'Products shall be made available with a secure default configuration, including the possibility to reset the product to its original state.',
    evidence: [
      'Default configuration documentation',
      'Factory reset procedure',
      'Hardening guide',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-SD-04',
    frameworkId: 'cra',
    category: 'Security by Design',
    title: 'Protection against unauthorized access',
    description:
      'Products shall include appropriate access control mechanisms and protect the confidentiality of stored, transmitted and processed data.',
    evidence: [
      'Access control design docs',
      'Authentication mechanism review',
      'Encryption implementation records',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-SD-05',
    frameworkId: 'cra',
    category: 'Security by Design',
    title: 'Minimise attack surface',
    description:
      'Products shall minimize their attack surface, including external interfaces.',
    evidence: [
      'Attack surface analysis',
      'Interface inventory',
      'Port/service minimization records',
    ],
    severity: 'high',
  },

  // ── Vulnerability Handling ──
  {
    id: 'CRA-VH-01',
    frameworkId: 'cra',
    category: 'Vulnerability Handling',
    title: 'Vulnerability handling process',
    description:
      'Manufacturers shall identify and document vulnerabilities, including through the use of SBOMs, and address and remediate them without delay.',
    evidence: [
      'Vulnerability management policy',
      'SBOM documentation',
      'Remediation SLAs and records',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-VH-02',
    frameworkId: 'cra',
    category: 'Vulnerability Handling',
    title: 'Coordinated vulnerability disclosure',
    description:
      'Manufacturers shall have a coordinated vulnerability disclosure policy in place.',
    evidence: [
      'CVD policy document',
      'Security contact information (security.txt)',
      'Responsible disclosure process',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-VH-03',
    frameworkId: 'cra',
    category: 'Vulnerability Handling',
    title: 'Security testing during support period',
    description:
      'Manufacturers shall regularly test and review the security of the product throughout its support period.',
    evidence: [
      'Periodic security testing schedule',
      'Test reports',
      'Continuous monitoring records',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-VH-04',
    frameworkId: 'cra',
    category: 'Vulnerability Handling',
    title: 'SBOM generation and maintenance',
    description:
      'Manufacturers shall draw up a software bill of materials (SBOM) covering at minimum the top-level dependencies of the product.',
    evidence: [
      'SBOM file (CycloneDX/SPDX)',
      'Dependency tracking system',
      'SBOM update process',
    ],
    severity: 'high',
  },

  // ── Supply Chain Security ──
  {
    id: 'CRA-SC-01',
    frameworkId: 'cra',
    category: 'Supply Chain Security',
    title: 'Third-party component due diligence',
    description:
      'Manufacturers shall exercise due diligence when integrating third-party components, ensuring they do not compromise the cybersecurity of the product.',
    evidence: [
      'Third-party component inventory',
      'Supplier security assessments',
      'License compliance records',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-SC-02',
    frameworkId: 'cra',
    category: 'Supply Chain Security',
    title: 'Open-source software management',
    description:
      'When integrating open-source software components, manufacturers shall ensure they maintain the security of those components.',
    evidence: [
      'OSS usage policy',
      'Dependency vulnerability monitoring',
      'Patch management for OSS',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-SC-03',
    frameworkId: 'cra',
    category: 'Supply Chain Security',
    title: 'Supply chain risk management',
    description:
      'Manufacturers shall implement risk management measures for their supply chain to prevent security compromises.',
    evidence: [
      'Supply chain security policy',
      'Vendor risk assessment records',
      'Build pipeline integrity controls',
    ],
    severity: 'medium',
  },

  // ── Documentation & Transparency ──
  {
    id: 'CRA-DT-01',
    frameworkId: 'cra',
    category: 'Documentation & Transparency',
    title: 'Technical documentation',
    description:
      'Manufacturers shall draw up technical documentation before the product is placed on the market, covering design, development, and vulnerability handling.',
    evidence: [
      'Technical documentation package',
      'Design specifications',
      'Risk assessment documentation',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-DT-02',
    frameworkId: 'cra',
    category: 'Documentation & Transparency',
    title: 'User instructions and information',
    description:
      'Manufacturers shall provide clear instructions and relevant information to users to enable secure installation, operation and use.',
    evidence: [
      'User security guide',
      'Installation instructions',
      'Security configuration guidance',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-DT-03',
    frameworkId: 'cra',
    category: 'Documentation & Transparency',
    title: 'Support period declaration',
    description:
      'Manufacturers shall determine and clearly communicate the expected product lifetime and the support period (minimum 5 years).',
    evidence: [
      'Support period declaration',
      'End-of-life policy',
      'Customer communication records',
    ],
    severity: 'medium',
  },

  // ── Conformity Assessment ──
  {
    id: 'CRA-CA-01',
    frameworkId: 'cra',
    category: 'Conformity Assessment',
    title: 'EU Declaration of Conformity',
    description:
      'Manufacturers shall draw up an EU declaration of conformity and affix the CE marking to the product.',
    evidence: [
      'EU Declaration of Conformity document',
      'CE marking records',
      'Assessment body certificates (if applicable)',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-CA-02',
    frameworkId: 'cra',
    category: 'Conformity Assessment',
    title: 'Conformity assessment procedure',
    description:
      'Manufacturers shall carry out a conformity assessment of the product, using the appropriate module (self-assessment or third-party) based on the product classification.',
    evidence: [
      'Assessment procedure selection rationale',
      'Assessment reports',
      'Notified body certificates (for critical products)',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-CA-03',
    frameworkId: 'cra',
    category: 'Conformity Assessment',
    title: 'Product classification',
    description:
      'Manufacturers shall correctly classify their product (default, important Class I, important Class II, or critical).',
    evidence: [
      'Product classification assessment',
      'Classification justification document',
    ],
    severity: 'high',
  },

  // ── Incident Reporting ──
  {
    id: 'CRA-IR-01',
    frameworkId: 'cra',
    category: 'Incident Reporting',
    title: 'Actively exploited vulnerability notification',
    description:
      'Manufacturers shall notify ENISA of any actively exploited vulnerability within 24 hours of becoming aware.',
    evidence: [
      'Incident response plan',
      'ENISA notification templates',
      'Notification records',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-IR-02',
    frameworkId: 'cra',
    category: 'Incident Reporting',
    title: 'Severe incident notification',
    description:
      'Manufacturers shall notify ENISA of any severe incident impacting the security of the product within 24 hours.',
    evidence: [
      'Incident classification criteria',
      'Escalation procedures',
      'Incident response records',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-IR-03',
    frameworkId: 'cra',
    category: 'Incident Reporting',
    title: 'User notification of vulnerabilities',
    description:
      'Manufacturers shall inform users about the vulnerability and, where possible, corrective or mitigating measures without undue delay.',
    evidence: [
      'User notification process',
      'Security advisory templates',
      'Communication records',
    ],
    severity: 'high',
  },

  // ── Secure Default Configuration ──
  {
    id: 'CRA-DC-01',
    frameworkId: 'cra',
    category: 'Secure Default Configuration',
    title: 'Secure out-of-box experience',
    description:
      'Products shall be delivered with secure default settings that restrict functionality to what is necessary.',
    evidence: [
      'Default settings documentation',
      'Configuration review records',
      'Minimal privilege design docs',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-DC-02',
    frameworkId: 'cra',
    category: 'Secure Default Configuration',
    title: 'Unique default credentials',
    description:
      'Products shall not be made available with known default passwords. Each device shall have unique credentials or force the user to set credentials upon first use.',
    evidence: [
      'Credential generation process',
      'First-use setup documentation',
      'No default password policy',
    ],
    severity: 'critical',
  },

  // ── Data Protection ──
  {
    id: 'CRA-DP-01',
    frameworkId: 'cra',
    category: 'Data Protection',
    title: 'Data minimization',
    description:
      'Products shall only process data that is adequate, relevant and limited to what is necessary for the intended purpose.',
    evidence: [
      'Data flow diagrams',
      'Data minimization assessment',
      'Privacy impact assessment',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-DP-02',
    frameworkId: 'cra',
    category: 'Data Protection',
    title: 'Confidentiality and integrity of data',
    description:
      'Products shall protect the confidentiality and integrity of data at rest and in transit using state-of-the-art encryption or other means.',
    evidence: [
      'Encryption standards documentation',
      'Data protection architecture',
      'Cryptographic implementation review',
    ],
    severity: 'high',
  },

  // ── Update Mechanism ──
  {
    id: 'CRA-UM-01',
    frameworkId: 'cra',
    category: 'Update Mechanism',
    title: 'Security update capability',
    description:
      'Products shall support the ability to install security updates, including automatic updates where technically feasible.',
    evidence: [
      'Update mechanism design',
      'OTA update process documentation',
      'Automatic update configuration',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-UM-02',
    frameworkId: 'cra',
    category: 'Update Mechanism',
    title: 'Free security updates',
    description:
      'Security updates shall be made available to users free of charge during the support period.',
    evidence: [
      'Update distribution policy',
      'No-cost update commitment',
      'Support period documentation',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-UM-03',
    frameworkId: 'cra',
    category: 'Update Mechanism',
    title: 'Timely security patches',
    description:
      'Security patches shall be disseminated without delay once a vulnerability has been identified and remediated.',
    evidence: [
      'Patch SLA documentation',
      'Patch release records',
      'Vulnerability-to-patch timeline logs',
    ],
    severity: 'high',
  },

  // ── Monitoring & Logging ──
  {
    id: 'CRA-ML-01',
    frameworkId: 'cra',
    category: 'Monitoring & Logging',
    title: 'Security event logging',
    description:
      'Products shall provide logging and monitoring capabilities where relevant to detect security-related events.',
    evidence: [
      'Logging architecture documentation',
      'Log format specification',
      'Monitoring capability description',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-ML-02',
    frameworkId: 'cra',
    category: 'Monitoring & Logging',
    title: 'Audit trail integrity',
    description:
      'Logging mechanisms shall provide integrity-protected audit trails that cannot be tampered with by unauthorized parties.',
    evidence: [
      'Log integrity protection mechanism',
      'Tamper detection design',
      'Audit trail review process',
    ],
    severity: 'medium',
  },
];
