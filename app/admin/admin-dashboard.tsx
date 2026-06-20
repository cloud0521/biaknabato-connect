"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  FileText,
  Inbox,
  MessageSquareText,
  Search,
  ShieldCheck,
} from "lucide-react";

type TransactionStatus =
  | "New"
  | "In Review"
  | "For Action"
  | "For Release"
  | "Completed";

type Priority = "High" | "Normal" | "Low";

type Transaction = {
  id: string;
  type: "Service Request" | "Concern Report";
  title: string;
  resident: string;
  contact: string;
  location: string;
  submitted: string;
  priority: Priority;
  status: TransactionStatus;
  owner: string;
  summary: string;
  verification: string[];
  notes: string[];
};

const statusOptions: TransactionStatus[] = [
  "New",
  "In Review",
  "For Action",
  "For Release",
  "Completed",
];

const initialTransactions: Transaction[] = [
  {
    id: "BC-2026-001",
    type: "Service Request",
    title: "Barangay clearance request",
    resident: "Maria Santos",
    contact: "09XX XXX 1122",
    location: "Purok 2",
    submitted: "Today, 9:12 AM",
    priority: "Normal",
    status: "New",
    owner: "Front Desk",
    summary:
      "Resident needs barangay clearance for employment. Valid ID and proof of residence still need verification.",
    verification: [
      "Valid ID uploaded: maria-santos-id.jpg",
      "Compare ID name with request full name",
      "Verify address/purok before printing",
    ],
    notes: ["Check requirements before encoding for release."],
  },
  {
    id: "BC-2026-002",
    type: "Concern Report",
    title: "Drainage concern near public plaza",
    resident: "Juan Dela Cruz",
    contact: "09XX XXX 3344",
    location: "Behind Brgy. Biaknabato Public Plaza",
    submitted: "Today, 10:24 AM",
    priority: "High",
    status: "For Action",
    owner: "Infrastructure",
    summary:
      "Reported blocked drainage after rainfall. Needs inspection and routing to maintenance team.",
    verification: [
      "No ID required for concern report",
      "Confirm location and urgency",
    ],
    notes: ["Prioritize site check because location is near public foot traffic."],
  },
  {
    id: "BC-2026-003",
    type: "Service Request",
    title: "Certificate of residency",
    resident: "Ana Villanueva",
    contact: "09XX XXX 7788",
    location: "Purok 5",
    submitted: "Yesterday, 3:40 PM",
    priority: "Low",
    status: "For Release",
    owner: "Secretary",
    summary:
      "Certificate drafted and ready for final signature/release after resident confirmation.",
    verification: [
      "Valid ID uploaded: ana-villanueva-id.pdf",
      "Verify length/address before printing",
    ],
    notes: ["Confirm spelling of full name before release."],
  },
  {
    id: "BC-2026-004",
    type: "Concern Report",
    title: "Streetlight not working",
    resident: "Pedro Ramos",
    contact: "09XX XXX 8899",
    location: "Purok 1 road section",
    submitted: "Jun 16, 4:18 PM",
    priority: "Normal",
    status: "In Review",
    owner: "Public Safety",
    summary:
      "Resident reports unlit road section. Needs confirmation of exact post/location before referral.",
    verification: [
      "No ID required for concern report",
      "Ask for landmark/photo if available",
    ],
    notes: ["Ask reporter for landmark or photo if available."],
  },
];

function priorityClass(priority: Priority) {
  if (priority === "High") return "bg-red-400 text-slate-950";
  if (priority === "Low") return "bg-slate-700 text-slate-200";
  return "bg-amber-300 text-slate-950";
}

function statusClass(status: TransactionStatus) {
  if (status === "Completed") return "bg-emerald-400 text-slate-950";
  if (status === "For Action") return "bg-red-400 text-slate-950";
  if (status === "For Release") return "bg-sky-300 text-slate-950";
  if (status === "In Review") return "bg-violet-300 text-slate-950";
  return "bg-amber-300 text-slate-950";
}

