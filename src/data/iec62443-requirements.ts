import type { Requirement } from '../types/compliance';

export const iec62443Requirements: Requirement[] = [
  // ── IEC 62443-2-1: Security Management System ──
  {
    id: 'IEC-2-1-SM-01',
    frameworkId: 'iec62443',
    category: 'Security Management System (2-1)',
    title: 'IACS security management system',
    description:
      'Establish and maintain an IACS cybersecurity management system (CSMS) with defined scope, objectives and commitment from top management.',
    evidence: [
      'CSMS policy document',
      'Management commitment statement',
      'CSMS scope definition',
    ],
    severity: 'critical',
  },
  {
    id: 'IEC-2-1-SM-02',
    frameworkId: 'iec62443',
    category: 'Security Management System (2-1)',
    title: 'Roles and responsibilities',
    description:
      'Define and assign roles and responsibilities for cybersecurity across the organization, including a designated security officer.',
    evidence: [
      'RACI matrix for cybersecurity',
      'Security officer appointment',
      'Organizational chart with security roles',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-2-1-SM-03',
    frameworkId: 'iec62443',
    category: 'Security Management System (2-1)',
    title: 'Continual improvement',
    description:
      'Implement a continual improvement process for the CSMS, including regular reviews, audits and corrective actions.',
    evidence: [
      'Internal audit reports',
      'Management review meeting minutes',
      'Corrective action records',
    ],
    severity: 'medium',
  },

  // ── IEC 62443-2-1: Security Risk Assessment ──
  {
    id: 'IEC-2-1-RA-01',
    frameworkId: 'iec62443',
    category: 'Security Risk Assessment (2-1)',
    title: 'Risk assessment methodology',
    description:
      'Define and implement a risk assessment methodology that identifies, analyzes and evaluates cybersecurity risks to IACS.',
    evidence: [
      'Risk assessment methodology document',
      'Risk criteria definitions',
      'Risk register',
    ],
    severity: 'critical',
  },
  {
    id: 'IEC-2-1-RA-02',
    frameworkId: 'iec62443',
    category: 'Security Risk Assessment (2-1)',
    title: 'Asset identification and classification',
    description:
      'Identify and classify all IACS assets, including hardware, software, data and communication channels, based on their criticality.',
    evidence: [
      'Asset inventory',
      'Asset classification scheme',
      'Network topology diagrams',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-2-1-RA-03',
    frameworkId: 'iec62443',
    category: 'Security Risk Assessment (2-1)',
    title: 'Threat and vulnerability analysis',
    description:
      'Conduct threat analysis and vulnerability assessments for IACS to identify potential attack vectors and weaknesses.',
    evidence: [
      'Threat analysis reports',
      'Vulnerability assessment results',
      'Threat modelling documentation',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-2-1-RA-04',
    frameworkId: 'iec62443',
    category: 'Security Risk Assessment (2-1)',
    title: 'Risk treatment plan',
    description:
      'Develop and implement a risk treatment plan that addresses identified risks through mitigation, transfer, acceptance or avoidance.',
    evidence: [
      'Risk treatment plan',
      'Residual risk acceptance records',
      'Control implementation records',
    ],
    severity: 'high',
  },

  // ── IEC 62443-2-1: Security Policy & Organization ──
  {
    id: 'IEC-2-1-PO-01',
    frameworkId: 'iec62443',
    category: 'Security Policy & Organization (2-1)',
    title: 'Cybersecurity policy',
    description:
      'Establish and maintain a cybersecurity policy that is approved by management and communicated to all relevant personnel.',
    evidence: [
      'Cybersecurity policy document',
      'Policy approval records',
      'Distribution/acknowledgement records',
    ],
    severity: 'critical',
  },
  {
    id: 'IEC-2-1-PO-02',
    frameworkId: 'iec62443',
    category: 'Security Policy & Organization (2-1)',
    title: 'Security awareness and training',
    description:
      'Implement a security awareness and training programme for all personnel involved in IACS operations and maintenance.',
    evidence: [
      'Training programme documentation',
      'Training attendance records',
      'Competency assessment results',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-2-1-PO-03',
    frameworkId: 'iec62443',
    category: 'Security Policy & Organization (2-1)',
    title: 'Incident response plan',
    description:
      'Develop and maintain a cybersecurity incident response plan covering detection, containment, eradication, recovery and lessons learned.',
    evidence: [
      'Incident response plan',
      'Incident response team roster',
      'Tabletop exercise records',
    ],
    severity: 'critical',
  },

  // ── IEC 62443-2-1: Staff Security ──
  {
    id: 'IEC-2-1-SS-01',
    frameworkId: 'iec62443',
    category: 'Staff Security (2-1)',
    title: 'Personnel screening',
    description:
      'Implement background checks and screening for personnel with access to critical IACS assets.',
    evidence: [
      'Screening policy',
      'Background check records',
      'Access clearance documentation',
    ],
    severity: 'medium',
  },
  {
    id: 'IEC-2-1-SS-02',
    frameworkId: 'iec62443',
    category: 'Staff Security (2-1)',
    title: 'Access provisioning and de-provisioning',
    description:
      'Implement processes for granting, reviewing and revoking access rights to IACS based on role requirements.',
    evidence: [
      'Access management procedures',
      'Access review records',
      'Offboarding process documentation',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-1: Secure Development Lifecycle ──
  {
    id: 'IEC-4-1-SDL-01',
    frameworkId: 'iec62443',
    category: 'Secure Development Lifecycle (4-1)',
    title: 'Secure development lifecycle process',
    description:
      'Establish a secure development lifecycle (SDL) process that integrates security activities into all phases of product development.',
    evidence: [
      'SDL process documentation',
      'Phase gate security checkpoints',
      'SDL compliance checklist',
    ],
    severity: 'critical',
  },
  {
    id: 'IEC-4-1-SDL-02',
    frameworkId: 'iec62443',
    category: 'Secure Development Lifecycle (4-1)',
    title: 'Security development training',
    description:
      'Provide security training to all development team members, covering secure coding practices, common vulnerabilities and security tools.',
    evidence: [
      'Developer security training curriculum',
      'Training completion records',
      'Annual refresher schedule',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-1-SDL-03',
    frameworkId: 'iec62443',
    category: 'Secure Development Lifecycle (4-1)',
    title: 'Security maturity tracking',
    description:
      'Track and measure the maturity of the secure development lifecycle process through metrics and KPIs.',
    evidence: [
      'Security maturity model',
      'KPI dashboards',
      'Maturity assessment reports',
    ],
    severity: 'medium',
  },

  // ── IEC 62443-4-1: Security Requirements Definition ──
  {
    id: 'IEC-4-1-SR-01',
    frameworkId: 'iec62443',
    category: 'Security Requirements Definition (4-1)',
    title: 'Product security requirements',
    description:
      'Define security requirements for the product, including both functional and non-functional security requirements.',
    evidence: [
      'Security requirements specification',
      'Requirements traceability matrix',
      'Stakeholder requirements analysis',
    ],
    severity: 'critical',
  },
  {
    id: 'IEC-4-1-SR-02',
    frameworkId: 'iec62443',
    category: 'Security Requirements Definition (4-1)',
    title: 'Threat modelling',
    description:
      'Perform threat modelling for the product to identify threats and define security requirements and countermeasures.',
    evidence: [
      'Threat model document (e.g. STRIDE)',
      'Attack tree analysis',
      'Countermeasure mapping',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-1: Security by Design ──
  {
    id: 'IEC-4-1-SD-01',
    frameworkId: 'iec62443',
    category: 'Security by Design (4-1)',
    title: 'Defense in depth design',
    description:
      'Apply defense in depth principles in the product architecture, implementing multiple layers of security controls.',
    evidence: [
      'Security architecture document',
      'Defense-in-depth analysis',
      'Layer diagram with security controls',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-1-SD-02',
    frameworkId: 'iec62443',
    category: 'Security by Design (4-1)',
    title: 'Least privilege principle',
    description:
      'Design the product applying the principle of least privilege for all users, processes and systems.',
    evidence: [
      'Privilege model documentation',
      'Role-based access control design',
      'Privilege escalation analysis',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-1-SD-03',
    frameworkId: 'iec62443',
    category: 'Security by Design (4-1)',
    title: 'Secure communication design',
    description:
      'Design secure communication channels using encryption, authentication and integrity protection appropriate to the target security level.',
    evidence: [
      'Communication security design',
      'Protocol security analysis',
      'Cryptographic algorithm selection rationale',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-1: Secure Implementation ──
  {
    id: 'IEC-4-1-SI-01',
    frameworkId: 'iec62443',
    category: 'Secure Implementation (4-1)',
    title: 'Secure coding standards',
    description:
      'Define and apply secure coding standards throughout the development process.',
    evidence: [
      'Secure coding standards document',
      'Code review checklists',
      'Coding standard compliance reports',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-1-SI-02',
    frameworkId: 'iec62443',
    category: 'Secure Implementation (4-1)',
    title: 'Static analysis (SAST)',
    description:
      'Use static application security testing tools to identify vulnerabilities in source code.',
    evidence: [
      'SAST tool configuration',
      'SAST scan results',
      'Remediation tracking records',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-1-SI-03',
    frameworkId: 'iec62443',
    category: 'Secure Implementation (4-1)',
    title: 'Third-party component management',
    description:
      'Maintain an inventory of all third-party components and manage their associated security risks.',
    evidence: [
      'Third-party component inventory',
      'Vulnerability monitoring process',
      'Component update/patch records',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-1: Security Verification & Validation ──
  {
    id: 'IEC-4-1-VV-01',
    frameworkId: 'iec62443',
    category: 'Security Verification & Validation (4-1)',
    title: 'Security testing',
    description:
      'Perform security testing including penetration testing, fuzz testing and dynamic analysis to verify security controls.',
    evidence: [
      'Security test plan',
      'Penetration test reports',
      'Fuzz testing results',
    ],
    severity: 'critical',
  },
  {
    id: 'IEC-4-1-VV-02',
    frameworkId: 'iec62443',
    category: 'Security Verification & Validation (4-1)',
    title: 'Security requirements validation',
    description:
      'Validate that all security requirements have been correctly implemented and are effective.',
    evidence: [
      'Requirements test traceability',
      'Validation test results',
      'Security acceptance criteria',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-1-VV-03',
    frameworkId: 'iec62443',
    category: 'Security Verification & Validation (4-1)',
    title: 'Independent security review',
    description:
      'Conduct independent security reviews or audits of the product before release.',
    evidence: [
      'Independent review reports',
      'Audit findings and remediation',
      'Release security sign-off',
    ],
    severity: 'medium',
  },

  // ── IEC 62443-4-1: Defect & Patch Management ──
  {
    id: 'IEC-4-1-DM-01',
    frameworkId: 'iec62443',
    category: 'Defect & Patch Management (4-1)',
    title: 'Security defect management',
    description:
      'Implement a process for receiving, tracking and managing security defects throughout the product lifecycle.',
    evidence: [
      'Defect management process',
      'Bug tracking system configuration',
      'Security defect triage criteria',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-1-DM-02',
    frameworkId: 'iec62443',
    category: 'Defect & Patch Management (4-1)',
    title: 'Patch management process',
    description:
      'Establish a process for developing, testing, and distributing security patches in a timely manner.',
    evidence: [
      'Patch management policy',
      'Patch testing procedures',
      'Patch distribution records',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-1-DM-03',
    frameworkId: 'iec62443',
    category: 'Defect & Patch Management (4-1)',
    title: 'End-of-life security planning',
    description:
      'Plan for the secure end-of-life of products, including continued vulnerability communication and transition support.',
    evidence: [
      'End-of-life policy',
      'Migration/transition guides',
      'Final security advisory process',
    ],
    severity: 'medium',
  },

  // ── IEC 62443-4-2: Component Security – Identification & Auth ──
  {
    id: 'IEC-4-2-IA-01',
    frameworkId: 'iec62443',
    category: 'Component Security – Identification & Auth (4-2)',
    title: 'Human user identification and authentication',
    description:
      'Components shall uniquely identify and authenticate all human users before granting access to the component.',
    evidence: [
      'Authentication mechanism design',
      'User identification scheme',
      'Multi-factor authentication support (if required)',
    ],
    severity: 'critical',
  },
  {
    id: 'IEC-4-2-IA-02',
    frameworkId: 'iec62443',
    category: 'Component Security – Identification & Auth (4-2)',
    title: 'Software process and device identification',
    description:
      'Components shall identify and authenticate all software processes and devices before granting access.',
    evidence: [
      'Device authentication mechanism',
      'Certificate/key management design',
      'Process identity verification',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-2-IA-03',
    frameworkId: 'iec62443',
    category: 'Component Security – Identification & Auth (4-2)',
    title: 'Password and credential management',
    description:
      'Components shall enforce password strength, protect stored credentials and support credential lifecycle management.',
    evidence: [
      'Password policy configuration',
      'Credential storage security design',
      'Credential rotation procedures',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-2: Component Security – Use Control ──
  {
    id: 'IEC-4-2-UC-01',
    frameworkId: 'iec62443',
    category: 'Component Security – Use Control (4-2)',
    title: 'Authorization enforcement',
    description:
      'Components shall enforce authorization policies for all access to functions and resources.',
    evidence: [
      'Authorization model design',
      'Role and permission definitions',
      'Authorization testing results',
    ],
    severity: 'critical',
  },
  {
    id: 'IEC-4-2-UC-02',
    frameworkId: 'iec62443',
    category: 'Component Security – Use Control (4-2)',
    title: 'Wireless access control',
    description:
      'Components with wireless interfaces shall provide mechanisms to control wireless access.',
    evidence: [
      'Wireless security design',
      'Wireless access control configuration',
      'Wireless penetration test results',
    ],
    severity: 'medium',
  },
  {
    id: 'IEC-4-2-UC-03',
    frameworkId: 'iec62443',
    category: 'Component Security – Use Control (4-2)',
    title: 'Session management',
    description:
      'Components shall manage user sessions with appropriate timeouts, lock-out mechanisms and session integrity.',
    evidence: [
      'Session management design',
      'Session timeout configuration',
      'Lock-out policy documentation',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-2: Component Security – Data Integrity ──
  {
    id: 'IEC-4-2-DI-01',
    frameworkId: 'iec62443',
    category: 'Component Security – Data Integrity (4-2)',
    title: 'Communication integrity',
    description:
      'Components shall protect the integrity of data transmitted across communication channels.',
    evidence: [
      'Communication integrity mechanism design',
      'Protocol security configuration',
      'Integrity verification test results',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-2-DI-02',
    frameworkId: 'iec62443',
    category: 'Component Security – Data Integrity (4-2)',
    title: 'Input validation',
    description:
      'Components shall validate all inputs to prevent injection, overflow and other input-related attacks.',
    evidence: [
      'Input validation design',
      'Input sanitization rules',
      'Injection testing results',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-2: Component Security – Data Confidentiality ──
  {
    id: 'IEC-4-2-DC-01',
    frameworkId: 'iec62443',
    category: 'Component Security – Data Confidentiality (4-2)',
    title: 'Information confidentiality',
    description:
      'Components shall protect the confidentiality of information at rest and in transit through encryption or other means.',
    evidence: [
      'Encryption implementation design',
      'Key management procedures',
      'Cryptographic algorithm documentation',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-2-DC-02',
    frameworkId: 'iec62443',
    category: 'Component Security – Data Confidentiality (4-2)',
    title: 'Cryptographic key management',
    description:
      'Components shall support secure generation, distribution, storage, rotation and destruction of cryptographic keys.',
    evidence: [
      'Key management process documentation',
      'Key storage security design',
      'Key lifecycle management procedures',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-2: Component Security – Resource Availability ──
  {
    id: 'IEC-4-2-RA-01',
    frameworkId: 'iec62443',
    category: 'Component Security – Resource Availability (4-2)',
    title: 'Denial of service protection',
    description:
      'Components shall implement mechanisms to maintain availability during denial-of-service conditions.',
    evidence: [
      'DoS protection design',
      'Rate limiting configuration',
      'Availability testing results',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-2-RA-02',
    frameworkId: 'iec62443',
    category: 'Component Security – Resource Availability (4-2)',
    title: 'Resource management',
    description:
      'Components shall manage system resources to prevent unauthorized resource consumption that could impact availability.',
    evidence: [
      'Resource management design',
      'Resource monitoring configuration',
      'Stress testing results',
    ],
    severity: 'medium',
  },
  {
    id: 'IEC-4-2-RA-03',
    frameworkId: 'iec62443',
    category: 'Component Security – Resource Availability (4-2)',
    title: 'Backup and recovery',
    description:
      'Components shall support backup and recovery mechanisms to restore operation after a cybersecurity incident.',
    evidence: [
      'Backup strategy documentation',
      'Recovery procedure documentation',
      'Backup/recovery test records',
    ],
    severity: 'high',
  },

  // ── IEC 62443-4-2: Component Security – Timely Response to Events ──
  {
    id: 'IEC-4-2-RE-01',
    frameworkId: 'iec62443',
    category: 'Component Security – Timely Response to Events (4-2)',
    title: 'Audit log support',
    description:
      'Components shall provide the capability to generate audit logs of security-relevant events.',
    evidence: [
      'Audit logging design',
      'Event types documented',
      'Log format specification',
    ],
    severity: 'high',
  },
  {
    id: 'IEC-4-2-RE-02',
    frameworkId: 'iec62443',
    category: 'Component Security – Timely Response to Events (4-2)',
    title: 'Audit log storage and protection',
    description:
      'Components shall protect audit logs from unauthorized access, modification and deletion.',
    evidence: [
      'Log storage security design',
      'Log integrity protection mechanism',
      'Log retention policy',
    ],
    severity: 'medium',
  },
  {
    id: 'IEC-4-2-RE-03',
    frameworkId: 'iec62443',
    category: 'Component Security – Timely Response to Events (4-2)',
    title: 'Security event notification',
    description:
      'Components shall support notification of security-relevant events to authorized personnel or systems.',
    evidence: [
      'Alerting mechanism design',
      'Notification configuration',
      'Event escalation procedures',
    ],
    severity: 'medium',
  },
];
