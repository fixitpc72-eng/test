import {
  Wrench,
  Droplet,
  Zap,
  Sun,
  HardHat,
  Radio,
  Truck,
  Camera,
  Briefcase,
  TrendingUp,
  FileText,
  ClipboardCheck,
  Coins,
  Package,
  ShieldCheck,
  UserCheck,
  DollarSign,
  Workflow,
  Activity,
  Settings,
  type LucideIcon,
} from "lucide-react-native";

export interface Trade {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  code: string;
}

export const TRADES: Trade[] = [
  {
    id: "hvac",
    code: "T-01",
    title: "HVAC & Mechanical",
    description:
      "EPA compliance tracking, refrigerant leak logs, system performance testing checklists, and automated seasonal PM agreements.",
    icon: Wrench,
  },
  {
    id: "plumbing",
    code: "T-02",
    title: "Commercial Plumbing",
    description:
      "Backflow prevention logs, drain inspection reporting, asset tagging, and high-volume fixture installation project management.",
    icon: Droplet,
  },
  {
    id: "electrical",
    code: "T-03",
    title: "Industrial Electrical",
    description:
      "Arc-flash hazard warnings, breaker panel scheduling, wiring diagram attachments, and detailed circuit load safety calculations.",
    icon: Zap,
  },
  {
    id: "solar",
    code: "T-04",
    title: "Solar & Renewables",
    description:
      "Shading analysis data sheets, inverter performance mapping, electrical grid interconnect approvals, and net-metering compliance.",
    icon: Sun,
  },
  {
    id: "construction",
    code: "T-05",
    title: "Construction Mgmt",
    description:
      "Track massive construction jobs from bid to completion, tracking materials, sub-contractors, and equipment schedules.",
    icon: HardHat,
  },
  {
    id: "telecom",
    code: "T-06",
    title: "Telecom & Low Voltage",
    description:
      "Fiber splice-loss tracking, cell tower line-sweep uploads, structural engineering signoffs, and geo-tagged photo closeouts.",
    icon: Radio,
  },
];

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  code: string;
}

export const FEATURES: Feature[] = [
  {
    id: "dispatch",
    code: "F-01",
    title: "Smart Dispatch",
    description:
      "Drag-and-drop scheduling board synchronized with real-time GPS telemetry to deploy crews based on skill, location, and SLA urgency.",
    icon: Truck,
  },
  {
    id: "photo",
    code: "F-02",
    title: "Photo Documentation",
    description:
      "Capture geo-tagged, time-stamped site photos. Assembled and submitted as the crew leaves the site.",
    icon: Camera,
  },
  {
    id: "pm",
    code: "F-03",
    title: "Project Management",
    description:
      "Track massive construction jobs from bid to completion, tracking materials, sub-contractors, and equipment schedules.",
    icon: Briefcase,
  },
  {
    id: "pipeline",
    code: "F-04",
    title: "Pipeline Tracking",
    description:
      "Visualize and manage every commercial sales opportunity from initial lead ingestion to final contract signing.",
    icon: TrendingUp,
  },
  {
    id: "proposals",
    code: "F-05",
    title: "Proposal Builder",
    description:
      "Build highly-detailed, technical, and branded commercial proposals in minutes. Auto-convert accepted proposals into active service agreements.",
    icon: FileText,
  },
  {
    id: "agreements",
    code: "F-06",
    title: "Service Agreements",
    description:
      "Automate recurring maintenance agreements, including auto-scheduling visits, generating renewal invoices, and tracking SLA margins.",
    icon: ClipboardCheck,
  },
  {
    id: "rfi",
    code: "F-07",
    title: "RFIs & Change Orders",
    description:
      "Instantly create and process RFIs, convert approved RFIs to change orders, and update budget parameters in real-time.",
    icon: Workflow,
  },
  {
    id: "accounting",
    code: "F-08",
    title: "Accounting Integrations",
    description:
      "Seamlessly synchronize invoices, purchase orders, payments, and payroll data with QuickBooks, Sage Intacct, or Microsoft Dynamics.",
    icon: Coins,
  },
  {
    id: "equipment",
    code: "F-09",
    title: "Equipment Management",
    description:
      "Maintain detailed lifecycle registries of customer equipment, including warranty parameters, model schemas, and service history logs.",
    icon: Settings,
  },
  {
    id: "inventory",
    code: "F-10",
    title: "Inventory Management",
    description:
      "Track material stock across multiple warehouses and service trucks. Automate reorder points and purchase orders for low-stock items.",
    icon: Package,
  },
  {
    id: "safety",
    code: "F-11",
    title: "Safety Compliance",
    description:
      "Ensure safety checklists, JHAs, and compliance documents are completed before a job is closed out.",
    icon: ShieldCheck,
  },
  {
    id: "registry",
    code: "F-12",
    title: "Technician Registry",
    description:
      "Manage field certifications, operator licenses, and equipment safety clearance profiles.",
    icon: UserCheck,
  },
  {
    id: "insights",
    code: "F-13",
    title: "Financial Insights",
    description:
      "Know your precise gross margin on every visit and every phase of work. Auto-calculate labor burdens, material costs, and equipment rates.",
    icon: DollarSign,
  },
  {
    id: "billing",
    code: "F-14",
    title: "Progress Billing",
    description:
      "Automate customer outreach and nurture sequences. Target previous customers for recurring seasonal maintenance visits automatically.",
    icon: Activity,
  },
];

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export const STATS: Stat[] = [
  {
    value: "47%",
    label: "Average DSO Reduction",
    detail: "Days Sales Outstanding cut nearly in half within the first 90 days of deployment.",
  },
  {
    value: "98%",
    label: "First-Time Closeout Approval",
    detail: "Closeout packages approved on first submission. Zero return trips for missing photos.",
  },
  {
    value: "+22%",
    label: "Gross Margin Expansion",
    detail: "Average gross margin lift driven by automated labor, material, and equipment cost tracking.",
  },
];

export const ROTATING_WORDS = ["FIELD", "TRADES", "SERVICE", "ENTERPRISE", "OPERATIONS"];
