import { d as createLucideIcon, j as jsxRuntimeExports, m as motion, B as Badge, L as Link, a as Button, h as Award, M as MapPin, F as Flame, C as CHILI_VARIETIES, S as SOCIAL_LINKS, i as SiFacebook, k as SiX, l as SiInstagram, n as SiTiktok } from "./index-BzyHOfJH.js";
import { S as ShoppingBag } from "./shopping-bag-CR1pI8y_.js";
import { C as ChevronRight } from "./chevron-right-C_LI6q7h.js";
import { L as Leaf } from "./leaf-Cxv2rTxz.js";
import { S as Sprout } from "./sprout-DYWkSzYV.js";
import { C as CloudSun } from "./cloud-sun-D9Kfpz-6.js";
import { S as Star } from "./star-DXq3cFWp.js";
import { U as Users } from "./users-CcyYH2r_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
  ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
  ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }],
  ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
  ["path", { d: "m20 9 .891.891", key: "3xwk7g" }],
  ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }],
  ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }]
];
const Dna = createLucideIcon("dna", __iconNode);
const HEAT_LEVELS = {
  "Apocalypse Scorpion": { level: 5, label: "Extreme" },
  "Death Spiral": { level: 5, label: "Extreme" },
  RB003: { level: 5, label: "Extreme" },
  "Fried Chicken": { level: 4, label: "Super Hot" },
  "Scotch Bonnet": { level: 3, label: "Very Hot" },
  "Sugar Rush Peach": { level: 3, label: "Very Hot" },
  "Aji Charapita": { level: 3, label: "Very Hot" },
  "Calabrian (Cherry)": { level: 2, label: "Medium" },
  "Fish Pepper": { level: 2, label: "Medium" },
  "Farmers Market Jalapeno": { level: 1, label: "Mild" },
  "Aji Guyana": { level: 4, label: "Super Hot" },
  "Acoma Pueblo": { level: 2, label: "Medium" }
};
const STATS = [
  { icon: Award, label: "FDACS Registered Nursery" },
  { icon: MapPin, label: "USDA Zone 10a" },
  { icon: Flame, label: "30+ Years Experience" },
  { icon: Leaf, label: "Port Charlotte, FL" }
];
const PRODUCT_TIERS = [
  {
    name: "Seedlings",
    price: "$6",
    description: "16 oz double cups — perfect starter plants ready to grow",
    icon: Sprout,
    tag: "Best Starter"
  },
  {
    name: "1-Gallon Plants",
    price: "$25",
    description: "Established plants, weeks ahead of a seedling start",
    icon: Leaf,
    tag: "Most Popular"
  },
  {
    name: "5-Gallon Mature Plants",
    price: "$45",
    description: "Mature specimens in 5-gallon grow bags, ready to produce",
    icon: Flame,
    tag: "Premium"
  },
  {
    name: "Artisan Spices & Salts",
    price: "$12",
    description: "Hand-crafted smoked and infused spices from our harvest",
    icon: Star,
    tag: "Artisan"
  }
];
const SOCIAL_ITEMS = [
  {
    icon: SiFacebook,
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    hoverClass: "hover:text-blue-400"
  },
  {
    icon: SiX,
    label: "X / Twitter",
    href: SOCIAL_LINKS.x,
    hoverClass: "hover:text-foreground"
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    hoverClass: "hover:text-pink-400"
  },
  {
    icon: SiTiktok,
    label: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    hoverClass: "hover:text-cyan-400"
  }
];
const FARMING_PILLARS = [
  {
    emoji: "🦠",
    title: "Indigenous Microorganisms",
    desc: "We cultivate IMO from local forest floors, inoculating soil with billions of beneficial microbes native to Zone 10a."
  },
  {
    emoji: "⚗️",
    title: "Natural Ferments",
    desc: "FPJ, OHN, BRV, and water-soluble calcium phosphate — hand-crafted inputs that feed plants exactly what they need."
  },
  {
    emoji: "🌱",
    title: "Zero Synthetic Inputs",
    desc: "No pesticides, no synthetic fertilizers. Just the sun, rain, living soil, and 30 years of cultivated knowledge."
  }
];
function HeatBadge({ level }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex gap-0.5", "aria-label": `Heat level ${level} of 5`, children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: i < level ? "text-fire" : "text-muted-foreground/25",
      style: { fontSize: "0.6rem" },
      children: "🌶"
    },
    i
  )) });
}
function HomePage() {
  const scrollToAbout = () => {
    var _a;
    (_a = document.getElementById("about")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "hero",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        "data-ocid": "hero-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: {
                backgroundImage: "url('/assets/generated/hero-peppers.dim_1920x1080.jpg')"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-gradient-to-r from-background/65 via-transparent to-background/65",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: -12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "border-fire text-fire mb-6 px-4 py-1.5 text-xs font-display tracking-widest uppercase",
                    children: "FDACS Registered Nursery · Port Charlotte, FL"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                className: "font-display font-bold text-fire leading-none mb-4",
                style: {
                  fontSize: "clamp(3.5rem, 13vw, 9.5rem)",
                  letterSpacing: "-0.02em"
                },
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.9, delay: 0.15, ease: "easeOut" },
                children: "IC SPICY"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                className: "font-display text-foreground/90 mb-3 tracking-[0.35em] uppercase",
                style: { fontSize: "clamp(1rem, 2.5vw, 1.6rem)" },
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.8, delay: 0.35 },
                children: "Rare.  Hot.  Alive."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "max-w-2xl mx-auto mb-10",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.5 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "rounded-xl px-6 py-5 text-base sm:text-lg leading-relaxed font-semibold border border-primary/50",
                    style: {
                      background: "rgba(6,2,1,0.92)",
                      color: "#f8f0ea",
                      textShadow: "0 1px 3px rgba(0,0,0,1), 0 2px 12px rgba(0,0,0,0.9)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      boxShadow: "0 0 0 1px rgba(238,106,61,0.25), 0 8px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)"
                    },
                    children: [
                      "Over 30 years cultivating the world's hottest and rarest chili peppers in Florida's USDA Agricultural Zone 10a — grown organically through",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            color: "#ff8055",
                            fontWeight: 800,
                            textShadow: "0 0 16px rgba(238,106,61,0.7), 0 1px 3px rgba(0,0,0,1)"
                          },
                          children: "KNF & JADAM"
                        }
                      ),
                      " ",
                      "regenerative practices."
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.65 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", "data-ocid": "hero-shop-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-fire text-primary-foreground hover:brightness-110 font-display font-bold px-8 py-6 text-base shadow-elevated transition-smooth gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5" }),
                        "Shop Now"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "lg",
                      className: "border-border hover:border-fire hover:text-fire font-display px-8 py-6 text-base transition-smooth gap-2",
                      onClick: scrollToAbout,
                      "data-ocid": "hero-learn-more",
                      children: [
                        "Learn More",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground",
              animate: { y: [0, 8, 0] },
              transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-6 h-6 rotate-90" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-y border-border py-4",
        "data-ocid": "stats-bar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto gap-8 sm:gap-0 sm:justify-around items-center min-w-0", children: STATS.map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 whitespace-nowrap flex-shrink-0 sm:flex-1 sm:justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-fire/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-fire" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-display font-medium text-foreground/80", children: label })
            ]
          },
          label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "about",
        className: "py-24 bg-background",
        "data-ocid": "about-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "relative rounded-2xl overflow-hidden shadow-elevated",
              initial: { opacity: 0, x: -40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/assets/generated/farm-nursery.dim_1200x800.jpg",
                    alt: "IC SPICY nursery in Port Charlotte, FL",
                    className: "w-full object-cover",
                    style: { aspectRatio: "4/3" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-fire/90 text-primary-foreground font-display text-xs px-3 py-1", children: "Port Charlotte, FL · Zone 10a" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "space-y-5",
              initial: { opacity: 0, x: 40 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fire font-display text-sm tracking-widest uppercase", children: "Our Story" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight", children: [
                  "Grown With Purpose,",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "Harvested With Passion" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "IC SPICY is a FDACS-registered specialty nursery born from over 30 years of deep passion for chili cultivation. Based in Port Charlotte, Florida, we grow the rarest, most-sought-after pepper varieties on the planet — varieties that ignite the senses and push the boundaries of flavor and heat." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
                  "Our philosophy is rooted in",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Korean Natural Farming (KNF)" }),
                  " ",
                  "and ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "JADAM" }),
                  " ",
                  "regenerative methods — working with nature, not against it. No synthetic pesticides. No chemical fertilizers. Just living soil, indigenous microorganisms, and decades of hard-won knowledge."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 pt-1", children: [
                  { icon: Leaf, label: "KNF & JADAM Organic" },
                  { icon: Award, label: "FDACS Licensed" },
                  { icon: Flame, label: "30+ Years Growing" },
                  { icon: MapPin, label: "Florida Zone 10a" }
                ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-fire flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
                    ]
                  },
                  label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/plants", "data-ocid": "about-plants-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "border-fire text-fire hover:bg-fire hover:text-primary-foreground transition-smooth mt-1 gap-2",
                    children: [
                      "Explore Our Plants",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                    ]
                  }
                ) })
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-24 bg-card border-y border-border relative overflow-hidden",
        "data-ocid": "nims-highlight-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none opacity-[0.035]",
              "aria-hidden": "true",
              style: {
                backgroundImage: "repeating-linear-gradient(0deg,oklch(0.62 0.26 145) 0,oklch(0.62 0.26 145) 1px,transparent 1px,transparent 52px),repeating-linear-gradient(90deg,oklch(0.62 0.26 145) 0,oklch(0.62 0.26 145) 1px,transparent 1px,transparent 52px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-14 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "space-y-5",
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "border-emerald-700/50 text-emerald-400 text-xs px-3 py-1 font-display tracking-widest uppercase",
                      children: "Free for All Members"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight", children: "Track Every Plant's Journey" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "NIMS — the Nursery Inventory Management System — is a free professional tool available to every registered IC SPICY member. Track your plants from the first seed to final harvest with professional-grade lifecycle management." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: [
                    {
                      icon: Leaf,
                      label: "Seed to harvest tracking",
                      detail: "Complete lifecycle records from planting date to sale or harvest"
                    },
                    {
                      icon: Sprout,
                      label: "72-cell tray management",
                      detail: "Interactive 12×6 visual tray grids with click-to-edit cells"
                    },
                    {
                      icon: CloudSun,
                      label: "Lifecycle photos & weather data",
                      detail: "Auto-log daily weather, upload progress photos per plant"
                    }
                  ].map(({ icon: Icon, label, detail }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-emerald-950/50 border border-emerald-800/40 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-emerald-400" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium text-sm", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-0.5", children: detail })
                    ] })
                  ] }, label)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/nims", "data-ocid": "nims-highlight-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: "border-emerald-700/50 text-emerald-400 hover:bg-emerald-950/30 hover:border-emerald-600/60 font-display transition-smooth gap-2 mt-1",
                      children: [
                        "Explore NIMS",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                      ]
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "flex justify-center",
                initial: { opacity: 0, x: 30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.8, delay: 0.15 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-2xl p-6 shadow-elevated w-full max-w-sm space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-display font-semibold text-foreground", children: "Tray Alpha" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-950/60 text-emerald-400 border-emerald-700/40 text-xs", children: "18 / 72 Active" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "grid gap-0.5 w-full",
                      style: { gridTemplateColumns: "repeat(12, minmax(0, 1fr))" },
                      "aria-hidden": "true",
                      children: Array.from({ length: 72 }, (_, i) => {
                        const cellId = `preview-cell-${i}`;
                        const filled = [
                          1,
                          3,
                          5,
                          8,
                          10,
                          14,
                          18,
                          22,
                          25,
                          28,
                          31,
                          34,
                          37,
                          40,
                          44,
                          47,
                          50,
                          55
                        ].includes(i);
                        const cooked = i === 28;
                        const transplanted = i === 44;
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: [
                              "aspect-square rounded-[2px]",
                              cooked ? "bg-black border border-red-900" : transplanted ? "bg-muted/20 border border-muted/30 opacity-50" : filled ? "bg-emerald-950/70 border border-emerald-700/50" : "bg-card border border-border/50"
                            ].join(" ")
                          },
                          cellId
                        );
                      })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                    { label: "Seeds", value: "12", color: "text-emerald-400" },
                    { label: "Seedlings", value: "5", color: "text-cyan-400" },
                    { label: "Cooked", value: "1", color: "text-red-400" }
                  ].map(({ label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "bg-secondary/30 rounded-lg p-2 text-center",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `text-lg font-display font-bold ${color}`,
                            children: value
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label })
                      ]
                    },
                    label
                  )) })
                ] })
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-muted/30", "data-ocid": "products-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fire font-display text-sm tracking-widest uppercase mb-3", children: "What We Offer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Our Collection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-lg mx-auto", children: "From seedlings to mature plants — every stage available. Plus artisan smoked spices hand-crafted from our own harvest." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: PRODUCT_TIERS.map(
        ({ name, price, description, icon: Icon, tag }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/marketplace",
                "data-ocid": `product-tier-${i}`,
                className: "block h-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative bg-card border border-border rounded-xl p-6 h-full hover:border-fire transition-smooth hover:shadow-elevated cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-4 right-4 text-xs bg-fire/10 text-fire border-fire/30", children: tag }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-fire/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-fire" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-fire mb-1", children: price }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-fire text-xs font-medium opacity-0 group-hover:opacity-100 transition-smooth gap-1", children: [
                    "Browse Collection ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
                  ] })
                ] })
              }
            )
          },
          name
        )
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "varieties",
        className: "py-24 bg-background",
        "data-ocid": "varieties-section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fire font-display text-sm tracking-widest uppercase mb-3", children: "Rare & Exclusive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Current Varieties" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "12 hand-selected cultivars representing the pinnacle of chili diversity — from apocalyptic superhots to nuanced heirlooms." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: CHILI_VARIETIES.map((variety, i) => {
            const heat = HEAT_LEVELS[variety] ?? {
              level: 2,
              label: "Medium"
            };
            const heatColor = heat.level >= 5 ? "text-fire border-fire/30" : heat.level >= 4 ? "text-orange-400 border-orange-400/30" : heat.level >= 3 ? "text-yellow-500 border-yellow-500/30" : "text-muted-foreground border-border";
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.92 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: i * 0.05 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 hover:border-fire transition-smooth h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Flame,
                      {
                        className: `w-5 h-5 flex-shrink-0 mt-0.5 ${heat.level >= 5 ? "text-fire" : heat.level >= 4 ? "text-orange-400" : heat.level >= 3 ? "text-yellow-500" : "text-muted-foreground"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: `text-xs ${heatColor}`,
                        children: heat.label
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground leading-snug mb-2 min-w-0 break-words", children: variety }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HeatBadge, { level: heat.level })
                ] })
              },
              variety
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", "data-ocid": "varieties-shop-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-fire text-primary-foreground hover:brightness-110 font-display transition-smooth gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
            "Shop All Varieties"
          ] }) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-24 bg-muted/30 relative overflow-hidden",
        "data-ocid": "nft-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.06] pointer-events-none",
              "aria-hidden": "true",
              style: {
                background: "radial-gradient(ellipse at 60% 50%, oklch(0.62 0.26 24), transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "space-y-5",
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fire font-display text-sm tracking-widest uppercase", children: "Blockchain Provenance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight", children: [
                    "Every Seed Gets ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "Its Own NFT" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "IC SPICY pioneers Real-World Asset (RWA) provenance for living plants. When a seed germinates in our 72-cell trays, a unique NFT is minted — capturing its genetics, tray position, environmental data, and complete care history." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Each NFT evolves through three stages: Seedling → 1-Gallon → 5-Gallon. Every transplant triggers a burn-and-mint upgrade with updated metadata and new composite artwork generated from 10 rarity layers." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3 flex-wrap pt-1", children: [
                    { icon: Sprout, label: "Stage 1: Germinated Seed" },
                    { icon: Leaf, label: "Stage 2: 1-Gallon Pot" },
                    { icon: Flame, label: "Stage 3: 5-Gallon Mature" }
                  ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 text-sm text-muted-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-fire/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-fire" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
                      ]
                    },
                    label
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/plants", "data-ocid": "nft-teaser-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: "border-fire text-fire hover:bg-fire hover:text-primary-foreground transition-smooth gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Dna, { className: "w-4 h-4" }),
                        "View Plant NFTs"
                      ]
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "flex justify-center",
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.8 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-fire/30 rounded-2xl p-6 shadow-elevated", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-fire/10 text-fire border-fire/30 font-display text-xs", children: "RWA NFT · Stage 1" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: "#001" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "rounded-xl mb-4 flex items-center justify-center",
                        style: {
                          aspectRatio: "1",
                          background: "radial-gradient(circle at 35% 40%, oklch(0.22 0.1 24), oklch(0.12 0.015 50))"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "4.5rem" }, children: "🌶️" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground mb-1 text-sm", children: "Apocalypse Scorpion" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Tray #001 · Cell 24 · Seedling" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
                      ["Germinated", "Mar 15, 2026"],
                      ["Humidity", "78%"],
                      ["UV Index", "9.2"],
                      ["Temp", "88°F"]
                    ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "bg-background rounded-lg p-2 text-xs",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground mb-0.5", children: k }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: v })
                        ]
                      },
                      k
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 w-8 h-8 rounded-full bg-fire flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 text-primary-foreground" }) })
                ] })
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-24 bg-card relative overflow-hidden",
        "data-ocid": "farming-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.025] pointer-events-none",
              "aria-hidden": "true",
              style: {
                backgroundImage: "repeating-linear-gradient(0deg,oklch(0.62 0.26 24) 0,oklch(0.62 0.26 24) 1px,transparent 1px,transparent 56px),repeating-linear-gradient(90deg,oklch(0.62 0.26 24) 0,oklch(0.62 0.26 24) 1px,transparent 1px,transparent 56px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "text-center max-w-3xl mx-auto mb-14",
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fire font-display text-sm tracking-widest uppercase mb-4", children: "Our Philosophy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-5xl text-foreground mb-5 leading-tight", children: [
                    "Regenerative Farming.",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "The KNF & JADAM Way." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Ancient-wisdom methodologies that harness indigenous microorganisms, natural ferments, and biologically active inputs to build living soil ecosystems. Our plants thrive in a web of microbial life that mirrors nature's own design." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: FARMING_PILLARS.map(({ emoji, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "bg-background rounded-xl p-6 border border-border text-left",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.15 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-4", children: emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc })
                ]
              },
              title
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                className: "mt-12 text-center text-xs text-muted-foreground font-mono",
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.4 },
                children: "Florida Department of Agriculture and Consumer Services · FDACS Registered Nursery · Port Charlotte, FL 33954"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", "data-ocid": "community-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-14",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-fire font-display text-sm tracking-widest uppercase mb-3", children: "Join the Fire" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Grow With Our Community" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Connect with fellow chili enthusiasts, share your grows, vote on future varieties, and stay up-to-date with everything happening at IC SPICY." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6 flex-wrap justify-center", children: SOCIAL_ITEMS.map(
          ({ icon: Icon, label, href, hoverClass }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.a,
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": `IC SPICY on ${label}`,
              className: `flex flex-col items-center gap-2 text-muted-foreground ${hoverClass} transition-smooth`,
              "data-ocid": `social-${label.toLowerCase().replace(/\s*\/.*$/, "").replace(/\s+/g, "-")}`,
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: i * 0.1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center hover:border-current transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display", children: label })
              ]
            },
            label
          )
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "bg-card border border-border rounded-2xl p-8 sm:p-12 text-center max-w-2xl w-full",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-10 h-10 text-fire mx-auto mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-3", children: "IC SPICY Members Community" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto", children: "Members get DAO voting rights, a permanent 10% discount, and access to exclusive plant journals. Own a plant NFT or membership NFT to qualify." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/community", "data-ocid": "community-join-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-fire text-primary-foreground hover:brightness-110 font-display transition-smooth gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                  "Join Community"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dao", "data-ocid": "dao-explore-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "border-border hover:border-fire hover:text-fire transition-smooth font-display gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4" }),
                      "View DAO Proposals"
                    ]
                  }
                ) })
              ] })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  HomePage as default
};
