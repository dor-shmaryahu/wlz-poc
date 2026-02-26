import type { Requirement } from '../types/compliance';

export const craRequirements: Requirement[] = [
  // ════════════════════════════════════════════════════════════════════
  // ANNEX I, PART I — SECURITY BY DESIGN
  // Essential cybersecurity requirements relating to the properties
  // of products with digital elements
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-AI-1.1',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Risk-based security design',
    description:
      'Products with digital elements shall be designed, developed and produced in such a way that they ensure an appropriate level of cybersecurity based on the risks. The cybersecurity risk assessment shall be taken into account during planning, design, development, production, delivery and maintenance phases.',
    evidence: [
      'Threat model documentation (e.g. STRIDE, PASTA)',
      'Security architecture review records',
      'Risk assessment reports with risk ratings',
      'Design review meeting minutes',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-AI-1.2',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'No known exploitable vulnerabilities',
    description:
      'Products with digital elements shall be made available on the market without any known exploitable vulnerabilities. Manufacturers must verify absence of known exploitable vulnerabilities at time of placement on the market.',
    evidence: [
      'Vulnerability scan reports (SAST/DAST)',
      'Penetration test results',
      'Static and dynamic analysis reports',
      'CVE/NVD cross-reference check results',
      'Pre-release security sign-off records',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-AI-1.3',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Secure by default configuration',
    description:
      'Products shall be made available on the market with a secure by default configuration, unless otherwise agreed between manufacturer and business user for tailor-made products, including the possibility to reset the product to its original secure state.',
    evidence: [
      'Default configuration documentation',
      'Hardening guide / secure baseline',
      'Factory reset procedure and verification',
      'Configuration comparison: default vs. hardened',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-AI-1.4',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Protection from unauthorized access',
    description:
      'Products shall ensure protection from unauthorised access by appropriate control mechanisms, including but not limited to authentication, identity or access management systems.',
    evidence: [
      'Access control design documentation',
      'Authentication mechanism review',
      'Identity management architecture',
      'Access control testing results',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-AI-1.5',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Confidentiality protection',
    description:
      'Products shall protect the confidentiality of stored, transmitted or otherwise processed data, personal or other, such as by encrypting relevant data at rest or in transit by state of the art mechanisms.',
    evidence: [
      'Encryption implementation documentation',
      'Cryptographic algorithm selection rationale',
      'Data-at-rest encryption verification',
      'Data-in-transit encryption verification (TLS/mTLS)',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-AI-1.6',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Integrity protection',
    description:
      'Products shall protect the integrity of stored, transmitted or otherwise processed data, personal or other, commands, programs and configurations against unauthorized manipulation or modification.',
    evidence: [
      'Integrity verification mechanism design',
      'Digital signature / MAC implementation records',
      'Configuration integrity monitoring',
      'Code signing procedures',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-AI-1.7',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Data minimization',
    description:
      'Products shall only process data, personal or other, that is adequate, relevant and limited to what is necessary for the intended purpose of the product (data minimization).',
    evidence: [
      'Data flow diagrams',
      'Data minimization assessment',
      'Privacy impact assessment (PIA/DPIA)',
      'Data processing justification records',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-AI-1.8',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Availability and resilience',
    description:
      'Products shall protect the availability of essential and basic functions, including after an incident, through resilience and mitigation measures against denial-of-service attacks.',
    evidence: [
      'Resilience architecture documentation',
      'DoS/DDoS mitigation design',
      'Failover and degraded mode testing results',
      'Recovery time objective (RTO) verification',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-AI-1.9',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Minimize negative impact on other services',
    description:
      'Products shall minimize their own negative impact on the availability of services provided by other devices or networks.',
    evidence: [
      'Network impact assessment',
      'Traffic analysis and bandwidth usage documentation',
      'Interoperability testing results',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-AI-1.10',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Minimize attack surface',
    description:
      'Products shall be designed, developed and produced to reduce the attack surface, including external interfaces, to limit the impact of an incident using appropriate exploitation mitigation mechanisms and techniques.',
    evidence: [
      'Attack surface analysis report',
      'External interface inventory',
      'Port and service minimization records',
      'Exploitation mitigation techniques documentation (ASLR, stack canaries, etc.)',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-AI-1.11',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Security event logging and monitoring',
    description:
      'Products shall provide security-related information by recording and/or monitoring relevant internal activity, including access to or modification of data, services or functions, with an opt-out mechanism for the user.',
    evidence: [
      'Logging architecture documentation',
      'Log format specification and event types',
      'Monitoring capability description',
      'Opt-out mechanism documentation',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-AI-1.12',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Secure data removal',
    description:
      'Products shall provide the possibility for users to securely and easily remove on a permanent basis all data and settings, and where such data can be transferred to other products or systems, ensure this is done in a secure manner.',
    evidence: [
      'Data wipe / secure erase mechanism design',
      'Secure data transfer procedure',
      'Verification of complete data removal testing',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-AI-1.13',
    frameworkId: 'cra',
    category: 'Security by Design (Annex I, Part I)',
    title: 'Security update capability',
    description:
      'Products shall ensure that vulnerabilities can be addressed through security updates, including where applicable through automatic security updates installed within an appropriate timeframe enabled as a default, with a clear and easy-to-use opt-out mechanism, notification of available updates, and the option to temporarily postpone them.',
    evidence: [
      'Update mechanism architecture',
      'Automatic update implementation',
      'Opt-out mechanism design',
      'Update notification process documentation',
    ],
    severity: 'critical',
  },

  // ════════════════════════════════════════════════════════════════════
  // ANNEX I, PART II — VULNERABILITY HANDLING REQUIREMENTS
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-AII-2.1',
    frameworkId: 'cra',
    category: 'Vulnerability Handling (Annex I, Part II)',
    title: 'Identify and document vulnerabilities and components',
    description:
      'Manufacturers shall identify and document vulnerabilities and components contained in the product, including by drawing up a software bill of materials (SBOM) in a commonly used and machine-readable format covering at the very least the top-level dependencies of the product.',
    evidence: [
      'SBOM file (CycloneDX or SPDX format)',
      'Dependency tracking system records',
      'Component vulnerability mapping',
      'SBOM generation and update process',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-AII-2.2',
    frameworkId: 'cra',
    category: 'Vulnerability Handling (Annex I, Part II)',
    title: 'Address and remediate vulnerabilities without delay',
    description:
      'Manufacturers shall address and remediate vulnerabilities without delay, including by providing security updates, in relation to the risks posed to the products with digital elements.',
    evidence: [
      'Vulnerability management policy with SLAs',
      'Remediation tracking records',
      'Vulnerability triage process documentation',
      'Patch release timeline evidence',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-AII-2.3',
    frameworkId: 'cra',
    category: 'Vulnerability Handling (Annex I, Part II)',
    title: 'Regular security testing and review',
    description:
      'Manufacturers shall apply effective and regular tests and reviews of the security of the product with digital elements throughout the support period.',
    evidence: [
      'Periodic security testing schedule',
      'Security test reports (quarterly/annual)',
      'Continuous monitoring configuration',
      'Regression testing records after patches',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-AII-2.4',
    frameworkId: 'cra',
    category: 'Vulnerability Handling (Annex I, Part II)',
    title: 'Public disclosure of fixed vulnerabilities',
    description:
      'Once a security update has been made available, manufacturers shall publicly disclose information about fixed vulnerabilities, including a description, information allowing users to identify the affected product, the impacts, severity, and information helping users remediate the vulnerabilities.',
    evidence: [
      'Security advisory publication process',
      'Published CVE records',
      'Security advisory templates and archives',
      'Severity rating methodology (CVSS)',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-AII-2.5',
    frameworkId: 'cra',
    category: 'Vulnerability Handling (Annex I, Part II)',
    title: 'Coordinated vulnerability disclosure policy',
    description:
      'Manufacturers shall put in place and enforce a policy on coordinated vulnerability disclosure, including a contact address for reporting vulnerabilities.',
    evidence: [
      'Coordinated vulnerability disclosure (CVD) policy document',
      'security.txt file on product/website',
      'Responsible disclosure process documentation',
      'VDP (Vulnerability Disclosure Program) records',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-AII-2.6',
    frameworkId: 'cra',
    category: 'Vulnerability Handling (Annex I, Part II)',
    title: 'Facilitate information sharing about vulnerabilities',
    description:
      'Manufacturers shall take measures to facilitate the sharing of information about potential vulnerabilities in their product as well as in third-party components contained in that product, including by providing a contact address for reporting.',
    evidence: [
      'Vulnerability reporting contact (public)',
      'Third-party component vulnerability sharing process',
      'Bug bounty or reporting program (if applicable)',
      'Communication channel documentation',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-AII-2.7',
    frameworkId: 'cra',
    category: 'Vulnerability Handling (Annex I, Part II)',
    title: 'Secure update distribution mechanisms',
    description:
      'Manufacturers shall provide mechanisms to securely distribute updates for products with digital elements to ensure vulnerabilities are fixed or mitigated in a timely manner, and where applicable for security updates, in an automatic manner.',
    evidence: [
      'Secure update distribution architecture (code signing, secure transport)',
      'Update integrity verification mechanism',
      'Update rollback capability documentation',
      'Automatic update deployment evidence',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-AII-2.8',
    frameworkId: 'cra',
    category: 'Vulnerability Handling (Annex I, Part II)',
    title: 'Free and timely security patches',
    description:
      'Manufacturers shall ensure that security patches or updates are disseminated without delay and free of charge, accompanied by advisory messages providing users with relevant information including on potential actions to be taken.',
    evidence: [
      'Free update commitment / policy',
      'Patch release SLA documentation',
      'User advisory message templates',
      'Patch distribution timeline records',
    ],
    severity: 'high',
  },

  // ════════════════════════════════════════════════════════════════════
  // ARTICLE 13 — MANUFACTURER OBLIGATIONS
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-A13-01',
    frameworkId: 'cra',
    category: 'Manufacturer Obligations (Art. 13)',
    title: 'Cybersecurity risk assessment (Art. 13(2))',
    description:
      'Manufacturers must undertake an assessment of the cybersecurity risks associated with the product and take the results into account during planning, design, development, production, delivery and maintenance, with a view to minimising cybersecurity risks, preventing incidents and minimising their impact.',
    evidence: [
      'Cybersecurity risk assessment report',
      'Risk assessment methodology documentation',
      'Risk register with treatment decisions',
      'Evidence of risk assessment updates during lifecycle',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-A13-02',
    frameworkId: 'cra',
    category: 'Manufacturer Obligations (Art. 13)',
    title: 'Due diligence for third-party components (Art. 13(5))',
    description:
      'When integrating third-party components (including open-source), manufacturers shall exercise due diligence to ensure those components do not compromise the cybersecurity of the product. This includes verifying that components comply with essential requirements.',
    evidence: [
      'Third-party component inventory',
      'Supplier security assessments / questionnaires',
      'Open-source component security evaluations',
      'License compliance records',
      'Component vulnerability monitoring process',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-A13-03',
    frameworkId: 'cra',
    category: 'Manufacturer Obligations (Art. 13)',
    title: 'Vulnerability handling during support period (Art. 13(8))',
    description:
      'Manufacturers shall ensure, when placing a product on the market and for the entire support period, that vulnerabilities of that product are handled effectively and in accordance with Annex I Part II requirements.',
    evidence: [
      'Vulnerability handling process documentation',
      'Support period definition and commitment',
      'Ongoing vulnerability monitoring evidence',
      'Patch release history',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-A13-04',
    frameworkId: 'cra',
    category: 'Manufacturer Obligations (Art. 13)',
    title: 'Support period definition (Art. 13(8), (21))',
    description:
      'Manufacturers shall determine the support period proportionate to the expected product lifetime. The support period shall not be shorter than five years from the date the product is placed on the market, unless the expected product lifetime is shorter.',
    evidence: [
      'Support period declaration document',
      'Product lifetime analysis',
      'End-of-support / end-of-life policy',
      'Customer-facing support period communication',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-A13-05',
    frameworkId: 'cra',
    category: 'Manufacturer Obligations (Art. 13)',
    title: 'Conformity assessment before market placement (Art. 13(12))',
    description:
      'Manufacturers shall carry out an appropriate conformity assessment procedure before placing a product on the market. Where compliance has been demonstrated, manufacturers shall draw up the EU declaration of conformity and affix the CE marking.',
    evidence: [
      'Conformity assessment procedure records',
      'Assessment report (internal or third-party)',
      'EU Declaration of Conformity document',
      'CE marking application records',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-A13-06',
    frameworkId: 'cra',
    category: 'Manufacturer Obligations (Art. 13)',
    title: 'Information and instructions to users (Art. 13(15)-(20))',
    description:
      'Manufacturers shall provide users with information and instructions as specified in Annex II, enabling secure installation, operation and use, including product identification, contact information, security properties, and support period details.',
    evidence: [
      'User security guide / manual',
      'Installation security instructions',
      'Product security configuration guidance',
      'Annex II compliance checklist',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-A13-07',
    frameworkId: 'cra',
    category: 'Manufacturer Obligations (Art. 13)',
    title: 'Cooperation with authorities (Art. 13(22))',
    description:
      'Manufacturers shall cooperate with market surveillance authorities, including providing all information and documentation necessary to demonstrate conformity, in a language easily understood by the authority.',
    evidence: [
      'Regulatory contact point designation',
      'Information request response process',
      'Documentation in required languages',
      'Authority communication records',
    ],
    severity: 'medium',
  },

  // ════════════════════════════════════════════════════════════════════
  // CONFORMITY ASSESSMENT (Art. 28-30, Annex VIII)
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-CA-01',
    frameworkId: 'cra',
    category: 'Conformity Assessment (Art. 28-30)',
    title: 'Product classification',
    description:
      'Manufacturers shall correctly classify their product as default, important (Class I or Class II as per Annex III), or critical (Annex IV) to determine the appropriate conformity assessment route.',
    evidence: [
      'Product classification assessment document',
      'Annex III / Annex IV category analysis',
      'Classification justification rationale',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-CA-02',
    frameworkId: 'cra',
    category: 'Conformity Assessment (Art. 28-30)',
    title: 'Internal control procedure (Module A)',
    description:
      'For default category products, manufacturers may use internal control (self-assessment) to demonstrate conformity with Annex I requirements.',
    evidence: [
      'Internal assessment report',
      'Self-assessment checklist against Annex I',
      'Internal test reports and evidence',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-CA-03',
    frameworkId: 'cra',
    category: 'Conformity Assessment (Art. 28-30)',
    title: 'EU-type examination (Module B+C) for important/critical products',
    description:
      'For important (when harmonized standards are not applied) and critical products, manufacturers must undergo third-party conformity assessment through EU-type examination by a notified body, followed by conformity to type based on internal production control.',
    evidence: [
      'Notified body engagement records',
      'EU-type examination certificate',
      'Type test reports from notified body',
      'Internal production control records (Module C)',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-CA-04',
    frameworkId: 'cra',
    category: 'Conformity Assessment (Art. 28-30)',
    title: 'Full quality assurance (Module H)',
    description:
      'As an alternative for important and critical products, manufacturers may use conformity assessment based on full quality assurance, where a notified body assesses the quality system.',
    evidence: [
      'Quality management system documentation',
      'Notified body QA audit reports',
      'Quality system certificate',
      'Ongoing surveillance audit records',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-CA-05',
    frameworkId: 'cra',
    category: 'Conformity Assessment (Art. 28-30)',
    title: 'EU Declaration of Conformity (Art. 28)',
    description:
      'Manufacturers shall draw up an EU declaration of conformity stating that the product fulfils the essential cybersecurity requirements and keep it up to date throughout the support period.',
    evidence: [
      'EU Declaration of Conformity document',
      'Declaration update records',
      'Referenced harmonized standards list',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-CA-06',
    frameworkId: 'cra',
    category: 'Conformity Assessment (Art. 28-30)',
    title: 'CE marking (Art. 30)',
    description:
      'Manufacturers shall affix the CE marking visibly, legibly and indelibly to the product or, where not possible, to the packaging or documentation, before the product is placed on the market.',
    evidence: [
      'CE marking placement records',
      'Product labelling or packaging photographs',
      'CE marking design compliance verification',
    ],
    severity: 'high',
  },

  // ════════════════════════════════════════════════════════════════════
  // INCIDENT & VULNERABILITY REPORTING (Art. 14)
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-IR-01',
    frameworkId: 'cra',
    category: 'Incident & Vulnerability Reporting (Art. 14)',
    title: 'Early warning for actively exploited vulnerabilities (24h)',
    description:
      'Manufacturers shall notify ENISA within 24 hours of becoming aware of an actively exploited vulnerability in their product, providing an early warning with basic information about the vulnerability.',
    evidence: [
      'ENISA early warning notification template',
      'Incident response plan with 24h escalation path',
      'Notification records and timestamps',
      'Internal triage process for active exploitation detection',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-IR-02',
    frameworkId: 'cra',
    category: 'Incident & Vulnerability Reporting (Art. 14)',
    title: 'Vulnerability notification (72h)',
    description:
      'Within 72 hours of awareness, manufacturers shall submit to ENISA a vulnerability notification with additional details including severity assessment, preliminary corrective measures, and whether the vulnerability affects other manufacturers\' products.',
    evidence: [
      'Vulnerability notification template',
      'Severity assessment methodology (CVSS)',
      '72-hour notification compliance records',
      'Cross-manufacturer impact analysis',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-IR-03',
    frameworkId: 'cra',
    category: 'Incident & Vulnerability Reporting (Art. 14)',
    title: 'Final report (14 days)',
    description:
      'Within 14 days after a corrective or mitigating measure is available, manufacturers shall submit a final report to ENISA including a detailed description of the vulnerability, severity, root cause analysis, and corrective measures applied.',
    evidence: [
      'Final vulnerability report template',
      'Root cause analysis documentation',
      'Corrective measure verification records',
      'Report submission confirmation from ENISA',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-IR-04',
    frameworkId: 'cra',
    category: 'Incident & Vulnerability Reporting (Art. 14)',
    title: 'Severe incident notification to ENISA',
    description:
      'Manufacturers shall notify ENISA of any severe incident that has an impact on the security of the product with digital elements within 24 hours of becoming aware.',
    evidence: [
      'Incident classification criteria',
      'Severe incident escalation procedures',
      'ENISA incident notification records',
      'Incident response team activation records',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-IR-05',
    frameworkId: 'cra',
    category: 'Incident & Vulnerability Reporting (Art. 14)',
    title: 'User notification of vulnerabilities and incidents',
    description:
      'Manufacturers shall inform users about the vulnerability and, where applicable, about corrective or mitigating measures that users can deploy to mitigate the impact of the vulnerability or incident, without undue delay.',
    evidence: [
      'User notification process documentation',
      'Security advisory publication records',
      'Customer communication templates',
      'Notification delivery confirmation records',
    ],
    severity: 'high',
  },

  // ════════════════════════════════════════════════════════════════════
  // DOCUMENTATION & TRANSPARENCY (Annex II, VII)
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-DT-01',
    frameworkId: 'cra',
    category: 'Documentation & Transparency (Annex II, VII)',
    title: 'Technical documentation (Annex VII)',
    description:
      'Manufacturers shall draw up technical documentation before the product is placed on the market. The documentation shall make it possible to assess the conformity of the product with Annex I requirements and shall cover design, manufacture and operation.',
    evidence: [
      'Complete technical documentation package',
      'Design and architecture specifications',
      'Risk assessment documentation',
      'Test reports and validation records',
      'Manufacturing process security controls',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-DT-02',
    frameworkId: 'cra',
    category: 'Documentation & Transparency (Annex II, VII)',
    title: 'Product description and identification',
    description:
      'Technical documentation shall include a general description of the product with digital elements, including its intended purpose, photographs/illustrations for hardware, product versions, and internal layout.',
    evidence: [
      'Product description document',
      'Product photographs and layout diagrams',
      'Version history and identification scheme',
      'Intended use documentation',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-DT-03',
    frameworkId: 'cra',
    category: 'Documentation & Transparency (Annex II, VII)',
    title: 'SBOM in technical documentation',
    description:
      'The SBOM shall be included in the technical documentation. It must be in a commonly used, machine-readable format and cover at minimum the top-level dependencies. It must be provided to market surveillance authorities upon request.',
    evidence: [
      'SBOM file in CycloneDX or SPDX format',
      'SBOM generation tooling and process',
      'SBOM update and maintenance records',
      'Process for providing SBOM to authorities',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-DT-04',
    frameworkId: 'cra',
    category: 'Documentation & Transparency (Annex II, VII)',
    title: 'User information and instructions (Annex II)',
    description:
      'Manufacturers shall provide user information and instructions containing: manufacturer identity and contact, product identification, intended purpose, security properties, known residual risks, support period, and how to install updates.',
    evidence: [
      'User manual with security sections',
      'Quick start guide with security setup',
      'Online security documentation / help center',
      'Annex II content completeness checklist',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-DT-05',
    frameworkId: 'cra',
    category: 'Documentation & Transparency (Annex II, VII)',
    title: 'Support period declaration to users',
    description:
      'Manufacturers shall clearly communicate to users the end date of the support period (at minimum 5 years from market placement, unless product lifetime is shorter), prominently displayed on the product, packaging, or documentation.',
    evidence: [
      'Support period end-date on product/packaging',
      'Support period in user documentation',
      'Publicly accessible support period information',
      'End-of-support notification plan',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-DT-06',
    frameworkId: 'cra',
    category: 'Documentation & Transparency (Annex II, VII)',
    title: 'Documentation retention',
    description:
      'Manufacturers shall keep the technical documentation and the EU declaration of conformity for 10 years after the product has been placed on the market, or for the duration of the support period, whichever is longer.',
    evidence: [
      'Document retention policy',
      'Documentation archival system',
      'Retention period tracking records',
    ],
    severity: 'medium',
  },

  // ════════════════════════════════════════════════════════════════════
  // SUPPLY CHAIN SECURITY
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-SC-01',
    frameworkId: 'cra',
    category: 'Supply Chain Security',
    title: 'Third-party component due diligence',
    description:
      'Manufacturers shall exercise due diligence when integrating components sourced from third parties, ensuring they do not compromise the cybersecurity of the product. This applies to both commercial and open-source components.',
    evidence: [
      'Third-party component inventory with risk ratings',
      'Supplier security assessment questionnaires',
      'Component security evaluation records',
      'License and provenance verification',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-SC-02',
    frameworkId: 'cra',
    category: 'Supply Chain Security',
    title: 'Open-source software security management',
    description:
      'When integrating free and open-source software components, manufacturers shall ensure they maintain the security of those components throughout the product lifecycle, including monitoring for vulnerabilities.',
    evidence: [
      'OSS usage policy and governance',
      'Dependency vulnerability monitoring (e.g. Dependabot, Snyk)',
      'OSS component patch management process',
      'OSS license compliance records',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-SC-03',
    frameworkId: 'cra',
    category: 'Supply Chain Security',
    title: 'Build pipeline integrity and supply chain risk management',
    description:
      'Manufacturers shall implement risk management measures for their software supply chain and build pipeline to prevent security compromises, including verifying the integrity of development tools and distribution channels.',
    evidence: [
      'Supply chain security policy',
      'CI/CD pipeline security controls',
      'Build reproducibility and integrity verification',
      'Code signing and artifact attestation',
      'Vendor risk assessment records',
    ],
    severity: 'high',
  },

  // ════════════════════════════════════════════════════════════════════
  // SECURE DEFAULT CONFIGURATION
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-DC-01',
    frameworkId: 'cra',
    category: 'Secure Default Configuration',
    title: 'Secure out-of-box experience',
    description:
      'Products shall be delivered with secure default settings that restrict functionality to what is necessary, with unused services disabled and unnecessary ports closed by default.',
    evidence: [
      'Default settings documentation',
      'Configuration review and hardening records',
      'Minimal privilege and minimal service design docs',
      'Default state security verification test results',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-DC-02',
    frameworkId: 'cra',
    category: 'Secure Default Configuration',
    title: 'No shared default credentials',
    description:
      'Products shall not be made available with known default passwords or shared credentials. Each device shall have unique credentials or require the user to set credentials upon first use.',
    evidence: [
      'Unique credential generation process documentation',
      'First-use setup flow requiring credential creation',
      'No-default-password policy',
      'Credential uniqueness verification testing',
    ],
    severity: 'critical',
  },

  // ════════════════════════════════════════════════════════════════════
  // DATA PROTECTION & ENCRYPTION
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-DP-01',
    frameworkId: 'cra',
    category: 'Data Protection & Encryption',
    title: 'Encryption of data at rest',
    description:
      'Products shall encrypt relevant stored data using state-of-the-art encryption mechanisms to protect confidentiality.',
    evidence: [
      'Data-at-rest encryption architecture',
      'Encryption algorithm and key length documentation',
      'Key management procedures for stored data',
      'Encryption verification test results',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-DP-02',
    frameworkId: 'cra',
    category: 'Data Protection & Encryption',
    title: 'Encryption of data in transit',
    description:
      'Products shall encrypt data in transit using state-of-the-art protocols (e.g. TLS 1.2+, mTLS) to protect confidentiality and integrity during transmission.',
    evidence: [
      'Transport encryption protocol documentation',
      'TLS configuration and cipher suite selection',
      'Certificate management procedures',
      'Network traffic encryption verification',
    ],
    severity: 'high',
  },

  // ════════════════════════════════════════════════════════════════════
  // UPDATE MECHANISM
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-UM-01',
    frameworkId: 'cra',
    category: 'Update Mechanism',
    title: 'Automatic security update capability',
    description:
      'Products shall support automatic security updates enabled by default, with user opt-out capability, update notifications, and the ability to temporarily postpone updates.',
    evidence: [
      'Automatic update mechanism design',
      'Default-enabled auto-update configuration',
      'Opt-out mechanism documentation',
      'Update scheduling and postponement capability',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-UM-02',
    frameworkId: 'cra',
    category: 'Update Mechanism',
    title: 'Free security updates during support period',
    description:
      'Security updates shall be made available free of charge during the entire support period, accompanied by advisory messages providing relevant information.',
    evidence: [
      'Free update policy commitment',
      'Update distribution records showing no-cost delivery',
      'Advisory message templates and archives',
      'Support period coverage verification',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-UM-03',
    frameworkId: 'cra',
    category: 'Update Mechanism',
    title: 'Secure update distribution',
    description:
      'Update distribution mechanisms shall ensure integrity and authenticity of updates through code signing, secure transport, and verification before installation.',
    evidence: [
      'Code signing infrastructure documentation',
      'Update integrity verification mechanism',
      'Secure download channel (HTTPS) configuration',
      'Update authentication and rollback procedures',
    ],
    severity: 'high',
  },

  // ════════════════════════════════════════════════════════════════════
  // MONITORING & LOGGING
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-ML-01',
    frameworkId: 'cra',
    category: 'Monitoring & Logging',
    title: 'Security event recording',
    description:
      'Products shall record and/or monitor relevant internal activity, including access to or modification of data, services or functions, to provide security-related information.',
    evidence: [
      'Logging architecture and design documentation',
      'Security event type catalog',
      'Log format specification',
      'Log storage and rotation policy',
    ],
    severity: 'medium',
  },
  {
    id: 'CRA-ML-02',
    frameworkId: 'cra',
    category: 'Monitoring & Logging',
    title: 'User opt-out for monitoring',
    description:
      'Products shall provide users with an opt-out mechanism for security monitoring and logging features, while clearly communicating the security implications.',
    evidence: [
      'Opt-out mechanism design and implementation',
      'User notification about opt-out implications',
      'Opt-out settings documentation',
    ],
    severity: 'low',
  },

  // ════════════════════════════════════════════════════════════════════
  // POST-MARKET OBLIGATIONS
  // ════════════════════════════════════════════════════════════════════
  {
    id: 'CRA-PM-01',
    frameworkId: 'cra',
    category: 'Post-Market Obligations',
    title: 'Post-market surveillance',
    description:
      'Manufacturers shall maintain a post-market surveillance system to monitor the cybersecurity of their products throughout the support period, identify new vulnerabilities, and assess ongoing compliance.',
    evidence: [
      'Post-market surveillance plan',
      'Vulnerability monitoring dashboard/system',
      'Periodic compliance review records',
      'Customer feedback and incident collection process',
    ],
    severity: 'high',
  },
  {
    id: 'CRA-PM-02',
    frameworkId: 'cra',
    category: 'Post-Market Obligations',
    title: 'Corrective actions for non-compliance',
    description:
      'When a product is found to not be in conformity with Annex I requirements, manufacturers shall immediately take corrective action to bring the product into conformity, withdraw it, or recall it as appropriate, and inform the relevant authorities.',
    evidence: [
      'Corrective action process documentation',
      'Non-conformity handling records',
      'Product withdrawal/recall procedures',
      'Authority notification records for non-compliance',
    ],
    severity: 'critical',
  },
  {
    id: 'CRA-PM-03',
    frameworkId: 'cra',
    category: 'Post-Market Obligations',
    title: 'Importer and distributor cooperation',
    description:
      'Manufacturers shall ensure that importers and distributors in the supply chain have the necessary information and documentation to fulfil their respective CRA obligations.',
    evidence: [
      'Importer/distributor communication records',
      'Distributed compliance documentation packages',
      'Supply chain partner compliance agreements',
    ],
    severity: 'medium',
  },
];
