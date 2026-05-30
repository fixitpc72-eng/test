import { useMemo, useState } from "react";
import {
  ChevronRight,
  Wifi,
  BatteryFull,
  Camera,
  PenLine,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowLeft,
  Workflow,
} from "lucide-react";
import { ASSIGNMENTS, type Assignment } from "@/data/assignments";

type Screen = "queue" | "assignment" | "submitted";

export default function ClearViewApp() {
  const [screen, setScreen] = useState<Screen>("queue");
  const [activeId, setActiveId] = useState<string>(ASSIGNMENTS[0].id);
  const active = useMemo(
    () => ASSIGNMENTS.find((a) => a.id === activeId) ?? ASSIGNMENTS[0],
    [activeId]
  );

  return (
    <div className="dark app-frame relative flex flex-col bg-[#020204] text-[#E4E4E7] font-sans">
      <StatusBar />
      <AppHeader />

      <main className="flex-1 overflow-y-auto pb-24">
        {screen === "queue" && (
          <QueueScreen
            onSelect={(id) => {
              setActiveId(id);
              setScreen("assignment");
            }}
          />
        )}
        {screen === "assignment" && (
          <AssignmentScreen
            assignment={active}
            onBack={() => setScreen("queue")}
            onSubmit={() => setScreen("submitted")}
          />
        )}
        {screen === "submitted" && (
          <SubmittedScreen
            assignment={active}
            onDone={() => {
              setScreen("queue");
            }}
          />
        )}
      </main>

      <BottomBar />
    </div>
  );
}

/* ------------------------ shared chrome ------------------------ */

function StatusBar() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-mono text-[#E4E4E7]/80">
      <span>{hh}:{mm}</span>
      <span className="font-bold tracking-[0.18em]">NET: SECURE</span>
      <span className="flex items-center gap-1.5">
        <Wifi className="size-3.5" strokeWidth={2.25} />
        <BatteryFull className="size-3.5" strokeWidth={2.25} />
      </span>
    </div>
  );
}

function AppHeader() {
  return (
    <header className="border-b border-[#27272A] px-5 py-3">
      <div className="flex items-center gap-2">
        <span className="size-2 bg-[#FF6B00]" />
        <span className="font-display text-base font-extrabold tracking-[0.32em]">
          CLEARVIEW
        </span>
        <span className="ml-auto rounded-[2px] border border-[#27272A] px-2 py-0.5 font-mono text-[9px] tracking-[0.18em] text-[#A1A1AA]">
          PACK-AWARE FIELD TELEMETRY
        </span>
      </div>
    </header>
  );
}

function BottomBar() {
  const tabs = [
    { label: "QUEUE", icon: Workflow },
    { label: "CAPTURE", icon: Camera },
    { label: "SIGN-OFF", icon: PenLine },
    { label: "SUBMITTED", icon: CheckCircle2 },
  ];
  return (
    <nav className="absolute inset-x-0 bottom-0 grid grid-cols-4 border-t border-[#27272A] bg-[#09090B]/95 backdrop-blur">
      {tabs.map((t, i) => (
        <div
          key={t.label}
          className={`flex flex-col items-center gap-1 py-3 ${i === 0 ? "text-[#FF6B00]" : "text-[#A1A1AA]"}`}
        >
          <t.icon className="size-4" strokeWidth={2.25} />
          <span className="font-mono text-[9px] tracking-[0.18em]">{t.label}</span>
        </div>
      ))}
    </nav>
  );
}

/* ------------------------ screens ------------------------ */

