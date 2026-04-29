import { d as createLucideIcon, r as reactExports, I as useProducts, J as useProductsByCategory, q as useHasMembership, K as useTokenPrices, N as useMembershipPrices, j as jsxRuntimeExports, F as Flame, m as motion, B as Badge, Q as ProductCategory, a as Button, o as useAuth, T as useGetMyOffers, U as useGetOffersReceived, V as useGetActiveResaleListings, W as useIssueMembership, Y as OFFER_TOKENS, Z as TOKEN_DISPLAY, p as useCart, _ as ShoppingCart, A as AnimatePresence, X, $ as useCancelOffer, a0 as useAcceptOffer, a1 as OfferStatus, a2 as useRejectOffer, a3 as useBuyResaleListing, R as RarityTier, a4 as TOKEN_DECIMALS, a5 as NFTStandard, x as MembershipTier, f as ue, a6 as useCounterOffer, a7 as useSubmitOffer } from "./index-BzyHOfJH.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-Cx326vb4.js";
import { I as Input } from "./input-WgY0hUlN.js";
import { L as Label } from "./label-B1Nh5Ul-.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BT1J6WYA.js";
import { S as Skeleton } from "./skeleton-4nFxEZGN.js";
import { S as Sparkles } from "./sparkles-pPm8l2Gj.js";
import { A as ArrowLeftRight } from "./arrow-left-right-CRj1Q2zP.js";
import { C as Crown } from "./crown-DtVyiD3w.js";
import { R as RefreshCw } from "./refresh-cw-CyFlSh0L.js";
import { M as Minus } from "./minus-BTQSkv4L.js";
import { P as Plus } from "./plus-BI4KcPyy.js";
import { C as CircleCheck } from "./circle-check-HNHyE_dK.js";
import { C as CircleX } from "./circle-x-C_TWP9Ue.js";
import { C as ChevronRight } from "./chevron-right-C_LI6q7h.js";
import { C as Clock } from "./clock-Dpayb-ka.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-BvX_XqYD.js";
import { S as Star } from "./star-DXq3cFWp.js";
import "./index-B4IHimjK.js";
import "./index-D4b-hkBZ.js";
import "./check-BRbzaMOh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb"
    }
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }]
];
const Handshake = createLucideIcon("handshake", __iconNode);
const CATEGORIES = [
  { label: "All", emoji: "🌶️", value: null },
  {
    label: "Seedlings",
    price: "$6",
    emoji: "🌱",
    value: ProductCategory.Seedling
  },
  {
    label: "1-Gallon",
    price: "$25",
    emoji: "🌿",
    value: ProductCategory.Gallon1
  },
  {
    label: "5-Gallon",
    price: "$45",
    emoji: "🔥",
    value: ProductCategory.Gallon5
  },
  {
    label: "Artisan Spices",
    price: "$12",
    emoji: "🧂",
    value: ProductCategory.Spice
  },
  { label: "Garden Inputs", emoji: "🌿", value: ProductCategory.GardenInputs },
  { label: "Resale NFTs", emoji: "♻️", value: "resale" },
  { label: "Offers", emoji: "🤝", value: "offers" }
];
const STAGE_LABELS = {
  [ProductCategory.Seedling]: {
    label: "Seedling",
    color: "bg-emerald-950/60 text-emerald-400 border-emerald-700/40"
  },
  [ProductCategory.Gallon1]: {
    label: "1-Gallon",
    color: "bg-lime-950/60 text-lime-300 border-lime-700/40"
  },
  [ProductCategory.Gallon5]: {
    label: "Mature",
    color: "bg-orange-950/60 text-orange-400 border-orange-700/40"
  },
  [ProductCategory.Spice]: {
    label: "Artisan",
    color: "bg-amber-950/60 text-amber-300 border-amber-700/40"
  },
  [ProductCategory.GardenInputs]: {
    label: "Garden Input",
    color: "bg-green-950/60 text-green-400 border-green-700/40"
  }
};
const RARITY_CONFIG = {
  [RarityTier.Common]: {
    label: "Common",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500/30",
    stageBadgeClass: "bg-emerald-950/60 text-emerald-400 border-emerald-700/40",
    discountPct: 10,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" })
  },
  [RarityTier.Uncommon]: {
    label: "Uncommon",
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-500/10",
    borderClass: "border-cyan-500/30",
    stageBadgeClass: "bg-cyan-950/60 text-cyan-400 border-cyan-700/40",
    discountPct: 12,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" })
  },
  [RarityTier.Rare]: {
    label: "Rare",
    colorClass: "text-amber-400",
    bgClass: "bg-amber-500/10",
    borderClass: "border-amber-500/30",
    stageBadgeClass: "bg-amber-950/60 text-amber-400 border-amber-700/40",
    discountPct: 15,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5" })
  }
};
function formatPrice(cents, discount = false) {
  const base = Number(cents) / 100;
  const final = discount ? base * 0.9 : base;
  return `$${final.toFixed(2)}`;
}
function truncatePrincipal(p) {
  return `${p.slice(0, 8)}…${p.slice(-5)}`;
}
function getProductEmoji(category) {
  if (category === ProductCategory.Spice) return "🧂";
  if (category === ProductCategory.GardenInputs) return "🌿";
  return "🌶️";
}
function getProductImageKeys(product) {
  const p = product;
  if (p.image_keys && p.image_keys.length > 0) return p.image_keys;
  if (product.image_key) return [product.image_key];
  return [];
}
function formatTokenAmount(amount, symbol) {
  const dec = TOKEN_DECIMALS[symbol] ?? 8;
  const divisor = BigInt(10 ** Math.min(dec, 8));
  const whole = amount / divisor;
  const frac = (amount % divisor).toString().padStart(Math.min(dec, 8), "0").slice(0, 6);
  return `${whole}.${frac} ${symbol}`;
}
function formatIcpEquiv(icp_e8s) {
  const icp = Number(icp_e8s) / 1e8;
  return `≈ ${icp.toFixed(4)} ICP`;
}
function StageBadge({ category }) {
  const cfg = STAGE_LABELS[category];
  if (!cfg) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium ${cfg.color}`,
      children: cfg.label
    }
  );
}
function RarityBadge({ tier }) {
  const cfg = RARITY_CONFIG[tier];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-bold ${cfg.stageBadgeClass}`,
      children: [
        cfg.icon,
        cfg.label
      ]
    }
  );
}
const STATUS_STYLE = {
  [OfferStatus.Pending]: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  [OfferStatus.Countered]: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  [OfferStatus.Accepted]: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  [OfferStatus.Rejected]: "bg-destructive/10 text-destructive border-destructive/30",
  [OfferStatus.Cancelled]: "bg-muted/40 text-muted-foreground border-border"
};
function OfferStatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-semibold ${STATUS_STYLE[status]}`,
      children: [
        status === OfferStatus.Pending && /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
        status === OfferStatus.Accepted && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
        (status === OfferStatus.Rejected || status === OfferStatus.Cancelled) && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
        status
      ]
    }
  );
}
function OfferTimeline({ offer }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  if (offer.history.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setExpanded((e) => !e),
        className: "flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors",
        children: [
          expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
          "History (",
          offer.history.length,
          ")"
        ]
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 space-y-1 pl-2 border-l border-border/60", children: offer.history.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-[10px] text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: h.action }),
          " ·",
          " ",
          formatTokenAmount(h.amount, h.token),
          " ·",
          " ",
          new Date(Number(h.timestamp) / 1e6).toLocaleString()
        ]
      },
      `${h.timestamp}-${i}`
    )) })
  ] });
}
function OfferModal({
  nftId,
  onClose,
  priceE8sMap
}) {
  const [token, setToken] = reactExports.useState("ICP");
  const [amount, setAmount] = reactExports.useState("");
  const submitOffer = useSubmitOffer();
  const amountNum = Number.parseFloat(amount) || 0;
  const decimals = TOKEN_DECIMALS[token];
  const rawAmount = BigInt(Math.round(amountNum * 10 ** Math.min(decimals, 8)));
  const icpPrice = priceE8sMap.get(token);
  const icpEquiv = icpPrice && rawAmount > BigInt(0) ? Number(rawAmount) * (Number(icpPrice) / 1e8) / 1e8 : null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || amountNum <= 0) return;
    try {
      await submitOffer.mutateAsync({
        nft_id: nftId,
        offered_token: token,
        offered_amount: rawAmount
      });
      ue.success(
        "Offer submitted! It stays open until the seller responds."
      );
      onClose();
    } catch {
      ue.error("Failed to submit offer.");
    }
  };
  const cfg = TOKEN_DISPLAY[token];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "bg-card border-border max-w-sm",
      "data-ocid": "offer-modal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "w-5 h-5 text-primary" }),
          "Make an Offer"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-muted/20 border border-border text-xs text-muted-foreground", children: [
            "NFT ID:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary/80 break-all", children: [
              nftId.slice(0, 20),
              "…"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Payment Token" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: token,
                onValueChange: (v) => setToken(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "offer-token-select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: OFFER_TOKENS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: t, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: TOKEN_DISPLAY[t].colorClass, children: TOKEN_DISPLAY[t].symbol }),
                    " ",
                    t
                  ] }, t)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs", children: [
              "Offer Amount (",
              token,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                min: "0",
                step: "any",
                value: amount,
                onChange: (e) => setAmount(e.target.value),
                placeholder: `0.0000 ${token}`,
                className: `font-mono border ${cfg.borderClass}`,
                "data-ocid": "offer-amount-input"
              }
            ),
            icpEquiv !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
              "≈ ",
              icpEquiv.toFixed(6),
              " ICP equivalent"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-lg bg-muted/20 border border-border text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This offer stays open indefinitely until the seller accepts, rejects, or you cancel it." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                className: "flex-1 bg-primary",
                disabled: submitOffer.isPending || !amount || amountNum <= 0,
                "data-ocid": "offer-submit-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "w-4 h-4" }),
                  submitOffer.isPending ? "Submitting…" : "Submit Offer"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: onClose,
                className: "border-border",
                children: "Cancel"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function CounterOfferModal({
  offerId,
  onClose,
  priceE8sMap
}) {
  const [token, setToken] = reactExports.useState("ICP");
  const [amount, setAmount] = reactExports.useState("");
  const counterOffer = useCounterOffer();
  const amountNum = Number.parseFloat(amount) || 0;
  const decimals = TOKEN_DECIMALS[token];
  const rawAmount = BigInt(Math.round(amountNum * 10 ** Math.min(decimals, 8)));
  const icpPrice = priceE8sMap.get(token);
  const icpEquiv = icpPrice && rawAmount > BigInt(0) ? Number(rawAmount) * (Number(icpPrice) / 1e8) / 1e8 : null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || amountNum <= 0) return;
    try {
      await counterOffer.mutateAsync({
        offer_id: offerId,
        counter_amount: rawAmount,
        counter_token: token
      });
      ue.success("Counter offer sent!");
      onClose();
    } catch {
      ue.error("Failed to send counter offer.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "bg-card border-border max-w-sm",
      "data-ocid": "counter-offer-modal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-5 h-5 text-primary" }),
          "Counter Offer"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Counter Token" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: token,
                onValueChange: (v) => setToken(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "counter-token-select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: OFFER_TOKENS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Counter Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                min: "0",
                step: "any",
                value: amount,
                onChange: (e) => setAmount(e.target.value),
                placeholder: `0.0000 ${token}`,
                className: "font-mono",
                "data-ocid": "counter-amount-input"
              }
            ),
            icpEquiv !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
              "≈ ",
              icpEquiv.toFixed(6),
              " ICP equivalent"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "flex-1 bg-primary",
                disabled: counterOffer.isPending || !amount || amountNum <= 0,
                "data-ocid": "counter-submit-btn",
                children: counterOffer.isPending ? "Sending…" : "Send Counter"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: onClose,
                className: "border-border",
                children: "Cancel"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function ResaleCard({
  listing,
  callerPrincipal,
  priceE8sMap
}) {
  const cfg = RARITY_CONFIG[listing.rarity_tier];
  const buyMutation = useBuyResaleListing();
  const isSeller = callerPrincipal === listing.seller.toText();
  const listedDate = new Date(
    Number(listing.listed_at) / 1e6
  ).toLocaleDateString();
  const [offerOpen, setOfferOpen] = reactExports.useState(false);
  const handleBuy = async () => {
    try {
      await buyMutation.mutateAsync(listing.id);
      ue.success(
        `Plant NFT transferred! Your ${cfg.label} ${cfg.discountPct}% discount is now active.`
      );
    } catch {
      ue.error("Purchase failed. Please try again.");
    }
  };
  const nftId = listing.plant_id.toString();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: `rounded-xl bg-card border ${cfg.borderClass} overflow-hidden shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-smooth`,
        "data-ocid": "resale-listing-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `aspect-square ${cfg.bgClass} flex items-center justify-center relative overflow-hidden`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-xl overflow-hidden border-2 border-border/60 shadow-elevated flex flex-col", children: Array.from({ length: 10 }, (_, i) => `layer-${i}`).map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1",
                    style: {
                      backgroundColor: listing.rarity_tier === RarityTier.Rare ? `oklch(${0.55 + i * 0.02} 0.25 ${40 + i * 3})` : listing.rarity_tier === RarityTier.Uncommon ? `oklch(${0.48 + i * 0.02} 0.22 ${240 + i * 2})` : `oklch(${0.48 + i * 0.015} 0.18 ${148 + i * 2})`
                    }
                  },
                  k
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RarityBadge, { tier: listing.rarity_tier }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `text-xs font-bold ${cfg.colorClass} px-2 py-0.5 rounded-full ${cfg.bgClass} border ${cfg.borderClass}`,
                    children: [
                      "-",
                      cfg.discountPct,
                      "% off"
                    ]
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-semibold text-foreground text-sm truncate", children: [
                "Plant NFT #",
                listing.plant_id.toString().slice(-6)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                "Seller: ",
                truncatePrincipal(listing.seller.toText())
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-3", children: [
              "Listed ",
              listedDate
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary text-lg font-display", children: [
                listing.price_icp.toFixed(3),
                " ICP"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-xs font-semibold ${cfg.colorClass} mt-0.5`, children: [
                "Includes ",
                cfg.discountPct,
                "% lifetime discount"
              ] })
            ] }) }),
            isSeller ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-1.5 rounded-lg bg-muted/40 border border-border text-xs text-muted-foreground", children: "Your listing" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs",
                  onClick: handleBuy,
                  disabled: buyMutation.isPending,
                  "data-ocid": "resale-buy-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-3.5 h-3.5" }),
                    buyMutation.isPending ? "Processing…" : "Buy Now"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "w-full text-xs border-primary/30 text-primary hover:bg-primary/10",
                  onClick: () => setOfferOpen(true),
                  "data-ocid": "resale-offer-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "w-3.5 h-3.5" }),
                    "Make Offer"
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    offerOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      OfferModal,
      {
        nftId,
        onClose: () => setOfferOpen(false),
        priceE8sMap
      }
    )
  ] });
}
function ResaleTab({ priceE8sMap }) {
  const { data: listings = [], isLoading } = useGetActiveResaleListings();
  const { principal } = useAuth();
  const callerPrincipal = (principal == null ? void 0 : principal.toText()) ?? null;
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4", children: Array.from({ length: 6 }, (_, i) => `rs${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl bg-card border border-border overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full mt-2" })
          ] })
        ]
      },
      k
    )) });
  }
  if (listings.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "flex flex-col items-center justify-center py-20 text-center",
        "data-ocid": "resale-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-4", children: "♻️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-xl mb-2", children: "No resale listings yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "When plant NFT holders list their NFTs for resale, they'll appear here. Visit your profile to list one of your own." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
      "data-ocid": "resale-listing-grid",
      children: listings.map((listing) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResaleCard,
        {
          listing,
          callerPrincipal,
          priceE8sMap
        },
        listing.id
      ))
    }
  );
}
function MyOfferRow({
  offer,
  priceE8sMap
}) {
  const cancelOffer = useCancelOffer();
  const acceptOffer = useAcceptOffer();
  const [counterOpen, setCounterOpen] = reactExports.useState(false);
  const handleAcceptCounter = async () => {
    try {
      await acceptOffer.mutateAsync(offer.id);
      ue.success("Counter-offer accepted!");
    } catch {
      ue.error("Failed to accept counter-offer.");
    }
  };
  const handleCancel = async () => {
    try {
      await cancelOffer.mutateAsync(offer.id);
      ue.success("Offer cancelled.");
    } catch {
      ue.error("Failed to cancel offer.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-4 rounded-xl bg-card border border-border space-y-3",
        "data-ocid": "my-offer-row",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground truncate", children: [
                "NFT:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary/80", children: [
                  offer.nft_id.slice(0, 16),
                  "…"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                formatTokenAmount(
                  offer.offered_amount,
                  offer.offered_token
                ),
                " · ",
                formatIcpEquiv(offer.icp_equivalent)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(OfferStatusBadge, { status: offer.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OfferTimeline, { offer }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            offer.status === OfferStatus.Pending && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs border-destructive/30 text-destructive hover:bg-destructive/10",
                onClick: handleCancel,
                disabled: cancelOffer.isPending,
                "data-ocid": "offer-cancel-btn",
                children: "Cancel Offer"
              }
            ),
            offer.status === OfferStatus.Countered && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "h-7 text-xs bg-primary",
                  "data-ocid": "offer-accept-btn",
                  onClick: handleAcceptCounter,
                  disabled: acceptOffer.isPending,
                  children: [
                    acceptOffer.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                    acceptOffer.isPending ? "Accepting…" : "Accept Counter"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs border-border",
                  onClick: () => setCounterOpen(true),
                  "data-ocid": "offer-counter-again-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-3 h-3" }),
                    "Counter Again"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs border-destructive/30 text-destructive",
                  onClick: handleCancel,
                  disabled: cancelOffer.isPending,
                  children: "Cancel"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    counterOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CounterOfferModal,
      {
        offerId: offer.id,
        onClose: () => setCounterOpen(false),
        priceE8sMap
      }
    )
  ] });
}
function ReceivedOfferRow({
  offer,
  priceE8sMap
}) {
  const acceptOffer = useAcceptOffer();
  const rejectOffer = useRejectOffer();
  const [counterOpen, setCounterOpen] = reactExports.useState(false);
  const handleAccept = async () => {
    try {
      await acceptOffer.mutateAsync(offer.id);
      ue.success("Offer accepted! NFT transfer initiated.");
    } catch {
      ue.error("Failed to accept offer.");
    }
  };
  const handleReject = async () => {
    try {
      await rejectOffer.mutateAsync(offer.id);
      ue.success("Offer rejected.");
    } catch {
      ue.error("Failed to reject offer.");
    }
  };
  const canAct = offer.status === OfferStatus.Pending || offer.status === OfferStatus.Countered;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-4 rounded-xl bg-card border border-border space-y-3",
        "data-ocid": "received-offer-row",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground truncate", children: [
                "From:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: truncatePrincipal(offer.buyer.toText()) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                formatTokenAmount(
                  offer.offered_amount,
                  offer.offered_token
                ),
                " · ",
                formatIcpEquiv(offer.icp_equivalent)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5 font-mono", children: [
                "NFT: ",
                offer.nft_id.slice(0, 16),
                "…"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(OfferStatusBadge, { status: offer.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OfferTimeline, { offer }),
          canAct && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "h-7 text-xs bg-primary",
                onClick: handleAccept,
                disabled: acceptOffer.isPending,
                "data-ocid": "received-offer-accept-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                  acceptOffer.isPending ? "Accepting…" : "Accept"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs border-border",
                onClick: () => setCounterOpen(true),
                "data-ocid": "received-offer-counter-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-3 h-3" }),
                  "Counter"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs border-destructive/30 text-destructive",
                onClick: handleReject,
                disabled: rejectOffer.isPending,
                "data-ocid": "received-offer-reject-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
                  rejectOffer.isPending ? "Rejecting…" : "Reject"
                ]
              }
            )
          ] })
        ]
      }
    ),
    counterOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CounterOfferModal,
      {
        offerId: offer.id,
        onClose: () => setCounterOpen(false),
        priceE8sMap
      }
    )
  ] });
}
function OffersTab({ priceE8sMap }) {
  const { isAuthenticated, login } = useAuth();
  const { data: myOffers = [], isLoading: loadingMine } = useGetMyOffers();
  const { data: received = [], isLoading: loadingReceived } = useGetOffersReceived();
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "offers-auth-gate", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "w-12 h-12 mx-auto text-muted-foreground mb-4 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Sign in to view offers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Connect your Internet Identity to send and manage offers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: login, className: "bg-primary", children: "Connect with Internet Identity" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", "data-ocid": "offers-tab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "w-4 h-4 text-primary" }),
        "My Offers",
        myOffers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: myOffers.length })
      ] }),
      loadingMine ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" }, k)) }) : myOffers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-10 rounded-xl bg-muted/10 border border-dashed border-border",
          "data-ocid": "my-offers-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No offers submitted yet." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Browse the Resale NFTs tab to make offers on listings." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: myOffers.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(MyOfferRow, { offer: o, priceE8sMap }, o.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-4 h-4 text-primary" }),
        "Offers Received",
        received.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: received.length })
      ] }),
      loadingReceived ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" }, k)) }) : received.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-10 rounded-xl bg-muted/10 border border-dashed border-border",
          "data-ocid": "received-offers-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No offers received yet." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "List one of your plant NFTs for resale to receive offers." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: received.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReceivedOfferRow,
        {
          offer: o,
          priceE8sMap
        },
        o.id
      )) })
    ] })
  ] });
}
function CartFloat({ hasMembership }) {
  const { items, itemCount, totalCents, removeItem, updateQuantity } = useCart();
  const [open, setOpen] = reactExports.useState(false);
  const count = itemCount();
  const rawTotal = totalCents();
  const total = hasMembership ? rawTotal * BigInt(9) / BigInt(10) : rawTotal;
  if (count === 0 && !open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        initial: { scale: 0 },
        animate: { scale: 1 },
        onClick: () => setOpen(true),
        className: "fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-elevated hover:bg-primary/90 transition-smooth",
        "data-ocid": "cart-float-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm", children: count }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
            "$",
            (Number(total) / 100).toFixed(2)
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 80 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 80 },
        className: "fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-card border-l border-border shadow-elevated flex flex-col",
        "data-ocid": "cart-sidebar",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-foreground", children: [
                "Cart (",
                count,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen(false),
                className: "p-1.5 rounded-lg text-muted-foreground hover:text-foreground transition-smooth",
                "aria-label": "Close cart",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 p-3 rounded-lg bg-secondary/40 border border-border",
              "data-ocid": "cart-sidebar-item",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl flex-shrink-0", children: getProductEmoji(item.category) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: item.name }),
                  item.variety && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: item.variety }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-bold mt-0.5", children: hasMembership ? formatPrice(
                    item.price_cents * BigInt(item.quantity),
                    true
                  ) : `$${(Number(item.price_cents * BigInt(item.quantity)) / 100).toFixed(2)}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => updateQuantity(item.product_id, item.quantity - 1),
                      className: "w-6 h-6 rounded flex items-center justify-center bg-secondary hover:bg-muted transition-smooth",
                      "aria-label": "Decrease",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-center text-xs font-bold text-foreground", children: item.quantity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => updateQuantity(item.product_id, item.quantity + 1),
                      className: "w-6 h-6 rounded flex items-center justify-center bg-secondary hover:bg-muted transition-smooth",
                      "aria-label": "Increase",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => removeItem(item.product_id),
                      className: "w-6 h-6 ml-1 text-muted-foreground hover:text-destructive transition-smooth",
                      "aria-label": "Remove",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] })
              ]
            },
            item.product_id.toString()
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-border space-y-3", children: [
            hasMembership && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-amber-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                "Member 10% discount applied"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground line-through", children: [
                "$",
                (Number(rawTotal) / 100).toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-foreground font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                "$",
                (Number(total) / 100).toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/checkout", className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
                "data-ocid": "cart-checkout-btn",
                children: [
                  "Proceed to Checkout",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" })
                ]
              }
            ) })
          ] })
        ]
      }
    ) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "button",
        tabIndex: 0,
        className: "fixed inset-0 z-40 bg-background/60 backdrop-blur-sm cursor-default",
        onClick: () => setOpen(false),
        onKeyDown: (e) => e.key === "Escape" && setOpen(false),
        "aria-label": "Close cart"
      }
    )
  ] });
}
function MembershipPricingCard({
  membershipPrices,
  priceUpdated
}) {
  const [selectedToken, setSelectedToken] = reactExports.useState("ICP");
  const { isAuthenticated, login, principal } = useAuth();
  const issueMembership = useIssueMembership();
  function formatMembershipPrice(symbol) {
    const raw = membershipPrices[symbol];
    if (!raw) return "—";
    const dec = TOKEN_DECIMALS[symbol];
    const divisor = BigInt(10 ** Math.min(dec, 8));
    const whole = raw / divisor;
    const frac = (raw % divisor).toString().padStart(Math.min(dec, 8), "0").slice(0, 4);
    return `${whole}.${frac} ${symbol}`;
  }
  const handlePurchase = async () => {
    if (!isAuthenticated || !principal) {
      login();
      return;
    }
    try {
      await issueMembership.mutateAsync({
        owner: principal,
        tier: MembershipTier.Standard,
        standard: NFTStandard.ICRC37
      });
      ue.success(
        "🎉 Membership NFT purchased! Your lifetime discount is now active."
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Purchase failed";
      ue.error(`Could not purchase membership: ${msg}`);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-5 rounded-xl bg-gradient-to-br from-primary/5 to-amber-500/5 border border-primary/20 space-y-4",
      "data-ocid": "membership-pricing-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-5 h-5 text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: "Membership NFT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-amber-900/50 text-amber-300 border-amber-700/50 border text-xs", children: "Lifetime Discount" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "25 ICP base price — or pay with any supported token using live ICPSwap rates." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-1.5", children: OFFER_TOKENS.map((t) => {
          const cfg = TOKEN_DISPLAY[t];
          const isSelected = selectedToken === t;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSelectedToken(t),
              className: `p-2 rounded-lg border text-center transition-smooth ${isSelected ? `${cfg.bgClass} ${cfg.borderClass} border` : "bg-muted/20 border-border hover:border-primary/30"}`,
              "data-ocid": `membership-token-${t}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-bold ${cfg.colorClass}`, children: cfg.symbol }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-[10px] font-medium mt-1 ${isSelected ? cfg.colorClass : "text-muted-foreground"}`,
                    children: formatMembershipPrice(t)
                  }
                )
              ]
            },
            t
          );
        }) }),
        priceUpdated && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-2.5 h-2.5" }),
          "Prices from ICPSwap · updated ",
          priceUpdated
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full bg-primary",
            onClick: handlePurchase,
            disabled: issueMembership.isPending,
            "data-ocid": "membership-buy-btn",
            children: issueMembership.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
              "Processing…"
            ] }) : !isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4" }),
              "Sign in to Purchase"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4" }),
              "Purchase with ",
              selectedToken
            ] })
          }
        )
      ]
    }
  );
}
function ProductImageGallery({
  imageKeys,
  productName,
  category
}) {
  const [current, setCurrent] = reactExports.useState(0);
  if (imageKeys.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video rounded-lg bg-secondary flex items-center justify-center text-6xl mb-4", children: getProductEmoji(category) });
  }
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(imageKeys.length - 1, c + 1));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video rounded-lg overflow-hidden bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: `/api/object-storage/${imageKeys[current]}`,
          alt: productName,
          className: "w-full h-full object-cover"
        }
      ),
      imageKeys.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: prev,
            disabled: current === 0,
            className: "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/90 border border-border flex items-center justify-center text-foreground hover:bg-card transition-smooth disabled:opacity-30",
            "aria-label": "Previous",
            "data-ocid": "product-gallery-prev",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: next,
            disabled: current === imageKeys.length - 1,
            className: "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/90 border border-border flex items-center justify-center text-foreground hover:bg-card transition-smooth disabled:opacity-30",
            "aria-label": "Next",
            "data-ocid": "product-gallery-next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-card/80 border border-border text-xs text-foreground", children: [
          current + 1,
          " of ",
          imageKeys.length
        ] })
      ] })
    ] }),
    imageKeys.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 overflow-x-auto pb-1", children: imageKeys.map((key, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setCurrent(idx),
        className: `flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border-2 transition-smooth ${idx === current ? "border-primary" : "border-border opacity-60 hover:opacity-100"}`,
        "aria-label": `View ${productName} ${idx + 1}`,
        "data-ocid": `product-thumb-${idx + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `/api/object-storage/${key}`,
            alt: "",
            className: "w-full h-full object-cover"
          }
        )
      },
      key
    )) })
  ] });
}
function ProductModal({
  product,
  hasMembership,
  onClose
}) {
  const addItem = useCart((s) => s.addItem);
  const [qty, setQty] = reactExports.useState(1);
  const imageKeys = getProductImageKeys(product);
  const handleAdd = () => {
    addItem({
      product_id: product.id,
      name: product.name,
      variety: product.variety,
      price_cents: product.price_cents,
      quantity: qty,
      category: product.category
    });
    ue.success(`Added ${qty}× ${product.name} to cart`);
    onClose();
  };
  const displayPrice = hasMembership ? Number(product.price_cents) / 100 * 0.9 : Number(product.price_cents) / 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "bg-card border-border max-w-md",
      "data-ocid": "product-modal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-foreground text-xl", children: product.name }),
            product.variety && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: product.variety })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { category: product.category })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProductImageGallery,
          {
            imageKeys,
            productName: product.name,
            category: product.category
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: product.description }),
        hasMembership && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/30 border border-amber-700/30 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-300", children: "Member discount applied — 10% off!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-display font-bold text-primary", children: [
              "$",
              displayPrice.toFixed(2)
            ] }),
            hasMembership && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground line-through", children: [
              "$",
              (Number(product.price_cents) / 100).toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setQty(Math.max(1, qty - 1)),
                className: "w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-smooth",
                "aria-label": "Decrease quantity",
                "data-ocid": "modal-qty-decrease",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center font-bold text-foreground", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setQty(qty + 1),
                className: "w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-smooth",
                "aria-label": "Increase quantity",
                "data-ocid": "modal-qty-increase",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground",
            onClick: handleAdd,
            "data-ocid": "modal-add-to-cart",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
              "Add ",
              qty,
              " to Cart — $",
              (displayPrice * qty).toFixed(2)
            ]
          }
        )
      ]
    }
  ) });
}
function ProductCard({
  product,
  hasMembership,
  onSelect
}) {
  const addItem = useCart((s) => s.addItem);
  const imageKeys = getProductImageKeys(product);
  const firstImage = imageKeys[0];
  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addItem({
      product_id: product.id,
      name: product.name,
      variety: product.variety,
      price_cents: product.price_cents,
      quantity: 1,
      category: product.category
    });
    ue.success(`Added ${product.name} to cart`);
  };
  const displayPrice = hasMembership ? Number(product.price_cents) / 100 * 0.9 : Number(product.price_cents) / 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "group rounded-xl bg-card border border-border overflow-hidden shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-smooth cursor-pointer",
      onClick: onSelect,
      "data-ocid": "product-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square bg-secondary flex items-center justify-center text-5xl relative overflow-hidden", children: [
          firstImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: `/api/object-storage/${firstImage}`,
              alt: product.name,
              className: "w-full h-full object-cover"
            }
          ) : getProductEmoji(product.category),
          imageKeys.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 right-2 px-1.5 py-0.5 rounded-full bg-card/80 border border-border text-[10px] text-foreground", children: [
            "+",
            imageKeys.length - 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { category: product.category }) }),
          hasMembership && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-400 text-xs font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5" }),
            "-10%"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm truncate", children: product.name }),
              product.variety && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: product.variety })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary text-sm", children: [
                "$",
                displayPrice.toFixed(2)
              ] }),
              hasMembership && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground line-through leading-none", children: [
                "$",
                (Number(product.price_cents) / 100).toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs",
              onClick: handleQuickAdd,
              "data-ocid": "product-add-to-cart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3.5 h-3.5" }),
                "Add to Cart"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ProductGrid({ count = 8 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4", children: Array.from({ length: count }, (_, i) => `sk${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl bg-card border border-border overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full mt-2" })
        ] })
      ]
    },
    k
  )) });
}
function MarketplacePage() {
  const [activeTab, setActiveTab] = reactExports.useState(null);
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  const isResaleTab = activeTab === "resale";
  const isOffersTab = activeTab === "offers";
  const activeCategory = isResaleTab || isOffersTab ? null : activeTab;
  const { data: allProducts, isLoading: allLoading } = useProducts();
  const { data: catProducts, isLoading: catLoading } = useProductsByCategory(
    activeCategory ?? void 0
  );
  const { data: hasMembership = false } = useHasMembership();
  const { data: tokenPrices = [], dataUpdatedAt } = useTokenPrices();
  const { data: membershipPrices = {} } = useMembershipPrices();
  const priceE8sMap = new Map(
    tokenPrices.map((p) => [p.token, p.price_in_icp_e8s])
  );
  const priceUpdated = dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : null;
  const products = activeCategory ? catProducts : allProducts;
  const isLoading = activeCategory ? catLoading : allLoading;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-7 h-7 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground", children: [
          "The ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "Spicy" }),
          " Shop"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground ml-10", children: "Rare chili plants at every growth stage — plus artisan smoked spices, garden inputs & resale NFTs with rarity discounts." })
    ] }),
    hasMembership && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-center gap-3 p-4 rounded-xl bg-amber-950/30 border border-amber-700/30 mb-6",
        "data-ocid": "member-discount-banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-amber-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-amber-300", children: "Member Pricing Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-400/80", children: "Your loyalty discount is applied to all prices below." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-amber-900/50 text-amber-300 border-amber-700/50 border text-xs", children: "-10% OFF" })
        ]
      }
    ),
    isResaleTab && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-start gap-3 p-4 rounded-xl bg-cyan-950/30 border border-cyan-700/30 mb-6",
        "data-ocid": "resale-info-banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-cyan-300", children: "Plant NFT Resale Market" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-cyan-400/80", children: "Buy NFTs directly from other holders. The rarity tier discount transfers to you immediately upon purchase." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center gap-1.5 flex-wrap mb-8 p-1 rounded-xl bg-secondary/40 border border-border w-fit",
        "data-ocid": "marketplace-filter",
        children: CATEGORIES.map(({ label, emoji, value, price }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(value),
            className: [
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth",
              activeTab === value ? "bg-primary text-primary-foreground shadow-subtle" : "text-muted-foreground hover:text-foreground hover:bg-card"
            ].join(" "),
            "data-ocid": "marketplace-filter-tab",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
              price && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs opacity-70 ${activeTab === value ? "text-primary-foreground" : "text-muted-foreground"}`,
                  children: price
                }
              )
            ]
          },
          label
        ))
      }
    ),
    isOffersTab ? /* @__PURE__ */ jsxRuntimeExports.jsx(OffersTab, { priceE8sMap }) : isResaleTab ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResaleTab, { priceE8sMap }) : isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProductGrid, {}) : products && products.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
      (activeTab === null || activeTab === null) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        MembershipPricingCard,
        {
          membershipPrices,
          priceUpdated
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
          "data-ocid": "product-list",
          children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductCard,
            {
              product: p,
              hasMembership,
              onSelect: () => setSelectedProduct(p)
            },
            p.id.toString()
          ))
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "flex flex-col items-center justify-center py-20 text-center",
        "data-ocid": "marketplace-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-4", children: "🌶️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-xl mb-2", children: "No products in this category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs mb-6", children: "Our next harvest is incoming. Check back soon for fresh chili plants!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              className: "border-primary/40 text-primary hover:bg-primary/10",
              onClick: () => setActiveTab(null),
              children: "View all products"
            }
          )
        ]
      }
    ),
    selectedProduct && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductModal,
      {
        product: selectedProduct,
        hasMembership,
        onClose: () => setSelectedProduct(null)
      }
    ),
    !isResaleTab && !isOffersTab && /* @__PURE__ */ jsxRuntimeExports.jsx(CartFloat, { hasMembership })
  ] });
}
export {
  MarketplacePage as default
};
