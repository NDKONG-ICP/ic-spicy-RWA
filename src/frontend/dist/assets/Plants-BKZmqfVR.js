import { r as reactExports, u as usePlants, j as jsxRuntimeExports, m as motion, F as Flame, P as PlantStage, B as Badge, a as Button, L as Link } from "./index-BzyHOfJH.js";
import { C as Card, a as CardHeader, b as CardContent, c as CardFooter } from "./card-CRAqL66D.js";
import { S as Skeleton } from "./skeleton-4nFxEZGN.js";
import { S as StageBadge } from "./StageBadge-lPfDfoJI.js";
import { L as Leaf } from "./leaf-Cxv2rTxz.js";
const STAGE_TABS = [
  { label: "All Plants", value: "all", emoji: "🌶️" },
  { label: "Germinated Seeds", value: PlantStage.Seed, emoji: "🌱" },
  { label: "Seedlings", value: PlantStage.Seedling, emoji: "🌿" },
  { label: "Mature Plants", value: PlantStage.Mature, emoji: "🔥" }
];
function formatDate(ts) {
  return new Date(Number(ts / 1000000n)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function truncateNftId(id) {
  if (id.length <= 14) return id;
  return `${id.slice(0, 6)}…${id.slice(-6)}`;
}
function PlantCard({ plant, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, delay: index * 0.04 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          "data-ocid": "plant-card",
          className: "group relative overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold leading-tight text-foreground min-w-0 truncate", children: plant.variety }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { stage: plant.stage, className: "shrink-0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-mono mt-0.5", children: [
                "Tray #",
                plant.tray_id.toString(),
                " · Cell",
                " ",
                plant.cell_position.toString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-3 space-y-2 flex-1", children: [
              plant.genetics && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground line-clamp-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/60 font-medium", children: "Genetics: " }),
                plant.genetics
              ] }),
              plant.germination_date != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Germinated:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: formatDate(plant.germination_date) })
              ] }),
              plant.nft_id != null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs font-mono px-1.5 py-0 border-primary/30 text-primary/80",
                    children: [
                      "NFT: ",
                      truncateNftId(plant.nft_id)
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs px-1.5 py-0 border-border text-muted-foreground",
                    children: plant.nft_standard
                  }
                )
              ] }),
              plant.sold && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-muted text-muted-foreground border border-border text-xs", children: "Sold" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "pt-0 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                size: "sm",
                className: "w-full border-border hover:border-primary hover:text-primary transition-colors",
                "data-ocid": "plant-view-details",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/plants/$plantId",
                    params: { plantId: plant.id.toString() },
                    children: "View Details"
                  }
                )
              }
            ) })
          ]
        }
      )
    }
  );
}
function PlantCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-32" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-24 mt-1" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pb-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-32" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "pt-0 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full" }) })
  ] });
}
function PlantsPage() {
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const { data: plants, isLoading } = usePlants();
  const stageCounts = reactExports.useMemo(() => {
    if (!plants) return {};
    const counts = { all: plants.length };
    for (const p of plants) {
      counts[p.stage] = (counts[p.stage] ?? 0) + 1;
    }
    return counts;
  }, [plants]);
  const filtered = reactExports.useMemo(() => {
    if (!plants) return [];
    if (activeFilter === "all") return plants;
    return plants.filter((p) => p.stage === activeFilter);
  }, [plants, activeFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-7 w-7 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground", children: "Our Chili Plants" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl", children: "Browse our living inventory of rare and ultra-hot chilies — each plant is individually tracked with NFT provenance." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card/50 border-b border-border sticky top-0 z-10 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-1 overflow-x-auto py-3 scrollbar-none",
        "data-ocid": "stage-filter-tabs",
        children: STAGE_TABS.map(({ label, value, emoji }) => {
          const count = stageCounts[value] ?? 0;
          const isActive = activeFilter === value;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveFilter(value),
              "data-ocid": `stage-tab-${value}`,
              className: [
                "flex items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 shrink-0",
                isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: [
                      "ml-1 rounded-full px-1.5 py-0.5 text-xs font-bold tabular-nums",
                      isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                    ].join(" "),
                    children: count
                  }
                )
              ]
            },
            value
          );
        })
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: Array.from({ length: 8 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PlantCardSkeleton, {}, `skeleton-${i}`)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "flex flex-col items-center justify-center py-24 text-center",
        "data-ocid": "plants-empty-state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-16 w-16 text-muted-foreground/40 mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-2", children: "No plants here yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: activeFilter === "all" ? "No plants have been added to the system yet. Check back soon!" : `No ${activeFilter} stage plants available right now.` })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        "data-ocid": "plant-list",
        children: filtered.map((plant, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PlantCard, { plant, index: i }, plant.id.toString()))
      }
    ) })
  ] });
}
export {
  PlantsPage as default
};
