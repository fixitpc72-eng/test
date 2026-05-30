export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export const STATS: Stat[] = [
  {
    value: "47%",
    label: "Average DSO Reduction",
    detail:
      "Days Sales Outstanding cut nearly in half within the first 90 days of deployment.",
  },
  {
    value: "98%",
    label: "First-Time Closeout Approval",
    detail:
      "Closeout packages approved on first submission. Zero return trips for missing photos.",
  },
  {
    value: "+22%",
    label: "Gross Margin Expansion",
    detail:
      "Average gross margin lift driven by automated labor, material, and equipment cost tracking.",
  },
];

export const ROTATING_WORDS = ["FIELD", "TRADES", "SERVICE", "ENTERPRISE", "OPERATIONS"];
