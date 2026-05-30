/**
 * Active assignments shown in the ClearView mobile app.
 * Reconstructed from the original ClearView Mobile bundle strings.
 */
export interface ChecklistItem {
  id: string;
  label: string;
  status: "REQUIRED" | "CAPTURED" | "PENDING";
}

export interface Assignment {
  id: string;
  pack: string;
  trade: "HVAC" | "PLUMBING" | "ELECTRICAL" | "SOLAR" | "TELECOM";
  workOrder: string;
  customer: string;
  location: string;
  status: "ASSIGNED" | "ACTIVE" | "CLOSEOUT" | "SUBMITTED";
  technician: string;
  contact: string;
  certNo?: string;
  equipment: string;
  notes?: string;
  checklist: ChecklistItem[];
}

export const ASSIGNMENTS: Assignment[] = [
  {
    id: "wo-001",
    pack: "HVAC Operations",
    trade: "HVAC",
    workOrder: "#HVAC-44211",
    customer: "Texas Air Mechanical",
    location: "Roof Level 4, Mechanical Room",
    status: "ACTIVE",
    technician: "David Miller (Ops)",
    contact: "Mike Peters (Facilities)",
    certNo: "EPA-608: #TX-994821A",
    equipment: "Roof Unit: Compressor B",
    notes: "R-410A (12.4 lbs)",
    checklist: [
      { id: "1", label: "Compressor Amp Draw Photo", status: "CAPTURED" },
      { id: "2", label: "Static Pressure Reading Photo", status: "CAPTURED" },
      { id: "3", label: "Refrigerant Leak & Charge", status: "REQUIRED" },
      { id: "4", label: "Refrigerant Weight Log", status: "REQUIRED" },
      { id: "5", label: "Refrigerant Recovery Log", status: "PENDING" },
    ],
  },
  {
    id: "wo-002",
    pack: "Commercial Plumbing",
    trade: "PLUMBING",
    workOrder: "#PLU-88119",
    customer: "Miller Commercial Plumbing",
    location: "Basement Level 1, Main Riser",
    status: "ASSIGNED",
    technician: "Sarah Connor",
    contact: "David (Office Manager)",
    certNo: "Cert No: #BF-PLU-8822",
    equipment: "Fixture Main Line",
    notes: "PSI Reading: 68 Static",
    checklist: [
      { id: "1", label: "Backflow Prevention Cert", status: "REQUIRED" },
      { id: "2", label: "Backflow Assembly Recert", status: "REQUIRED" },
      { id: "3", label: "Main Shut-off Location Tag", status: "PENDING" },
    ],
  },
  {
    id: "wo-003",
    pack: "Industrial Electrical",
    trade: "ELECTRICAL",
    workOrder: "#ELE-44819",
    customer: "Gridline Electrical Solutions",
    location: "First Floor, Electrical Closet 2",
    status: "ASSIGNED",
    technician: "Bryon Vance (Lead Engineer)",
    contact: "Markus Vance (GC)",
    certNo: "Permit: #AHJ-ELE-44819",
    equipment: "Distribution Panel: EDP-A",
    notes: "A: 120.4V, B: 120.1V, C: 119.8V",
    checklist: [
      { id: "1", label: "Phase Balance Voltage Log", status: "REQUIRED" },
      { id: "2", label: "Panel Circuit Schedule Photo", status: "REQUIRED" },
      { id: "3", label: "AC Disconnect Lockout Tagout Photo", status: "REQUIRED" },
      { id: "4", label: "Ground Resistance Test Log", status: "PENDING" },
      { id: "5", label: "Megger: 600V String Log", status: "PENDING" },
    ],
  },
  {
    id: "wo-004",
    pack: "Solar Installation",
    trade: "SOLAR",
    workOrder: "#SOL-99228",
    customer: "Bryon Solar Grid",
    location: "Solar Farm Array: Alpha-1",
    status: "ASSIGNED",
    technician: "Bryon Vance (Project Manager)",
    contact: "Mike Peters (Facilities)",
    certNo: "AHJ Interconnect: #SOL-99228",
    equipment: "Inverter Pad 3, String 12",
    notes: "Inverter Replacement",
    checklist: [
      { id: "1", label: "Array Micro-inverter Photo Map", status: "REQUIRED" },
      { id: "2", label: "String Voltage Megger Log", status: "REQUIRED" },
      { id: "3", label: "AHJ Interconnection Cert", status: "REQUIRED" },
      { id: "4", label: "Grounding Inspection Sign-off", status: "PENDING" },
    ],
  },
  {
    id: "wo-005",
    pack: "Telecommunications",
    trade: "TELECOM",
    workOrder: "#TEL-DELTA4B",
    customer: "Cell Site: Delta-4B",
    location: "Terminal Station 5, Dallas, TX",
    status: "ASSIGNED",
    technician: "Bryon Vance (Lead Engineer)",
    contact: "Markus Vance (GC)",
    certNo: "Site ID / USID",
    equipment: "Band 66 / 700BC",
    notes: "Sweep both sectors, log PIM readings",
    checklist: [
      { id: "1", label: "GPS Tagged Antenna Photo", status: "REQUIRED" },
      { id: "2", label: "Sweep Test PDF Log", status: "REQUIRED" },
      { id: "3", label: "Single Mode Feed 4", status: "PENDING" },
    ],
  },
];