export function AdminDashboard() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [activeId, setActiveId] = useState(initialTransactions[0].id);
  const [statusFilter, setStatusFilter] = useState<"All" | TransactionStatus>(
    "All",
  );
  const [typeFilter, setTypeFilter] = useState<"All" | Transaction["type"]>(
    "All",
  );
  const [query, setQuery] = useState("");
  const [note, setNote] = useState("");

  const filteredTransactions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return transactions.filter((transaction) => {
      const matchesStatus =
        statusFilter === "All" || transaction.status === statusFilter;
      const matchesType = typeFilter === "All" || transaction.type === typeFilter;
      const matchesQuery =
        !normalizedQuery ||
        [
          transaction.id,
          transaction.title,
          transaction.resident,
          transaction.location,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesStatus && matchesType && matchesQuery;
    });
  }, [query, statusFilter, transactions, typeFilter]);

  const activeTransaction =
    transactions.find((transaction) => transaction.id === activeId) ??
    filteredTransactions[0] ??
    transactions[0];

  const counts = {
    all: transactions.length,
    new: transactions.filter((transaction) => transaction.status === "New")
      .length,
    action: transactions.filter(
      (transaction) => transaction.status === "For Action",
    ).length,
    completed: transactions.filter(
      (transaction) => transaction.status === "Completed",
    ).length,
  };

  function updateStatus(id: string, status: TransactionStatus) {
    setTransactions((current) =>
      current.map((transaction) =>
        transaction.id === id ? { ...transaction, status } : transaction,
      ),
    );
  }

  function addNote() {
    const trimmed = note.trim();
    if (!trimmed) return;

    setTransactions((current) =>
      current.map((transaction) =>
        transaction.id === activeTransaction.id
          ? { ...transaction, notes: [`Staff note: ${trimmed}`, ...transaction.notes] }
          : transaction,
      ),
    );
    setNote("");
  }

  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard icon={Inbox} label="Total transactions" value={counts.all} />
          <MetricCard icon={Clock3} label="New queue" value={counts.new} />
          <MetricCard
            icon={AlertTriangle}
            label="For action"
            value={counts.action}
          />
          <MetricCard
            icon={CheckCircle2}
            label="Completed"
            value={counts.completed}
          />
        </div>

        <div className="mt-8 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
          Prototype note: changes here are local browser state only. The next
          step is adding authenticated staff accounts and database persistence.
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-white/10 bg-slate-950">
            <div className="border-b border-white/10 p-4">
              <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
                <label className="relative block">
                  <span className="sr-only">Search transactions</span>
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    size={17}
                    aria-hidden="true"
                  />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="h-11 w-full rounded-md border border-white/10 bg-slate-900 pl-10 pr-3 text-sm text-white outline-none transition focus:border-amber-300"
                    placeholder="Search ID, resident, location"
                  />
                </label>
                <select
                  value={typeFilter}
                  onChange={(event) =>
                    setTypeFilter(event.target.value as "All" | Transaction["type"])
                  }
                  className="h-11 rounded-md border border-white/10 bg-slate-900 px-3 text-sm text-white outline-none transition focus:border-amber-300"
                >
                  <option>All</option>
                  <option>Service Request</option>
                  <option>Concern Report</option>
                </select>
                <select
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(event.target.value as "All" | TransactionStatus)
                  }
                  className="h-11 rounded-md border border-white/10 bg-slate-900 px-3 text-sm text-white outline-none transition focus:border-amber-300"
                >
                  <option>All</option>
                  {statusOptions.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {filteredTransactions.map((transaction) => (
                <button
                  key={transaction.id}
                  type="button"
                  onClick={() => setActiveId(transaction.id)}
                  className={[
                    "grid w-full gap-3 p-4 text-left transition hover:bg-white/5",
                    activeTransaction.id === transaction.id ? "bg-white/10" : "",
                  ].join(" ")}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-amber-300">
                      {transaction.id}
                    </span>
                    <span
                      className={[
                        "rounded-full px-2.5 py-1 text-xs font-bold",
                        statusClass(transaction.status),
                      ].join(" ")}
                    >
                      {transaction.status}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{transaction.title}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {transaction.resident} / {transaction.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-200">
                      {transaction.type}
                    </span>
                    <span
                      className={[
                        "rounded-full px-2.5 py-1 text-xs font-bold",
                        priorityClass(transaction.priority),
                      ].join(" ")}
                    >
                      {transaction.priority}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-mono text-sm font-semibold text-amber-300">
                  {activeTransaction.id}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  {activeTransaction.title}
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Submitted {activeTransaction.submitted}
                </p>
              </div>
              <select
                value={activeTransaction.status}
                onChange={(event) =>
                  updateStatus(
                    activeTransaction.id,
                    event.target.value as TransactionStatus,
                  )
                }
                className="h-11 rounded-md border border-white/10 bg-slate-900 px-3 text-sm font-semibold text-white outline-none transition focus:border-amber-300"
              >
                {statusOptions.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <DetailCard icon={FileText} label="Type" value={activeTransaction.type} />
              <DetailCard
                icon={ShieldCheck}
                label="Assigned to"
                value={activeTransaction.owner}
              />
              <DetailCard
                icon={MessageSquareText}
                label="Resident"
                value={activeTransaction.resident}
              />
              <DetailCard
                icon={Clock3}
                label="Contact"
                value={activeTransaction.contact}
              />
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-slate-900 p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Summary
              </p>
              <p className="mt-3 leading-7 text-slate-200">
                {activeTransaction.summary}
              </p>
              <p className="mt-4 text-sm text-slate-400">
                Location: {activeTransaction.location}
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-amber-300/30 bg-amber-300/10 p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-200">
                Verification before print
              </p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-amber-50">
                {activeTransaction.verification.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <label className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Staff note
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  className="h-11 rounded-md border border-white/10 bg-slate-900 px-3 text-sm text-white outline-none transition focus:border-amber-300"
                  placeholder="Add routing note or action taken"
                />
                <button
                  type="button"
                  onClick={addNote}
                  className="rounded-md bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  Add note
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {activeTransaction.notes.map((item, index) => (
                <p
                  key={`${activeTransaction.id}-${index}-${item}`}
                  className="rounded-md bg-slate-900 px-4 py-3 text-sm leading-6 text-slate-300"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950 p-5">
      <Icon size={22} className="text-amber-300" aria-hidden="true" />
      <p className="mt-4 text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function DetailCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-900 p-4">
      <Icon size={18} className="text-amber-300" aria-hidden="true" />
      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  );
}
