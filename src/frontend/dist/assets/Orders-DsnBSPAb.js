import { d as createLucideIcon, o as useAuth, y as useMyOrders, j as jsxRuntimeExports, m as motion, a as Button, F as Flame, L as Link, r as reactExports, X, B as Badge, M as MapPin, A as AnimatePresence, O as OrderStatus } from "./index-BzyHOfJH.js";
import { S as Skeleton } from "./skeleton-4nFxEZGN.js";
import { P as Package } from "./package--VOyFCxP.js";
import { S as ShoppingBag } from "./shopping-bag-CR1pI8y_.js";
import { C as Check } from "./check-BRbzaMOh.js";
import { C as Clock } from "./clock-Dpayb-ka.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-BvX_XqYD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
const STATUS_CONFIG = {
  [OrderStatus.Pending]: {
    label: "Pending",
    Icon: Clock,
    badgeClass: "bg-amber-950/40 text-amber-300 border-amber-700/50",
    dotClass: "bg-amber-400"
  },
  [OrderStatus.Shipped]: {
    label: "Shipped",
    Icon: Truck,
    badgeClass: "bg-blue-950/40 text-blue-300 border-blue-700/50",
    dotClass: "bg-blue-400"
  },
  [OrderStatus.PickedUp]: {
    label: "Picked Up",
    Icon: Check,
    badgeClass: "bg-emerald-950/40 text-emerald-300 border-emerald-700/50",
    dotClass: "bg-emerald-400"
  },
  [OrderStatus.Cancelled]: {
    label: "Cancelled",
    Icon: X,
    badgeClass: "bg-secondary text-muted-foreground border-border",
    dotClass: "bg-muted-foreground"
  }
};
function OrderRow({ order }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const cfg = STATUS_CONFIG[order.status];
  const { Icon } = cfg;
  const date = new Date(Number(order.created_at) / 1e6);
  const dateStr = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "rounded-xl bg-card border border-border overflow-hidden",
      "data-ocid": "order-row",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-semibold text-foreground text-sm", children: [
                "Order #",
                order.id.toString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: dateStr })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: `${cfg.badgeClass} border text-xs flex items-center gap-1 flex-shrink-0`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3" }),
                  cfg.label
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5" }),
              order.items.length,
              " item",
              order.items.length !== 1 ? "s" : ""
            ] }),
            order.pickup ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
              "Local Pickup"
            ] }) : order.shipping_address ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 truncate max-w-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-3.5 h-3.5 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: order.shipping_address })
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-bold text-lg font-display", children: [
              "$",
              (Number(order.total_cents) / 100).toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setExpanded(!expanded),
                className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-smooth px-2 py-1 rounded-lg hover:bg-secondary",
                "data-ocid": "order-expand-btn",
                children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3.5 h-3.5" }),
                  "Hide details"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5" }),
                  "View details"
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.2 },
            className: "overflow-hidden",
            "data-ocid": "order-detail",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 pt-0 border-t border-border mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Line Items" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: order.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between py-2.5 px-3 rounded-lg bg-secondary/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg flex-shrink-0", children: "🌶️" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-foreground", children: [
                          "Product #",
                          item.product_id.toString()
                        ] }),
                        item.plant_id !== void 0 && item.plant_id !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          "Plant #",
                          item.plant_id.toString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0 ml-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                        "×",
                        item.quantity.toString()
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-primary", children: [
                        "$",
                        (Number(item.price_cents * item.quantity) / 100).toFixed(2)
                      ] })
                    ] })
                  ]
                },
                `${item.product_id.toString()}-${idx}`
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-2 h-2 rounded-full ${cfg.dotClass} flex-shrink-0`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: cfg.label }),
                  order.pickup && order.status === OrderStatus.Pending && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "— awaiting pickup coordination" }),
                  !order.pickup && order.status === OrderStatus.Pending && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "— preparing for shipment" })
                ] })
              ] })
            ] }) })
          }
        ) })
      ]
    }
  );
}
function OrdersPage() {
  const { isAuthenticated, login } = useAuth();
  const { data: orders, isLoading } = useMyOrders();
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-col items-center justify-center py-24 text-center",
        "data-ocid": "orders-unauthenticated",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-2", children: "Sign in to View Orders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs mb-6", children: "Connect with Internet Identity to see your chili plant and spice order history." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "bg-primary hover:bg-primary/90 text-primary-foreground",
              onClick: login,
              "data-ocid": "orders-login-btn",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-7 h-7 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground", children: [
          "My ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "Orders" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Track your chili plant and spice orders." })
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "orders-loading", children: ["o1", "o2", "o3"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl bg-card border border-border p-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20 rounded-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-48 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-16" })
        ]
      },
      k
    )) }) : orders && orders.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "order-list", children: orders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderRow, { order }, order.id.toString())) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "flex flex-col items-center justify-center py-20 text-center",
        "data-ocid": "orders-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-4", children: "🌶️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-xl mb-2", children: "No orders yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6 max-w-xs", children: "Start growing your collection of rare chili plants and artisan spices!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "bg-primary hover:bg-primary/90 text-primary-foreground",
              "data-ocid": "orders-shop-cta",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
                "Shop Now"
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  OrdersPage as default
};
