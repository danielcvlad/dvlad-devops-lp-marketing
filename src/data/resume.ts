export interface Certification {
  name: string;
  id: string;
  issuer: string;
  level: string;
  /** Omitted when no credential URL is held — the row then renders unlinked. */
  verifyUrl?: string;
}

export interface Project {
  repo: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  iconColor: "primary" | "secondary";
  /** Omitted when there is no verified metric to show. */
  impact?: string;
}

export const resumeData = {
  name: "Daniel Vlad",
  title: "DevSecOps Engineer | Cloud Solutions Architect",
  email: "contact@danielvlad.com",
  linkedin: "https://linkedin.com/in/dancvlad",
  github: "https://github.com/danielcvlad",
  gitlab: "https://gitlab.com/danielcvlad",

  // resumeUrl is the served path; resumeFileName is what the browser saves it as.
  resumeUrl: "/dv-resume.pdf",
  resumeFileName: "Daniel-Vlad-Resume.pdf",

  status: "Available for projects",
  locationDisplay: "Munich // Remote — Global Node",

  experience: [
    {
      title: "DevSecOps Engineer",
      company: "Roland Berger",
      location: "Munich, Germany",
      period: "May 2024 – Present",
      periodShort: "2024 — PRESENT",
      color: "primary",
      bullets: [
        "Architected and delivered a zero-standing-privilege, self-service VM provisioning platform (Trusted Compute Instances) across a 300+ subscription Azure tenant — just-in-time PIM role assignment, an ABAC-fenced two-identity security model, and capability-based entitlement checks, cutting organization-wide provisioning from 90 minutes to 5 minutes and removing standing admin access for all teams",
        "Embedded DevSecOps controls across CI/CD pipelines — SAST, DAST, dependency and container-image scanning, secret detection, and CVE management (SonarQube, OWASP ZAP, Burp Suite, Trivy, TruffleHog, Defender for Cloud) — shifting security left and gating releases on policy",
        "Architected Google Cloud landing zones with the FAST framework (Cloud Foundation Fabric) — YAML-driven, schema-validated project provisioning with dedicated spoke VPCs, PAM just-in-time access, and Org Policy guardrails",
        "Engineered GitOps-style CI/CD for GCP infrastructure with Azure Pipelines and Terraform — Workload Identity Federation for keyless authentication and a read-only/read-write service-account split gating plan-on-PR and apply-on-merge",
        "Built security-hardened, CIS-aligned golden OS images (Windows Server 2025, Trusted Launch) with Azure Image Builder and Packer, distributed via Azure Compute Gallery to Azure Virtual Desktop, self-hosted DevOps agents, and Trusted Compute Instances",
        "Engineered deployment observability with Azure Monitor Logs Ingestion (custom Log Analytics tables, data collection rules) for durable, queryable audit trails across ephemeral infrastructure",
        "Drove cloud migration of over 20 legacy on-premises applications to Azure-native services (ACI, App Services, AKS), retiring multiple on-prem servers and reducing hosting cost by 70%"
      ],
      tags: ["Azure", "GCP", "DevSecOps", "Terraform", "Zero Trust"]
    },
    {
      title: "Support Escalation Engineer, Azure IaaS VMs",
      company: "Microsoft",
      location: "Bucharest, Romania",
      period: "Jan 2022 – May 2024",
      periodShort: "2022 — 2024",
      color: "secondary",
      bullets: [
        "Provided expert guidance to Fortune 500 customers across Storage, Connectivity, Management, and Configuration domains",
        "Led troubleshooting of high-severity production cases — no-boot scenarios, kernel panics, network issues, and misconfigurations — ensuring SLA compliance",
        "Earned multiple Customer Hero recognitions with consistently high CSAT scores",
        "Served as Escalation Point for Linux issues, empowering colleagues through 1:1 coaching and mentorship sessions"
      ],
      tags: ["Azure IaaS", "Linux", "Storage", "Networking"]
    },
    {
      title: "Operational Specialist",
      company: "Orange",
      location: "Bucharest, Romania",
      period: "Jan 2020 – Dec 2021",
      periodShort: "2020 — 2021",
      color: "muted",
      bullets: [
        "Led end-to-end RPA deployments, supporting 20+ production bots and multiple development environments, ensuring high availability and scalability.",
        "Built and maintained VM infrastructure (Windows Server & Linux) for RPA workloads, reducing environment provisioning time by 30% through automation using Infrastructure as Code.",
        "Configured and Deployed UiPath Orchestrator, streamlining automation scheduling, monitoring, and governance for enterprise-scale operations.",
        "Implemented CI/CD pipelines for RPA projects, enabling faster and more reliable deployments with 40% fewer release incidents.",
        "Automated Elasticsearch and Kibana for proactive monitoring and alerts, log analysis, and root-cause investigations, cutting incident resolution time by 25%.",
        "Performed code reviews and enforced best practices, increasing reusability and maintainability across automation projects.",
        "Automated infrastructure and deployment tasks with PowerShell and Azure DevOps, reducing manual effort and improving consistency across environments."
      ],
      tags: ["RPA", "UiPath", "IaC", "CI/CD", "Azure DevOps"]
    }
  ],

  // Order here is the render order of the technical_capabilities.yaml block.
  skills: [
    { key: "cloud_platforms", items: ["microsoft_azure (expert)", "aws", "google_cloud", "digitalocean"] },
    { key: "azure_services", items: ["avd", "azure_image_builder", "dev_box", "acr", "web_apps", "aci", "iot_hub", "iot_central"] },
    { key: "aws_services", items: ["ec2", "eks", "ecr", "iam", "vpc", "s3"] },
    { key: "containers", items: ["kubernetes", "aks", "eks", "helm", "docker"] },
    { key: "infrastructure_as_code", items: ["terraform", "bicep", "arm_templates", "ansible"] },
    { key: "cicd_and_artifacts", items: ["azure_devops", "jenkins", "gitlab", "github_actions", "git", "nexus", "docker_hub"] },
    { key: "security_and_identity", items: ["sentinel", "defender_for_cloud", "entra_id", "conditional_access", "pim", "intune", "zero_trust", "mitre_att&ck"] },
    { key: "automation_and_scripting", items: ["python", "javascript", "bash", "powershell", "rpa_uipath"] },
    { key: "monitoring", items: ["prometheus", "grafana", "new_relic", "azure_monitor"] },
    { key: "build_tools", items: ["gradle", "maven", "pip", "npm", "yarn"] },
    { key: "operating_systems", items: ["linux (ubuntu / rhel / suse)", "windows_server"] }
  ],

  certifications: <Certification[]>[
    {
      name: "Azure DevOps Engineer Expert",
      id: "AZ-400",
      issuer: "MICROSOFT",
      level: "Expert",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/DanielVlad-3730/1121D1CBC6B643BC?sharingId=1831A122A9A3BA9"
    },
    {
      name: "Azure Solutions Architect Expert",
      id: "AZ-305",
      issuer: "MICROSOFT",
      level: "Expert",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/DanielVlad-3730/36C8EF8009EDFAB9?sharingId=1831A122A9A3BA9"
    },
    {
      name: "Azure Security Engineer Associate",
      id: "AZ-500",
      issuer: "MICROSOFT",
      level: "Associate",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/DanielVlad-3730/6F2E319C960F8316?sharingId=1831A122A9A3BA9"
    },
    {
      name: "Azure Identity & Access Administrator Associate",
      id: "SC-300",
      issuer: "MICROSOFT",
      level: "Associate"
    },
    {
      name: "Azure Administrator Associate",
      id: "AZ-104",
      issuer: "MICROSOFT",
      level: "Associate",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/DanielVlad-3730/4DAD0DB97E5412CB?sharingId=1831A122A9A3BA9"
    },
    {
      name: "Azure Virtual Desktop Specialty",
      id: "AZ-140",
      issuer: "MICROSOFT",
      level: "Specialty",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/DanielVlad-3730/6EB334077409C7D?sharingId=1831A122A9A3BA9"
    },
    {
      name: "DevOps Practitioner",
      id: "BOOTCAMP",
      issuer: "TECHWORLD WITH NANA",
      level: "Practitioner"
    },
    {
      name: "DevSecOps Practitioner",
      id: "BOOTCAMP",
      issuer: "TECHWORLD WITH NANA",
      level: "Practitioner"
    }
  ],

  projects: <Project[]>[
    {
      repo: "042",
      title: "Automated Enterprise Image Lifecycle",
      description: "Pipeline-built, security-hardened golden OS images delivered on a schedule to Dev Box and self-hosted DevOps agents with Azure Image Builder.",
      tags: ["PACKER", "AZURE"],
      icon: "hub",
      iconColor: "primary",
      impact: "70% faster image provisioning across 5 regions"
    },
    {
      repo: "088",
      title: "Trusted Compute Instances",
      description: "Self-service VM provisioning with zero standing privilege across a 300+ subscription tenant: just-in-time PIM elevation, an ABAC-fenced two-identity model, and capability-based entitlement checks.",
      tags: ["ZERO_TRUST", "PIM"],
      icon: "vpn_lock",
      iconColor: "secondary",
      impact: "Provisioning: 90 minutes → 5 minutes. Zero standing admin access."
    },
    {
      repo: "067",
      title: "GCP FAST Landing Zones",
      description: "YAML-driven, schema-validated project provisioning on Cloud Foundation Fabric with dedicated spoke VPCs, PAM just-in-time access, and Org Policy guardrails.",
      tags: ["GCP", "TERRAFORM"],
      icon: "architecture",
      iconColor: "primary"
    },
    {
      repo: "019",
      title: "Microservices on Kubernetes, Production Hardened",
      description: "Deployed a microservices stack from a private registry with Helm charts and Helmfile, applying production and security best practices.",
      tags: ["K8S", "HELM"],
      icon: "lan",
      iconColor: "secondary",
      impact: "60% faster release cycles. Zero-downtime deployments."
    },
    {
      repo: "104",
      title: "Terraform-Provisioned CI/CD to EKS",
      description: "Complete Jenkins pipeline provisioning AWS EKS clusters with a shared remote state and deploying from a private ECR/DockerHub registry.",
      tags: ["JENKINS", "EKS"],
      icon: "rocket_launch",
      iconColor: "primary"
    },
    {
      repo: "031",
      title: "Python Automation Toolkit",
      description: "Boto3 and Terraform automations for EC2 health checks, EBS volume backup and restore, and website monitoring with self-recovery.",
      tags: ["PYTHON", "BOTO3"],
      icon: "terminal",
      iconColor: "secondary"
    }
  ],

  ongoingDevelopment: [
    { name: "SC-100 — Microsoft Cybersecurity Architect", issuer: "MICROSOFT" },
    { name: "SAL1 — Security Analyst Level 1", issuer: "TRYHACKME" },
    { name: "German — B1", issuer: "LANGUAGE" }
  ],

  education: [
    {
      title: "DevOps Bootcamp & DevSecOps Bootcamp",
      institution: "TechWorld with Nana",
      period: "2026 — Completed"
    },
    {
      title: "Bachelor's Degree, Law",
      institution: "Romanian-American University, Bucharest",
      period: "2009 — 2014"
    }
  ],

  languages: [
    { name: "English", level: "C2" },
    { name: "German", level: "A2" }
  ]
};
