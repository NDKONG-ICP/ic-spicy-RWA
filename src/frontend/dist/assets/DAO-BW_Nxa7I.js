import { d as createLucideIcon, aa as useQuery, ab as useActor, ac as useQueryClient, ad as useMutation, ae as createActor, o as useAuth, af as useIsAdmin, r as reactExports, j as jsxRuntimeExports, m as motion, a as Button, ag as ProposalType, F as Flame, B as Badge, f as ue } from "./index-BzyHOfJH.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-Cx326vb4.js";
import { I as Input } from "./input-WgY0hUlN.js";
import { L as Label } from "./label-B1Nh5Ul-.js";
import { V as Vote, P as Progress } from "./progress-BFpmTgAh.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BT1J6WYA.js";
import { S as Skeleton } from "./skeleton-4nFxEZGN.js";
import { T as Textarea } from "./textarea-DrepslR5.js";
import { P as Plus } from "./plus-BI4KcPyy.js";
import { C as Crown } from "./crown-DtVyiD3w.js";
import { C as CircleCheck } from "./circle-check-HNHyE_dK.js";
import { L as Lock } from "./lock-CUEIECRs.js";
import { U as Users } from "./users-CcyYH2r_.js";
import { S as Sprout } from "./sprout-DYWkSzYV.js";
import { S as ShoppingBag } from "./shopping-bag-CR1pI8y_.js";
import { C as Clock } from "./clock-Dpayb-ka.js";
import { T as Trash2 } from "./trash-2-BjmAitxc.js";
import "./index-B4IHimjK.js";
import "./index-D4b-hkBZ.js";
import "./index-CZcSmvg2.js";
import "./chevron-up-BvX_XqYD.js";
import "./check-BRbzaMOh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
];
const CirclePlus = createLucideIcon("circle-plus", __iconNode);
function useBackendActor() {
  return useActor(createActor);
}
function useProposals() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["proposals"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listDAOProposals();
    },
    enabled: !!actor && !isFetching
  });
}
function useHasDAOAccess() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["hasDAOAccess"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.hasDAOAccess();
    },
    enabled: !!actor && !isFetching
  });
}
function useDAOStats() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["daoStats"],
    queryFn: async () => {
      if (!actor)
        return {
          totalProposals: BigInt(0),
          activeProposals: BigInt(0),
          totalVotes: BigInt(0)
        };
      return actor.getDAOStats();
    },
    enabled: !!actor && !isFetching
  });
}
function useCreateProposal() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Not connected");
      return actor.createDAOProposal(input);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["proposals"] });
      qc.invalidateQueries({ queryKey: ["daoStats"] });
    }
  });
}
function useVoteOnProposal() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      proposalId,
      optionIndex
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.voteOnProposal(proposalId, optionIndex);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["proposals"] });
      qc.invalidateQueries({ queryKey: ["daoStats"] });
    }
  });
}
const TYPE_CONFIG = {
  [ProposalType.PlantVariety]: {
    label: "🌶️ Plant Variety",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  [ProposalType.Seasoning]: {
    label: "🧂 Seasoning",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  [ProposalType.General]: {
    label: "📋 General",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  }
};
const FILTER_TABS = [
  { key: "all", label: "All" },
  { key: ProposalType.PlantVariety, label: "🌶️ Plant Variety" },
  { key: ProposalType.Seasoning, label: "🧂 Seasoning" },
  { key: ProposalType.General, label: "📋 General" }
];
function getTimeRemaining(endsAt) {
  const ms = Number(endsAt) / 1e6;
  const diff = ms - Date.now();
  if (diff <= 0) return "Ended";
  const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
  const hours = Math.floor(diff % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
  if (days > 0) return `${days}d ${hours}h left`;
  const minutes = Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60));
  return `${hours}h ${minutes}m left`;
}
function getWinningOption(proposal) {
  if (proposal.vote_counts.length === 0) return null;
  let maxIdx = 0;
  for (let i = 1; i < proposal.vote_counts.length; i++) {
    if (proposal.vote_counts[i] > proposal.vote_counts[maxIdx]) maxIdx = i;
  }
  return proposal.vote_counts[maxIdx] > BigInt(0) ? maxIdx : null;
}
function ProposalCard({
  proposal,
  canVote
}) {
  var _a;
  const vote = useVoteOnProposal();
  const { isAuthenticated } = useAuth();
  const totalVotes = proposal.vote_counts.reduce((a, b) => a + b, BigInt(0));
  const isExpired = Date.now() > Number(proposal.ends_at) / 1e6;
  const hasVoted = proposal.caller_vote !== void 0 && proposal.caller_vote !== null;
  const winningIdx = isExpired ? getWinningOption(proposal) : null;
  const typeConfig = TYPE_CONFIG[proposal.proposal_type];
  const timeRemaining = getTimeRemaining(proposal.ends_at);
  const handleVote = async (index) => {
    if (!isAuthenticated) {
      ue.error("Sign in to vote.");
      return;
    }
    if (!canVote) {
      ue.error("You need a plant NFT or membership NFT to vote.");
      return;
    }
    try {
      await vote.mutateAsync({
        proposalId: proposal.id,
        optionIndex: BigInt(index)
      });
      ue.success("Vote cast! 🗳️");
    } catch {
      ue.error("Failed to cast vote. Try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.35 },
      className: "rounded-xl bg-card border border-border p-5 hover:border-primary/30 transition-colors duration-200",
      "data-ocid": "proposal-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base leading-snug", children: proposal.title }),
            proposal.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 line-clamp-2", children: proposal.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1.5 flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs px-2 py-0.5 rounded-md border font-medium ${typeConfig.className}`,
                children: typeConfig.label
              }
            ),
            isExpired ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: "Closed" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-primary/10 text-primary border border-primary/30", children: "Active" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
            proposal.voter_count.toString(),
            " voter",
            proposal.voter_count !== BigInt(1) ? "s" : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
            timeRemaining
          ] }),
          hasVoted && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-primary font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
            "You voted"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: proposal.options.map((opt, i) => {
          const votes = proposal.vote_counts[i] ?? BigInt(0);
          const pct = totalVotes > BigInt(0) ? Number(votes * BigInt(100) / totalVotes) : 0;
          const isMyVote = hasVoted && Number(proposal.caller_vote) === i;
          const isWinner = winningIdx === i;
          const showVoteBtn = !isExpired && !hasVoted && canVote;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `flex items-center gap-1.5 font-medium min-w-0 ${isMyVote ? "text-primary" : isWinner && isExpired ? "text-foreground" : "text-muted-foreground"}`,
                  children: [
                    isWinner && isExpired && /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
                    isMyVote && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: opt })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground tabular-nums flex-shrink-0", children: [
                votes.toString(),
                " (",
                pct,
                "%)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Progress,
                {
                  value: pct,
                  className: `flex-1 h-1.5 ${isMyVote ? "[&>div]:bg-primary" : isWinner && isExpired ? "[&>div]:bg-amber-400" : "[&>div]:bg-muted-foreground/40"}`
                }
              ),
              showVoteBtn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleVote(i),
                  disabled: vote.isPending,
                  className: "text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-200 flex-shrink-0 font-medium disabled:opacity-50",
                  "data-ocid": "vote-btn",
                  children: vote.isPending ? "…" : "Vote"
                }
              ),
              !showVoteBtn && !isExpired && !hasVoted && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground/50 flex-shrink-0 w-[52px]" })
            ] })
          ] }, `${proposal.id}-${i}`);
        }) }),
        isExpired && winningIdx !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Final result:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: proposal.options[winningIdx] }),
            " ",
            "won with ",
            ((_a = proposal.vote_counts[winningIdx]) == null ? void 0 : _a.toString()) ?? "0",
            " votes"
          ] })
        ] })
      ]
    }
  );
}
function CreateProposalModal({
  open,
  onClose
}) {
  const createProposal = useCreateProposal();
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [proposalType, setProposalType] = reactExports.useState(
    ProposalType.General
  );
  const [options, setOptions] = reactExports.useState([
    { id: "opt-0", value: "" },
    { id: "opt-1", value: "" }
  ]);
  const [endsAt, setEndsAt] = reactExports.useState("");
  const addOption = () => setOptions((prev) => [...prev, { id: `opt-${Date.now()}`, value: "" }]);
  const removeOption = (id) => setOptions((prev) => prev.filter((o) => o.id !== id));
  const setOption = (id, val) => setOptions(
    (prev) => prev.map((o) => o.id === id ? { ...o, value: val } : o)
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validOptions = options.map((o) => o.value.trim()).filter(Boolean);
    if (validOptions.length < 2) {
      ue.error("Please add at least 2 options.");
      return;
    }
    if (!endsAt) {
      ue.error("Please set an end date.");
      return;
    }
    const endsAtMs = new Date(endsAt).getTime();
    if (endsAtMs <= Date.now()) {
      ue.error("End date must be in the future.");
      return;
    }
    const input = {
      title: title.trim(),
      description: description.trim(),
      proposal_type: proposalType,
      options: validOptions,
      ends_at: BigInt(endsAtMs) * BigInt(1e6)
    };
    try {
      await createProposal.mutateAsync(input);
      ue.success("Proposal created! 🗳️");
      onClose();
      setTitle("");
      setDescription("");
      setProposalType(ProposalType.General);
      setOptions([
        { id: "opt-0", value: "" },
        { id: "opt-1", value: "" }
      ]);
      setEndsAt("");
    } catch {
      ue.error("Failed to create proposal. Try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "bg-card border-border max-w-lg max-h-[90vh] overflow-y-auto",
      "data-ocid": "create-proposal-modal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-lg text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Vote, { className: "w-5 h-5 text-primary" }),
          "Create Proposal"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "proposal-title",
                className: "text-sm text-foreground font-medium",
                children: [
                  "Title ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "proposal-title",
                value: title,
                onChange: (e) => setTitle(e.target.value),
                placeholder: "What should the community vote on?",
                required: true,
                className: "bg-background border-input text-foreground",
                "data-ocid": "proposal-title-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "proposal-desc",
                className: "text-sm text-foreground font-medium",
                children: "Description"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "proposal-desc",
                value: description,
                onChange: (e) => setDescription(e.target.value),
                placeholder: "Explain the proposal in more detail…",
                rows: 3,
                className: "bg-background border-input text-foreground resize-none",
                "data-ocid": "proposal-desc-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm text-foreground font-medium", children: [
              "Proposal Type ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: proposalType,
                onValueChange: (v) => setProposalType(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "bg-background border-input text-foreground",
                      "data-ocid": "proposal-type-select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-card border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ProposalType.PlantVariety, children: "🌶️ Plant Variety" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ProposalType.Seasoning, children: "🧂 Seasoning" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ProposalType.General, children: "📋 General" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm text-foreground font-medium", children: [
              "Vote Options ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal ml-1", children: "(min. 2)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: options.map((opt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: opt.value,
                  onChange: (e) => setOption(opt.id, e.target.value),
                  placeholder: `Option ${i + 1}`,
                  className: "bg-background border-input text-foreground flex-1",
                  "data-ocid": `proposal-option-${i}`
                }
              ),
              options.length > 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => removeOption(opt.id),
                  className: "p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors",
                  "aria-label": "Remove option",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                }
              )
            ] }, opt.id)) }),
            options.length < 8 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: addOption,
                className: "flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors mt-1",
                "data-ocid": "add-option-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5" }),
                  "Add option"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "proposal-ends",
                className: "text-sm text-foreground font-medium",
                children: [
                  "Voting Ends ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "proposal-ends",
                type: "datetime-local",
                value: endsAt,
                onChange: (e) => setEndsAt(e.target.value),
                required: true,
                className: "bg-background border-input text-foreground",
                "data-ocid": "proposal-ends-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: onClose,
                className: "flex-1 border-border",
                "data-ocid": "cancel-proposal-btn",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: createProposal.isPending || !title.trim(),
                className: "flex-1 bg-primary text-primary-foreground",
                "data-ocid": "submit-proposal-btn",
                children: createProposal.isPending ? "Creating…" : "Create Proposal"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function DAOStatsBar() {
  const { data: stats, isLoading } = useDAOStats();
  const items = [
    {
      label: "Total Proposals",
      value: (stats == null ? void 0 : stats.totalProposals) ?? BigInt(0),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Vote, { className: "w-4 h-4" })
    },
    {
      label: "Active",
      value: (stats == null ? void 0 : stats.activeProposals) ?? BigInt(0),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 text-primary" })
    },
    {
      label: "Total Votes",
      value: (stats == null ? void 0 : stats.totalVotes) ?? BigInt(0),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" })
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.1 },
      className: "grid grid-cols-3 gap-3 mb-6",
      "data-ocid": "dao-stats-bar",
      children: items.map(({ label, value, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-xl bg-card border border-border text-center",
          children: [
            isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-12 mx-auto mb-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-foreground", children: value.toString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5 flex items-center justify-center gap-1", children: [
              icon,
              label
            ] })
          ]
        },
        label
      ))
    }
  );
}
function DAOGateBanner({ onLogin }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-24 text-center",
      "data-ocid": "dao-unauthenticated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-8 h-8 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "DAO Access Required" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6 max-w-sm", children: "Sign in and hold any IC SPICY plant NFT or Membership NFT to participate in community governance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: onLogin,
            className: "bg-primary text-primary-foreground",
            "data-ocid": "dao-login-btn",
            children: "Connect with Internet Identity"
          }
        )
      ]
    }
  );
}
function NoAccessBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mb-6 p-4 rounded-xl bg-card border border-primary/20 flex items-start gap-3",
      "data-ocid": "dao-no-access-banner",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-4 h-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Join the DAO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "You need a plant NFT or membership NFT to vote on proposals. Browse the marketplace to get yours!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "border-primary/30 text-primary hover:bg-primary/10 flex-shrink-0",
            "data-ocid": "dao-marketplace-cta",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5 mr-1.5" }),
              "Shop"
            ]
          }
        ) })
      ]
    }
  );
}
function DAOPage() {
  const { isAuthenticated, login } = useAuth();
  const { data: hasAccess, isLoading: accessLoading } = useHasDAOAccess();
  const { data: proposals, isLoading: proposalsLoading } = useProposals();
  const { data: isAdmin } = useIsAdmin();
  const [filter, setFilter] = reactExports.useState("all");
  const [createOpen, setCreateOpen] = reactExports.useState(false);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DAOGateBanner, { onLogin: login });
  }
  const canVote = Boolean(hasAccess);
  const filtered = (proposals == null ? void 0 : proposals.filter(
    (p) => filter === "all" ? true : p.proposal_type === filter
  )) ?? [];
  const activeProposals = filtered.filter(
    (p) => Date.now() <= Number(p.ends_at) / 1e6
  );
  const closedProposals = filtered.filter(
    (p) => Date.now() > Number(p.ends_at) / 1e6
  );
  const isLoading = proposalsLoading || accessLoading;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "dao-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        className: "mb-6 flex items-start justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground mb-1", children: [
              "🗳️ IC SPICY ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "DAO" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Community governance — vote on new varieties, seasonings, and farm proposals." })
          ] }),
          isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setCreateOpen(true),
              className: "bg-primary text-primary-foreground flex-shrink-0",
              "data-ocid": "create-proposal-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1.5" }),
                "Create Proposal"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DAOStatsBar, {}),
    !canVote && !accessLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(NoAccessBanner, {}),
    canVote && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.15 },
        className: "mb-5 inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30",
        "data-ocid": "dao-member-badge",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5" }),
          "DAO Member — voting enabled"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center gap-2 mb-6 overflow-x-auto pb-1",
        "data-ocid": "dao-filter-tabs",
        children: FILTER_TABS.map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(key),
            className: `text-xs px-3 py-1.5 rounded-full border transition-all duration-200 flex-shrink-0 font-medium ${filter === key ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
            "data-ocid": `filter-tab-${key}`,
            children: label
          },
          key
        ))
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-52 w-full rounded-xl" }, k)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 text-center",
        "data-ocid": "dao-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Vote, { className: "w-14 h-14 text-muted-foreground mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg mb-2", children: "No proposals yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: filter === "all" ? "Governance is just getting started — check back soon!" : "No proposals in this category yet." }),
          filter !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setFilter("all"),
              className: "mt-4 text-xs text-primary hover:underline",
              children: "View all proposals"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      activeProposals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "font-display font-semibold text-foreground text-lg mb-4 flex items-center gap-2",
            "data-ocid": "active-proposals-heading",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Vote, { className: "w-5 h-5 text-primary" }),
              "Active Proposals",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-muted-foreground", children: [
                "(",
                activeProposals.length,
                ")"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "active-proposal-list", children: activeProposals.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.07 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProposalCard, { proposal: p, canVote })
          },
          p.id.toString()
        )) })
      ] }),
      closedProposals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "font-display font-semibold text-foreground text-lg mb-4 flex items-center gap-2",
            "data-ocid": "closed-proposals-heading",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-muted-foreground" }),
              "Closed Proposals",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-muted-foreground", children: [
                "(",
                closedProposals.length,
                ")"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "space-y-4 opacity-80",
            "data-ocid": "closed-proposal-list",
            children: closedProposals.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProposalCard,
              {
                proposal: p,
                canVote: false
              },
              p.id.toString()
            ))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CreateProposalModal,
      {
        open: createOpen,
        onClose: () => setCreateOpen(false)
      }
    )
  ] });
}
export {
  DAOPage as default
};
