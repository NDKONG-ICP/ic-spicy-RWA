import { d as createLucideIcon, z as useParams, o as useAuth, r as reactExports, D as useGetClaimToken, E as useGetBatchGiftPack, G as useRedeemClaim, H as useRedeemBatchClaim, R as RarityTier, j as jsxRuntimeExports, F as Flame, B as Badge, m as motion, A as AnimatePresence, f as ue, w as useNavigate, a as Button, L as Link } from "./index-BzyHOfJH.js";
import { S as Separator } from "./separator-CDaWixp7.js";
import { S as Skeleton } from "./skeleton-4nFxEZGN.js";
import { G as Gift, W as Wallet, S as ShieldCheck, C as CircleAlert } from "./wallet-CRdq8fbY.js";
import { E as ExternalLink } from "./external-link-B3YaW6wq.js";
import { S as ShoppingBag } from "./shopping-bag-CR1pI8y_.js";
import { P as Package } from "./package--VOyFCxP.js";
import { S as Star } from "./star-DXq3cFWp.js";
import { S as Sparkles } from "./sparkles-pPm8l2Gj.js";
import { C as CircleCheck } from "./circle-check-HNHyE_dK.js";
import { L as LoaderCircle } from "./loader-circle-UN9H9EsC.js";
import { L as Leaf } from "./leaf-Cxv2rTxz.js";
import "./index-D4b-hkBZ.js";
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
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = createLucideIcon("key-round", __iconNode);
const RARITY_CONFIG = {
  [RarityTier.Common]: {
    label: "Common",
    discount: "10%",
    discountPct: 10,
    badgeClass: "text-emerald-300 border-emerald-500/50 bg-emerald-500/15 shadow-[0_0_12px_rgba(52,211,153,0.25)]",
    glowClass: "shadow-[0_0_60px_rgba(52,211,153,0.15)]",
    layerHues: [142, 158, 140, 162, 135, 155, 145, 150, 138, 165],
    stars: 1
  },
  [RarityTier.Uncommon]: {
    label: "Uncommon",
    discount: "12%",
    discountPct: 12,
    badgeClass: "text-blue-300 border-blue-500/50 bg-blue-500/15 shadow-[0_0_12px_rgba(96,165,250,0.25)]",
    glowClass: "shadow-[0_0_60px_rgba(96,165,250,0.15)]",
    layerHues: [220, 230, 210, 240, 215, 225, 235, 218, 228, 212],
    stars: 2
  },
  [RarityTier.Rare]: {
    label: "Rare",
    discount: "15%",
    discountPct: 15,
    badgeClass: "text-amber-300 border-amber-500/50 bg-amber-500/15 shadow-[0_0_12px_rgba(251,191,36,0.3)]",
    glowClass: "shadow-[0_0_60px_rgba(251,191,36,0.2)]",
    layerHues: [45, 38, 50, 35, 55, 42, 48, 40, 52, 36],
    stars: 3
  }
};
function rarityFromPct(pct) {
  if (pct >= 15) return RarityTier.Rare;
  if (pct >= 12) return RarityTier.Uncommon;
  return RarityTier.Common;
}
const CLAIM_STEPS = [
  "Generating your composite NFT artwork…",
  "Minting your NFT on the Internet Computer…",
  "Adding discount to your wallet…",
  "Done!"
];
const BATCH_CLAIM_STEPS = [
  "Verifying gift pack contents…",
  "Minting all plant NFTs on ICP…",
  "Activating lifetime discount…",
  "Done!"
];
function NFTComposite({
  rarity,
  animated = false,
  compact = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative w-full ${compact ? "aspect-[4/3]" : "aspect-square"} rounded-xl overflow-hidden border border-border bg-background`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-card to-background" }),
        rarity.layerHues.map((hue, i) => {
          const opacity = animated ? 0.6 - i * 0.03 : 0.55 - i * 0.03;
          const delay = animated ? i * 0.08 : 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: animated ? { scaleX: 0, opacity: 0 } : false,
              animate: animated ? { scaleX: 1, opacity } : { opacity },
              transition: { delay, duration: 0.5, ease: "easeOut" },
              className: "absolute left-0 right-0",
              style: {
                top: `${i * 10}%`,
                height: "12%",
                background: `linear-gradient(90deg, oklch(${0.55 + i * 0.025} 0.18 ${hue}) 0%, oklch(${0.65 + i * 0.02} 0.22 ${hue + 15}) 50%, oklch(${0.5 + i * 0.02} 0.14 ${hue - 10}) 100%)`,
                opacity,
                borderRadius: "2px"
              }
            },
            `layer-hue-${hue}`
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: animated ? { scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] } : {},
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 2.5,
              ease: "easeInOut"
            },
            className: "absolute inset-0 flex items-center justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-full blur-2xl",
                style: {
                  background: `oklch(0.6 0.25 ${rarity.layerHues[0]})`,
                  opacity: 0.5
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-0 right-0 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-display font-bold tracking-[0.2em] uppercase opacity-50 text-foreground", children: "IC SPICY · RWA" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1.5 right-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `text-[9px] font-bold px-1.5 py-0.5 rounded-full border backdrop-blur-sm ${rarity.badgeClass}`,
            children: rarity.label
          }
        ) })
      ]
    }
  );
}
function ConfettiParticles() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: `p-${i}`,
    left: `${10 + (i * 37 + 7) % 80}%`,
    hue: i * 53 % 360,
    lum: 0.6 + i % 4 * 0.075,
    yEnd: 500 + i % 5 * 40,
    rotate: (i % 2 === 0 ? 1 : -1) * (120 + i % 7 * 60),
    duration: 2 + i % 5 * 0.3,
    delay: i % 8 * 0.1,
    scale: 0.4 + i % 5 * 0.16,
    xDrift: (i % 2 === 0 ? 1 : -1) * (20 + i % 6 * 10)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: particles.map(
    ({
      id,
      left,
      hue,
      lum,
      yEnd,
      rotate,
      duration,
      delay,
      scale,
      xDrift
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute w-2 h-2 rounded-sm",
        style: {
          left,
          top: "-8px",
          background: `oklch(${lum} 0.25 ${hue})`
        },
        initial: { y: 0, opacity: 1, rotate: 0, scale: 1 },
        animate: { y: yEnd, opacity: [1, 1, 0], rotate, scale, x: xDrift },
        transition: { duration, delay, ease: "easeIn" }
      },
      id
    )
  ) });
}
function PulseRing({ color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "absolute rounded-full border",
      style: { borderColor: color },
      initial: { width: 60, height: 60, opacity: 0.6 },
      animate: { width: 200, height: 200, opacity: 0 },
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        delay: i * 0.66,
        ease: "easeOut"
      }
    },
    i
  )) });
}
function parseClaimData(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}
function formatTimestamp(ts) {
  if (!ts) return "—";
  const ms = Number(ts / 1000000n);
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function rarityColorClass(label) {
  if (label === "Rare") return "text-amber-300";
  if (label === "Uncommon") return "text-blue-300";
  return "text-emerald-300";
}
function rarityPulseColor(label) {
  if (label === "Rare") return "oklch(0.8 0.25 45)";
  if (label === "Uncommon") return "oklch(0.7 0.2 220)";
  return "oklch(0.7 0.2 142)";
}
function LoadingView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6", "data-ocid": "claim-loading", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-2/3 rounded-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full rounded-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6 rounded-lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-xl mt-2" })
  ] });
}
function ErrorView({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center gap-4 p-8 text-center",
      "data-ocid": "claim-error",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-destructive/15 border border-destructive/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-destructive" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-foreground", children: message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: "Please ask the nursery for a valid claim token or visit our shop." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", "data-ocid": "claim-error-shop-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }),
          "Browse Our Shop"
        ] }) })
      ]
    }
  );
}
function AlreadyClaimedView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center gap-4 p-8 text-center",
      "data-ocid": "claim-already-redeemed",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted/30 border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-8 h-8 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-foreground", children: "Already Claimed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: "This plant NFT has already been claimed by another collector. Each QR label can only be redeemed once." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", "data-ocid": "claim-redeemed-shop-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }),
          "Browse Our Shop"
        ] }) })
      ]
    }
  );
}
function SuccessView({
  claimData,
  rarity,
  nftId,
  plantData
}) {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 3e3);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.92 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "relative",
      "data-ocid": "claim-success",
      children: [
        showConfetti && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiParticles, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `relative rounded-2xl overflow-hidden ${rarity.glowClass}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(NFTComposite, { rarity, animated: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PulseRing, { color: rarityPulseColor(rarity.label) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 },
              className: "text-center space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { type: "spring", stiffness: 400, delay: 0.2 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-emerald-400" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "NFT Claimed Successfully!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: `font-display font-bold text-2xl ${rarityColorClass(rarity.label)}`,
                    children: [
                      "Your ",
                      rarity.discount,
                      " Lifetime Discount",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "is Now Active!"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Valid on every purchase in our shop — forever." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "space-y-2.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "NFT Details" }),
                [
                  {
                    label: "NFT ID",
                    value: nftId || `#${claimData.plant_id.toString()}`
                  },
                  { label: "Plant ID", value: `#${claimData.plant_id.toString()}` },
                  {
                    label: "Rarity",
                    value: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-xs font-bold px-2 py-0.5 rounded-full border ${rarity.badgeClass}`,
                        children: rarity.label
                      }
                    )
                  },
                  {
                    label: "Discount",
                    value: `${rarity.discount} storewide (lifetime)`
                  },
                  ...plantData.variety ? [{ label: "Variety", value: plantData.variety }] : [],
                  ...plantData.planting_date ? [{ label: "Planted", value: plantData.planting_date }] : [],
                  { label: "Minted", value: formatTimestamp(claimData.created_at) }
                ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground text-right min-w-0 break-all", children: value })
                    ]
                  },
                  label
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          (plantData.stage || plantData.genetics || plantData.notes) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "rounded-xl bg-muted/20 border border-border p-4 space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3", children: "Lifecycle Data in Metadata" }),
                plantData.stage && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-foreground", children: [
                    "Stage: ",
                    plantData.stage
                  ] })
                ] }),
                plantData.genetics && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-foreground", children: [
                    "Genetics: ",
                    plantData.genetics
                  ] })
                ] }),
                plantData.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground italic pl-5 line-clamp-2", children: [
                  '"',
                  plantData.notes,
                  '"'
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "flex flex-col gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "w-full h-12 bg-primary text-primary-foreground font-semibold text-base",
                    onClick: () => {
                      void navigate({ to: "/wallet" });
                    },
                    "data-ocid": "claim-view-wallet-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-5 h-5 mr-2" }),
                      "View My NFT in Wallet"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "w-full h-12 font-semibold text-base",
                    onClick: () => {
                      void navigate({ to: "/marketplace" });
                    },
                    "data-ocid": "claim-shop-discount-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5 mr-2" }),
                      "Start Shopping with Discount"
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ClaimProgress({ step, steps }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 py-4", "data-ocid": "claim-progress", children: steps.map((label, i) => {
    const isDone = i < step;
    const isActive = i === step;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -12 },
        animate: { opacity: isDone || isActive ? 1 : 0.35, x: 0 },
        transition: { delay: i * 0.1 },
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 shrink-0 flex items-center justify-center", children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { type: "spring", stiffness: 400 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-emerald-400" })
            }
          ) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 text-primary animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-border" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-sm ${isActive ? "text-foreground font-medium" : isDone ? "text-muted-foreground line-through" : "text-muted-foreground"}`,
              children: label
            }
          )
        ]
      },
      label
    );
  }) });
}
function AuthGate({
  onLogin,
  isLoading
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      className: "absolute inset-0 z-20 flex items-end justify-center rounded-2xl overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/70 backdrop-blur-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { y: 40, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: 0.1, type: "spring", stiffness: 300 },
            className: "relative z-10 w-full p-6 space-y-4 bg-card/90 border-t border-border rounded-t-2xl backdrop-blur-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm", children: "Connect to Claim Your NFT" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Internet Identity — secure, no password required" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full h-12 bg-primary text-primary-foreground font-semibold text-base",
                  onClick: onLogin,
                  disabled: isLoading,
                  "data-ocid": "claim-connect-btn",
                  children: [
                    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 mr-2" }),
                    "Connect with Internet Identity"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[10px] text-muted-foreground", children: "Your identity stays private. No email or password needed." })
            ]
          }
        )
      ]
    }
  );
}
function PlantClaimCard({
  claimData,
  rarity,
  plantData,
  isAuthenticated,
  isInitializing,
  onLogin,
  onClaim,
  claimPending,
  claimStep
}) {
  const plantName = plantData.variety || plantData.common_name || claimData.plant_id.toString();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-ocid": "claim-info", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `mx-6 mt-6 rounded-2xl overflow-hidden ${rarity.glowClass}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(NFTComposite, { rarity })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground leading-tight min-w-0 break-words", children: plantName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `shrink-0 text-xs font-bold px-2 py-1 rounded-full border ${rarity.badgeClass}`,
              children: rarity.label
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          Array.from({ length: rarity.stars }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: `w-3.5 h-3.5 fill-current ${rarityColorClass(rarity.label)}`
            },
            `star-${rarity.label}-${i + 1}`
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
            rarity.label,
            " Tier · ",
            rarity.discount,
            " Lifetime Discount"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
        { label: "Plant ID", value: `#${claimData.plant_id.toString()}` },
        { label: "Stage", value: plantData.stage || "Seedling" },
        ...plantData.genetics ? [{ label: "Genetics", value: plantData.genetics }] : [],
        ...plantData.origin ? [{ label: "Origin", value: plantData.origin }] : []
      ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-lg bg-muted/20 border border-border px-3 py-2 space-y-0.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate", children: value })
          ]
        },
        label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "What You Receive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: [
          "10-layer composite artwork NFT on ICP",
          "Full seed-to-harvest lifecycle metadata",
          `Lifetime ${rarity.discount} discount on all IC SPICY products`,
          "DAO governance voting access"
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: item })
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      claimPending && /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimProgress, { step: claimStep, steps: CLAIM_STEPS }),
      !claimPending && isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full h-13 bg-primary text-primary-foreground font-semibold text-base py-3.5",
          onClick: onClaim,
          disabled: claimPending,
          "data-ocid": "claim-redeem-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 mr-2" }),
            "Claim My NFT"
          ]
        }
      ),
      !claimPending && !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full h-13 bg-primary text-primary-foreground font-semibold text-base py-3.5",
          onClick: onLogin,
          disabled: isInitializing,
          "data-ocid": "claim-connect-inline-btn",
          children: [
            isInitializing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 mr-2" }),
            "Connect & Claim NFT"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !isAuthenticated && !claimPending && /* @__PURE__ */ jsxRuntimeExports.jsx(AuthGate, { onLogin, isLoading: isInitializing }) })
  ] });
}
function BatchPlantCard({
  plantId,
  index,
  packRarity
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: 0.2 + index * 0.15,
        duration: 0.45,
        ease: "easeOut"
      },
      className: "rounded-xl border border-border bg-card overflow-hidden",
      "data-ocid": `batch-plant-card-${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NFTComposite, { rarity: packRarity, compact: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-3 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-display font-bold text-foreground truncate", children: [
            "Plant #",
            plantId.toString()
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3 h-3 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Seedling Stage" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-3 h-3 text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Part of this gift pack" })
          ] })
        ] })
      ]
    }
  );
}
function BatchGiftPackCard({
  giftPack,
  isAuthenticated,
  isInitializing,
  onLogin,
  onClaim,
  claimPending,
  claimStep
}) {
  const plantCount = giftPack.plant_ids.length;
  const highestRarityPct = Number(giftPack.highest_rarity_pct);
  const topRarity = RARITY_CONFIG[rarityFromPct(highestRarityPct)];
  const discountLabel = highestRarityPct >= 15 ? "15%" : highestRarityPct >= 12 ? "12%" : "10%";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-ocid": "batch-claim-info", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        className: "px-6 pt-6 pb-4 space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-12 h-12 rounded-xl flex items-center justify-center border ${topRarity.badgeClass} shrink-0`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-6 h-6" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground leading-tight", children: [
                "Gift Pack — ",
                plantCount,
                " Plant",
                plantCount !== 1 ? "s" : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Scan & claim all ",
                plantCount,
                " plant NFTs at once"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
            {
              label: "Plants",
              value: plantCount.toString(),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3.5 h-3.5" })
            },
            {
              label: "Top Rarity",
              value: topRarity.label,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" })
            },
            {
              label: "Max Discount",
              value: discountLabel,
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" })
            }
          ].map(({ label, value, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-lg bg-muted/20 border border-border px-2 py-2 text-center space-y-0.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center text-primary mb-0.5", children: icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-xs font-bold ${label === "Top Rarity" ? rarityColorClass(topRarity.label) : "text-foreground"}`,
                    children: value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: label })
              ]
            },
            label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-primary/5 p-3.5 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Each NFT Includes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: [
              `${plantCount} × 10-layer composite artwork NFTs on ICP`,
              "Full seed-to-harvest lifecycle metadata per plant",
              `Up to ${discountLabel} lifetime storewide discount`,
              "DAO governance voting access"
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-foreground", children: item })
            ] }, item)) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2", children: "Plants in This Pack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", "data-ocid": "batch-plants-grid", children: giftPack.plant_ids.map((plantId, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        BatchPlantCard,
        {
          plantId,
          index: i,
          packRarity: topRarity
        },
        plantId.toString()
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
      claimPending && /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimProgress, { step: claimStep, steps: BATCH_CLAIM_STEPS }),
      !claimPending && isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full h-12 bg-primary text-primary-foreground font-semibold text-base",
          onClick: onClaim,
          disabled: claimPending,
          "data-ocid": "batch-claim-all-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-5 h-5 mr-2" }),
            "Claim All ",
            plantCount,
            " Plants"
          ]
        }
      ),
      !claimPending && !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full h-12 bg-primary text-primary-foreground font-semibold text-base",
          onClick: onLogin,
          disabled: isInitializing,
          "data-ocid": "batch-claim-connect-btn",
          children: [
            isInitializing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 mr-2" }),
            "Connect & Claim All Plants"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[10px] text-muted-foreground", children: "Each QR pack can only be redeemed once. Plants are non-fungible." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !isAuthenticated && !claimPending && /* @__PURE__ */ jsxRuntimeExports.jsx(AuthGate, { onLogin, isLoading: isInitializing }) })
  ] });
}
function BatchSuccessView({
  giftPack
}) {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = reactExports.useState(true);
  const plantCount = giftPack.plant_ids.length;
  const highestRarityPct = Number(giftPack.highest_rarity_pct);
  const topRarity = RARITY_CONFIG[rarityFromPct(highestRarityPct)];
  const discountLabel = highestRarityPct >= 15 ? "15%" : highestRarityPct >= 12 ? "12%" : "10%";
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 4e3);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.92 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "relative",
      "data-ocid": "batch-claim-success",
      children: [
        showConfetti && /* @__PURE__ */ jsxRuntimeExports.jsx(ConfettiParticles, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2 },
              className: "text-center space-y-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { type: "spring", stiffness: 350, delay: 0.15 },
                    className: `w-16 h-16 rounded-2xl flex items-center justify-center border ${topRarity.badgeClass}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-8 h-8" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Gift Pack Claimed!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: `font-display font-bold text-2xl ${rarityColorClass(topRarity.label)}`,
                    children: [
                      "You earned a ",
                      discountLabel,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Lifetime Discount!"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  plantCount,
                  " plant NFT",
                  plantCount !== 1 ? "s" : "",
                  " added to your wallet. Valid on every IC SPICY purchase — forever."
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Your New NFTs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                  giftPack.plant_ids.slice(0, 6).map((plantId, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { delay: 0.5 + i * 0.1 },
                      className: "rounded-lg border border-border overflow-hidden",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(NFTComposite, { rarity: topRarity, compact: true }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1.5 pb-1.5 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-bold text-muted-foreground truncate", children: [
                          "#",
                          plantId.toString()
                        ] }) })
                      ]
                    },
                    plantId.toString()
                  )),
                  plantCount > 6 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { delay: 0.5 + 6 * 0.1 },
                      className: "rounded-lg border border-border bg-muted/20 flex items-center justify-center aspect-[4/3]",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-muted-foreground", children: [
                        "+",
                        plantCount - 6,
                        " more"
                      ] })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Lifetime Discount Active" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-lg font-display font-bold ${rarityColorClass(topRarity.label)}`,
                      children: discountLabel
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "The highest rarity tier in your pack determines your storewide discount. It stays active as long as you hold any NFT." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7 },
              className: "flex flex-col gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "w-full h-12 bg-primary text-primary-foreground font-semibold text-base",
                    onClick: () => {
                      void navigate({ to: "/wallet" });
                    },
                    "data-ocid": "batch-success-wallet-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-5 h-5 mr-2" }),
                      "View All NFTs in Wallet"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "w-full h-12 font-semibold text-base",
                    onClick: () => {
                      void navigate({ to: "/marketplace" });
                    },
                    "data-ocid": "batch-success-marketplace-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5 mr-2" }),
                      "Visit Marketplace"
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ClaimPage() {
  const { claimToken } = useParams({ from: "/claim/$claimToken" });
  const { isAuthenticated, login, isInitializing } = useAuth();
  const [claimed, setClaimed] = reactExports.useState(false);
  const [claimedData, setClaimedData] = reactExports.useState(null);
  const [claimStep, setClaimStep] = reactExports.useState(0);
  const stepTimerRef = reactExports.useRef(null);
  const [batchClaimed, setBatchClaimed] = reactExports.useState(false);
  const [batchClaimedData, setBatchClaimedData] = reactExports.useState(null);
  const [batchClaimStep, setBatchClaimStep] = reactExports.useState(0);
  const batchStepTimerRef = reactExports.useRef(null);
  const { data: rawClaimData, isLoading: singleLoading } = useGetClaimToken(claimToken);
  const { data: batchData, isLoading: batchLoading } = useGetBatchGiftPack(claimToken);
  const redeemMutation = useRedeemClaim();
  const redeemBatchMutation = useRedeemBatchClaim();
  const isBatchPack = !!batchData;
  const isLoading = singleLoading || batchLoading;
  const claimData = rawClaimData ?? null;
  const isAlreadyClaimed = !isBatchPack && !!(claimData == null ? void 0 : claimData.redeemed_at);
  const plantData = claimData ? parseClaimData(claimData.claim_data) : {};
  const rarity = claimData ? RARITY_CONFIG[claimData.rarity_tier] ?? RARITY_CONFIG[RarityTier.Common] : null;
  const isBatchAlreadyClaimed = isBatchPack && (batchData == null ? void 0 : batchData.redeemed) === true;
  const makeStepAdvancer = (setStep, timerRef, stepCount) => {
    setStep(0);
    let step = 0;
    timerRef.current = setInterval(() => {
      step += 1;
      setStep(step);
      if (step >= stepCount - 1) {
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 1200);
  };
  const handleSingleClaim = async () => {
    if (!isAuthenticated) {
      login();
      return;
    }
    makeStepAdvancer(setClaimStep, stepTimerRef, CLAIM_STEPS.length);
    try {
      const result = await redeemMutation.mutateAsync(claimToken);
      setClaimedData(result);
      setClaimed(true);
      ue.success("🌶️ NFT claimed! Your lifetime discount is now active.");
    } catch {
      if (stepTimerRef.current) clearInterval(stepTimerRef.current);
      setClaimStep(0);
      ue.error("Claim failed. This NFT may have already been claimed.");
    }
  };
  const handleBatchClaim = async () => {
    if (!isAuthenticated) {
      login();
      return;
    }
    makeStepAdvancer(
      setBatchClaimStep,
      batchStepTimerRef,
      BATCH_CLAIM_STEPS.length
    );
    try {
      const result = await redeemBatchMutation.mutateAsync(claimToken);
      setBatchClaimedData(result);
      setBatchClaimed(true);
      ue.success(
        `🎁 Gift pack claimed! ${result.plant_ids.length} NFTs added to your wallet.`
      );
    } catch {
      if (batchStepTimerRef.current) clearInterval(batchStepTimerRef.current);
      setBatchClaimStep(0);
      ue.error(
        "Claim failed. This gift pack may have already been redeemed."
      );
    }
  };
  reactExports.useEffect(() => {
    return () => {
      if (stepTimerRef.current) clearInterval(stepTimerRef.current);
      if (batchStepTimerRef.current) clearInterval(batchStepTimerRef.current);
    };
  }, []);
  const successClaimData = claimedData ?? claimData;
  const headingText = isBatchPack ? "Claim Your Gift Pack" : "Claim Your Plant NFT";
  const subText = isBatchPack ? "Multiple real-world plant NFTs with lifetime shop discount" : "Exclusive real-world asset with lifetime shop discount";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-foreground", children: [
          "IC ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "SPICY" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: `text-[10px] font-semibold uppercase tracking-widest border-primary/30 text-primary ${isBatchPack ? "gap-1" : ""}`,
          children: [
            isBatchPack && /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "w-3 h-3" }),
            isBatchPack ? "Gift Pack" : "NFT Claim"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-start justify-center px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-6 space-y-1.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground", children: headingText }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: subText })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.97 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 0.08 },
          className: "rounded-2xl bg-card border border-border overflow-hidden shadow-elevated",
          "data-ocid": "claim-card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingView, {})
            },
            "loading"
          ) : (
            /* Batch pack — success */
            batchClaimed && batchClaimedData ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(BatchSuccessView, { giftPack: batchClaimedData })
              },
              "batch-success"
            ) : (
              /* Batch pack — already claimed */
              isBatchAlreadyClaimed ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlreadyClaimedView, {})
                },
                "batch-already-claimed"
              ) : (
                /* Batch pack — claim form */
                isBatchPack && batchData ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      BatchGiftPackCard,
                      {
                        giftPack: batchData,
                        isAuthenticated,
                        isInitializing,
                        onLogin: login,
                        onClaim: handleBatchClaim,
                        claimPending: redeemBatchMutation.isPending,
                        claimStep: batchClaimStep
                      }
                    )
                  },
                  "batch-claim"
                ) : (
                  /* Single — error / not found (only after BOTH queries finish) */
                  !singleLoading && !batchLoading && !claimData ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorView, { message: "Invalid or expired claim link" })
                    },
                    "error"
                  ) : (
                    /* Single — already claimed */
                    isAlreadyClaimed && !claimed ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 12 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlreadyClaimedView, {})
                      },
                      "already-claimed"
                    ) : (
                      /* Single — success */
                      claimed && successClaimData && rarity ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SuccessView,
                            {
                              claimData: successClaimData,
                              rarity,
                              nftId: plantData.nft_id ?? "",
                              plantData
                            }
                          )
                        },
                        "success"
                      ) : (
                        /* Single — claim form */
                        rarity ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              PlantClaimCard,
                              {
                                claimData,
                                rarity,
                                plantData,
                                isAuthenticated,
                                isInitializing,
                                onLogin: login,
                                onClaim: handleSingleClaim,
                                claimPending: redeemMutation.isPending,
                                claimStep
                              }
                            )
                          },
                          "claim"
                        ) : null
                      )
                    )
                  )
                )
              )
            )
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.3 },
          className: "text-center mt-6 space-y-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/",
                className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors",
                "data-ocid": "claim-home-link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                  "Visit IC SPICY Nursery"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Powered by the Internet Computer · ICRC-37 NFT Standard" })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  ClaimPage as default
};
