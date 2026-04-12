import { d as createLucideIcon, a3 as useParams, a8 as usePlant, a9 as usePlantTimeline, j as jsxRuntimeExports, a as Button, L as Link, F as Flame, m as motion, B as Badge, U as NFTStandard, r as reactExports, S as SOCIAL_LINKS, P as PlantStage, f as ue } from "./index-LPJkeeMn.js";
import { C as Card, a as CardHeader, d as CardTitle, b as CardContent } from "./card-CEaSd9n-.js";
import { S as Separator } from "./separator-Di6Ncu5b.js";
import { S as Skeleton } from "./skeleton-eXdTQJWV.js";
import { S as StageBadge } from "./StageBadge-BZt3gP_O.js";
import { L as Lock } from "./lock-C6oViyuZ.js";
import { S as Share2 } from "./share-2-BwcSDcjG.js";
import { E as ExternalLink } from "./external-link-DyW81ppu.js";
import { C as Check } from "./check-CmtDsofZ.js";
import { C as Copy } from "./copy-CTPIa1Ik.js";
import { C as ChevronRight } from "./chevron-right-eFviqUvo.js";
import { F as FlaskConical } from "./flask-conical-QDWS_T5N.js";
import "./index-3nV1auV4.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
function fmtDate(ts) {
  if (ts == null) return "—";
  return new Date(Number(ts / 1000000n)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function fmtShortDate(ts) {
  return new Date(Number(ts / 1000000n)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function truncate(s, n = 20) {
  return s.length > n ? `${s.slice(0, n)}…` : s;
}
function InfoRow({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 py-2.5 border-b border-border/50 last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground min-w-[120px] shrink-0", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground text-right break-all", children: value })
  ] });
}
function PhotoGallery({ photos }) {
  if (photos.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-base font-bold flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "📷" }),
      " Photos"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4", children: photos.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "aspect-square rounded-md overflow-hidden bg-muted border border-border",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `/api/object-storage/${key}`,
            alt: "Chili plant captured at growth stage",
            className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105",
            loading: "lazy"
          }
        )
      },
      key
    )) }) })
  ] });
}
function TimelineView({ timeline }) {
  const { plant, stage_history } = timeline;
  const events = [
    {
      ts: plant.planting_date,
      label: "🌱 Planted",
      note: plant.genetics ? `Genetics: ${plant.genetics}` : void 0,
      dotClass: "border-amber-600 bg-amber-950/50"
    }
  ];
  if (plant.germination_date != null) {
    events.push({
      ts: plant.germination_date,
      label: "🌿 Germinated",
      dotClass: "border-emerald-600 bg-emerald-950/50"
    });
  }
  const stageLabelMap = {
    [PlantStage.Seed]: "🌱 Seed Stage",
    [PlantStage.Seedling]: "🪴 Seedling Stage",
    [PlantStage.Mature]: "🌶️ Mature Stage"
  };
  for (const sh of stage_history) {
    events.push({
      ts: sh.timestamp,
      label: stageLabelMap[sh.stage] ?? `Stage: ${sh.stage}`,
      note: sh.notes || void 0,
      dotClass: "border-primary/60 bg-primary/20"
    });
  }
  if (plant.transplant_date != null) {
    events.push({
      ts: plant.transplant_date,
      label: "🪴 Transplanted",
      dotClass: "border-emerald-700/60 bg-emerald-950/30"
    });
  }
  if (plant.sold) {
    events.push({
      ts: plant.planting_date,
      label: "🏷️ Sold — Plant Locked",
      dotClass: "border-muted-foreground/40 bg-muted/30"
    });
  }
  events.sort((a, b) => a.ts < b.ts ? -1 : a.ts > b.ts ? 1 : 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-base font-bold flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-primary" }),
      " Growth Timeline"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "ol",
      {
        className: "relative border-l border-border ml-3 space-y-6",
        "data-ocid": "plant-timeline",
        children: events.map((ev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.li,
          {
            initial: { opacity: 0, x: -10 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.06 },
            className: "ml-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border-2 ${ev.dotClass}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold text-foreground leading-tight", children: ev.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "text-xs text-muted-foreground font-mono", children: fmtShortDate(ev.ts) })
              ] }),
              ev.note && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: ev.note })
            ]
          },
          `${ev.ts.toString()}-${i}`
        ))
      }
    ) })
  ] });
}
function FeedingTable({ feedings }) {
  const sorted = [...feedings].sort((a, b) => a.date < b.date ? -1 : 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-base font-bold flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-4 w-4 text-primary" }),
      " Feeding History",
      feedings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs ml-1", children: feedings.length })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-4 text-center", children: "No feeding records yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-ocid": "feeding-table", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 pr-4 font-medium text-muted-foreground whitespace-nowrap", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 pr-4 font-medium text-muted-foreground", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 pr-4 font-medium text-muted-foreground", children: "Nutrient" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 pr-4 font-medium text-muted-foreground text-right", children: "Dosage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 font-medium text-muted-foreground", children: "Notes" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sorted.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-border/40 last:border-0 hover:bg-muted/20 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 font-mono text-xs text-muted-foreground whitespace-nowrap", children: fmtShortDate(f.date) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 font-medium text-foreground", children: f.product_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-muted-foreground", children: f.nutrient_type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-right font-mono text-foreground", children: f.dosage_amount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground text-xs", children: f.notes ?? "—" })
          ]
        },
        f.id.toString()
      )) })
    ] }) }) })
  ] });
}
function ShareButtons({ plantId }) {
  const [copied, setCopied] = reactExports.useState(false);
  const url = `${window.location.origin}/plants/${plantId}`;
  const text = "Check out this IC SPICY chili plant! 🌶️";
  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      ue.success("Link copied!");
      setTimeout(() => setCopied(false), 2e3);
    });
  }
  const shares = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    },
    {
      label: "Instagram",
      href: SOCIAL_LINKS.instagram
    },
    {
      label: "TikTok",
      href: SOCIAL_LINKS.tiktok
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-base font-bold flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 text-primary" }),
      " Share This Plant"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: shares.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: s.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:bg-muted hover:text-foreground",
          "data-ocid": `share-${s.label.toLowerCase().replace(/[\s/]/g, "-")}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
            s.label
          ]
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: copyLink,
          className: "gap-2 border-border hover:border-primary hover:text-primary",
          "data-ocid": "share-copy-link",
          children: [
            copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }),
            copied ? "Copied!" : "Copy Link"
          ]
        }
      )
    ] })
  ] });
}
function PlantDetailPage() {
  const { plantId } = useParams({ from: "/plants/$plantId" });
  const id = BigInt(plantId);
  const { data: plant, isLoading: loadingPlant } = usePlant(id);
  const { data: timeline, isLoading: loadingTimeline } = usePlantTimeline(id);
  if (loadingPlant) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-64 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-32" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-lg" })
      ] })
    ] });
  }
  if (!plant) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen bg-background flex flex-col items-center justify-center py-24 text-center",
        "data-ocid": "plant-detail-not-found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl mb-4", children: "🌶️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Plant Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This plant doesn't exist or may have been removed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/plants", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
            " Back to Plants"
          ] }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "plant-detail", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          variant: "ghost",
          size: "sm",
          className: "mb-4 -ml-2 text-muted-foreground hover:text-foreground",
          "data-ocid": "plant-back-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/plants", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-1.5 h-4 w-4" }),
            " Back to Plants"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "mt-1 h-7 w-7 text-primary shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground leading-tight", children: plant.variety }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { stage: plant.stage })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-mono text-sm", children: [
            "Tray #",
            plant.tray_id.toString(),
            " · Cell",
            " ",
            plant.cell_position.toString(),
            plant.genetics && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-foreground/60", children: [
              "· ",
              plant.genetics
            ] })
          ] })
        ] })
      ] }),
      plant.sold && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -8 },
          animate: { opacity: 1, y: 0 },
          className: "mt-4 flex items-center gap-2 rounded-md border border-muted-foreground/30 bg-muted/40 px-4 py-3",
          "data-ocid": "plant-sold-banner",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Sold — Plant locked. Lifecycle evolution disabled." })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-base font-bold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-primary" }),
            " Plant Details"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Variety", value: plant.variety }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                label: "Stage",
                value: /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { stage: plant.stage })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { label: "Planted", value: fmtDate(plant.planting_date) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                label: "Germinated",
                value: fmtDate(plant.germination_date)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                label: "Transplanted",
                value: fmtDate(plant.transplant_date)
              }
            ),
            plant.nft_id != null && /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                label: "NFT ID",
                value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary break-all", children: truncate(plant.nft_id, 24) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                label: "NFT Standard",
                value: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: plant.nft_standard === NFTStandard.Hedera ? "border-purple-700/50 text-purple-400" : "border-blue-700/50 text-blue-400",
                    children: plant.nft_standard
                  }
                )
              }
            ),
            plant.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Notes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: plant.notes })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShareButtons, { plantId })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        plant.photos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoGallery, { photos: plant.photos }),
        loadingTimeline ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full rounded-lg" })
        ] }) : timeline ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineView, { timeline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FeedingTable, { feedings: timeline.feedings })
        ] }) : null
      ] })
    ] }) })
  ] });
}
export {
  PlantDetailPage as default
};
