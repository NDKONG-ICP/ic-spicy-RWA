import { d as createLucideIcon, o as useAuth, ao as useActorReady, ap as useProfile, af as useIsAdmin, y as useMyOrders, aq as useSaveProfile, w as useNavigate, r as reactExports, j as jsxRuntimeExports, a as Button, F as Flame, m as motion, X, B as Badge, f as ue, t as useMyPlants, ar as useGetMyResaleListings, as as useCancelResaleListing, R as RarityTier, s as useMembership, h as Award, x as MembershipTier, at as useListNFTForResale, L as Link } from "./index-BzyHOfJH.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-Cx326vb4.js";
import { I as Input } from "./input-WgY0hUlN.js";
import { L as Label } from "./label-B1Nh5Ul-.js";
import { S as Separator } from "./separator-CDaWixp7.js";
import { S as Skeleton } from "./skeleton-4nFxEZGN.js";
import { T as Textarea } from "./textarea-DrepslR5.js";
import { C as Crown } from "./crown-DtVyiD3w.js";
import { P as Pen, C as Coins } from "./pen-CMzj9-LX.js";
import { A as ArrowLeftRight } from "./arrow-left-right-CRj1Q2zP.js";
import { G as Gem } from "./gem-BVBHDtah.js";
import { T as Tag } from "./tag-Bk-BJ2uo.js";
import { C as ChevronRight } from "./chevron-right-C_LI6q7h.js";
import { S as Sparkles } from "./sparkles-pPm8l2Gj.js";
import { S as Star } from "./star-DXq3cFWp.js";
import { E as ExternalLink } from "./external-link-B3YaW6wq.js";
import "./index-B4IHimjK.js";
import "./index-D4b-hkBZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const RARITY_CONFIG = {
  [RarityTier.Common]: {
    label: "Common",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500/30",
    gradientColors: [
      "oklch(0.5 0.18 150)",
      "oklch(0.4 0.12 160)",
      "oklch(0.55 0.15 140)",
      "oklch(0.45 0.2 130)",
      "oklch(0.6 0.1 155)",
      "oklch(0.4 0.16 145)",
      "oklch(0.52 0.14 165)",
      "oklch(0.48 0.18 135)",
      "oklch(0.57 0.12 150)",
      "oklch(0.44 0.2 140)"
    ],
    discountPct: 10,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" })
  },
  [RarityTier.Uncommon]: {
    label: "Uncommon",
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-500/10",
    borderClass: "border-cyan-500/30",
    gradientColors: [
      "oklch(0.5 0.22 240)",
      "oklch(0.42 0.18 250)",
      "oklch(0.55 0.2 235)",
      "oklch(0.48 0.24 245)",
      "oklch(0.6 0.16 255)",
      "oklch(0.44 0.22 230)",
      "oklch(0.52 0.2 260)",
      "oklch(0.46 0.18 240)",
      "oklch(0.58 0.14 250)",
      "oklch(0.4 0.24 245)"
    ],
    discountPct: 12,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" })
  },
  [RarityTier.Rare]: {
    label: "Rare",
    colorClass: "text-amber-400",
    bgClass: "bg-amber-500/10",
    borderClass: "border-amber-500/30",
    gradientColors: [
      "oklch(0.65 0.22 50)",
      "oklch(0.55 0.28 40)",
      "oklch(0.7 0.2 60)",
      "oklch(0.58 0.26 45)",
      "oklch(0.75 0.18 55)",
      "oklch(0.5 0.3 35)",
      "oklch(0.68 0.22 65)",
      "oklch(0.53 0.24 48)",
      "oklch(0.72 0.16 52)",
      "oklch(0.48 0.28 42)"
    ],
    discountPct: 15,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5" })
  }
};
function getRarityFromNftId(nftId) {
  const lower = nftId.toLowerCase();
  if (lower.includes("rare")) return RarityTier.Rare;
  if (lower.includes("uncommon")) return RarityTier.Uncommon;
  return RarityTier.Common;
}
function formatStage(stage) {
  const map = {
    Seed: "🌱 Seed",
    Seedling: "🪴 Seedling",
    Mature: "🌶️ Mature"
  };
  return map[stage] ?? stage;
}
function CompositeNFTArtwork({
  rarityTier,
  size = "md"
}) {
  const cfg = RARITY_CONFIG[rarityTier];
  const sizeClass = size === "lg" ? "w-32 h-32" : size === "md" ? "w-20 h-20" : "w-12 h-12";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `${sizeClass} rounded-xl overflow-hidden border-2 ${cfg.borderClass} flex-shrink-0 shadow-elevated`,
      "aria-label": `${cfg.label} rarity NFT composite artwork`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex flex-col", children: cfg.gradientColors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-full flex-1",
          style: { backgroundColor: color }
        },
        color
      )) })
    }
  );
}
function ListForResaleModal({
  plant,
  onClose
}) {
  const [price, setPrice] = reactExports.useState("1.0");
  const listMutation = useListNFTForResale();
  const rarityTier = getRarityFromNftId(plant.nft_id ?? "");
  const cfg = RARITY_CONFIG[rarityTier];
  const handleConfirm = async () => {
    const priceNum = Number.parseFloat(price);
    if (Number.isNaN(priceNum) || priceNum < 0.01) {
      ue.error("Minimum price is 0.01 ICP.");
      return;
    }
    try {
      const result = await listMutation.mutateAsync({
        plantId: plant.id,
        priceIcp: priceNum
      });
      if (result && "__kind__" in result && result.__kind__ === "err") {
        ue.error(String(result.err));
        return;
      }
      ue.success(`Plant NFT listed for ${priceNum.toFixed(3)} ICP!`);
      onClose();
    } catch {
      ue.error("Failed to list NFT. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "bg-card border-border max-w-sm",
      "data-ocid": "list-resale-modal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-foreground", children: "List NFT for Resale" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-4 rounded-xl bg-secondary/40 border border-border mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CompositeNFTArtwork, { rarityTier, size: "sm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm truncate", children: plant.common_name ?? plant.variety }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: formatStage(plant.stage) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: `mt-1 text-[10px] px-1.5 h-4 border ${cfg.borderClass} ${cfg.bgClass} ${cfg.colorClass} font-bold flex items-center gap-0.5 w-fit`,
                children: [
                  cfg.icon,
                  cfg.label,
                  " — ",
                  cfg.discountPct,
                  "% discount transfers"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-lg bg-primary/10 border border-primary/20 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary/90", children: [
          "The rarity discount (",
          cfg.discountPct,
          "%) will transfer to the buyer automatically upon purchase."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "resale-price", className: "text-sm font-medium", children: "Price (ICP)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "resale-price",
              type: "number",
              min: "0.01",
              step: "0.01",
              value: price,
              onChange: (e) => setPrice(e.target.value),
              placeholder: "1.00",
              className: "h-11",
              "data-ocid": "resale-price-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Minimum 0.01 ICP" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "flex-1 bg-primary hover:bg-primary/90",
              onClick: handleConfirm,
              disabled: listMutation.isPending,
              "data-ocid": "resale-confirm-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4" }),
                listMutation.isPending ? "Listing…" : "Confirm Listing"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, className: "border-border", children: "Cancel" })
        ] })
      ]
    }
  ) });
}
function MyNFTsTab() {
  const { data: myPlants = [], isLoading: plantsLoading } = useMyPlants();
  const { data: myListings = [], isLoading: listingsLoading } = useGetMyResaleListings();
  const cancelMutation = useCancelResaleListing();
  const [listingPlant, setListingPlant] = reactExports.useState(null);
  const navigate = useNavigate();
  const nftPlants = myPlants.filter((p) => p.nft_id);
  const listingByPlantId = myListings.reduce((acc, l) => {
    acc[l.plant_id.toString()] = l;
    return acc;
  }, {});
  const isLoading = plantsLoading || listingsLoading;
  const handleDelist = async (listingId) => {
    try {
      const result = await cancelMutation.mutateAsync(listingId);
      if (result && "__kind__" in result && result.__kind__ === "err") {
        ue.error(String(result.err));
        return;
      }
      ue.success("Listing cancelled. NFT is now Holding.");
    } catch {
      ue.error("Failed to cancel listing.");
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 w-full rounded-2xl" }, k)) });
  }
  if (nftPlants.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl bg-muted/30 border border-dashed border-border p-8 text-center",
        "data-ocid": "my-nfts-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-6 h-6 text-primary/60" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: "No Plant NFTs to List" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 max-w-xs mx-auto", children: "Claim a plant NFT from the nursery or marketplace to start listing on the resale market." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "border-border",
              onClick: () => navigate({ to: "/marketplace" }),
              children: "Browse Marketplace"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "my-nfts-grid", children: [
    nftPlants.map((plant) => {
      const rarityTier = getRarityFromNftId(plant.nft_id ?? "");
      const cfg = RARITY_CONFIG[rarityTier];
      const listing = listingByPlantId[plant.id.toString()];
      const isListed = !!listing;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          className: `rounded-2xl bg-card border ${cfg.borderClass} p-5 flex gap-4`,
          "data-ocid": "my-nft-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CompositeNFTArtwork, { rarityTier, size: "md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm leading-tight truncate", children: plant.common_name ?? plant.variety }),
                  plant.latin_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic truncate", children: plant.latin_name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-[10px] px-1.5 py-0 h-4 border ${cfg.borderClass} ${cfg.bgClass} ${cfg.colorClass} font-bold flex items-center gap-0.5 flex-shrink-0`,
                    children: [
                      cfg.icon,
                      cfg.label
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatStage(plant.stage) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `font-semibold ${cfg.colorClass} flex items-center gap-0.5`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-3 h-3" }),
                      cfg.discountPct,
                      "% Discount"
                    ]
                  }
                )
              ] }),
              isListed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-2 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-700/40 text-cyan-300 font-semibold", children: [
                  "Listed at ",
                  listing.price_icp.toFixed(3),
                  " ICP"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-6 text-xs px-2 border-destructive/40 text-destructive hover:bg-destructive/10",
                    onClick: () => handleDelist(listing.id),
                    disabled: cancelMutation.isPending,
                    "data-ocid": "delist-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
                      "Delist"
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-muted/60 border border-border text-muted-foreground", children: "Holding" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "h-6 text-xs px-2 bg-primary hover:bg-primary/90 text-primary-foreground",
                    onClick: () => setListingPlant(plant),
                    "data-ocid": "list-resale-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" }),
                      "List for Resale"
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        plant.id.toString()
      );
    }),
    listingPlant && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ListForResaleModal,
      {
        plant: listingPlant,
        onClose: () => setListingPlant(null)
      }
    )
  ] });
}
function NFTCollectionSection() {
  const { data: myPlants = [], isLoading } = useMyPlants();
  const navigate = useNavigate();
  const nftPlants = myPlants.filter((p) => p.nft_id);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-32" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-xl" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl bg-card border border-border p-6 shadow-subtle",
      "data-ocid": "nft-collection-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground", children: "NFT Collection" }),
          nftPlants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "ml-auto bg-primary/15 text-primary border-primary/30 text-xs", children: [
            nftPlants.length,
            " Plant",
            nftPlants.length !== 1 ? "s" : ""
          ] })
        ] }),
        nftPlants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl bg-muted/30 border border-dashed border-border p-6 text-center",
            "data-ocid": "nft-collection-empty",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-6 h-6 text-primary/60" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: "No Plant NFTs Yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 max-w-xs mx-auto", children: "Claim a plant NFT by scanning a QR label at the nursery or from the marketplace. NFT holders get a lifetime storewide discount based on rarity tier." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-2 mb-4", children: Object.values(RarityTier).map((tier) => {
                const tc = RARITY_CONFIG[tier];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${tc.borderClass} ${tc.bgClass} ${tc.colorClass}`,
                    children: [
                      tc.icon,
                      tc.label,
                      " — ",
                      tc.discountPct,
                      "% off"
                    ]
                  },
                  tier
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "border-border",
                  onClick: () => navigate({ to: "/marketplace" }),
                  children: "Browse Marketplace"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "nft-collection-grid", children: nftPlants.map((plant) => /* @__PURE__ */ jsxRuntimeExports.jsx(NFTPlantCard, { plant }, plant.id.toString())) })
      ]
    }
  );
}
function NFTPlantCard({ plant }) {
  const rarityTier = getRarityFromNftId(plant.nft_id ?? "");
  const cfg = RARITY_CONFIG[rarityTier];
  const plantingDate = plant.planting_date ? new Date(Number(plant.planting_date) / 1e6).toLocaleDateString() : "Unknown";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      className: `rounded-2xl bg-card border ${cfg.borderClass} p-5 flex gap-4 hover:shadow-elevated transition-smooth`,
      "data-ocid": "nft-plant-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CompositeNFTArtwork, { rarityTier, size: "md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm leading-tight truncate", children: plant.common_name ?? plant.variety }),
              plant.latin_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic truncate", children: plant.latin_name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: `text-[10px] px-1.5 py-0 h-4 border ${cfg.borderClass} ${cfg.bgClass} ${cfg.colorClass} font-bold flex items-center gap-0.5`,
                children: [
                  cfg.icon,
                  cfg.label
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatStage(plant.stage) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `text-xs font-semibold ${cfg.colorClass} flex items-center gap-0.5`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-3 h-3" }),
                  cfg.discountPct,
                  "% Lifetime Discount"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-3 gap-y-0.5 text-xs text-muted-foreground mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Planted: ",
              plantingDate
            ] }),
            plant.genetics && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
              "Genetics: ",
              plant.genetics
            ] })
          ] }),
          plant.nft_id && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-mono text-muted-foreground truncate mb-2", children: [
            "NFT: ",
            plant.nft_id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/nims",
              className: `inline-flex items-center gap-1 text-xs font-semibold ${cfg.colorClass} hover:opacity-80 transition-smooth`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                "View in NIMS"
              ]
            }
          )
        ] })
      ]
    }
  );
}
const WALLET_TOKENS = [
  { symbol: "ICP", name: "Internet Computer", icon: "⚡" },
  { symbol: "ckBTC", name: "Wrapped Bitcoin", icon: "₿" },
  { symbol: "ckETH", name: "Wrapped Ethereum", icon: "Ξ" },
  { symbol: "ckUSDC", name: "USD Coin", icon: "$" }
];
function WalletSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl bg-card border border-border p-6",
      "data-ocid": "wallet-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground", children: "Token Wallet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "ml-auto text-xs", children: "Coming Soon" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: WALLET_TOKENS.map((token) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-3 rounded-lg bg-muted/40 border border-border",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg w-7 text-center", children: token.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: token.symbol }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: token.name })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-muted-foreground", children: "0.000" })
            ]
          },
          token.symbol
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground text-center", children: "Connect wallet to view balances and transaction history" })
      ]
    }
  );
}
function MembershipSection() {
  const { data: membership, isLoading } = useMembership();
  const navigate = useNavigate();
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-2xl" });
  if (membership) {
    const issuedDate = new Date(
      Number(membership.issued_at) / 1e6
    ).toLocaleDateString();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl bg-card border border-primary/30 p-6",
        "data-ocid": "membership-active",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground", children: "Membership NFT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-primary/15 text-primary border-primary/30 text-xs", children: "Active" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-foreground", children: [
                membership.tier === MembershipTier.Premium ? "🔥 Premium" : "🌶 Standard",
                " ",
                "Member"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Issued ",
                issuedDate,
                " · ",
                membership.nft_standard
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
            "10% discount on all purchases",
            "DAO voting access",
            "Exclusive member plant drops"
          ].map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: benefit })
          ] }, benefit)) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl bg-card border border-border p-6",
      "data-ocid": "membership-cta",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground", children: "Membership NFT" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/40 border border-border p-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-3", children: "Become an IC SPICY Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
            "10% discount on all purchases",
            "DAO governance voting rights",
            "Support without taking physical custody",
            "Exclusive member-only plant drops"
          ].map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: benefit })
          ] }, benefit)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full bg-primary font-semibold",
            "data-ocid": "membership-become-btn",
            onClick: () => navigate({ to: "/marketplace" }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 mr-2" }),
              "Become a Member"
            ]
          }
        )
      ]
    }
  );
}
function OnboardingForm() {
  const [username, setUsername] = reactExports.useState("");
  const [bio, setBio] = reactExports.useState("");
  const saveProfile = useSaveProfile();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      ue.error("Username is required.");
      return;
    }
    try {
      await saveProfile.mutateAsync({ username: username.trim(), bio });
      ue.success("Welcome to IC SPICY! 🌶️");
    } catch {
      ue.error("Failed to create profile. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      className: "min-h-[70vh] flex items-center justify-center",
      "data-ocid": "onboarding-container",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-10 h-10 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground mb-2", children: [
            "Welcome to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "IC SPICY" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Create your profile to join our community of chili enthusiasts, track rare plants, and access exclusive DAO features." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "rounded-2xl bg-card border border-border p-7 shadow-elevated space-y-5",
            "data-ocid": "onboarding-form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ob-username", className: "text-sm font-medium", children: [
                  "Username ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "ob-username",
                    value: username,
                    onChange: (e) => setUsername(e.target.value),
                    placeholder: "e.g. spicy_grower",
                    className: "h-11",
                    maxLength: 32,
                    required: true,
                    "data-ocid": "onboarding-username-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Visible to the community. Max 32 characters." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ob-bio", className: "text-sm font-medium", children: [
                  "Bio ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "(optional)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "ob-bio",
                    value: bio,
                    onChange: (e) => setBio(e.target.value),
                    placeholder: "Tell the community about your chili growing passion…",
                    className: "resize-none text-sm",
                    rows: 3,
                    maxLength: 256,
                    "data-ocid": "onboarding-bio-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "w-full h-11 bg-primary font-semibold",
                  disabled: saveProfile.isPending || !username.trim(),
                  "data-ocid": "onboarding-submit-btn",
                  children: saveProfile.isPending ? "Creating profile…" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 mr-2" }),
                    "Join IC SPICY"
                  ] })
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function ProfilePage() {
  const { isAuthenticated, login, principal, isInitializing } = useAuth();
  const { actorReady } = useActorReady();
  const { data: profile, isPending: isProfilePending } = useProfile();
  const { data: isAdmin, isPending: isAdminPending } = useIsAdmin();
  const { data: orders } = useMyOrders();
  const saveProfile = useSaveProfile();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [editing, setEditing] = reactExports.useState(false);
  const [username, setUsername] = reactExports.useState("");
  const [bio, setBio] = reactExports.useState("");
  console.log("[ProfilePage]", {
    principal: (principal == null ? void 0 : principal.toText()) ?? "anon",
    isAuthenticated,
    isInitializing,
    actorReady,
    isAdmin,
    isAdminPending,
    isProfilePending,
    hasProfile: !!profile
  });
  reactExports.useEffect(() => {
    if (profile) {
      setUsername(profile.username);
      setBio(profile.bio);
    }
  }, [profile]);
  const startEdit = () => {
    setUsername((profile == null ? void 0 : profile.username) ?? "");
    setBio((profile == null ? void 0 : profile.bio) ?? "");
    setEditing(true);
  };
  const handleSave = async () => {
    if (!username.trim()) {
      ue.error("Username is required.");
      return;
    }
    try {
      await saveProfile.mutateAsync({ username: username.trim(), bio });
      ue.success("Profile updated!");
      setEditing(false);
    } catch {
      ue.error("Failed to save profile.");
    }
  };
  if (isInitializing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-2xl" })
    ] });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-28 text-center",
        "data-ocid": "profile-unauthenticated",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-10 h-10 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Sign in to view your profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8 max-w-sm", children: "Use Internet Identity to securely access your IC SPICY account, track your plants, and join the community." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: login,
              className: "bg-primary h-11 px-8 font-semibold",
              "data-ocid": "profile-login-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 mr-2" }),
                "Connect with Internet Identity"
              ]
            }
          )
        ]
      }
    );
  }
  const isStillLoading = isInitializing || isAdminPending || !actorReady || isProfilePending;
  if (isAuthenticated && isStillLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full rounded-2xl" })
    ] });
  }
  if (!profile && isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        className: "min-h-[70vh] flex items-center justify-center",
        "data-ocid": "admin-profile-fallback",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-10 h-10 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground mb-2", children: [
            "Welcome back, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "Admin" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8 leading-relaxed max-w-xs mx-auto", children: "You're signed in as the nursery owner. Head to the Admin panel to manage the platform." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "bg-primary font-semibold h-11 px-8",
                onClick: () => navigate({ to: "/admin" }),
                "data-ocid": "admin-fallback-goto-admin",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4 mr-2" }),
                  "Go to Admin Panel"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "h-11 border-border",
                onClick: () => navigate({ to: "/" }),
                "data-ocid": "admin-fallback-goto-home",
                children: "Back to Home"
              }
            )
          ] })
        ] })
      }
    );
  }
  if (!profile) return /* @__PURE__ */ jsxRuntimeExports.jsx(OnboardingForm, {});
  const memberSince = new Date(
    Number(profile.created_at) / 1e6
  ).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", "data-ocid": "profile-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        className: "mb-6 flex items-center justify-between",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground", children: [
              "My ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "Profile" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
              "Member since ",
              memberSince
            ] })
          ] }),
          !editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: startEdit,
              className: "border-border",
              "data-ocid": "profile-edit-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4 mr-1" }),
                "Edit Profile"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center gap-1 p-1 rounded-xl bg-secondary/40 border border-border w-fit mb-6",
        "data-ocid": "profile-tabs",
        children: [
          {
            id: "overview",
            label: "Overview",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" })
          },
          {
            id: "my-nfts",
            label: "My NFTs",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-3.5 h-3.5" })
          }
        ].map(({ id, label, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(id),
            className: [
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth",
              activeTab === id ? "bg-primary text-primary-foreground shadow-subtle" : "text-muted-foreground hover:text-foreground hover:bg-card"
            ].join(" "),
            "data-ocid": `profile-tab-${id}`,
            children: [
              icon,
              label
            ]
          },
          id
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.05 },
        className: "space-y-5",
        children: activeTab === "my-nfts" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl bg-card border border-border p-6 shadow-subtle",
            "data-ocid": "my-nfts-section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground", children: "My NFTs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "List your plant NFTs for resale on the marketplace. The rarity discount transfers to the buyer upon purchase." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MyNFTsTab, {})
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-2xl bg-card border border-border p-6 shadow-subtle",
              "data-ocid": "profile-card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-9 h-9 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-username", className: "text-xs", children: "Username" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "edit-username",
                        value: username,
                        onChange: (e) => setUsername(e.target.value),
                        placeholder: "your_username",
                        className: "h-9 text-sm",
                        maxLength: 32,
                        "data-ocid": "profile-username-input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-bio", className: "text-xs", children: "Bio" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "edit-bio",
                        value: bio,
                        onChange: (e) => setBio(e.target.value),
                        placeholder: "Tell the community about yourself…",
                        className: "text-sm resize-none",
                        rows: 3,
                        maxLength: 256,
                        "data-ocid": "profile-bio-input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        onClick: handleSave,
                        disabled: saveProfile.isPending || !username.trim(),
                        className: "bg-primary",
                        "data-ocid": "profile-save-btn",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5 mr-1" }),
                          saveProfile.isPending ? "Saving…" : "Save Changes"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        variant: "ghost",
                        onClick: () => setEditing(false),
                        "data-ocid": "profile-cancel-btn",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 mr-1" }),
                          "Cancel"
                        ]
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xl text-foreground", children: profile.username }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-mono mt-1 truncate max-w-xs", children: [
                    principal == null ? void 0 : principal.toText().slice(0, 28),
                    "…"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                    Number(profile.follower_count),
                    " follower",
                    Number(profile.follower_count) !== 1 ? "s" : ""
                  ] }),
                  profile.bio ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: profile.bio }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic mt-3", children: "No bio yet. Add one to tell the community about yourself!" })
                ] }) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NFTCollectionSection, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MembershipSection, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WalletSection, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl bg-card border border-border p-6 shadow-subtle",
              "data-ocid": "profile-orders-section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground mb-4", children: "Recent Orders" }),
                orders && orders.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", "data-ocid": "profile-orders", children: orders.slice(0, 5).map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground", children: [
                        "Order #",
                        order.id.toString()
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                        order.items.length,
                        " item",
                        order.items.length !== 1 ? "s" : "",
                        " ·",
                        " ",
                        order.pickup ? "Local pickup" : "Shipping"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-primary font-bold", children: [
                        "$",
                        (Number(order.total_cents) / 100).toFixed(2)
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs mt-1", children: order.status })
                    ] })
                  ] })
                ] }, order.id.toString())) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-center py-8",
                    "data-ocid": "profile-orders-empty",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No orders yet." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          className: "mt-3 border-border",
                          onClick: () => navigate({ to: "/marketplace" }),
                          children: "Browse the Marketplace"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  ProfilePage as default
};