function QueueScreen({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section className="px-5 py-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-lg font-extrabold tracking-[0.18em]">
          TENANT QUEUE ({ASSIGNMENTS.length})
        </h1>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[#A1A1AA]">
          CHOOSE TENANT PROFILE
        </span>
      </div>

      <ul className="mt-4 space-y-3">
        {ASSIGNMENTS.map((a) => (
          <li key={a.id}>
            <button
              type="button"
              onClick={() => onSelect(a.id)}
              className="group block w-full text-left border border-[#27272A] bg-[#09090B] hover:border-[#FF6B00]/60 rounded-[2px] p-4 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[#00D8F6]">
                  <span>{a.workOrder}</span>
                  <span className="text-[#A1A1AA]">/</span>
                  <span className="text-[#A1A1AA]">{a.pack.toUpperCase()}</span>
                </div>
                <StatusPill status={a.status} />
              </div>
              <h3 className="mt-2 font-display text-sm font-bold tracking-[0.12em]">
                {a.customer.toUpperCase()}
              </h3>
              <p className="mt-1 text-[12px] text-[#A1A1AA]">{a.location}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#A1A1AA]">
                  TECH: {a.technician}
                </span>
                <ChevronRight
                  className="size-4 text-[#A1A1AA] group-hover:text-[#FF6B00]"
                  strokeWidth={2.25}
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AssignmentScreen({
  assignment,
  onBack,
  onSubmit,
}: {
  assignment: Assignment;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const required = assignment.checklist.filter((c) => c.status === "REQUIRED").length;
  const captured = assignment.checklist.filter((c) => c.status === "CAPTURED").length;
  const total = assignment.checklist.length;

  return (
    <section className="px-5 py-4">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[#A1A1AA] hover:text-[#E4E4E7]"
      >
        <ArrowLeft className="size-3.5" strokeWidth={2.25} />
        QUEUE
      </button>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[#00D8F6]">
          ACTIVE ASSIGNMENT
        </span>
        <StatusPill status={assignment.status} />
      </div>

      <h1 className="mt-2 font-display text-xl font-extrabold uppercase tracking-[0.08em]">
        {assignment.customer}
      </h1>
      <p className="mt-1 text-[12px] text-[#A1A1AA]">{assignment.location}</p>

      <KeyValueGrid
        items={[
          ["WORK ORDER", assignment.workOrder],
          ["EQUIPMENT", assignment.equipment],
          ["TECHNICIAN", assignment.technician],
          ["CONTACT", assignment.contact],
          ...(assignment.certNo ? ([["CERT / PERMIT", assignment.certNo]] as [string, string][]) : []),
          ...(assignment.notes ? ([["NOTES", assignment.notes]] as [string, string][]) : []),
        ]}
      />

      <div className="mt-6 flex items-center justify-between">
        <h2 className="font-display text-sm font-bold tracking-[0.14em]">
          CLOSEOUT CAPTURE
        </h2>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[#A1A1AA]">
          {captured}/{total} CAPTURED
        </span>
      </div>

      <ul className="mt-3 space-y-2">
        {assignment.checklist.map((c) => (
          <li
            key={c.id}
            className="flex items-center justify-between gap-3 border border-[#27272A] bg-[#09090B] px-4 py-3 rounded-[2px]"
          >
            <div className="flex items-center gap-3">
              {c.status === "CAPTURED" ? (
                <CheckCircle2 className="size-4 text-emerald-400" strokeWidth={2.25} />
              ) : c.status === "REQUIRED" ? (
                <AlertTriangle className="size-4 text-[#FF6B00]" strokeWidth={2.25} />
              ) : (
                <Clock className="size-4 text-[#A1A1AA]" strokeWidth={2.25} />
              )}
              <span className="text-[13px]">{c.label}</span>
            </div>
            <span
              className={`font-mono text-[9px] tracking-[0.18em] ${
                c.status === "CAPTURED"
                  ? "text-emerald-400"
                  : c.status === "REQUIRED"
                  ? "text-[#FF6B00]"
                  : "text-[#A1A1AA]"
              }`}
            >
              {c.status}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <button className="inline-flex items-center justify-center gap-2 border border-[#27272A] bg-[#09090B] py-3 rounded-[2px] font-mono text-[11px] font-bold tracking-[0.18em] hover:border-[#00D8F6]">
          <Camera className="size-4" strokeWidth={2.25} />
          TRIGGER CAMERA
        </button>
        <button className="inline-flex items-center justify-center gap-2 border border-[#27272A] bg-[#09090B] py-3 rounded-[2px] font-mono text-[11px] font-bold tracking-[0.18em] hover:border-[#00D8F6]">
          <PenLine className="size-4" strokeWidth={2.25} />
          LOCK SIGN-OFF
        </button>
      </div>

      <button
        onClick={onSubmit}
        disabled={required > 0}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 bg-[#FF6B00] disabled:bg-[#FF6B00]/40 text-black py-4 rounded-[2px] font-mono text-xs font-bold uppercase tracking-[0.22em] transition-colors hover:brightness-110"
      >
        {required > 0
          ? `${required} REQUIRED CAPTURES REMAIN`
          : "SUBMIT COMPLIANT CLOSEOUT"}
      </button>

      {required === 0 && (
        <p className="mt-2 text-center font-mono text-[10px] tracking-[0.18em] text-[#A1A1AA]">
          GENERATING COMPLIANT ZIP…
        </p>
      )}
    </section>
  );
}

function SubmittedScreen({
  assignment,
  onDone,
}: {
  assignment: Assignment;
  onDone: () => void;
}) {
  return (
    <section className="px-5 py-12 text-center">
      <div className="mx-auto grid size-16 place-items-center rounded-full border border-emerald-400/40 bg-emerald-400/10">
        <CheckCircle2 className="size-8 text-emerald-400" strokeWidth={2.25} />
      </div>
      <h1 className="mt-6 font-display text-lg font-extrabold tracking-[0.18em]">
        DIGITAL SIGN-OFF SECURED
      </h1>
      <p className="mt-3 font-mono text-[10px] tracking-[0.18em] text-[#A1A1AA]">
        {assignment.workOrder} &nbsp;//&nbsp; TIMESTAMP: {new Date().toISOString().slice(0, 19).replace("T", " ")}
      </p>
      <p className="mx-auto mt-4 max-w-xs text-[13px] leading-relaxed text-[#A1A1AA]">
        Compliant closeout package has been delivered to the operations ledger. Tech 1047 may
        proceed to the next assignment.
      </p>
      <button
        onClick={onDone}
        className="mt-8 inline-flex items-center justify-center gap-2 border border-[#27272A] bg-[#09090B] px-5 py-3 rounded-[2px] font-mono text-[11px] font-bold tracking-[0.18em] hover:border-[#00D8F6]"
      >
        RETURN TO QUEUE
      </button>
    </section>
  );
}

/* ------------------------ small bits ------------------------ */

function StatusPill({ status }: { status: Assignment["status"] }) {
  const map = {
    ACTIVE: { color: "text-[#FF6B00]", border: "border-[#FF6B00]/40", bg: "bg-[#FF6B00]/10" },
    ASSIGNED: { color: "text-[#00D8F6]", border: "border-[#00D8F6]/40", bg: "bg-[#00D8F6]/10" },
    CLOSEOUT: { color: "text-emerald-400", border: "border-emerald-400/40", bg: "bg-emerald-400/10" },
    SUBMITTED: { color: "text-emerald-400", border: "border-emerald-400/40", bg: "bg-emerald-400/10" },
  } as const;
  const s = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 border ${s.border} ${s.bg} ${s.color} px-2 py-0.5 rounded-[2px] font-mono text-[9px] tracking-[0.18em]`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function KeyValueGrid({ items }: { items: [string, string][] }) {
  return (
    <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden border border-[#27272A] bg-[#27272A] rounded-[2px]">
      {items.map(([k, v]) => (
        <div key={k} className="bg-[#09090B] p-3">
          <dt className="font-mono text-[9px] tracking-[0.18em] text-[#A1A1AA]">{k}</dt>
          <dd className="mt-1 font-mono text-[11px] text-[#E4E4E7]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
