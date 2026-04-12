import { d as createLucideIcon, aa as useQuery, ab as useActor, ac as useQueryClient, ad as useMutation, ae as createActor, w as useAuth, s as useTokenPrices, j as jsxRuntimeExports, F as Flame, a as Button, m as motion, f as ue, _ as useMyPlants, B as Badge, R as RarityTier, L as Link, r as reactExports, am as TxType, an as TxStatus } from "./index-LPJkeeMn.js";
import { C as Card, a as CardHeader, d as CardTitle, b as CardContent } from "./card-CEaSd9n-.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, h as DialogFooter } from "./dialog-Dxe68on8.js";
import { I as Input } from "./input-CdZElJND.js";
import { L as Label } from "./label-C73ZNQnn.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-D66ew4V3.js";
import { S as Skeleton } from "./skeleton-eXdTQJWV.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-B5-n1OTX.js";
import { C as Copy } from "./copy-CTPIa1Ik.js";
import { R as RefreshCw } from "./refresh-cw-DumY1THL.js";
import { G as Gem } from "./gem-CcfnSxZT.js";
import { S as Send } from "./send-HY9Jh9w9.js";
import { C as CircleCheck } from "./circle-check-D7u3bh5m.js";
import { C as Clock } from "./clock-D6kaCZpp.js";
import { C as CircleX } from "./circle-x-wY2k1vrY.js";
import { C as Crown } from "./crown-CLdcNAjF.js";
import { S as Sparkles } from "./sparkles-CqEg4po-.js";
import { S as Star } from "./star-ayZEfesG.js";
import { E as ExternalLink } from "./external-link-DyW81ppu.js";
import "./index-BlOHC6Km.js";
import "./index-3nV1auV4.js";
import "./chevron-up-B7dbkp97.js";
import "./check-CmtDsofZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }]
];
const ArrowDownLeft = createLucideIcon("arrow-down-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
function useBackendActor() {
  return useActor(createActor);
}
function useWalletBalances() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["walletBalances"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWalletBalances();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 3e4
  });
}
function useWalletTransactions() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["walletTransactions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getWalletTransactions();
    },
    enabled: !!actor && !isFetching
  });
}
function useSendToken() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Not connected");
      const result = await actor.sendToken(input);
      if (result.__kind__ === "err") throw new Error(result.err);
      return result.ok;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["walletBalances"] });
      qc.invalidateQueries({ queryKey: ["walletTransactions"] });
    }
  });
}
function useWalletAddress() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["walletAddress"],
    queryFn: async () => {
      if (!actor) return "";
      return actor.getWalletAddress();
    },
    enabled: !!actor && !isFetching
  });
}
const TOKEN_CONFIG = {
  ICP: {
    colorClass: "text-purple-400",
    bgClass: "bg-purple-500/20 border border-purple-500/30",
    borderClass: "border-purple-500/30",
    symbol: "ICP"
  },
  ckBTC: {
    colorClass: "text-orange-400",
    bgClass: "bg-orange-500/20 border border-orange-500/30",
    borderClass: "border-orange-500/30",
    symbol: "₿"
  },
  ckETH: {
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/20 border border-blue-500/30",
    borderClass: "border-blue-500/30",
    symbol: "Ξ"
  },
  ckUSDC: {
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/20 border border-emerald-500/30",
    borderClass: "border-emerald-500/30",
    symbol: "$"
  },
  ckUSDT: {
    colorClass: "text-teal-400",
    bgClass: "bg-teal-500/20 border border-teal-500/30",
    borderClass: "border-teal-500/30",
    symbol: "₮"
  }
};
function getTokenConfig(symbol) {
  return TOKEN_CONFIG[symbol] ?? {
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/50",
    borderClass: "border-border",
    symbol: symbol.charAt(0)
  };
}
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
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/30",
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
function formatBalance(balance, decimals) {
  if (decimals === 0) return balance.toString();
  const divisor = BigInt(10 ** decimals);
  const whole = balance / divisor;
  const frac = balance % divisor;
  const fracStr = frac.toString().padStart(decimals, "0").slice(0, 6);
  return `${whole}.${fracStr}`;
}
function truncateAddress(addr, chars = 8) {
  if (addr.length <= chars * 2 + 3) return addr;
  return `${addr.slice(0, chars)}...${addr.slice(-chars)}`;
}
function formatTimestamp(ts) {
  const ms = Number(ts / BigInt(1e6));
  return new Date(ms).toLocaleString();
}
function formatStage(stage) {
  const map = {
    Seed: "🌱 Seed",
    Seedling: "🪴 Seedling",
    Mature: "🌶️ Mature"
  };
  return map[stage] ?? stage;
}
function formatIcpE8s(e8s) {
  const icp = Number(e8s) / 1e8;
  if (icp < 1e-3) return "<0.001 ICP";
  return `${icp.toFixed(4)} ICP`;
}
function TokenPriceBadge({
  symbol,
  priceMap
}) {
  const price = priceMap.get(symbol);
  if (!price) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
    "≈ ",
    formatIcpE8s(price),
    " / unit"
  ] });
}
function CompositeNFTArtwork({ rarityTier }) {
  const cfg = RARITY_CONFIG[rarityTier];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `w-20 h-20 rounded-xl overflow-hidden border-2 ${cfg.borderClass} flex-shrink-0 shadow-elevated`,
      "aria-label": `${cfg.label} rarity NFT artwork`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex flex-col", children: cfg.gradientColors.map((color) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-full flex-1 h-2",
          style: { backgroundColor: color }
        },
        color
      )) })
    }
  );
}
function NFTWalletCard({
  plant,
  index
}) {
  const rarityTier = getRarityFromNftId(plant.nft_id ?? "");
  const cfg = RARITY_CONFIG[rarityTier];
  const plantingDate = plant.planting_date ? new Date(Number(plant.planting_date) / 1e6).toLocaleDateString() : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.08 },
      "data-ocid": "wallet-nft-card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: `bg-card border ${cfg.borderClass} hover:shadow-elevated transition-smooth`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CompositeNFTArtwork, { rarityTier }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground truncate", children: plant.common_name ?? plant.variety }),
                  plant.latin_name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic truncate", children: plant.latin_name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-[10px] px-1.5 py-0 h-4 border shrink-0 ${cfg.borderClass} ${cfg.bgClass} ${cfg.colorClass} font-bold flex items-center gap-0.5`,
                    children: [
                      cfg.icon,
                      cfg.label
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatStage(plant.stage) }),
                plantingDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    "Planted ",
                    plantingDate
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border text-xs font-semibold mb-3 ${cfg.borderClass} ${cfg.bgClass} ${cfg.colorClass}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-3 h-3" }),
                    cfg.discountPct,
                    "% Lifetime Storewide Discount"
                  ]
                }
              ),
              plant.nft_id && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono text-muted-foreground truncate mb-3", children: plant.nft_id }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/nims",
                  className: `inline-flex items-center gap-1 text-xs font-semibold ${cfg.colorClass} hover:opacity-80 transition-smooth`,
                  "data-ocid": "wallet-nft-lifecycle-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                    "View Lifecycle"
                  ]
                }
              )
            ] })
          ] }) })
        }
      )
    }
  );
}
function NFTsSection() {
  const { data: myPlants = [], isLoading } = useMyPlants();
  const nftPlants = myPlants.filter((p) => p.nft_id);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-label": "NFT holdings", "data-ocid": "wallet-nfts-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4", children: "Plant NFTs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: ["sk-n1", "sk-n2"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-20 h-20 rounded-xl shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-28" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-36 rounded-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" })
        ] })
      ] }) }) }, id)) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-label": "NFT holdings", "data-ocid": "wallet-nfts-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider", children: "Plant NFTs" }),
      nftPlants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
        nftPlants.length,
        " NFT",
        nftPlants.length !== 1 ? "s" : ""
      ] })
    ] }),
    nftPlants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border", "data-ocid": "wallet-nfts-empty", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-7 h-7 text-primary/60" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground mb-2", children: "No Plant NFTs Yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs mx-auto mb-4 leading-relaxed", children: "Scan a QR label at the nursery to claim a plant NFT. Your NFT grants a lifetime discount — 10%, 12%, or 15% based on rarity." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2 mb-5", children: Object.values(RarityTier).map((tier) => {
        const rc = RARITY_CONFIG[tier];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${rc.borderClass} ${rc.bgClass} ${rc.colorClass}`,
            children: [
              rc.icon,
              rc.label,
              " ",
              rc.discountPct,
              "%"
            ]
          },
          tier
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "border-border",
          "data-ocid": "wallet-nfts-browse-btn",
          children: "Browse Marketplace"
        }
      ) })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: nftPlants.map((plant, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(NFTWalletCard, { plant, index: i }, plant.id.toString())) })
  ] });
}
function TokenCard({
  token,
  index,
  priceMap
}) {
  const cfg = getTokenConfig(token.symbol);
  const balanceStr = formatBalance(token.balance, token.decimals);
  const usd = token.usdValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.08 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border hover:border-primary/40 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${cfg.bgClass} ${cfg.colorClass}`,
            children: cfg.symbol
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium", children: token.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-foreground truncate mt-0.5", children: balanceStr }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
            "≈ ",
            usd
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TokenPriceBadge, { symbol: token.symbol, priceMap })
        ] })
      ] }) }) })
    }
  );
}
function TokenCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-12 h-12 rounded-full shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-36" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" })
    ] })
  ] }) }) });
}
function SendForm({ tokens, walletAddress }) {
  var _a;
  const [selectedSymbol, setSelectedSymbol] = reactExports.useState(
    ((_a = tokens[0]) == null ? void 0 : _a.symbol) ?? "ICP"
  );
  const [amount, setAmount] = reactExports.useState("");
  const [recipient, setRecipient] = reactExports.useState("");
  const [confirmOpen, setConfirmOpen] = reactExports.useState(false);
  const { mutate: sendToken, isPending } = useSendToken();
  const selectedToken = tokens.find((t) => t.symbol === selectedSymbol);
  const amountNum = Number.parseFloat(amount) || 0;
  const estimatedFee = selectedSymbol === "ICP" ? "0.0001 ICP" : "≈ minimal";
  function handleSend() {
    if (!amount || !recipient || !selectedToken) return;
    const decimals = selectedToken.decimals;
    const rawAmount = BigInt(Math.round(amountNum * 10 ** decimals));
    sendToken(
      {
        tokenSymbol: selectedSymbol,
        recipientAddress: recipient,
        amount: rawAmount
      },
      {
        onSuccess: () => {
          ue.success(`Sent ${amount} ${selectedSymbol} successfully`);
          setAmount("");
          setRecipient("");
          setConfirmOpen(false);
        },
        onError: (err) => {
          ue.error(err instanceof Error ? err.message : "Send failed");
          setConfirmOpen(false);
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "token-select", children: "Token" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedSymbol, onValueChange: setSelectedSymbol, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectTrigger,
          {
            id: "token-select",
            "data-ocid": "wallet-token-select",
            className: "bg-secondary border-border",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select token" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: tokens.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: t.symbol, children: [
          t.symbol,
          " — ",
          formatBalance(t.balance, t.decimals)
        ] }, t.symbol)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "send-amount", children: "Amount" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: "send-amount",
          type: "number",
          min: "0",
          step: "any",
          placeholder: "0.0000",
          value: amount,
          onChange: (e) => setAmount(e.target.value),
          className: "bg-secondary border-border font-mono",
          "data-ocid": "wallet-amount-input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "send-recipient", children: "Recipient Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          id: "send-recipient",
          placeholder: "Principal or account ID",
          value: recipient,
          onChange: (e) => setRecipient(e.target.value),
          className: "bg-secondary border-border font-mono text-sm",
          "data-ocid": "wallet-recipient-input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/40 border border-border p-3 text-sm flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Estimated fee" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-mono", children: estimatedFee })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
        disabled: !amount || !recipient || amountNum <= 0,
        onClick: () => setConfirmOpen(true),
        "data-ocid": "wallet-send-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 mr-2" }),
          "Review Send"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: confirmOpen, onOpenChange: setConfirmOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-card border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Confirm Transaction" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 text-sm", children: [
        { label: "From", value: truncateAddress(walletAddress) },
        { label: "To", value: truncateAddress(recipient, 10) },
        { label: "Amount", value: `${amount} ${selectedSymbol}` },
        { label: "Fee", value: estimatedFee }
      ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex justify-between py-1.5 border-b border-border last:border-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: value })
          ]
        },
        label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setConfirmOpen(false),
            className: "border-border",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleSend,
            disabled: isPending,
            className: "bg-primary hover:bg-primary/90 text-primary-foreground",
            "data-ocid": "wallet-confirm-send",
            children: isPending ? "Sending…" : "Confirm Send"
          }
        )
      ] })
    ] }) })
  ] });
}
function ReceiveTab({ address }) {
  function copyAddress() {
    navigator.clipboard.writeText(address).then(() => {
      ue.success("Address copied to clipboard");
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/30 border border-border p-6 text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 mx-auto rounded-xl bg-muted/50 border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "⬛" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "Share your address to receive tokens" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Your Wallet Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex-1 rounded-lg bg-secondary border border-border px-3 py-2.5 font-mono text-xs text-foreground break-all",
            "data-ocid": "wallet-address-display",
            children: address || "Loading…"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: copyAddress,
            disabled: !address,
            "aria-label": "Copy address",
            className: "shrink-0 border-border",
            "data-ocid": "wallet-copy-address",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" })
          }
        )
      ] })
    ] })
  ] });
}
function TxRow({ tx }) {
  const isSend = tx.txType === TxType.send;
  const cfg = getTokenConfig(tx.tokenSymbol);
  const statusIcon = tx.status === TxStatus.completed ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-400" }) : tx.status === TxStatus.pending ? /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-yellow-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5 text-destructive" });
  const statusLabel = tx.status === TxStatus.completed ? "Completed" : tx.status === TxStatus.pending ? "Pending" : "Failed";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-smooth border-b border-border last:border-0",
      "data-ocid": "wallet-tx-row",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${isSend ? "bg-destructive/15" : "bg-emerald-500/15"}`,
            children: isSend ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 text-destructive" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-4 h-4 text-emerald-400" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-sm font-medium ${isSend ? "text-destructive" : "text-emerald-400"}`,
                children: isSend ? "Sent" : "Received"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-bold ${cfg.colorClass}`, children: tx.tokenSymbol })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate mt-0.5", children: [
            isSend ? "To: " : "From: ",
            truncateAddress(tx.counterparty, 8)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: `text-sm font-mono font-semibold ${isSend ? "text-destructive" : "text-emerald-400"}`,
              children: [
                isSend ? "−" : "+",
                formatBalance(tx.amount, 8)
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: formatTimestamp(tx.timestamp) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
          statusIcon,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: `text-[10px] border-0 px-1.5 py-0 ${tx.status === TxStatus.completed ? "bg-emerald-500/10 text-emerald-400" : tx.status === TxStatus.pending ? "bg-yellow-500/10 text-yellow-400" : "bg-destructive/10 text-destructive"}`,
              children: statusLabel
            }
          )
        ] })
      ]
    }
  );
}
const SKELETON_BALANCE_IDS = [
  "sk-b1",
  "sk-b2",
  "sk-b3",
  "sk-b4",
  "sk-b5"
];
const SKELETON_TX_IDS = ["sk-t1", "sk-t2", "sk-t3", "sk-t4", "sk-t5"];
function WalletPage() {
  const { isAuthenticated, login, isInitializing } = useAuth();
  const { data: balances, isLoading: loadingBalances } = useWalletBalances();
  const { data: transactions, isLoading: loadingTxs } = useWalletTransactions();
  const { data: walletAddress = "" } = useWalletAddress();
  const { data: tokenPrices = [], dataUpdatedAt } = useTokenPrices();
  const tokens = balances ?? [];
  const txList = transactions ?? [];
  const priceMap = new Map(
    tokenPrices.map((p) => [p.token, p.price_in_icp_e8s])
  );
  const priceUpdatedAt = dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : null;
  const sortedTxs = [...txList].sort(
    (a, b) => b.timestamp > a.timestamp ? 1 : -1
  );
  function copyAddress() {
    navigator.clipboard.writeText(walletAddress).then(() => {
      ue.success("Address copied!");
    });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4",
        "data-ocid": "wallet-auth-gate",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: "Connect to Access Wallet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "Sign in with Internet Identity to view your ICP, ckBTC, ckETH, ckUSDC, and ckUSDT balances." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: login,
              disabled: isInitializing,
              className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8",
              "data-ocid": "wallet-login-btn",
              children: "Connect with Internet Identity"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8",
      "data-ocid": "wallet-page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -12 },
            animate: { opacity: 1, y: 0 },
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "My Wallet" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "ICP · ckBTC · ckETH · ckUSDC · ckUSDT · Plant NFTs" })
                ] })
              ] }),
              walletAddress && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: copyAddress,
                  className: "flex items-center gap-2 bg-secondary border border-border rounded-lg px-3 py-2 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 transition-smooth group",
                  "aria-label": "Copy wallet address",
                  "data-ocid": "wallet-address-pill",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: truncateAddress(walletAddress, 10) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3 opacity-50 group-hover:opacity-100" })
                  ]
                }
              )
            ]
          }
        ),
        priceUpdatedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted/30 border border-border text-xs text-muted-foreground",
            "data-ocid": "wallet-price-banner",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 text-primary/60 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Live prices from ICPSwap — updated at",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: priceUpdatedAt })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NFTsSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-label": "Token balances", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4", children: "Balances" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: loadingBalances ? SKELETON_BALANCE_IDS.map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(TokenCardSkeleton, {}, id)) : tokens.map((token, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TokenCard,
            {
              token,
              index: i,
              priceMap
            },
            token.symbol
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-lg", children: "Transfer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "send", className: "mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "bg-secondary border border-border w-full sm:w-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "send",
                  className: "flex-1 sm:flex-none gap-1.5",
                  "data-ocid": "wallet-send-tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" }),
                    "Send"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "receive",
                  className: "flex-1 sm:flex-none gap-1.5",
                  "data-ocid": "wallet-receive-tab",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-4 h-4" }),
                    "Receive"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "send", children: tokens.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(SendForm, { tokens, walletAddress }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground pt-4", children: "Loading token balances…" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "receive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReceiveTab, { address: walletAddress }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4", children: "Transaction History" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-card border-border overflow-hidden", children: loadingTxs ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: SKELETON_TX_IDS.map((id) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-9 h-9 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-48" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20 ml-auto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-28 ml-auto" })
            ] })
          ] }, id)) }) : sortedTxs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-16 space-y-3",
              "data-ocid": "wallet-empty-state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-muted/40 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-6 h-6 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "No transactions yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Send or receive tokens to see your history here." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "wallet-tx-list", children: sortedTxs.map((tx) => /* @__PURE__ */ jsxRuntimeExports.jsx(TxRow, { tx }, tx.id)) }) })
        ] })
      ]
    }
  );
}
export {
  WalletPage as default
};
