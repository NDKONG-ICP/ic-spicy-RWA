import { j as jsxRuntimeExports, c as cn, P as PlantStage, b as cva } from "./index-LPJkeeMn.js";
const stageBadgeVariants = cva(
  "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold font-display uppercase tracking-wide border",
  {
    variants: {
      stage: {
        [PlantStage.Seed]: "bg-amber-950/40 text-amber-400 border-amber-700/50",
        [PlantStage.Seedling]: "bg-emerald-950/40 text-emerald-400 border-emerald-700/50",
        [PlantStage.Mature]: "bg-red-950/40 text-red-400 border-red-700/50"
      }
    },
    defaultVariants: {
      stage: PlantStage.Seed
    }
  }
);
const STAGE_EMOJIS = {
  [PlantStage.Seed]: "🌱",
  [PlantStage.Seedling]: "🌿",
  [PlantStage.Mature]: "🌶️"
};
function StageBadge({ stage, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(stageBadgeVariants({ stage }), className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: STAGE_EMOJIS[stage] }),
    stage
  ] });
}
export {
  StageBadge as S
};
