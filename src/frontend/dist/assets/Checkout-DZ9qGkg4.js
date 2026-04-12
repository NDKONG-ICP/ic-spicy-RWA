import { d as createLucideIcon, w as useAuth, E as useCart, q as useHasMembership, Z as useMembership, _ as useMyPlants, $ as usePlaceOrder, a0 as useNavigate, r as reactExports, R as RarityTier, j as jsxRuntimeExports, m as motion, M as MapPin, B as Badge, a as Button, f as ue, V as MembershipTier, F as Flame, L as Link } from "./index-LPJkeeMn.js";
import { I as Input } from "./input-CdZElJND.js";
import { L as Label } from "./label-C73ZNQnn.js";
import { S as Separator } from "./separator-Di6Ncu5b.js";
import { S as ShoppingBag } from "./shopping-bag-D3W_G9j3.js";
import { M as Minus } from "./minus-BvJFguKO.js";
import { P as Plus } from "./plus-DaTrIbX5.js";
import { T as Trash2 } from "./trash-2-DY0N8MLM.js";
import { P as Package } from "./package-DYVTOvLA.js";
import { L as LoaderCircle } from "./loader-circle-BUPITcJm.js";
import { L as Lock } from "./lock-C6oViyuZ.js";
import { C as Crown } from "./crown-CLdcNAjF.js";
import { S as Sparkles } from "./sparkles-CqEg4po-.js";
import { S as Star } from "./star-ayZEfesG.js";
import { G as Gem } from "./gem-CcfnSxZT.js";
import "./index-3nV1auV4.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
const RARITY_CONFIG = {
  [RarityTier.Common]: {
    label: "Common",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500/30",
    discountPct: 10,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" })
  },
  [RarityTier.Uncommon]: {
    label: "Uncommon",
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/30",
    discountPct: 12,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" })
  },
  [RarityTier.Rare]: {
    label: "Rare",
    colorClass: "text-amber-400",
    bgClass: "bg-amber-500/10",
    borderClass: "border-amber-500/30",
    discountPct: 15,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3 h-3" })
  }
};
function getRarityFromMembershipTier(tier) {
  if (tier === MembershipTier.Premium) return RarityTier.Rare;
  return RarityTier.Common;
}
const EMPTY_FORM = {
  fullName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  email: ""
};
function formatAddress(f) {
  return [
    f.fullName,
    f.address1,
    f.address2,
    `${f.city}, ${f.state} ${f.zip}`,
    f.email
  ].filter(Boolean).join(", ");
}
function AuthGate({ login }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      className: "flex flex-col items-center justify-center py-24 text-center",
      "data-ocid": "checkout-unauthenticated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Sign in to Checkout" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs mb-6", children: "You need an Internet Identity account to place orders. It's free and secure." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "bg-primary hover:bg-primary/90 text-primary-foreground",
            onClick: login,
            "data-ocid": "checkout-login-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4" }),
              "Connect with Internet Identity"
            ]
          }
        )
      ]
    }
  );
}
function EmptyCart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      className: "flex flex-col items-center justify-center py-24 text-center",
      "data-ocid": "checkout-empty",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-12 h-12 text-muted-foreground mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Your cart is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Add some fiery plants or artisan spices first!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-primary hover:bg-primary/90 text-primary-foreground", children: "Browse the Shop" }) })
      ]
    }
  );
}
function DiscountLine({
  hasMembership,
  discountPct,
  discountAmount,
  rarityTier
}) {
  if (!hasMembership) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between rounded-lg border border-dashed border-primary/30 bg-primary/5 px-3 py-2.5 text-xs",
        "data-ocid": "checkout-discount-cta",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "w-3.5 h-3.5 text-primary" }),
            "Unlock Lifetime Discounts"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/marketplace",
              className: "font-semibold text-primary hover:text-primary/80 transition-colors",
              children: "Claim a Plant NFT →"
            }
          )
        ]
      }
    );
  }
  const cfg = rarityTier ? RARITY_CONFIG[rarityTier] : RARITY_CONFIG[RarityTier.Common];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-ocid": "checkout-nft-discount", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cfg.colorClass, children: cfg.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
        "NFT Loyalty Discount (",
        discountPct,
        "%)"
      ] }),
      rarityTier && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "outline",
          className: `text-[10px] px-1.5 py-0 h-4 ml-0.5 border ${cfg.borderClass} ${cfg.bgClass} ${cfg.colorClass} font-bold`,
          children: cfg.label
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-semibold ${cfg.colorClass}`, children: [
      "-$",
      (Number(discountAmount) / 100).toFixed(2)
    ] })
  ] }) });
}
function CheckoutPage() {
  const { isAuthenticated, login } = useAuth();
  const { items, removeItem, updateQuantity, totalCents, clearCart } = useCart();
  const { data: hasMembership = false } = useHasMembership();
  const { data: membership } = useMembership();
  const { data: myPlants = [] } = useMyPlants();
  const placeOrder = usePlaceOrder();
  const navigate = useNavigate();
  const [pickup, setPickup] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [submitted, setSubmitted] = reactExports.useState(false);
  let rarityTier = null;
  if (hasMembership && membership) {
    rarityTier = getRarityFromMembershipTier(membership.tier);
  } else if (myPlants.some((p) => p.nft_id)) {
    rarityTier = RarityTier.Common;
  }
  const discountPct = rarityTier ? RARITY_CONFIG[rarityTier].discountPct : hasMembership ? 10 : 0;
  const rawTotal = totalCents();
  const discountAmount = hasMembership ? rawTotal * BigInt(discountPct) / BigInt(100) : BigInt(0);
  const finalTotal = rawTotal - discountAmount;
  const isFormValid = pickup || form.fullName.trim() !== "" && form.address1.trim() !== "" && form.city.trim() !== "" && form.state.trim() !== "" && form.zip.trim() !== "" && form.email.trim() !== "";
  const updateField = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      login();
      return;
    }
    setSubmitted(true);
    if (!isFormValid) return;
    try {
      await placeOrder.mutateAsync({
        pickup,
        shipping_address: pickup ? void 0 : formatAddress(form),
        items: items.map((item) => ({
          product_id: item.product_id,
          plant_id: item.plant_id,
          price_cents: item.price_cents,
          quantity: BigInt(item.quantity)
        }))
      });
      clearCart();
      ue.success("🌶️ Order placed! We'll be in touch soon.");
      navigate({ to: "/orders" });
    } catch {
      ue.error("Failed to place order. Please try again.");
    }
  };
  if (!isAuthenticated) return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthGate, { login });
  if (items.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyCart, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", "data-ocid": "checkout-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-7 h-7 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "Checkout" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-lg mb-3", children: "Your Items" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              className: "flex items-center gap-4 p-4 rounded-xl bg-card border border-border",
              "data-ocid": "cart-item",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl flex-shrink-0", children: item.category === "Spice" ? "🧂" : "🌶️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm truncate", children: item.name }),
                  item.variety && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.variety }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary text-sm font-bold mt-0.5", children: [
                    "$",
                    (Number(item.price_cents) / 100).toFixed(2),
                    " ea."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => updateQuantity(item.product_id, item.quantity - 1),
                      className: "w-7 h-7 rounded bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-smooth",
                      "aria-label": "Decrease quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-center text-sm font-bold text-foreground", children: item.quantity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => updateQuantity(item.product_id, item.quantity + 1),
                      className: "w-7 h-7 rounded bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-smooth",
                      "aria-label": "Increase quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 text-right flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-foreground", children: [
                  "$",
                  (Number(item.price_cents * BigInt(item.quantity)) / 100).toFixed(2)
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => removeItem(item.product_id),
                    className: "p-1.5 text-muted-foreground hover:text-destructive transition-smooth",
                    "aria-label": "Remove item",
                    "data-ocid": "cart-remove-item",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                  }
                )
              ]
            },
            item.product_id.toString()
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-lg mb-3", children: "Fulfillment Method" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setPickup(false),
                className: [
                  "flex flex-col items-center gap-2 p-4 rounded-xl border text-sm font-medium transition-smooth",
                  !pickup ? "bg-primary/10 border-primary text-primary" : "bg-card border-border text-muted-foreground hover:border-border/80"
                ].join(" "),
                "data-ocid": "checkout-shipping-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-6 h-6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ship to me" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70 font-normal", children: "Enter shipping address" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setPickup(true),
                className: [
                  "flex flex-col items-center gap-2 p-4 rounded-xl border text-sm font-medium transition-smooth",
                  pickup ? "bg-primary/10 border-primary text-primary" : "bg-card border-border text-muted-foreground hover:border-border/80"
                ].join(" "),
                "data-ocid": "checkout-pickup-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Local Pickup" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70 font-normal", children: "Port Charlotte, FL" })
                ]
              }
            )
          ] }),
          pickup ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              className: "flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "IC SPICY Nursery — Port Charlotte, FL" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "After placing your order, you'll receive a confirmation with pickup details and a QR code for pickup verification. We'll coordinate a time that works for you." })
                ] })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              className: "space-y-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "fullName",
                        className: "text-xs font-medium mb-1.5 block",
                        children: "Full Name *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "fullName",
                        value: form.fullName,
                        onChange: updateField("fullName"),
                        placeholder: "Jane Smith",
                        required: true,
                        className: `text-sm ${submitted && !form.fullName ? "border-destructive" : ""}`,
                        "data-ocid": "checkout-fullname-input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "address1",
                        className: "text-xs font-medium mb-1.5 block",
                        children: "Address Line 1 *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "address1",
                        value: form.address1,
                        onChange: updateField("address1"),
                        placeholder: "123 Pepper Farm Rd",
                        required: true,
                        className: `text-sm ${submitted && !form.address1 ? "border-destructive" : ""}`,
                        "data-ocid": "checkout-address1-input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "address2",
                        className: "text-xs font-medium mb-1.5 block",
                        children: "Address Line 2"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "address2",
                        value: form.address2,
                        onChange: updateField("address2"),
                        placeholder: "Apt, Suite, Unit (optional)",
                        className: "text-sm",
                        "data-ocid": "checkout-address2-input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "city",
                        className: "text-xs font-medium mb-1.5 block",
                        children: "City *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "city",
                        value: form.city,
                        onChange: updateField("city"),
                        placeholder: "Port Charlotte",
                        required: true,
                        className: `text-sm ${submitted && !form.city ? "border-destructive" : ""}`,
                        "data-ocid": "checkout-city-input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "state",
                          className: "text-xs font-medium mb-1.5 block",
                          children: "State *"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "state",
                          value: form.state,
                          onChange: updateField("state"),
                          placeholder: "FL",
                          maxLength: 2,
                          required: true,
                          className: `text-sm uppercase ${submitted && !form.state ? "border-destructive" : ""}`,
                          "data-ocid": "checkout-state-input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "zip",
                          className: "text-xs font-medium mb-1.5 block",
                          children: "ZIP *"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "zip",
                          value: form.zip,
                          onChange: updateField("zip"),
                          placeholder: "33948",
                          maxLength: 10,
                          required: true,
                          className: `text-sm ${submitted && !form.zip ? "border-destructive" : ""}`,
                          "data-ocid": "checkout-zip-input"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "email",
                        className: "text-xs font-medium mb-1.5 block",
                        children: "Email *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "email",
                        type: "email",
                        value: form.email,
                        onChange: updateField("email"),
                        placeholder: "you@example.com",
                        required: true,
                        className: `text-sm ${submitted && !form.email ? "border-destructive" : ""}`,
                        "data-ocid": "checkout-email-input"
                      }
                    )
                  ] })
                ] }),
                submitted && !isFormValid && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Please fill in all required fields." })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card border border-border p-6 sticky top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground mb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-sm mb-4", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex justify-between text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate mr-2 min-w-0", children: [
                item.name,
                " ×",
                item.quantity
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-shrink-0", children: [
                "$",
                (Number(item.price_cents * BigInt(item.quantity)) / 100).toFixed(2)
              ] })
            ]
          },
          item.product_id.toString()
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "$",
              (Number(rawTotal) / 100).toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DiscountLine,
            {
              hasMembership,
              discountPct,
              discountAmount,
              rarityTier
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pickup ? "Local Pickup" : "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-xs border-primary/30 text-primary",
                children: "TBD"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-foreground font-bold text-lg mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
            "$",
            (Number(finalTotal) / 100).toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold",
            disabled: placeOrder.isPending,
            "data-ocid": "checkout-submit-btn",
            children: placeOrder.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              "Placing Order…"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Place Order",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-center text-muted-foreground mt-3 flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
          "Secured by Internet Identity"
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  CheckoutPage as default
};
