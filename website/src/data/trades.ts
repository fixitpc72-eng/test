import {
  Wrench,
  Droplet,
  Zap,
  Sun,
  HardHat,
  Radio,
  type LucideIcon,
} from "lucide-react";

export interface Trade {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: LucideIcon;
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
