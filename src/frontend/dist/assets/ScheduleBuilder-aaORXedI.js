import { d as createLucideIcon, o as useAuth, r as reactExports, ai as useSaveSchedule, aj as useGetMySchedules, ak as useGetScheduleByShareToken, al as useGetScheduleData, f as ue, j as jsxRuntimeExports, m as motion, B as Badge, a as Button, L as Link, A as AnimatePresence } from "./index-BzyHOfJH.js";
import { S as Skeleton } from "./skeleton-4nFxEZGN.js";
import { F as FlaskConical } from "./flask-conical-DloYjhEU.js";
import { Z as Zap } from "./zap-CApEp5j2.js";
import { P as Printer } from "./printer-RHkD5P7t.js";
import { S as Sprout } from "./sprout-DYWkSzYV.js";
import { C as Check } from "./check-BRbzaMOh.js";
import { S as Share2 } from "./share-2-25774QzN.js";
import { S as Star } from "./star-DXq3cFWp.js";
import { B as BookOpen } from "./book-open-ex14ksoe.js";
import { L as Leaf } from "./leaf-Cxv2rTxz.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-BvX_XqYD.js";
import { C as Clock } from "./clock-Dpayb-ka.js";
import { C as ChevronRight } from "./chevron-right-C_LI6q7h.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
];
const Droplets = createLucideIcon("droplets", __iconNode);
const GROWTH_STAGES = [
  {
    value: "Germination",
    label: "Germination",
    emoji: "🌱",
    desc: "Seed activation through sprout emergence",
    color: "from-chart-4/20 to-chart-4/5 border-chart-4/30",
    activeColor: "from-chart-4/30 to-chart-4/10 border-chart-4/60",
    textColor: "text-chart-4"
  },
  {
    value: "Seedling",
    label: "Seedling",
    emoji: "🌿",
    desc: "First true leaves through transplant-ready",
    color: "from-chart-4/15 to-chart-5/5 border-chart-5/30",
    activeColor: "from-chart-4/30 to-chart-5/15 border-chart-5/60",
    textColor: "text-chart-5"
  },
  {
    value: "Vegetative",
    label: "Vegetative",
    emoji: "🌶️",
    desc: "Rapid green growth, canopy development",
    color: "from-green-900/20 to-green-900/5 border-green-800/30",
    activeColor: "from-green-900/40 to-green-900/15 border-green-700/60",
    textColor: "text-chart-4"
  },
  {
    value: "Flowering",
    label: "Flowering",
    emoji: "🌸",
    desc: "Bud set through full bloom",
    color: "from-primary/15 to-accent/5 border-primary/20",
    activeColor: "from-primary/30 to-accent/15 border-primary/50",
    textColor: "text-primary"
  },
  {
    value: "Fruiting",
    label: "Fruiting",
    emoji: "🫑",
    desc: "Pod development through color change",
    color: "from-primary/20 to-primary/5 border-primary/25",
    activeColor: "from-primary/40 to-primary/15 border-primary/60",
    textColor: "text-primary"
  },
  {
    value: "Harvest",
    label: "Harvest Prep",
    emoji: "🧺",
    desc: "Ripening through final harvest window",
    color: "from-chart-3/15 to-chart-3/5 border-chart-3/25",
    activeColor: "from-chart-3/30 to-chart-3/15 border-chart-3/55",
    textColor: "text-chart-3"
  }
];
const KNF_INPUTS = [
  {
    id: "OHN",
    name: "Oriental Herbal Nutrient",
    short: "Immunity & biostimulant blend of 5 medicinal herbs",
    color: "bg-amber-500/15 text-amber-300 border-amber-500/35",
    activeRing: "ring-amber-500/40",
    dot: "bg-amber-400",
    days: [1, 4]
    // typical application days in a week
  },
  {
    id: "FPJ",
    name: "Fermented Plant Juice",
    short: "Growth hormones & enzymes from plant meristems",
    color: "bg-chart-4/15 text-chart-4 border-chart-4/35",
    activeRing: "ring-chart-4/40",
    dot: "bg-chart-4",
    days: [2, 5]
  },
  {
    id: "FPE",
    name: "Fermented Plant Extract",
    short: "Broad-spectrum nutrients, K & P from whole plants",
    color: "bg-lime-500/15 text-lime-300 border-lime-500/35",
    activeRing: "ring-lime-500/40",
    dot: "bg-lime-400",
    days: [3, 6]
  },
  {
    id: "WCA",
    name: "Water Soluble Calcium",
    short: "Bioavailable calcium, cell walls & natural fungicide",
    color: "bg-chart-5/15 text-chart-5 border-chart-5/35",
    activeRing: "ring-chart-5/40",
    dot: "bg-chart-5",
    days: [2, 5, 7]
  },
  {
    id: "IMO2",
    name: "Indigenous Microorganisms",
    short: "Local microbial colony for soil ecosystem health",
    color: "bg-violet-500/15 text-violet-300 border-violet-500/35",
    activeRing: "ring-violet-500/40",
    dot: "bg-violet-400",
    days: [1, 7]
  },
  {
    id: "LAB",
    name: "Lactic Acid Bacteria",
    short: "Decomposition, pathogen suppression & soil life",
    color: "bg-pink-500/15 text-pink-300 border-pink-500/35",
    activeRing: "ring-pink-500/40",
    dot: "bg-pink-400",
    days: [3, 6]
  },
  {
    id: "AEM",
    name: "Activated Effective Microorganisms",
    short: "EM-expanded culture for compost & fertility",
    color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/35",
    activeRing: "ring-cyan-500/40",
    dot: "bg-cyan-400",
    days: [1, 4, 7]
  },
  {
    id: "FFA",
    name: "Fermented Fruit Acid",
    short: "Organic acids, brix & flavor enhancement",
    color: "bg-orange-500/15 text-orange-300 border-orange-500/35",
    activeRing: "ring-orange-500/40",
    dot: "bg-orange-400",
    days: [2, 6]
  }
];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function getShareTokenFromUrl() {
  if (typeof window === "undefined") return void 0;
  const params = new URLSearchParams(window.location.search);
  return params.get("share") ?? void 0;
}
function WeeklyGrid({ entries }) {
  const dayMap = reactExports.useMemo(() => {
    const map = {};
    for (const entry of entries) {
      const meta = KNF_INPUTS.find((k) => k.id === entry.input_name);
      if (!meta) continue;
      const freq = entry.frequency.toLowerCase();
      let days;
      if (freq.includes("daily") || freq.includes("every day")) {
        days = [1, 2, 3, 4, 5, 6, 7];
      } else if (freq.includes("twice") || freq.includes("2x") || freq.includes("every 3")) {
        days = meta.days.slice(0, 2);
      } else if (freq.includes("3x") || freq.includes("three")) {
        days = meta.days.slice(0, 3);
      } else if (freq.includes("weekly") || freq.includes("once")) {
        days = [meta.days[0]];
      } else {
        days = meta.days.slice(0, 2);
      }
      map[entry.input_name] = new Set(days);
    }
    return map;
  }, [entries]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl bg-card border border-border overflow-hidden",
      "data-ocid": "weekly-grid",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border/60 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm", children: "7-Day Application Grid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: "● = apply this day" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs min-w-[480px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/20 border-b border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-semibold text-muted-foreground w-28", children: "Input" }),
            DAYS.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "text-center px-2 py-2.5 font-semibold text-muted-foreground w-12",
                children: day
              },
              day
            ))
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: entries.map((entry, i) => {
            const meta = KNF_INPUTS.find((k) => k.id === entry.input_name);
            const activeDays = dayMap[entry.input_name] ?? /* @__PURE__ */ new Set();
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: `border-b border-border/25 ${i % 2 === 1 ? "bg-muted/10" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold border ${(meta == null ? void 0 : meta.color) ?? "bg-muted text-muted-foreground border-border"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${(meta == null ? void 0 : meta.dot) ?? "bg-muted-foreground"}`
                          }
                        ),
                        entry.input_name
                      ]
                    }
                  ) }),
                  [1, 2, 3, 4, 5, 6, 7].map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-2 py-3", children: activeDays.has(day) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-block w-5 h-5 rounded-full ${(meta == null ? void 0 : meta.dot) ?? "bg-primary"} opacity-90 shadow-sm`
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-5 h-5 rounded-full bg-border/30" }) }, day))
                ]
              },
              entry.input_name
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 bg-muted/10 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Frequency based on schedule data. Always combine with plain water at recommended dilution rates." }) })
      ]
    }
  );
}
function ScheduleEntryCard({
  entry,
  index
}) {
  const meta = KNF_INPUTS.find((k) => k.id === entry.input_name);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.07, duration: 0.35 },
      className: "rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors duration-200",
      "data-ocid": "schedule-entry-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-1 w-full bg-gradient-to-r ${meta ? meta.color.split(" ")[0].replace("bg-", "from-") : "from-primary/40"} to-transparent`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-black border ${(meta == null ? void 0 : meta.color) ?? "bg-muted text-muted-foreground border-border"}`,
                children: entry.input_name.slice(0, 3)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `font-bold text-sm ${(meta == null ? void 0 : meta.color.split(" ")[1]) ?? "text-foreground"}`,
                    children: entry.input_name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: (meta == null ? void 0 : meta.name) ?? "" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-1", children: (meta == null ? void 0 : meta.short) ?? "" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/20 rounded-lg p-2.5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-1 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-3 h-3 text-chart-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5", children: "Dilution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground leading-tight", children: entry.dilution })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/20 rounded-lg p-2.5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-1 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5", children: "Frequency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground leading-tight", children: entry.frequency })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/20 rounded-lg p-2.5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-1 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-chart-3" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5", children: "Timing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground leading-tight", children: entry.timing })
            ] })
          ] }),
          entry.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/5 border border-primary/15 rounded-lg px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: entry.notes }) })
        ] })
      ]
    }
  );
}
function PrintScheduleView({
  stage,
  inputs,
  entries
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "print-schedule-view",
      className: "hidden print:block",
      style: {
        fontFamily: "Arial, sans-serif",
        color: "#111",
        background: "#fff",
        padding: "32px",
        maxWidth: "700px",
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              borderBottom: "3px solid #b91c1c",
              paddingBottom: "16px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontSize: "10px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "#b91c1c",
                      fontWeight: 700
                    },
                    children: "IC SPICY Nursery — Port Charlotte, FL"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "10px", color: "#888", marginTop: "2px" }, children: "icspicy.farm · KNF Application Schedule" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      fontSize: "28px",
                      fontWeight: 900,
                      color: "#b91c1c",
                      marginTop: "8px",
                      lineHeight: 1
                    },
                    children: [
                      stage,
                      " Stage"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "13px", color: "#444", marginTop: "4px" }, children: [
                  "KNF Schedule — ",
                  inputs.join(", ")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "right", fontSize: "10px", color: "#888" }, children: [
                "Printed: ",
                (/* @__PURE__ */ new Date()).toLocaleDateString(),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "icspicy.farm"
              ] })
            ]
          }
        ),
        entries.map((entry) => {
          const meta = KNF_INPUTS.find((k) => k.id === entry.input_name);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: "1px solid #eee"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            width: "42px",
                            height: "42px",
                            background: "#f9ece8",
                            border: "2px solid #b91c1c",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            fontSize: "12px",
                            color: "#b91c1c",
                            flexShrink: 0
                          },
                          children: entry.input_name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700, fontSize: "14px" }, children: entry.input_name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "11px", color: "#666" }, children: (meta == null ? void 0 : meta.name) ?? "" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "10px",
                      marginBottom: "6px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          style: {
                            background: "#f5f5f5",
                            padding: "8px",
                            borderRadius: "6px"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  fontSize: "9px",
                                  textTransform: "uppercase",
                                  letterSpacing: "1px",
                                  color: "#b91c1c",
                                  marginBottom: "2px"
                                },
                                children: "Dilution"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "12px", fontWeight: 700 }, children: entry.dilution })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          style: {
                            background: "#f5f5f5",
                            padding: "8px",
                            borderRadius: "6px"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  fontSize: "9px",
                                  textTransform: "uppercase",
                                  letterSpacing: "1px",
                                  color: "#b91c1c",
                                  marginBottom: "2px"
                                },
                                children: "Frequency"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "12px", fontWeight: 700 }, children: entry.frequency })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          style: {
                            background: "#f5f5f5",
                            padding: "8px",
                            borderRadius: "6px"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  fontSize: "9px",
                                  textTransform: "uppercase",
                                  letterSpacing: "1px",
                                  color: "#b91c1c",
                                  marginBottom: "2px"
                                },
                                children: "Timing"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "12px", fontWeight: 700 }, children: entry.timing })
                          ]
                        }
                      )
                    ]
                  }
                ),
                entry.notes && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontSize: "11px",
                      color: "#555",
                      padding: "6px 10px",
                      borderLeft: "3px solid #b91c1c",
                      background: "#fdf8f8"
                    },
                    children: entry.notes
                  }
                )
              ]
            },
            entry.input_name
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "20px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#b91c1c",
                fontWeight: 700,
                marginBottom: "10px"
              },
              children: "7-Day Application Grid"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "table",
            {
              style: {
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "11px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        textAlign: "left",
                        padding: "6px 8px",
                        background: "#f5f5f5",
                        borderBottom: "2px solid #ddd"
                      },
                      children: "Input"
                    }
                  ),
                  DAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      style: {
                        textAlign: "center",
                        padding: "6px 8px",
                        background: "#f5f5f5",
                        borderBottom: "2px solid #ddd",
                        width: "40px"
                      },
                      children: d
                    },
                    d
                  ))
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: entries.map((entry) => {
                  const meta = KNF_INPUTS.find((k) => k.id === entry.input_name);
                  const freq = entry.frequency.toLowerCase();
                  let days;
                  if (freq.includes("daily")) days = [1, 2, 3, 4, 5, 6, 7];
                  else if (freq.includes("twice") || freq.includes("2x") || freq.includes("every 3"))
                    days = (meta == null ? void 0 : meta.days.slice(0, 2)) ?? [1, 4];
                  else if (freq.includes("3x"))
                    days = (meta == null ? void 0 : meta.days.slice(0, 3)) ?? [1, 3, 5];
                  else days = [(meta == null ? void 0 : meta.days[0]) ?? 1];
                  const daySet = new Set(days);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      style: { borderBottom: "1px solid #eee" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "5px 8px", fontWeight: 700 }, children: entry.input_name }),
                        [1, 2, 3, 4, 5, 6, 7].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "td",
                          {
                            style: { textAlign: "center", padding: "5px 8px" },
                            children: daySet.has(d) ? "●" : "○"
                          },
                          d
                        ))
                      ]
                    },
                    entry.input_name
                  );
                }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              marginTop: "24px",
              paddingTop: "12px",
              borderTop: "1px solid #ccc",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "9px",
              color: "#999"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "© ",
                (/* @__PURE__ */ new Date()).getFullYear(),
                " IC SPICY Nursery · Port Charlotte, FL · icspicy.farm"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Korean Natural Farming Application Schedule" })
            ]
          }
        )
      ]
    }
  );
}
function SavedScheduleCard({
  sched,
  onLoad
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopyLink = async () => {
    const url = `${window.location.origin}/schedule-builder?share=${sched.share_token}`;
    await navigator.clipboard.writeText(url).catch(() => {
    });
    setCopied(true);
    ue.success("Share link copied!");
    setTimeout(() => setCopied(false), 2500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "flex items-center justify-between p-3.5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-200 group",
      "data-ocid": "saved-schedule-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
              sched.stage,
              " Stage"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: sched.inputs.join(", ") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleCopyLink,
              className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors",
              "aria-label": "Copy share link",
              "data-ocid": "saved-schedule-copy-link",
              children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-chart-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onLoad(sched),
              className: "flex items-center gap-1 text-xs text-primary hover:underline",
              "data-ocid": "load-saved-schedule-btn",
              children: [
                "Load ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function MobileSection({
  title,
  icon,
  stepNum,
  isComplete,
  children,
  defaultOpen = true
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        className: "w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-muted/10 transition-colors",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${isComplete ? "bg-chart-4 text-background" : "bg-primary text-primary-foreground"}`,
              children: isComplete ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }) : stepNum
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
            icon,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground", children: title })
          ] }),
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.22, ease: "easeInOut" },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5", children })
      }
    ) })
  ] });
}
function ScheduleBuilderPage() {
  const { isAuthenticated, login } = useAuth();
  const [selectedStage, setSelectedStage] = reactExports.useState("");
  const [selectedInputs, setSelectedInputs] = reactExports.useState([]);
  const [hasBuilt, setHasBuilt] = reactExports.useState(false);
  const [sharedToken] = reactExports.useState(
    () => getShareTokenFromUrl()
  );
  const resultsRef = reactExports.useRef(null);
  const saveSchedule = useSaveSchedule();
  const { data: mySchedules } = useGetMySchedules();
  const { data: sharedSchedule } = useGetScheduleByShareToken(sharedToken);
  const { data: scheduleEntries, isLoading } = useGetScheduleData(
    hasBuilt ? selectedStage : void 0,
    hasBuilt ? selectedInputs : []
  );
  reactExports.useEffect(() => {
    if (sharedSchedule) {
      setSelectedStage(sharedSchedule.stage);
      setSelectedInputs(sharedSchedule.inputs);
      setHasBuilt(true);
      ue.success(`Loaded shared schedule: ${sharedSchedule.stage} stage`);
    }
  }, [sharedSchedule]);
  const toggleInput = (id) => {
    setSelectedInputs(
      (prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    setHasBuilt(false);
  };
  const handleBuild = () => {
    if (!selectedStage || selectedInputs.length === 0) {
      ue.error("Select a growth stage and at least one KNF input.");
      return;
    }
    setHasBuilt(true);
    setTimeout(() => {
      var _a;
      (_a = resultsRef.current) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 150);
  };
  const handlePrint = () => {
    if (!hasBuilt || !(scheduleEntries == null ? void 0 : scheduleEntries.length)) {
      ue.error("Build a schedule first before printing.");
      return;
    }
    window.print();
  };
  const handleShare = async () => {
    if (!isAuthenticated) {
      ue.error(
        "Connect your Internet Identity to save and share schedules."
      );
      return;
    }
    if (!selectedStage || selectedInputs.length === 0) {
      ue.error("Build a schedule first.");
      return;
    }
    try {
      const shareId = await saveSchedule.mutateAsync({
        stage: selectedStage,
        inputs: selectedInputs
      });
      const shareUrl = `${window.location.origin}/schedule-builder?share=${shareId}`;
      await navigator.clipboard.writeText(shareUrl).catch(() => {
      });
      ue.success("Schedule saved & share link copied!", { duration: 4e3 });
    } catch {
      ue.error("Failed to save schedule.");
    }
  };
  const handleSave = async () => {
    if (!isAuthenticated) {
      ue.error("Connect your Internet Identity to save schedules.");
      return;
    }
    if (!selectedStage || selectedInputs.length === 0) {
      ue.error("Build a schedule first.");
      return;
    }
    try {
      await saveSchedule.mutateAsync({
        stage: selectedStage,
        inputs: selectedInputs
      });
      ue.success("Schedule saved to your profile!");
    } catch {
      ue.error("Failed to save schedule.");
    }
  };
  const handleLoadSaved = (sched) => {
    setSelectedStage(sched.stage);
    setSelectedInputs(sched.inputs);
    setHasBuilt(true);
    setTimeout(() => {
      var _a;
      (_a = resultsRef.current) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };
  const stageMeta = GROWTH_STAGES.find((s) => s.value === selectedStage);
  const canBuild = !!selectedStage && selectedInputs.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media print {
          body > * { display: none !important; }
          #print-schedule-view { display: block !important; }
          @page { margin: 16mm; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-6xl mx-auto px-4 pb-24",
        "data-ocid": "schedule-builder",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.45 },
              className: "relative rounded-2xl overflow-hidden mb-10 mt-4",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-card via-background to-muted/30 border border-border rounded-2xl px-8 py-10 sm:py-14 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-3.5 h-3.5" }),
                    "Korean Natural Farming"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-3xl sm:text-5xl text-foreground leading-tight mb-3", children: [
                    "KNF Application",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Schedule Builder" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mb-6", children: "Mix and combine KNF inputs by growth stage to get precise dilution rates, timing, frequency, and a printable 7-day application grid tailored to your plants." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs border-primary/30 text-primary",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 mr-1" }),
                          " 8 KNF Inputs"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs border-border text-muted-foreground",
                        children: "6 Growth Stages"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs border-border text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3 mr-1" }),
                          " Printable Cards"
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-4", "data-ocid": "schedule-sidebar", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MobileSection,
                {
                  title: "Growth Stage",
                  stepNum: 1,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-4 h-4 text-muted-foreground" }),
                  isComplete: !!selectedStage,
                  defaultOpen: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 pt-1", children: GROWTH_STAGES.map((stage) => {
                    const isActive = selectedStage === stage.value;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setSelectedStage(stage.value);
                          setHasBuilt(false);
                        },
                        className: `p-3 rounded-xl border bg-gradient-to-br text-left transition-all duration-200 ${isActive ? stage.activeColor : stage.color} hover:brightness-110`,
                        "data-ocid": `stage-btn-${stage.value.toLowerCase()}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg block mb-0.5", children: stage.emoji }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: `font-bold text-xs leading-tight ${isActive ? stage.textColor : "text-foreground"}`,
                              children: stage.label
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 line-clamp-2", children: stage.desc })
                        ]
                      },
                      stage.value
                    );
                  }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                MobileSection,
                {
                  title: "KNF Inputs",
                  stepNum: 2,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-muted-foreground" }),
                  isComplete: selectedInputs.length > 0,
                  defaultOpen: true,
                  children: [
                    selectedInputs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        selectedInputs.length,
                        " selected"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            setSelectedInputs([]);
                            setHasBuilt(false);
                          },
                          className: "text-xs text-muted-foreground hover:text-foreground transition-colors",
                          "data-ocid": "clear-inputs-btn",
                          children: "Clear all"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 pt-1", children: KNF_INPUTS.map((input) => {
                      const isSelected = selectedInputs.includes(input.id);
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => toggleInput(input.id),
                          className: `relative w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-start gap-2.5 ${isSelected ? `${input.color} ring-2 ${input.activeRing}` : "bg-muted/10 border-border text-muted-foreground hover:border-primary/30 hover:bg-muted/20"}`,
                          "data-ocid": `input-btn-${input.id.toLowerCase()}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: `w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-[10px] font-black border mt-0.5 ${isSelected ? input.color : "bg-muted/30 text-muted-foreground border-border"}`,
                                children: input.id.slice(0, 3)
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: `font-bold text-xs ${isSelected ? "" : "text-foreground"}`,
                                  children: input.id
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] line-clamp-2 mt-0.5 opacity-80", children: input.short })
                            ] }),
                            isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 flex-shrink-0 mt-0.5" })
                          ]
                        },
                        input.id
                      );
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleBuild,
                  disabled: !canBuild,
                  className: "w-full bg-primary text-primary-foreground h-11 font-semibold",
                  "data-ocid": "build-schedule-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 mr-2" }),
                    hasBuilt ? "Rebuild Schedule" : "Build Schedule"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/20 border border-border/50 p-4 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wide", children: "Quick Tips" }),
                [
                  "Start with OHN + FPJ for a complete base formula",
                  "Add WCA during flowering to prevent blossom end rot",
                  "IMO2 + LAB are powerful soil-health pair for seedlings",
                  "FFA shines in fruiting stage for brix & flavor"
                ].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs mt-0.5 flex-shrink-0", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: tip })
                ] }, tip))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "space-y-6", "data-ocid": "schedule-main", children: [
              !hasBuilt && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "rounded-2xl bg-card border border-dashed border-border/60 flex flex-col items-center justify-center py-20 px-8 text-center",
                  "data-ocid": "schedule-empty-prompt",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-7 h-7 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: "Build Your Custom Schedule" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground max-w-sm leading-relaxed", children: [
                      "Select a growth stage and KNF inputs from the panel, then click",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "Build Schedule" }),
                      " ",
                      "to generate your personalized application guide."
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 justify-center mt-6", children: [
                      KNF_INPUTS.slice(0, 4).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[10px] px-2.5 py-1 rounded-full border font-medium ${k.color}`,
                          children: k.id
                        },
                        k.id
                      )),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2.5 py-1 rounded-full border border-border text-muted-foreground", children: "+4 more" })
                    ] })
                  ]
                }
              ),
              hasBuilt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: resultsRef, className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: -8 },
                    animate: { opacity: 1, y: 0 },
                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-card border border-border px-5 py-4",
                    "data-ocid": "schedule-results-header",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `w-9 h-9 rounded-xl bg-gradient-to-br ${(stageMeta == null ? void 0 : stageMeta.activeColor) ?? "from-primary/30 to-primary/10 border-primary/50"} border flex items-center justify-center text-lg flex-shrink-0`,
                            children: (stageMeta == null ? void 0 : stageMeta.emoji) ?? "🌿"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-foreground text-sm", children: [
                            selectedStage,
                            " Stage — Application Schedule"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: selectedInputs.map((id) => {
                            const meta = KNF_INPUTS.find((k) => k.id === id);
                            return /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `text-[10px] px-2 py-0.5 rounded-full border font-medium ${(meta == null ? void 0 : meta.color) ?? "bg-muted text-muted-foreground border-border"}`,
                                children: id
                              },
                              id
                            );
                          }) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            onClick: handlePrint,
                            className: "h-8 text-xs border-border",
                            "data-ocid": "print-schedule-btn",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3.5 h-3.5 mr-1" }),
                              "Print"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            onClick: handleShare,
                            disabled: saveSchedule.isPending,
                            className: "h-8 text-xs border-border",
                            "data-ocid": "share-schedule-btn",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-3.5 h-3.5 mr-1" }),
                              saveSchedule.isPending ? "Saving…" : "Share"
                            ]
                          }
                        ),
                        isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            size: "sm",
                            onClick: handleSave,
                            disabled: saveSchedule.isPending,
                            className: "h-8 text-xs bg-primary",
                            "data-ocid": "save-schedule-btn",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 mr-1" }),
                              "Save"
                            ]
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            onClick: login,
                            className: "h-8 text-xs border-primary/40 text-primary",
                            "data-ocid": "sign-in-to-save-btn",
                            children: "Sign in to save"
                          }
                        )
                      ] })
                    ]
                  }
                ),
                isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [1, 2, 3, 4].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl border border-border p-4 space-y-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-11 h-11 rounded-xl" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-1/3" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-2/3" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 rounded-lg" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 rounded-lg" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 rounded-lg" })
                      ] })
                    ]
                  },
                  k
                )) }) : scheduleEntries && scheduleEntries.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: scheduleEntries.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ScheduleEntryCard,
                    {
                      entry,
                      index: i
                    },
                    entry.input_name
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(WeeklyGrid, { entries: scheduleEntries }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    PrintScheduleView,
                    {
                      stage: selectedStage,
                      inputs: selectedInputs,
                      entries: scheduleEntries
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-center py-16 rounded-2xl bg-card border border-border",
                    "data-ocid": "schedule-no-data",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-12 h-12 text-muted-foreground/30 mx-auto mb-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground mb-2", children: "No schedule data for this combination" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Try a different growth stage or input selection." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cookbook", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          className: "border-border text-xs h-8",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5 mr-1.5" }),
                            "View CookBook Recipes"
                          ]
                        }
                      ) })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", "data-ocid": "my-schedules-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground", children: "My Saved Schedules" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border/40 ml-2" })
            ] }),
            isAuthenticated ? mySchedules && mySchedules.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: mySchedules.map((sched) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              SavedScheduleCard,
              {
                sched,
                onLoad: handleLoadSaved
              },
              sched.id
            )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-12 rounded-2xl bg-card border border-dashed border-border/60",
                "data-ocid": "saved-schedules-empty",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-10 h-10 text-muted-foreground/30 mx-auto mb-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: "No saved schedules yet" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Build a schedule and click Save to keep it here for quick access." })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border p-8 text-center",
                "data-ocid": "saved-schedules-cta",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-6 h-6 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: "Save & Share Your Schedules" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed mb-6", children: [
                    "Create a free IC SPICY account to save unlimited schedules, generate share links, access your plant NFT lifecycle, and earn a",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "lifetime storewide discount" }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        onClick: login,
                        className: "bg-primary text-primary-foreground px-6",
                        "data-ocid": "cta-sign-in-btn",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 mr-2" }),
                          "Connect Internet Identity"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/cookbook", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        className: "border-border text-muted-foreground px-6",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 mr-2" }),
                          "Browse CookBook"
                        ]
                      }
                    ) })
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  ScheduleBuilderPage as default
};
