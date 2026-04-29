import { d as createLucideIcon, r as reactExports, j as jsxRuntimeExports, ah as useComposedRefs, c as cn, P as PlantStage, R as RarityTier, b3 as useArtworkLayers, b4 as useMintRWAProvenance, a as Button, f as ue, af as useIsAdmin, bj as useUpdateCellData, bk as useToggleCooked, bl as useTransplantCell, bm as useAddPlantPhoto, bn as useRemovePlantPhoto, bo as useSetForSale, aI as useMarkPlantGerminated, aH as useUpdatePlantStage, b6 as useTriggerLifecycleUpgrade, aD as useStorePhotoFile, B as Badge, F as Flame, _ as ShoppingCart, X, bp as useGetUpgradeHistory, aE as useCreateTray, bq as useUpdateTrayName, br as useDeleteTray, aG as useCreatePlant, a5 as NFTStandard, bs as useMyWeatherRecords, bt as useAddWeatherRecord, M as MapPin, o as useAuth, m as motion, bu as useMyTrays, t as useMyPlants, A as AnimatePresence, b5 as useGenerateClaimToken } from "./index-BzyHOfJH.js";
import { g as Presence, P as Primitive, f as useControllableState, d as composeEventHandlers, e as createContextScope, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-Cx326vb4.js";
import { f as usePrevious, g as useSize, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BT1J6WYA.js";
import { C as Check } from "./check-BRbzaMOh.js";
import { L as Label } from "./label-B1Nh5Ul-.js";
import { S as Skeleton } from "./skeleton-4nFxEZGN.js";
import { I as Input } from "./input-WgY0hUlN.js";
import { T as Textarea } from "./textarea-DrepslR5.js";
import { S as Sparkles } from "./sparkles-pPm8l2Gj.js";
import { L as LoaderCircle } from "./loader-circle-UN9H9EsC.js";
import { S as Sprout } from "./sprout-DYWkSzYV.js";
import { L as Leaf } from "./leaf-Cxv2rTxz.js";
import { Z as Zap } from "./zap-CApEp5j2.js";
import { T as Tag } from "./tag-Bk-BJ2uo.js";
import { T as Trash2 } from "./trash-2-BjmAitxc.js";
import { C as ChevronRight } from "./chevron-right-C_LI6q7h.js";
import { C as CloudSun } from "./cloud-sun-D9Kfpz-6.js";
import { S as Search } from "./search-pAfVn9WE.js";
import { P as Printer } from "./printer-RHkD5P7t.js";
import { Q as QrCode } from "./qr-code-BivGNU63.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-BvX_XqYD.js";
import "./index-B4IHimjK.js";
import "./index-D4b-hkBZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$c = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$c);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$b = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode$b);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$a = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
];
const CloudRain = createLucideIcon("cloud-rain", __iconNode$a);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$9);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$8);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
];
const GitMerge = createLucideIcon("git-merge", __iconNode$7);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
];
const LayoutList = createLucideIcon("layout-list", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
  [
    "path",
    {
      d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
      key: "1o5pge"
    }
  ],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }]
];
const Skull = createLucideIcon("skull", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
];
const Thermometer = createLucideIcon("thermometer", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
];
const ToggleLeft = createLucideIcon("toggle-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
];
const Wind = createLucideIcon("wind", __iconNode);
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = reactExports.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control == null ? void 0 : control.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = reactExports.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
function formatDate(ts) {
  if (!ts) return "—";
  const ms = Number(ts) / 1e6;
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function formatDateInput(ts) {
  if (!ts) return "";
  const ms = Number(ts) / 1e6;
  const d = new Date(ms);
  return d.toISOString().split("T")[0];
}
function stageName(stage) {
  switch (stage) {
    case PlantStage.Seed:
      return "Seed";
    case PlantStage.Seedling:
      return "Seedling";
    case PlantStage.Mature:
      return "Mature";
    default:
      return "Unknown";
  }
}
function containerSizeLabel(cs) {
  if (!cs) return "—";
  switch (cs.__kind__) {
    case "Cell72":
      return "72 Cell Tray";
    case "Cell128":
      return "128 Cell Tray";
    case "Pot4Inch":
      return "4 Inch Pot";
    case "Pot6Inch":
      return "6 Inch Pot";
    case "Gal1New":
      return "1 Gallon";
    case "Gal3New":
      return "3 Gallon";
    case "Gal5Bucket":
      return "5 Gallon (Bucket)";
    case "Gal5GrowBag":
      return "5 Gallon (Grow Bag)";
    case "Gal7Pot":
      return "7 Gallon Pot";
    case "Gal7GrowBag":
      return "7 Gallon Grow Bag";
    case "Gal10GrowBag":
      return "10 Gallon Grow Bag";
    case "Gal15GrowBag":
      return "15 Gallon Grow Bag";
    case "InGround":
      return "In Ground";
    case "Other":
      return cs.Other ? `Other: ${cs.Other}` : "Other (specify)";
    case "Oz16":
      return "16 oz";
    case "Gal1":
      return "1 Gallon";
    case "Gal3":
      return "3 Gallon";
    case "Gal5":
      return "5 Gallon";
    default:
      return "—";
  }
}
const CONTAINER_SIZE_OPTIONS = [
  { value: "cell72", label: "72 Cell Tray" },
  { value: "cell128", label: "128 Cell Tray" },
  { value: "pot4inch", label: "4 Inch Pot" },
  { value: "pot6inch", label: "6 Inch Pot" },
  { value: "1gal", label: "1 Gallon" },
  { value: "3gal", label: "3 Gallon" },
  { value: "5galbucket", label: "5 Gallon (Bucket)" },
  { value: "5galgrowbag", label: "5 Gallon (Grow Bag)" },
  { value: "7galpot", label: "7 Gallon Pot" },
  { value: "7galgrowbag", label: "7 Gallon Grow Bag" },
  { value: "10galgrowbag", label: "10 Gallon Grow Bag" },
  { value: "15galgrowbag", label: "15 Gallon Grow Bag" },
  { value: "inground", label: "In Ground" },
  { value: "other", label: "Other (specify)" }
];
function buildContainerSize(option, otherText) {
  switch (option) {
    case "cell72":
      return { __kind__: "Cell72", Cell72: null };
    case "cell128":
      return { __kind__: "Cell128", Cell128: null };
    case "pot4inch":
      return { __kind__: "Pot4Inch", Pot4Inch: null };
    case "pot6inch":
      return { __kind__: "Pot6Inch", Pot6Inch: null };
    case "1gal":
      return { __kind__: "Gal1New", Gal1New: null };
    case "3gal":
      return { __kind__: "Gal3New", Gal3New: null };
    case "5galbucket":
      return { __kind__: "Gal5Bucket", Gal5Bucket: null };
    case "5galgrowbag":
      return { __kind__: "Gal5GrowBag", Gal5GrowBag: null };
    case "7galpot":
      return { __kind__: "Gal7Pot", Gal7Pot: null };
    case "7galgrowbag":
      return { __kind__: "Gal7GrowBag", Gal7GrowBag: null };
    case "10galgrowbag":
      return { __kind__: "Gal10GrowBag", Gal10GrowBag: null };
    case "15galgrowbag":
      return { __kind__: "Gal15GrowBag", Gal15GrowBag: null };
    case "inground":
      return { __kind__: "InGround", InGround: null };
    case "other":
      return { __kind__: "Other", Other: otherText };
    case "16oz":
      return { __kind__: "Oz16", Oz16: null };
    default:
      return { __kind__: "Gal1New", Gal1New: null };
  }
}
function getCellClass(plant) {
  if (!plant) return "tray-cell tray-cell-available cursor-pointer";
  if (plant.is_cooked)
    return "tray-cell cursor-pointer border-red-900 bg-black";
  if (plant.is_transplanted)
    return "tray-cell cursor-pointer bg-muted/20 border-muted/40 opacity-60";
  switch (plant.stage) {
    case PlantStage.Seed:
      return "tray-cell cursor-pointer bg-emerald-950/60 border-emerald-700/60";
    case PlantStage.Seedling:
      return "tray-cell cursor-pointer bg-cyan-950/60 border-cyan-600/50";
    case PlantStage.Mature:
      return "tray-cell cursor-pointer bg-primary/20 border-primary/50";
    default:
      return "tray-cell tray-cell-available cursor-pointer";
  }
}
async function compressImage(file, maxWidth = 800, quality = 0.7, maxBytes = 2e5) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxWidth / img.width);
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("No canvas context"));
        return;
      }
      ctx.drawImage(img, 0, 0, w, h);
      let q = quality;
      const tryCompress = () => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Compression failed"));
              return;
            }
            if (blob.size <= maxBytes || q <= 0.3) {
              resolve(blob);
              return;
            }
            q -= 0.1;
            tryCompress();
          },
          "image/jpeg",
          q
        );
      };
      tryCompress();
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image load failed"));
    };
    img.src = url;
  });
}
function printTrayMap(trayName, plants) {
  const plantMap = /* @__PURE__ */ new Map();
  for (const p of plants) plantMap.set(p.cellIndex, p);
  const COLS = 12;
  const ROWS = 6;
  const TOTAL = COLS * ROWS;
  const dateStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const cells = Array.from({ length: TOTAL }, (_, i) => {
    const p = plantMap.get(i);
    if (!p) {
      return `<div class="cell empty"><span class="cellnum">${i + 1}</span></div>`;
    }
    let statusClass = "active";
    let statusMark = "";
    let stageBadge = `<span class="stage">${p.stage}</span>`;
    if (p.isCooked) {
      statusClass = "cooked";
      statusMark = `<span class="mark">✕ Cooked</span>`;
      stageBadge = "";
    } else if (p.isTransplanted) {
      statusClass = "transplanted";
      statusMark = `<span class="mark">✓ Moved</span>`;
    }
    return `<div class="cell ${statusClass}">
      <span class="cellnum">${i + 1}</span>
      <span class="name">${p.commonName || "—"}</span>
      ${stageBadge}
      ${statusMark}
    </div>`;
  }).join("");
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>IC SPICY — Tray Map: ${trayName}</title>
<style>
  @media print { @page { margin: 0.5in; size: landscape; } }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #fff; color: #111; }
  .print-page { max-width: 1100px; margin: 0 auto; padding: 24px; }
  /* Header */
  .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #1a6b2b; padding-bottom: 14px; margin-bottom: 18px; }
  .brand { display: flex; flex-direction: column; }
  .brand-name { font-size: 22px; font-weight: 900; letter-spacing: -0.5px; color: #1a6b2b; }
  .brand-sub { font-size: 12px; color: #555; margin-top: 2px; }
  .tray-info { text-align: right; }
  .tray-name { font-size: 18px; font-weight: 700; color: #111; }
  .tray-date { font-size: 11px; color: #777; margin-top: 3px; }
  /* Grid */
  .grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 4px; margin-bottom: 16px; }
  .cell { border: 1.5px solid #ccc; border-radius: 4px; padding: 4px 3px; min-height: 56px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; position: relative; font-size: 9px; }
  .cell.empty { border-style: dashed; border-color: #ddd; background: #fafafa; }
  .cell.active { border-color: #2d8a45; background: #f0fdf4; }
  .cell.transplanted { border-color: #aaa; background: #f5f5f5; opacity: 0.7; }
  .cell.cooked { border-color: #c0392b; background: #fff5f5; }
  .cellnum { position: absolute; top: 2px; left: 3px; font-size: 8px; color: #aaa; font-variant-numeric: tabular-nums; }
  .name { font-size: 9.5px; font-weight: 700; color: #111; line-height: 1.2; max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .stage { font-size: 8px; color: #2d8a45; background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 3px; padding: 1px 3px; margin-top: 2px; }
  .mark { font-size: 8px; color: inherit; margin-top: 2px; font-weight: 700; }
  .cell.cooked .mark { color: #c0392b; }
  .cell.transplanted .mark { color: #888; }
  /* Legend */
  .legend { display: flex; gap: 18px; flex-wrap: wrap; font-size: 11px; color: #444; border-top: 1px solid #e5e5e5; padding-top: 12px; }
  .legend-item { display: flex; align-items: center; gap: 5px; }
  .legend-dot { width: 12px; height: 12px; border-radius: 3px; border: 1.5px solid; flex-shrink: 0; }
  /* Footer */
  .footer { margin-top: 18px; font-size: 10px; color: #888; border-top: 1px solid #e5e5e5; padding-top: 10px; display: flex; justify-content: space-between; }
  .footer a { color: #1a6b2b; text-decoration: none; }
  @media print { .no-print { display: none !important; } body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
  /* Print button */
  .print-btn { background: #1a6b2b; color: #fff; border: none; padding: 10px 24px; font-size: 14px; font-weight: 700; border-radius: 6px; cursor: pointer; margin-bottom: 20px; }
  .print-btn:hover { background: #155123; }
</style>
</head>
<body>
<div class="print-page">
  <button class="print-btn no-print" onclick="window.print()">🖨️ Print Tray Map</button>
  <div class="header">
    <div class="brand">
      <span class="brand-name">🌶️ IC SPICY Nursery</span>
      <span class="brand-sub">Port Charlotte, FL · FDACS Registered Nursery</span>
    </div>
    <div class="tray-info">
      <div class="tray-name">${trayName}</div>
      <div class="tray-date">Printed: ${dateStr}</div>
    </div>
  </div>
  <div class="grid">${cells}</div>
  <div class="legend">
    <span class="legend-item"><span class="legend-dot" style="background:#f0fdf4;border-color:#2d8a45"></span>Active</span>
    <span class="legend-item"><span class="legend-dot" style="background:#f5f5f5;border-color:#aaa;opacity:0.7"></span>Transplanted</span>
    <span class="legend-item"><span class="legend-dot" style="background:#fff5f5;border-color:#c0392b"></span>Cooked</span>
    <span class="legend-item"><span class="legend-dot" style="background:#fafafa;border-color:#ddd;border-style:dashed"></span>Empty</span>
  </div>
  <div class="footer">
    <span>IC SPICY Nursery Management System · <a href="https://caffeine.ai" target="_blank">caffeine.ai</a></span>
    <span>Generated ${dateStr}</span>
  </div>
</div>
</body>
</html>`;
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
}
function exportNIMSCsv(plants, trays) {
  const trayMap = new Map(trays.map((t) => [t.id.toString(), t.name]));
  const headers = [
    "Tray Name",
    "Cell Number",
    "Common Name",
    "Latin Name",
    "Origin",
    "Stage",
    "Container Size",
    "Date Seeded",
    "Date Germinated",
    "Date Transplanted",
    "Watering Schedule",
    "Feeding Schedule",
    "Pest Notes",
    "Additional Notes",
    "Photo Count",
    "For Sale",
    "Is Cooked"
  ];
  const rows = plants.map((p) => [
    trayMap.get(p.tray_id.toString()) ?? `Tray ${p.tray_id}`,
    p.cell_position.toString(),
    p.common_name ?? "",
    p.latin_name ?? "",
    p.origin ?? "",
    stageName(p.stage),
    containerSizeLabel(p.container_size),
    formatDate(p.planting_date),
    formatDate(p.germination_date),
    formatDate(p.transplant_date),
    p.watering_schedule ?? "",
    p.notes ?? "",
    p.pest_notes ?? "",
    p.additional_notes ?? "",
    p.photo_keys.length.toString(),
    p.for_sale ? "Yes" : "No",
    p.is_cooked ? "Yes" : "No"
  ]);
  const csv = [headers, ...rows].map(
    (row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
  ).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nims-export-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
function ProvenanceModal({
  plant,
  open,
  onClose
}) {
  const [selectedLayer, setSelectedLayer] = reactExports.useState("");
  const [customNotes, setCustomNotes] = reactExports.useState("");
  const [rarityTier, setRarityTier] = reactExports.useState(RarityTier.Common);
  const [mintedTokenId, setMintedTokenId] = reactExports.useState(null);
  const { data: layers = [] } = useArtworkLayers();
  const mintMutation = useMintRWAProvenance();
  async function handleMint() {
    if (!selectedLayer) {
      ue.error("Please select an artwork layer");
      return;
    }
    try {
      const tierDiscount = rarityTier === RarityTier.Rare ? BigInt(15) : rarityTier === RarityTier.Uncommon ? BigInt(12) : BigInt(10);
      const tokenId = await mintMutation.mutateAsync({
        plant_id: plant.id,
        artwork_layer_id: BigInt(selectedLayer),
        custom_notes: customNotes,
        rarity_tier: tierDiscount
      });
      setMintedTokenId(tokenId);
      ue.success("RWA NFT minted successfully!");
    } catch (_e) {
      ue.error("Minting failed. Please try again.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg bg-card border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 font-display text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-primary" }),
      "Assign RWA Provenance NFT"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 rounded-lg p-3 space-y-1.5 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Common Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: plant.common_name || plant.variety }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Latin Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: plant.latin_name || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Origin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: plant.origin || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Date Seeded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: formatDate(plant.planting_date) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Germinated" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: formatDate(plant.germination_date) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Container" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: containerSizeLabel(plant.container_size) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground", children: "Artwork Layer" }),
        layers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No artwork layers uploaded. Upload layers in the Admin panel." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedLayer, onValueChange: setSelectedLayer, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "bg-muted/30 border-border text-foreground",
              "data-ocid": "provenance-layer-select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select artwork layer…" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-popover border-border", children: layers.map((layer) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            SelectItem,
            {
              value: layer.id.toString(),
              children: [
                "Layer ",
                layer.layer_number.toString(),
                " — ",
                layer.name
              ]
            },
            layer.id.toString()
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground", children: "Rarity Tier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: rarityTier,
            onValueChange: (v) => setRarityTier(v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "bg-muted/30 border-border text-foreground",
                  "data-ocid": "provenance-rarity-tier",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-popover border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: RarityTier.Common, children: "🟢 Common — 10% storewide discount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: RarityTier.Uncommon, children: "🔵 Uncommon — 12% storewide discount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: RarityTier.Rare, children: "🟣 Rare — 15% storewide discount" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "NFT holders receive a lifetime discount at checkout based on their rarity tier." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground", children: "Custom Metadata Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: customNotes,
            onChange: (e) => setCustomNotes(e.target.value),
            placeholder: "Additional provenance notes to embed in the NFT metadata…",
            rows: 3,
            className: "bg-muted/30 border-border text-foreground placeholder:text-muted-foreground resize-none",
            "data-ocid": "provenance-notes"
          }
        )
      ] }),
      mintedTokenId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-semibold", children: "✓ NFT Minted Successfully" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-mono text-xs break-all", children: [
          "Token ID: ",
          mintedTokenId
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: onClose,
            className: "border-border",
            children: mintedTokenId ? "Close" : "Cancel"
          }
        ),
        !mintedTokenId && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleMint,
            disabled: mintMutation.isPending || !selectedLayer,
            className: "bg-primary hover:bg-primary/90 text-primary-foreground",
            "data-ocid": "provenance-mint-btn",
            children: mintMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-1.5 animate-spin" }),
              "Minting…"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-1.5" }),
              "Mint NFT"
            ] })
          }
        )
      ] })
    ] })
  ] }) });
}
const CONTAINER_OPTIONS = CONTAINER_SIZE_OPTIONS;
function UpgradeHistoryTimeline({ plantId }) {
  const { data: history = [], isLoading } = useGetUpgradeHistory(plantId);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 py-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }),
      "Loading upgrade history…"
    ] });
  }
  if (!history.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground py-2", children: "No lifecycle upgrades yet. Upgrades are triggered automatically when a plant advances a stage." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-40 overflow-y-auto pr-1", children: history.map((evt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex gap-3 text-xs",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-0.5 flex-shrink-0 mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GitMerge, { className: "w-2.5 h-2.5 text-primary" }) }),
          i < history.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px flex-1 bg-border min-h-[12px]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-2 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-foreground", children: [
            evt.old_stage,
            " → ",
            evt.new_stage
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground space-y-0.5 mt-0.5", children: [
            evt.old_nft_id && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono truncate", children: [
              "Old NFT:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70", children: evt.old_nft_id })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono truncate", children: [
              "New NFT:",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70", children: evt.new_nft_id })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: formatDate(evt.upgraded_at) })
          ] })
        ] })
      ]
    },
    `upgrade-${evt.upgraded_at}-${i}`
  )) });
}
function CellDetailModal({
  plant,
  tray,
  cellIndex,
  open,
  onClose,
  onSeedPlanted
}) {
  var _a;
  const { data: isAdmin } = useIsAdmin();
  const [provenanceOpen, setProvenanceOpen] = reactExports.useState(false);
  const [showTransplant, setShowTransplant] = reactExports.useState(false);
  const [containerOption, setContainerOption] = reactExports.useState("1gal");
  const [containerOther, setContainerOther] = reactExports.useState("");
  const [showCookConfirm, setShowCookConfirm] = reactExports.useState(false);
  const [showUpgradeHistory, setShowUpgradeHistory] = reactExports.useState(false);
  const [uploadingPhoto, setUploadingPhoto] = reactExports.useState(false);
  const photoInputRef = reactExports.useRef(null);
  const [commonName, setCommonName] = reactExports.useState((plant == null ? void 0 : plant.common_name) ?? "");
  const [latinName, setLatinName] = reactExports.useState((plant == null ? void 0 : plant.latin_name) ?? "");
  const [origin, setOrigin] = reactExports.useState((plant == null ? void 0 : plant.origin) ?? "");
  const [dateSeedValue, setDateSeedValue] = reactExports.useState(
    plant ? formatDateInput(plant.planting_date) : ""
  );
  const [notes, setNotes] = reactExports.useState((plant == null ? void 0 : plant.notes) ?? "");
  const [wateringSchedule, setWateringSchedule] = reactExports.useState(
    (plant == null ? void 0 : plant.watering_schedule) ?? ""
  );
  const [pestNotes, setPestNotes] = reactExports.useState((plant == null ? void 0 : plant.pest_notes) ?? "");
  const [additionalNotes, setAdditionalNotes] = reactExports.useState(
    (plant == null ? void 0 : plant.additional_notes) ?? ""
  );
  const updateCellData = useUpdateCellData();
  const toggleCooked = useToggleCooked();
  const transplantCell = useTransplantCell();
  const addPhoto = useAddPlantPhoto();
  const removePhoto = useRemovePlantPhoto();
  const setForSale = useSetForSale();
  const markGerminated = useMarkPlantGerminated();
  const updateStage = useUpdatePlantStage();
  const triggerUpgrade = useTriggerLifecycleUpgrade();
  const storePhoto = useStorePhotoFile();
  async function handleSave() {
    if (!plant) {
      onSeedPlanted(tray.id, cellIndex);
      return;
    }
    try {
      await updateCellData.mutateAsync({
        plant_id: plant.id,
        common_name: commonName || void 0,
        latin_name: latinName || void 0,
        origin: origin || void 0,
        watering_schedule: wateringSchedule || void 0,
        pest_notes: pestNotes || void 0,
        additional_notes: additionalNotes || void 0
      });
      ue.success("Cell data saved");
      onClose();
    } catch (_e) {
      ue.error("Failed to save cell data");
    }
  }
  async function handleMarkGerminated() {
    if (!plant) return;
    try {
      await markGerminated.mutateAsync({
        plantId: plant.id,
        date: BigInt(Date.now() * 1e6)
      });
      ue.success("Marked as germinated!");
      onClose();
    } catch (_e) {
      ue.error("Failed to mark germinated");
    }
  }
  async function handleAdvanceSeedling() {
    if (!plant) return;
    try {
      await updateStage.mutateAsync({
        plantId: plant.id,
        stage: PlantStage.Seedling,
        notes: "Advanced to seedling stage"
      });
      ue.success("Advanced to Seedling!");
      if (plant.nft_id) {
        try {
          const result = await triggerUpgrade.mutateAsync({
            plantId: plant.id,
            newStage: "Seedling"
          });
          ue.success(`NFT upgraded to Seedling stage! New ID: ${result}`);
        } catch (_e) {
          ue.error("Stage advanced but NFT upgrade failed — retry manually");
        }
      }
      onClose();
    } catch (_e) {
      ue.error("Failed to advance stage");
    }
  }
  async function handleAdvanceMature() {
    if (!plant) return;
    try {
      await updateStage.mutateAsync({
        plantId: plant.id,
        stage: PlantStage.Mature,
        notes: "Advanced to mature stage"
      });
      ue.success("Advanced to Mature!");
      if (plant.nft_id) {
        try {
          const result = await triggerUpgrade.mutateAsync({
            plantId: plant.id,
            newStage: "Mature"
          });
          ue.success(`NFT upgraded to Mature stage! New ID: ${result}`);
        } catch (_e) {
          ue.error("Stage advanced but NFT upgrade failed — retry manually");
        }
      }
      onClose();
    } catch (_e) {
      ue.error("Failed to advance stage");
    }
  }
  async function handleTransplant() {
    if (!plant) return;
    const cs = buildContainerSize(containerOption, containerOther);
    try {
      const newPlant = await transplantCell.mutateAsync({
        plant_id: plant.id,
        container_size: cs
      });
      ue.success(`Transplanted to ${containerSizeLabel(cs)}!`);
      const nftId = plant.nft_id ?? (newPlant == null ? void 0 : newPlant.nft_id);
      if (nftId) {
        try {
          const newStage = stageName((newPlant == null ? void 0 : newPlant.stage) ?? plant.stage);
          const result = await triggerUpgrade.mutateAsync({
            plantId: plant.id,
            newStage
          });
          ue.success(`NFT upgraded to ${newStage} stage! New ID: ${result}`);
        } catch (_e) {
          ue.error(
            "Transplant succeeded but NFT upgrade failed — retry manually"
          );
        }
      }
      setShowTransplant(false);
      onClose();
    } catch (_e) {
      ue.error("Transplant failed");
    }
  }
  async function handleManualLifecycleUpgrade() {
    if (!(plant == null ? void 0 : plant.nft_id)) return;
    try {
      const newStage = stageName(plant.stage);
      const result = await triggerUpgrade.mutateAsync({
        plantId: plant.id,
        newStage
      });
      ue.success(
        `NFT upgraded! Old: ${plant.nft_id.slice(0, 12)}… → New: ${result.slice(0, 12)}…`
      );
    } catch (_e) {
      ue.error("Lifecycle upgrade failed");
    }
  }
  async function handleToggleCooked() {
    if (!plant) return;
    try {
      await toggleCooked.mutateAsync(plant.id);
      ue.success(
        plant.is_cooked ? "Cell reactivated" : "Cell marked as cooked 💀"
      );
      setShowCookConfirm(false);
      onClose();
    } catch (_e) {
      ue.error("Failed to update cooked status");
    }
  }
  async function handlePhotoUpload(e) {
    var _a2;
    if (!plant || !((_a2 = e.target.files) == null ? void 0 : _a2.length)) return;
    setUploadingPhoto(true);
    try {
      const file = e.target.files[0];
      const compressed = await compressImage(file);
      const bytes = new Uint8Array(await compressed.arrayBuffer());
      const objectKey = await storePhoto.mutateAsync({
        pathPrefix: "photos/plants",
        data: bytes,
        mimeType: "image/jpeg"
      });
      await addPhoto.mutateAsync({ plantId: plant.id, photoKey: objectKey });
      ue.success("Photo uploaded!");
    } catch (_e) {
      ue.error("Photo upload failed");
    } finally {
      setUploadingPhoto(false);
      if (photoInputRef.current) photoInputRef.current.value = "";
    }
  }
  async function handleRemovePhoto(key) {
    if (!plant) return;
    try {
      await removePhoto.mutateAsync({ plantId: plant.id, photoKey: key });
      ue.success("Photo removed");
    } catch (_e) {
      ue.error("Failed to remove photo");
    }
  }
  async function handleForSaleToggle() {
    if (!plant) return;
    try {
      await setForSale.mutateAsync({
        plantId: plant.id,
        forSale: !plant.for_sale
      });
      ue.success(plant.for_sale ? "Removed from sale" : "Listed for sale");
    } catch (_e) {
      ue.error("Failed to update sale status");
    }
  }
  const cellLabel = `Cell ${cellIndex + 1}`;
  const title = plant ? `${plant.common_name || plant.variety} — ${cellLabel}` : `${cellLabel} — Empty`;
  const hasNFT = !!(plant == null ? void 0 : plant.nft_id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: open && !provenanceOpen,
        onOpenChange: (v) => !v && onClose(),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-5 h-5 text-primary" }),
            title
          ] }) }),
          plant && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 -mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: plant.stage === PlantStage.Seed ? "bg-emerald-950/60 border-emerald-700/40 text-emerald-300" : plant.stage === PlantStage.Seedling ? "bg-cyan-950/60 border-cyan-600/40 text-cyan-300" : "bg-primary/20 border-primary/40 text-primary",
                variant: "outline",
                children: stageName(plant.stage)
              }
            ),
            plant.is_cooked && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "bg-red-950 border-red-800 text-red-400",
                variant: "outline",
                children: "💀 Cooked"
              }
            ),
            plant.is_transplanted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: "bg-muted/40 border-muted text-muted-foreground",
                variant: "outline",
                children: [
                  "Transplanted → ",
                  containerSizeLabel(plant.container_size)
                ]
              }
            ),
            plant.for_sale && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "bg-primary/20 border-primary/40 text-primary",
                variant: "outline",
                children: "For Sale"
              }
            ),
            hasNFT && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "bg-amber-950/60 border-amber-700/40 text-amber-300",
                variant: "outline",
                children: "🎨 NFT Minted"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 mt-1", children: !plant ? (
            /* Empty cell CTA */
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-12 h-12 text-muted-foreground/40 mx-auto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "This cell is empty." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => onSeedPlanted(tray.id, cellIndex),
                  className: "bg-primary hover:bg-primary/90 text-primary-foreground",
                  "data-ocid": "cell-plant-seed-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-4 h-4 mr-1.5" }),
                    "Plant a Seed Here"
                  ]
                }
              )
            ] })
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Common Seed Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: commonName,
                    onChange: (e) => setCommonName(e.target.value),
                    placeholder: "e.g. Carolina Reaper",
                    className: "bg-muted/30 border-border text-foreground",
                    "data-ocid": "cell-common-name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Latin / Scientific Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: latinName,
                    onChange: (e) => setLatinName(e.target.value),
                    placeholder: "e.g. Capsicum chinense",
                    className: "bg-muted/30 border-border text-foreground",
                    "data-ocid": "cell-latin-name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Origin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: origin,
                    onChange: (e) => setOrigin(e.target.value),
                    placeholder: "e.g. Trinidad",
                    className: "bg-muted/30 border-border text-foreground",
                    "data-ocid": "cell-origin"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Date Seeded" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    value: dateSeedValue,
                    onChange: (e) => setDateSeedValue(e.target.value),
                    className: "bg-muted/30 border-border text-foreground",
                    "data-ocid": "cell-date-seeded"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Nutrient Feeding Schedule" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: notes,
                  onChange: (e) => setNotes(e.target.value),
                  placeholder: "e.g. Week 1: 1/4 strength bloom, Week 2: Cal-Mag…",
                  rows: 2,
                  className: "bg-muted/30 border-border text-foreground placeholder:text-muted-foreground resize-none",
                  "data-ocid": "cell-feeding-schedule"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Watering Schedule" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: wateringSchedule,
                    onChange: (e) => setWateringSchedule(e.target.value),
                    placeholder: "e.g. Every 2 days, bottom watering",
                    rows: 2,
                    className: "bg-muted/30 border-border text-foreground placeholder:text-muted-foreground resize-none",
                    "data-ocid": "cell-watering-schedule"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Pest Pressure Notes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: pestNotes,
                    onChange: (e) => setPestNotes(e.target.value),
                    placeholder: "e.g. Aphids spotted on 3/12, treated with neem…",
                    rows: 2,
                    className: "bg-muted/30 border-border text-foreground placeholder:text-muted-foreground resize-none",
                    "data-ocid": "cell-pest-notes"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Additional Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: additionalNotes,
                  onChange: (e) => setAdditionalNotes(e.target.value),
                  placeholder: "Any other observations…",
                  rows: 2,
                  className: "bg-muted/30 border-border text-foreground placeholder:text-muted-foreground resize-none",
                  "data-ocid": "cell-additional-notes"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/20 rounded-lg p-3 grid grid-cols-3 gap-3 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground block", children: "Seeded" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: formatDate(plant.planting_date) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground block", children: "Germinated" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: formatDate(plant.germination_date) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground block", children: "Transplanted" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: formatDate(plant.transplant_date) })
              ] })
            ] }),
            hasNFT && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-950/20 border border-amber-700/30 rounded-lg p-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-amber-400 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-amber-300", children: [
                    "NFT:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-amber-200/80", children: [
                      (_a = plant.nft_id) == null ? void 0 : _a.slice(0, 20),
                      "…"
                    ] })
                  ] })
                ] }),
                isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: handleManualLifecycleUpgrade,
                    disabled: triggerUpgrade.isPending,
                    className: "border-amber-700/40 text-amber-400 hover:bg-amber-950/40 h-7 text-xs",
                    "data-ocid": "cell-lifecycle-upgrade-btn",
                    children: [
                      triggerUpgrade.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 mr-1 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(GitMerge, { className: "w-3 h-3 mr-1" }),
                      "Lifecycle Upgrade"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setShowUpgradeHistory((v) => !v),
                  className: "text-xs text-amber-400/70 hover:text-amber-400 transition-colors flex items-center gap-1",
                  "data-ocid": "cell-upgrade-history-toggle",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GitMerge, { className: "w-3 h-3" }),
                    showUpgradeHistory ? "Hide" : "Show",
                    " upgrade history"
                  ]
                }
              ),
              showUpgradeHistory && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1 border-t border-amber-700/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpgradeHistoryTimeline, { plantId: plant.id }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 border-t border-border pt-4", children: [
              plant.stage === PlantStage.Seed && !plant.germination_date && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: handleMarkGerminated,
                  disabled: markGerminated.isPending,
                  className: "border-emerald-700/40 text-emerald-400 hover:bg-emerald-950/40",
                  "data-ocid": "cell-germinate-btn",
                  children: [
                    markGerminated.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-3.5 h-3.5 mr-1" }),
                    "Mark Germinated"
                  ]
                }
              ),
              plant.stage === PlantStage.Seed && plant.germination_date && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: handleAdvanceSeedling,
                  disabled: updateStage.isPending || triggerUpgrade.isPending,
                  className: "border-cyan-700/40 text-cyan-400 hover:bg-cyan-950/40",
                  "data-ocid": "cell-advance-seedling-btn",
                  children: [
                    updateStage.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3.5 h-3.5 mr-1" }),
                    "Advance to Seedling"
                  ]
                }
              ),
              plant.stage === PlantStage.Seedling && !plant.is_transplanted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: handleAdvanceMature,
                  disabled: updateStage.isPending || triggerUpgrade.isPending,
                  className: "border-cyan-700/40 text-cyan-400 hover:bg-cyan-950/40",
                  "data-ocid": "cell-advance-mature-btn",
                  children: [
                    updateStage.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-3.5 h-3.5 mr-1" }),
                    "Advance Stage"
                  ]
                }
              ),
              !plant.is_transplanted && !plant.is_cooked && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setShowTransplant((v) => !v),
                  className: "border-primary/40 text-primary hover:bg-primary/10",
                  "data-ocid": "cell-transplant-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-3.5 h-3.5 mr-1" }),
                    "Transplant"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setShowCookConfirm((v) => !v),
                  className: plant.is_cooked ? "border-emerald-700/40 text-emerald-400 hover:bg-emerald-950/40" : "border-red-800/40 text-red-400 hover:bg-red-950/40",
                  "data-ocid": "cell-cooked-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skull, { className: "w-3.5 h-3.5 mr-1" }),
                    plant.is_cooked ? "Revive" : "Cooked"
                  ]
                }
              ),
              isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: handleForSaleToggle,
                  disabled: setForSale.isPending,
                  className: plant.for_sale ? "border-muted text-muted-foreground hover:bg-muted/20" : "border-primary/40 text-primary hover:bg-primary/10",
                  "data-ocid": "cell-for-sale-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3.5 h-3.5 mr-1" }),
                    plant.for_sale ? "Remove from Sale" : "Mark For Sale"
                  ]
                }
              ),
              isAdmin && plant.stage === PlantStage.Seedling && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setProvenanceOpen(true),
                  className: "border-amber-700/40 text-amber-400 hover:bg-amber-950/40",
                  "data-ocid": "cell-provenance-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3.5 h-3.5 mr-1" }),
                    "Assign RWA Provenance"
                  ]
                }
              )
            ] }),
            showCookConfirm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-950/30 border border-red-800/40 rounded-lg p-3 text-sm space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-300 font-medium", children: plant.is_cooked ? "Revive this cell? It will return to active status." : "Mark this cell as Cooked (dead)? The cell will turn black/red." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    onClick: handleToggleCooked,
                    disabled: toggleCooked.isPending,
                    className: "bg-red-900 hover:bg-red-800 text-red-100",
                    "data-ocid": "cell-cooked-confirm-btn",
                    children: toggleCooked.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : "Confirm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => setShowCookConfirm(false),
                    className: "border-border",
                    children: "Cancel"
                  }
                )
              ] })
            ] }),
            showTransplant && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Transplant to:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: containerOption,
                  onValueChange: setContainerOption,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "bg-muted/30 border-border text-foreground",
                        "data-ocid": "transplant-container-select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-popover border-border", children: CONTAINER_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
                  ]
                }
              ),
              containerOption === "other" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: containerOther,
                  onChange: (e) => setContainerOther(e.target.value),
                  placeholder: "Describe pot size…",
                  className: "bg-muted/30 border-border text-foreground",
                  "data-ocid": "transplant-other-input"
                }
              ),
              hasNFT && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-400/80 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3" }),
                "NFT lifecycle upgrade will trigger automatically after transplant."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    onClick: handleTransplant,
                    disabled: transplantCell.isPending || triggerUpgrade.isPending,
                    className: "bg-primary hover:bg-primary/90 text-primary-foreground",
                    "data-ocid": "transplant-confirm-btn",
                    children: transplantCell.isPending || triggerUpgrade.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : "Confirm Transplant"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => setShowTransplant(false),
                    className: "border-border",
                    children: "Cancel"
                  }
                )
              ] })
            ] }),
            !plant.is_cooked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 border-t border-border pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Progress Photos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                      var _a2;
                      return (_a2 = photoInputRef.current) == null ? void 0 : _a2.click();
                    },
                    disabled: uploadingPhoto,
                    className: "border-border text-muted-foreground hover:text-foreground",
                    "data-ocid": "cell-upload-photo-btn",
                    children: [
                      uploadingPhoto ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-3.5 h-3.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5", children: "Add Photo" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: photoInputRef,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: handlePhotoUpload,
                    "data-ocid": "cell-photo-input"
                  }
                )
              ] }),
              plant.photo_keys.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-2", children: plant.photo_keys.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative group aspect-square rounded overflow-hidden bg-muted/30 border border-border",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: `/storage/${key}`,
                        alt: "Plant progress",
                        className: "w-full h-full object-cover"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => handleRemovePhoto(key),
                        "aria-label": "Remove photo",
                        className: "absolute top-1 right-1 opacity-0 group-hover:opacity-100 bg-black/70 text-red-400 rounded p-0.5 transition-smooth",
                        "data-ocid": "cell-remove-photo-btn",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" })
                      }
                    )
                  ]
                },
                key
              )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "No photos yet. Add progress shots!" })
            ] })
          ] }) }),
          plant && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end border-t border-border pt-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                onClick: onClose,
                className: "border-border",
                "data-ocid": "cell-modal-cancel",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1" }),
                  "Close"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleSave,
                disabled: updateCellData.isPending,
                className: "bg-primary hover:bg-primary/90 text-primary-foreground",
                "data-ocid": "cell-modal-save",
                children: [
                  updateCellData.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-1.5 animate-spin" }) : null,
                  "Save Changes"
                ]
              }
            )
          ] })
        ] })
      }
    ),
    plant && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProvenanceModal,
      {
        plant,
        open: provenanceOpen,
        onClose: () => setProvenanceOpen(false)
      }
    )
  ] });
}
function TrayManager({
  trays,
  selectedTrayId,
  onSelect
}) {
  const [editingTrayId, setEditingTrayId] = reactExports.useState(null);
  const [editName, setEditName] = reactExports.useState("");
  const [showAddTray, setShowAddTray] = reactExports.useState(false);
  const [newTrayName, setNewTrayName] = reactExports.useState("");
  const [confirmDeleteId, setConfirmDeleteId] = reactExports.useState(null);
  const createTray = useCreateTray();
  const updateTrayName = useUpdateTrayName();
  const deleteTray = useDeleteTray();
  async function handleCreateTray() {
    if (!newTrayName.trim()) {
      ue.error("Please enter a tray name");
      return;
    }
    try {
      const tray = await createTray.mutateAsync({
        name: newTrayName.trim(),
        planting_date: BigInt(Date.now() * 1e6),
        nft_standard: NFTStandard.ICRC37
      });
      setNewTrayName("");
      setShowAddTray(false);
      onSelect(tray.id);
      ue.success(`Tray "${tray.name}" created!`);
    } catch (_e) {
      ue.error("Failed to create tray");
    }
  }
  async function handleRename(trayId) {
    if (!editName.trim()) {
      setEditingTrayId(null);
      return;
    }
    try {
      await updateTrayName.mutateAsync({ trayId, name: editName.trim() });
      setEditingTrayId(null);
      ue.success("Tray renamed");
    } catch (_e) {
      ue.error("Failed to rename tray");
    }
  }
  async function handleDelete(trayId) {
    try {
      await deleteTray.mutateAsync(trayId);
      setConfirmDeleteId(null);
      if (selectedTrayId === trayId && trays.length > 1) {
        const next = trays.find((t) => t.id !== trayId);
        if (next) onSelect(next.id);
      }
      ue.success("Tray removed");
    } catch (_e) {
      ue.error("Failed to remove tray");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
    trays.map((tray) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
      editingTrayId === tray.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: editName,
            onChange: (e) => setEditName(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") handleRename(tray.id);
              if (e.key === "Escape") setEditingTrayId(null);
            },
            className: "h-8 w-32 bg-muted/40 border-border text-foreground text-sm",
            autoFocus: true,
            "data-ocid": "tray-rename-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => handleRename(tray.id),
            disabled: updateTrayName.isPending,
            className: "h-8 px-2 text-primary",
            children: updateTrayName.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : "✓"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => setEditingTrayId(null),
            className: "h-8 px-2 text-muted-foreground",
            children: "✕"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onSelect(tray.id),
          className: [
            "px-3 py-1.5 rounded-md text-sm font-medium transition-smooth border",
            selectedTrayId === tray.id ? "bg-primary/20 border-primary/50 text-primary" : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
          ].join(" "),
          "data-ocid": `tray-tab-${tray.id}`,
          children: tray.name
        }
      ),
      selectedTrayId === tray.id && editingTrayId !== tray.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setEditingTrayId(tray.id);
              setEditName(tray.name);
            },
            className: "px-1.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-smooth",
            "aria-label": "Rename tray",
            "data-ocid": "tray-rename-btn",
            children: "✏"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setConfirmDeleteId(tray.id),
            className: "px-1.5 py-1 text-xs text-muted-foreground hover:text-red-400 transition-smooth",
            "aria-label": "Delete tray",
            "data-ocid": "tray-delete-btn",
            children: "🗑"
          }
        )
      ] })
    ] }, tray.id.toString())),
    showAddTray ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: newTrayName,
          onChange: (e) => setNewTrayName(e.target.value),
          placeholder: "Tray name…",
          onKeyDown: (e) => {
            if (e.key === "Enter") handleCreateTray();
            if (e.key === "Escape") setShowAddTray(false);
          },
          className: "h-8 w-36 bg-muted/40 border-border text-foreground text-sm",
          autoFocus: true,
          "data-ocid": "new-tray-name-input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: handleCreateTray,
          disabled: createTray.isPending,
          className: "h-8 bg-primary hover:bg-primary/90 text-primary-foreground px-3",
          "data-ocid": "new-tray-confirm-btn",
          children: createTray.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : "Add"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "ghost",
          onClick: () => setShowAddTray(false),
          className: "h-8 px-2 text-muted-foreground",
          children: "Cancel"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        onClick: () => setShowAddTray(true),
        className: "h-8 border-dashed border-border text-muted-foreground hover:text-foreground",
        "data-ocid": "add-tray-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3.5 h-3.5 mr-1" }),
          "Add Tray"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!confirmDeleteId,
        onOpenChange: (v) => !v && setConfirmDeleteId(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm bg-card border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-foreground", children: "Remove Tray?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This will remove the tray. Plants in this tray will remain in your inventory but lose their tray assignment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setConfirmDeleteId(null),
                className: "border-border",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => confirmDeleteId && handleDelete(confirmDeleteId),
                disabled: deleteTray.isPending,
                className: "bg-destructive hover:bg-destructive/90 text-destructive-foreground",
                "data-ocid": "tray-delete-confirm-btn",
                children: deleteTray.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : "Remove"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
const VARIETIES = [
  "Apocalypse Scorpion",
  "Death Spiral",
  "RB003",
  "Fried Chicken",
  "Scotch Bonnet",
  "Sugar Rush Peach",
  "Aji Charapita",
  "Calabrian (Cherry)",
  "Fish Pepper",
  "Farmers Market Jalapeno",
  "Aji Guyana",
  "Acoma Pueblo"
];
function NewSeedModal({
  open,
  trayId,
  cellIndex,
  onClose
}) {
  const [commonName, setCommonName] = reactExports.useState("");
  const [latinName, setLatinName] = reactExports.useState("");
  const [variety, setVariety] = reactExports.useState(VARIETIES[0]);
  const [origin, setOrigin] = reactExports.useState("");
  const [dateSowed, setDateSowed] = reactExports.useState(
    (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  const [datePurchased, setDatePurchased] = reactExports.useState(
    (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  const [containerOption, setContainerOption] = reactExports.useState("cell72");
  const [containerOther, setContainerOther] = reactExports.useState("");
  const [photoFile, setPhotoFile] = reactExports.useState(null);
  const [photoPreview, setPhotoPreview] = reactExports.useState(null);
  const [uploadingPhoto, setUploadingPhoto] = reactExports.useState(false);
  const photoInputRef = reactExports.useRef(null);
  const createPlant = useCreatePlant();
  const storePhoto = useStorePhotoFile();
  function handlePhotoSelect(e) {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    setPhotoFile(file);
    const url = URL.createObjectURL(file);
    setPhotoPreview(url);
  }
  function clearPhoto() {
    setPhotoFile(null);
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoPreview(null);
    if (photoInputRef.current) photoInputRef.current.value = "";
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let photoKey;
    if (photoFile) {
      setUploadingPhoto(true);
      try {
        const compressed = await compressImage(photoFile);
        const bytes = new Uint8Array(await compressed.arrayBuffer());
        photoKey = await storePhoto.mutateAsync({
          pathPrefix: "photos/plants",
          data: bytes,
          mimeType: "image/jpeg"
        });
      } catch (_e) {
        ue.error("Photo upload failed — plant will be added without photo");
      } finally {
        setUploadingPhoto(false);
      }
    }
    const containerSize = buildContainerSize(containerOption, containerOther);
    try {
      await createPlant.mutateAsync({
        tray_id: trayId,
        cell_position: BigInt(cellIndex),
        variety,
        genetics: commonName || variety,
        notes: "",
        common_name: commonName || void 0,
        latin_name: latinName || void 0,
        origin: origin || void 0,
        planting_date: BigInt(new Date(dateSowed).getTime() * 1e6),
        date_purchased: datePurchased ? BigInt(new Date(datePurchased).getTime() * 1e6) : void 0,
        nft_standard: NFTStandard.ICRC37,
        container_size: containerSize,
        source_plant_id: void 0,
        watering_schedule: void 0,
        pest_notes: void 0,
        additional_notes: void 0,
        ...photoKey ? { photo_key: [photoKey] } : { photo_key: [] }
      });
      ue.success("Plant added!");
      setCommonName("");
      setLatinName("");
      setVariety(VARIETIES[0]);
      setOrigin("");
      setDateSowed((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
      setDatePurchased((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
      setContainerOption("cell72");
      setContainerOther("");
      clearPhoto();
      onClose();
    } catch (_e) {
      ue.error("Failed to add plant");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-foreground flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-5 h-5 text-primary" }),
      "Add Plant — Cell ",
      cellIndex + 1
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Variety" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: variety, onValueChange: setVariety, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "bg-muted/30 border-border text-foreground",
              "data-ocid": "new-seed-variety",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-popover border-border", children: VARIETIES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: v, children: v }, v)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Common Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: commonName,
              onChange: (e) => setCommonName(e.target.value),
              placeholder: "e.g. Carolina Reaper",
              className: "bg-muted/30 border-border text-foreground",
              "data-ocid": "new-seed-common-name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Latin Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: latinName,
              onChange: (e) => setLatinName(e.target.value),
              placeholder: "e.g. C. chinense",
              className: "bg-muted/30 border-border text-foreground",
              "data-ocid": "new-seed-latin-name"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Origin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: origin,
              onChange: (e) => setOrigin(e.target.value),
              placeholder: "Country / region",
              className: "bg-muted/30 border-border text-foreground",
              "data-ocid": "new-seed-origin"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Date Sowed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: dateSowed,
              onChange: (e) => setDateSowed(e.target.value),
              className: "bg-muted/30 border-border text-foreground",
              "data-ocid": "new-seed-date"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Date Purchased / Planted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "date",
            value: datePurchased,
            onChange: (e) => setDatePurchased(e.target.value),
            className: "bg-muted/30 border-border text-foreground",
            "data-ocid": "new-seed-date-purchased"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Defaults to today. Edit to record the actual purchase or planting date." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm", children: "Container Size" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: containerOption, onValueChange: setContainerOption, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "bg-muted/30 border-border text-foreground",
              "data-ocid": "new-seed-container",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-popover border-border", children: CONTAINER_SIZE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
        ] }),
        containerOption === "other" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: containerOther,
            onChange: (e) => setContainerOther(e.target.value),
            placeholder: "Describe container size…",
            className: "bg-muted/30 border-border text-foreground mt-1.5",
            "data-ocid": "new-seed-container-other"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-foreground text-sm", children: [
          "Plant Photo",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional — helps with quick ID)" })
        ] }),
        photoPreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-24 h-24 rounded-lg overflow-hidden border border-border bg-muted/20 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: photoPreview,
              alt: "Plant preview",
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: photoFile == null ? void 0 : photoFile.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                onClick: clearPhoto,
                className: "h-7 text-xs border-border text-muted-foreground hover:text-red-400",
                "data-ocid": "new-seed-photo-clear",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3 mr-1" }),
                  "Remove"
                ]
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              var _a;
              return (_a = photoInputRef.current) == null ? void 0 : _a.click();
            },
            className: "flex items-center gap-2 w-full border border-dashed border-border rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-smooth",
            "data-ocid": "new-seed-photo-upload-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Click to upload or drag-and-drop a photo" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: photoInputRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: handlePhotoSelect,
            "data-ocid": "new-seed-photo-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: onClose,
            className: "border-border",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            disabled: createPlant.isPending || uploadingPhoto,
            className: "bg-primary hover:bg-primary/90 text-primary-foreground",
            "data-ocid": "new-seed-submit",
            children: [
              createPlant.isPending || uploadingPhoto ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-1.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4 mr-1.5" }),
              uploadingPhoto ? "Uploading Photo…" : "Add Plant"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function WeatherWidget({ compact = false }) {
  const [location, setLocation] = reactExports.useState(
    () => {
      const stored = sessionStorage.getItem("nims-location");
      return stored ? JSON.parse(stored) : null;
    }
  );
  const [isRequesting, setIsRequesting] = reactExports.useState(false);
  const polledRef = reactExports.useRef(false);
  const { data: weatherRecords = [] } = useMyWeatherRecords(14);
  const addWeatherRecord = useAddWeatherRecord();
  const pollWeather = reactExports.useCallback(
    async (lat, lon) => {
      if (polledRef.current) return;
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto&past_days=7`;
        const res = await fetch(url);
        const data = await res.json();
        const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const todayIdx = data.daily.time.findIndex((d) => d === today);
        if (todayIdx === -1) return;
        const existingDates = new Set(
          weatherRecords.map((r) => r.date)
        );
        if (existingDates.has(today)) return;
        await addWeatherRecord.mutateAsync({
          latitude: lat,
          longitude: lon,
          date: today,
          temperature_max: data.daily.temperature_2m_max[todayIdx],
          temperature_min: data.daily.temperature_2m_min[todayIdx],
          precipitation: data.daily.precipitation_sum[todayIdx],
          wind_speed: data.daily.windspeed_10m_max[todayIdx] || void 0
        });
        polledRef.current = true;
      } catch (_e) {
      }
    },
    [weatherRecords, addWeatherRecord]
  );
  reactExports.useEffect(() => {
    if (location) {
      pollWeather(location.lat, location.lon);
    }
  }, [location, pollWeather]);
  function requestLocation() {
    if (!navigator.geolocation) {
      ue.error("Geolocation is not supported by your browser");
      return;
    }
    setIsRequesting(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        setLocation(loc);
        sessionStorage.setItem("nims-location", JSON.stringify(loc));
        setIsRequesting(false);
        ue.success("Location enabled! Fetching weather data…");
      },
      (_err) => {
        setIsRequesting(false);
        ue.error("Location access denied. Enable in browser settings.");
      },
      { timeout: 1e4 }
    );
  }
  const records = weatherRecords;
  const sorted = [...records].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 14);
  if (!location) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-lg p-4 space-y-3",
        "data-ocid": "weather-widget",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CloudRain, { className: "w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "Weather Tracking" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Enable location sharing to automatically record daily weather data for your plants." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: requestLocation,
              disabled: isRequesting,
              className: "border-border text-muted-foreground hover:text-foreground w-full",
              "data-ocid": "weather-enable-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 mr-1.5" }),
                isRequesting ? "Requesting…" : "Enable Weather Tracking"
              ]
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-lg p-4 space-y-3",
      "data-ocid": "weather-widget-active",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CloudRain, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "Weather Log" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
            location.lat.toFixed(2),
            ", ",
            location.lon.toFixed(2)
          ] })
        ] }),
        sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Fetching weather data…" }) : compact ? (
          // Compact: just show latest
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Thermometer, { className: "w-3.5 h-3.5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                Math.round(sorted[0].temperature_max),
                "° /",
                " ",
                Math.round(sorted[0].temperature_min),
                "°C"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CloudRain, { className: "w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                sorted[0].precipitation.toFixed(1),
                " mm"
              ] })
            ] }),
            sorted[0].wind_speed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: "w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                Math.round(sorted[0].wind_speed),
                " km/h"
              ] })
            ] })
          ] })
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5 pr-3 text-muted-foreground font-medium whitespace-nowrap", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-1.5 px-2 text-muted-foreground font-medium", children: "High" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-1.5 px-2 text-muted-foreground font-medium", children: "Low" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-1.5 px-2 text-muted-foreground font-medium", children: "Precip" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-1.5 pl-2 text-muted-foreground font-medium", children: "Wind" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/50", children: sorted.map((rec) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3 text-foreground font-medium whitespace-nowrap", children: new Date(rec.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric"
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 px-2 text-right text-orange-400", children: [
              Math.round(rec.temperature_max),
              "°C"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 px-2 text-right text-cyan-400", children: [
              Math.round(rec.temperature_min),
              "°C"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 px-2 text-right text-muted-foreground", children: [
              rec.precipitation.toFixed(1),
              " mm"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pl-2 text-right text-muted-foreground", children: rec.wind_speed ? `${Math.round(rec.wind_speed)} km/h` : "—" })
          ] }, rec.id.toString())) })
        ] }) })
      ]
    }
  );
}
const TIP_LABELS = {
  "tray-grid": "Your 72-cell trays — click any cell to add plant data, transplant seedlings, or mark cells as Cooked.",
  "cell-click": "Open plant detail to record seed info, feeding schedule, watering notes, and progress photos.",
  transplant: "When a seedling is ready to move up, use Transplant to track its new container size. All lifecycle data carries over automatically.",
  cooked: "Mark a cell as Cooked to flag dead seedlings. The cell turns red so you can quickly see losses at a glance.",
  weather: "Enable location sharing to auto-log daily weather data with each plant's record — useful for tracking stress events.",
  photo: "Upload progress photos of individual plants. Images are compressed automatically to save storage.",
  "csv-export": "Download all your NIMS data as a spreadsheet — useful for record-keeping and FDACS compliance.",
  "bulk-actions": "Select multiple plants to apply actions in bulk — change stage, mark for sale, or delete in one click."
};
const LS_PREFIX = "nims_tip_dismissed_";
const LS_TIPS_VISIBLE = "nims_tips_visible";
function isTipDismissed(key) {
  return localStorage.getItem(LS_PREFIX + key) === "1";
}
function dismissTip(key) {
  localStorage.setItem(LS_PREFIX + key, "1");
}
function resetAllTips() {
  for (const k of Object.keys(TIP_LABELS)) {
    localStorage.removeItem(LS_PREFIX + k);
  }
  localStorage.removeItem(LS_TIPS_VISIBLE);
}
function areAllTipsDismissed() {
  return Object.keys(TIP_LABELS).every(isTipDismissed);
}
function NimsTipBadge({ tipKey, tipsActive, onDismiss }) {
  const [open, setOpen] = reactExports.useState(false);
  if (!tipsActive || isTipDismissed(tipKey)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex items-center ml-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": `Tip: ${tipKey}`,
        className: "w-5 h-5 rounded-full bg-primary/20 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        onClick: () => setOpen((v) => !v),
        "data-ocid": `nims-tip-badge-${tipKey}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-3 h-3" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "absolute left-6 top-0 z-50 w-64 bg-card border border-primary/30 rounded-xl shadow-elevated p-3 space-y-2",
        initial: { opacity: 0, scale: 0.92, x: -4 },
        animate: { opacity: 1, scale: 1, x: 0 },
        exit: { opacity: 0, scale: 0.92, x: -4 },
        transition: { duration: 0.15 },
        role: "tooltip",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground leading-relaxed", children: TIP_LABELS[tipKey] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  dismissTip(tipKey);
                  setOpen(false);
                  onDismiss(tipKey);
                },
                className: "text-xs font-semibold text-primary hover:text-primary/80 transition-colors",
                "data-ocid": `nims-tip-gotit-${tipKey}`,
                children: "Got it ✓"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen(false),
                className: "text-xs text-muted-foreground hover:text-foreground transition-colors",
                children: "Later"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
function useNimsTips() {
  const [tipsActive, setTipsActive] = reactExports.useState(() => {
    const hasVisited = localStorage.getItem(LS_TIPS_VISIBLE);
    if (!hasVisited) {
      localStorage.setItem(LS_TIPS_VISIBLE, "1");
      return true;
    }
    return false;
  });
  const [allDismissed, setAllDismissed] = reactExports.useState(() => areAllTipsDismissed());
  const handleDismiss = reactExports.useCallback((_key) => {
    if (areAllTipsDismissed()) {
      setAllDismissed(true);
      setTipsActive(false);
    }
  }, []);
  const showTips = reactExports.useCallback(() => {
    resetAllTips();
    setAllDismissed(false);
    setTipsActive(true);
  }, []);
  const hideTips = reactExports.useCallback(() => {
    setTipsActive(false);
  }, []);
  return { tipsActive, allDismissed, handleDismiss, showTips, hideTips };
}
const RARITY_OPTIONS = [
  {
    value: RarityTier.Common,
    label: "Common (10% discount)",
    color: "text-muted-foreground"
  },
  {
    value: RarityTier.Uncommon,
    label: "Uncommon (12% discount)",
    color: "text-cyan-400"
  },
  {
    value: RarityTier.Rare,
    label: "Rare (15% discount)",
    color: "text-amber-400"
  }
];
function QrLabelDialog({
  open,
  onClose,
  trayPlants,
  trayName
}) {
  const activePlants = trayPlants.filter(
    (p) => !p.is_cooked && !p.is_transplanted
  );
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [rarity, setRarity] = reactExports.useState(RarityTier.Common);
  const [items, setItems] = reactExports.useState([]);
  const [generating, setGenerating] = reactExports.useState(false);
  const [ready, setReady] = reactExports.useState(false);
  const generateClaimToken = useGenerateClaimToken();
  reactExports.useEffect(() => {
    if (open) {
      setSelected(/* @__PURE__ */ new Set());
      setItems([]);
      setGenerating(false);
      setReady(false);
    }
  }, [open]);
  function toggleAll() {
    if (selected.size === activePlants.length) {
      setSelected(/* @__PURE__ */ new Set());
    } else {
      setSelected(new Set(activePlants.map((p) => p.id)));
    }
  }
  function togglePlant(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  async function handleGenerate() {
    if (selected.size === 0) {
      ue.error("Select at least one plant");
      return;
    }
    setGenerating(true);
    const appUrl = window.location.origin;
    const selectedPlants = activePlants.filter((p) => selected.has(p.id));
    const initial = selectedPlants.map((p) => ({
      plant: p,
      trayName,
      cellLabel: `Cell ${Number(p.cell_position) + 1}`,
      claimToken: null,
      generating: true,
      error: false
    }));
    setItems(initial);
    const results = await Promise.allSettled(
      selectedPlants.map(
        (p) => generateClaimToken.mutateAsync({ plantId: p.id, rarityTier: rarity })
      )
    );
    const updated = selectedPlants.map((p, i) => {
      const r = results[i];
      if (r.status === "fulfilled") {
        return {
          plant: p,
          trayName,
          cellLabel: `Cell ${Number(p.cell_position) + 1}`,
          claimToken: `${appUrl}/claim/${r.value.id}`,
          generating: false,
          error: false
        };
      }
      return {
        plant: p,
        trayName,
        cellLabel: `Cell ${Number(p.cell_position) + 1}`,
        claimToken: null,
        generating: false,
        error: true
      };
    });
    setItems(updated);
    setGenerating(false);
    setReady(true);
    const successCount = updated.filter((u) => !u.error).length;
    if (successCount > 0) {
      ue.success(
        `${successCount} claim token${successCount !== 1 ? "s" : ""} generated`
      );
    }
    const errorCount = updated.filter((u) => u.error).length;
    if (errorCount > 0) {
      ue.error(
        `${errorCount} token${errorCount !== 1 ? "s" : ""} failed to generate`
      );
    }
  }
  function handlePrint() {
    const readyItems = items.filter((it) => it.claimToken);
    if (readyItems.length === 0) return;
    printQRLabels(readyItems, trayName, rarity);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-foreground flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "w-5 h-5 text-primary" }),
      "Print QR Labels — ",
      trayName
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm font-semibold", children: "1. Set Rarity Tier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: rarity,
            onValueChange: (v) => setRarity(v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "bg-muted/30 border-border text-foreground",
                  "data-ocid": "qr-rarity-select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-popover border-border", children: RARITY_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: opt.color, children: opt.label }) }, opt.value)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "The NFT granted when a customer scans this QR will have this rarity tier and matching discount." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-foreground text-sm font-semibold", children: [
            "2. Select Plants (",
            selected.size,
            " of ",
            activePlants.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: toggleAll,
              className: "text-xs text-primary hover:text-primary/80 transition-colors font-medium",
              "data-ocid": "qr-select-all",
              children: selected.size === activePlants.length ? "Deselect All" : "Select All"
            }
          )
        ] }),
        activePlants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm py-4 text-center", children: "No active plants in this tray to label." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-48 overflow-y-auto border border-border rounded-lg divide-y divide-border", children: activePlants.map((p) => {
          const checkId = `qr-check-${p.id}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-muted/20 transition-colors",
              "data-ocid": "qr-plant-select-row",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: checkId,
                    checked: selected.has(p.id),
                    onCheckedChange: () => togglePlant(p.id),
                    className: "border-border"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: checkId,
                    className: "flex-1 min-w-0 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground truncate block", children: p.common_name || p.variety }),
                      p.latin_name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground italic", children: p.latin_name })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
                    "Cell ",
                    Number(p.cell_position) + 1
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-xs border-primary/30 text-primary",
                      children: stageName(p.stage)
                    }
                  )
                ] })
              ]
            },
            p.id.toString()
          );
        }) })
      ] }),
      items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-foreground text-sm font-semibold", children: [
          "Generated Tokens (",
          items.filter((i) => i.claimToken).length,
          " ",
          "ready)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-40 overflow-y-auto space-y-1", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 text-xs py-1.5 px-2 rounded bg-muted/20",
            children: [
              item.generating ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin text-muted-foreground flex-shrink-0" }) : item.error ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-xs", children: "✕" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "w-3 h-3 text-primary flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground truncate flex-1", children: item.plant.common_name || item.plant.variety }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-mono flex-shrink-0", children: item.cellLabel }),
              item.error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 flex-shrink-0", children: "Failed" })
            ]
          },
          item.plant.id.toString()
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: onClose,
            className: "border-border",
            "data-ocid": "qr-dialog-cancel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1" }),
              "Close"
            ]
          }
        ),
        !ready ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleGenerate,
            disabled: generating || selected.size === 0,
            className: "bg-primary hover:bg-primary/90 text-primary-foreground",
            "data-ocid": "qr-generate-btn",
            children: [
              generating ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-1.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "w-4 h-4 mr-1.5" }),
              generating ? "Generating Tokens…" : "Generate Claim Tokens"
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handlePrint,
            disabled: items.filter((i) => i.claimToken).length === 0,
            className: "bg-primary hover:bg-primary/90 text-primary-foreground",
            "data-ocid": "qr-print-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-4 h-4 mr-1.5" }),
              "Print QR Labels"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function rarityDiscountLabel(tier) {
  switch (tier) {
    case RarityTier.Rare:
      return "15% Lifetime Discount";
    case RarityTier.Uncommon:
      return "12% Lifetime Discount";
    default:
      return "10% Lifetime Discount";
  }
}
function printQRLabels(items, trayName, rarity) {
  const dateStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const rarityLabel = rarityDiscountLabel(rarity);
  const rarityColor = rarity === RarityTier.Rare ? "#d97706" : rarity === RarityTier.Uncommon ? "#0891b2" : "#1a6b2b";
  const labels = items.filter((it) => it.claimToken).map((it) => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(it.claimToken)}`;
    return `
    <div class="label">
      <div class="label-header">
        <span class="brand-name">🌶️ IC SPICY</span>
        <span class="rarity" style="color:${rarityColor};border-color:${rarityColor}">${rarity}</span>
      </div>
      <img src="${qrUrl}" alt="QR Claim Code" class="qr-img" />
      <div class="plant-name">${it.plant.common_name || it.plant.variety || "Plant"}</div>
      ${it.plant.latin_name ? `<div class="latin-name">${it.plant.latin_name}</div>` : ""}
      <div class="meta">${stageName(it.plant.stage)} · ${it.trayName} · ${it.cellLabel}</div>
      <div class="discount">${rarityLabel}</div>
      <div class="cta">Scan to claim your NFT &amp; discount</div>
    </div>`;
  }).join("");
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>IC SPICY — QR Claim Labels</title>
<style>
  @media print { @page { margin: 0.5in; size: letter; } .no-print { display: none !important; } body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #fff; color: #111; }
  .page { max-width: 760px; margin: 0 auto; padding: 24px; }
  .page-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #1a6b2b; padding-bottom: 14px; margin-bottom: 20px; }
  .page-brand { font-size: 20px; font-weight: 900; color: #1a6b2b; }
  .page-meta { text-align: right; font-size: 11px; color: #666; }
  .page-meta strong { display: block; font-size: 13px; color: #111; font-weight: 700; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .label { border: 1.5px solid #e5e5e5; border-radius: 8px; padding: 10px 8px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; background: #fff; page-break-inside: avoid; }
  .label-header { width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
  .brand-name { font-size: 9px; font-weight: 900; color: #1a6b2b; }
  .rarity { font-size: 8px; font-weight: 700; border: 1px solid; border-radius: 3px; padding: 1px 4px; text-transform: uppercase; letter-spacing: 0.05em; }
  .qr-img { width: 120px; height: 120px; border: 1.5px solid #e5e5e5; border-radius: 4px; }
  .plant-name { font-size: 11px; font-weight: 700; color: #111; line-height: 1.2; margin-top: 2px; }
  .latin-name { font-size: 8.5px; color: #666; font-style: italic; }
  .meta { font-size: 8px; color: #888; }
  .discount { font-size: 9px; font-weight: 700; color: #1a6b2b; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 3px; padding: 2px 6px; }
  .cta { font-size: 8px; color: #555; font-style: italic; }
  .print-btn { background: #1a6b2b; color: #fff; border: none; padding: 10px 24px; font-size: 14px; font-weight: 700; border-radius: 6px; cursor: pointer; margin-bottom: 20px; }
  .print-btn:hover { background: #155123; }
  .footer { margin-top: 18px; font-size: 10px; color: #888; border-top: 1px solid #e5e5e5; padding-top: 10px; display: flex; justify-content: space-between; }
</style>
</head>
<body>
<div class="page">
  <button class="print-btn no-print" onclick="window.print()">🖨️ Print QR Labels</button>
  <div class="page-header">
    <div class="page-brand">🌶️ IC SPICY Nursery</div>
    <div class="page-meta">
      <strong>${trayName}</strong>
      Printed: ${dateStr}
    </div>
  </div>
  <div class="grid">${labels}</div>
  <div class="footer">
    <span>IC SPICY NFT Claim Labels · Port Charlotte, FL · FDACS Registered Nursery</span>
    <span>Scan QR → claim NFT → unlock lifetime store discount</span>
  </div>
</div>
</body>
</html>`;
  const win = window.open("", "_blank");
  if (!win) {
    ue.error("Popup blocked — allow popups and try again");
    return;
  }
  win.document.write(html);
  win.document.close();
}
function TrayGrid({
  tray,
  plants,
  selectedCells,
  onCellClick,
  onCellSelect,
  bulkMode
}) {
  const plantMap = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    for (const p of plants) {
      if (p.tray_id === tray.id) m.set(Number(p.cell_position), p);
    }
    return m;
  }, [tray.id, plants]);
  const COLS = 12;
  const ROWS = 6;
  const TOTAL = COLS * ROWS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "nims-tray-grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid gap-1",
        style: { gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` },
        children: Array.from({ length: TOTAL }, (_, i) => {
          const plant = plantMap.get(i);
          const isSelected = selectedCells.has(i);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: [
                getCellClass(plant),
                "relative aspect-square flex flex-col items-center justify-center text-center select-none",
                isSelected ? "ring-2 ring-primary" : ""
              ].join(" "),
              style: { minHeight: "38px" },
              onClick: () => {
                if (bulkMode) {
                  onCellSelect(i);
                } else {
                  onCellClick(i, plant ?? null);
                }
              },
              "aria-label": plant ? `Cell ${i + 1}: ${plant.common_name || plant.variety}` : `Cell ${i + 1}: Empty`,
              title: plant ? `${plant.common_name || plant.variety} — ${stageName(plant.stage)}` : `Cell ${i + 1} — Empty`,
              "data-ocid": "nims-cell",
              children: [
                bulkMode && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: isSelected,
                    onChange: () => onCellSelect(i),
                    onClick: (e) => e.stopPropagation(),
                    className: "absolute top-0.5 left-0.5 accent-primary w-3 h-3",
                    "aria-label": `Select cell ${i + 1}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground/60 absolute top-0.5 right-1 font-mono leading-none", children: i + 1 }),
                plant && !plant.is_cooked && !plant.is_transplanted && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[9px] font-semibold leading-none text-center px-0.5 line-clamp-2",
                    style: { color: "inherit" },
                    children: (plant.common_name || plant.variety).slice(0, 8)
                  }
                ),
                (plant == null ? void 0 : plant.is_transplanted) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] font-bold text-muted-foreground/60 rotate-[-30deg] leading-none absolute inset-0 flex items-center justify-center pointer-events-none", children: "XPLNT" }),
                (plant == null ? void 0 : plant.is_cooked) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-red-600 font-bold", children: "💀" })
              ]
            },
            `${tray.id}-cell-${i}`
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 flex-wrap text-xs text-muted-foreground", children: [
      {
        cls: "w-3 h-3 rounded-sm bg-card border border-border inline-block",
        label: "Empty"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-emerald-950/60 border border-emerald-700/60 inline-block",
        label: "Seeded"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-cyan-950/60 border border-cyan-600/50 inline-block",
        label: "Seedling"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-primary/20 border border-primary/50 inline-block",
        label: "Mature"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-muted/20 border border-muted/40 opacity-60 inline-block",
        label: "Transplanted"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-black border border-red-900 inline-block",
        label: "Cooked"
      }
    ].map(({ cls, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cls }),
      label
    ] }, label)) })
  ] });
}
function ListView({
  plants,
  trays,
  selectedCells,
  onRowSelect,
  bulkMode,
  onRowClick
}) {
  const [sortField, setSortField] = reactExports.useState("tray");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const trayMap = reactExports.useMemo(
    () => new Map(trays.map((t) => [t.id.toString(), t.name])),
    [trays]
  );
  function handleSort(field) {
    if (sortField === field) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else {
      setSortField(field);
      setSortDir("asc");
    }
  }
  const sorted = reactExports.useMemo(() => {
    return [...plants].sort((a, b) => {
      let cmp = 0;
      if (sortField === "tray") cmp = Number(a.tray_id - b.tray_id);
      else if (sortField === "cell")
        cmp = Number(a.cell_position - b.cell_position);
      else if (sortField === "name")
        cmp = (a.common_name || a.variety).localeCompare(
          b.common_name || b.variety
        );
      else if (sortField === "stage")
        cmp = stageName(a.stage).localeCompare(stageName(b.stage));
      else if (sortField === "container")
        cmp = containerSizeLabel(a.container_size).localeCompare(
          containerSizeLabel(b.container_size)
        );
      else if (sortField === "date")
        cmp = Number(a.planting_date - b.planting_date);
      else if (sortField === "transplanted")
        cmp = Number((a.transplant_date ?? 0n) - (b.transplant_date ?? 0n));
      else if (sortField === "for_sale")
        cmp = Number(a.for_sale) - Number(b.for_sale);
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [plants, sortField, sortDir]);
  const SortIcon = ({ field }) => sortField === field ? sortDir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3 text-primary inline-block" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3 text-primary inline-block" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3 opacity-20 inline-block" });
  const headers = [
    { label: "Tray", field: "tray" },
    { label: "Cell", field: "cell" },
    { label: "Common Name", field: "name" },
    { label: "Stage", field: "stage" },
    { label: "Container", field: "container" },
    { label: "For Sale", field: "for_sale" },
    { label: "Seeded", field: "date" },
    { label: "Transplanted", field: "transplanted" }
  ];
  if (sorted.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 gap-3",
        "data-ocid": "nims-list-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-10 h-10 text-muted-foreground opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No plants yet. Plant a seed to get started!" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-ocid": "nims-list-view", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "table-header border-b border-border", children: [
      bulkMode && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 w-8" }),
      headers.map(({ label, field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "th",
        {
          className: "px-3 py-2.5 text-left whitespace-nowrap",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "sort-button flex items-center gap-1",
              onClick: () => handleSort(field),
              children: [
                label,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field })
              ]
            }
          )
        },
        field + label
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 w-8" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: sorted.map((plant) => {
      const rowKey = `${plant.tray_id}-${plant.cell_position}`;
      const isSelected = selectedCells.has(rowKey);
      const isExpanded = expandedId === plant.id;
      return [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: [
              "table-row-hover border-b border-border/60",
              plant.is_cooked ? "opacity-60" : "",
              isSelected ? "bg-primary/5" : ""
            ].join(" "),
            "data-ocid": "nims-list-row",
            children: [
              bulkMode && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: isSelected,
                  onChange: () => onRowSelect(rowKey),
                  className: "accent-primary",
                  "aria-label": `Select ${plant.common_name || plant.variety}`
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground text-xs font-mono", children: trayMap.get(plant.tray_id.toString()) ?? `T-${plant.tray_id}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground text-xs font-mono", children: Number(plant.cell_position) + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-foreground font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "w-full text-left hover:text-primary transition-smooth",
                  onClick: () => onRowClick(plant),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate block", children: plant.common_name || plant.variety }),
                    plant.latin_name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs italic", children: plant.latin_name })
                  ] })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: plant.is_cooked ? "status-sold" : plant.stage === PlantStage.Seed ? "status-seed" : plant.stage === PlantStage.Seedling ? "status-seedling" : "status-mature",
                  children: plant.is_cooked ? "💀 Cooked" : stageName(plant.stage)
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground text-xs", children: containerSizeLabel(plant.container_size) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: plant.for_sale ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "border-primary/40 text-primary text-xs",
                  children: "For Sale"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "—" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground text-xs whitespace-nowrap", children: formatDate(plant.planting_date) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-muted-foreground text-xs whitespace-nowrap", children: formatDate(plant.transplant_date) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setExpandedId(isExpanded ? null : plant.id),
                  className: "text-muted-foreground hover:text-foreground transition-smooth",
                  "aria-label": "Expand row",
                  children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
                }
              ) })
            ]
          },
          rowKey
        ),
        isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-ocid": "nims-list-expanded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            colSpan: bulkMode ? 10 : 9,
            className: "px-4 py-4 bg-secondary/20 border-b border-border",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "filter-section-title", children: "Schedules" }),
                plant.watering_schedule && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Watering:" }),
                  " ",
                  plant.watering_schedule
                ] }),
                plant.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Feeding:" }),
                  " ",
                  plant.notes
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "filter-section-title", children: "Notes" }),
                plant.pest_notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Pest:" }),
                  " ",
                  plant.pest_notes
                ] }),
                plant.additional_notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: plant.additional_notes })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "filter-section-title", children: "Photos & NFT" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
                  plant.photo_keys.length,
                  " photo(s)"
                ] }),
                plant.nft_id && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs font-mono truncate", children: [
                  "NFT: ",
                  plant.nft_id
                ] }),
                plant.origin && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
                  "Origin: ",
                  plant.origin
                ] })
              ] })
            ] })
          }
        ) }, `${rowKey}-exp`)
      ];
    }) })
  ] }) });
}
function GardenLayout({ trays, plants, onCellClick }) {
  const inGroundPlants = reactExports.useMemo(
    () => plants.filter(
      (p) => {
        var _a;
        return ((_a = p.container_size) == null ? void 0 : _a.__kind__) === "InGround" || !p.tray_id && !p.is_transplanted;
      }
    ),
    [plants]
  );
  const trayPlantMap = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    for (const p of plants) {
      const tid = p.tray_id.toString();
      if (!m.has(tid)) m.set(tid, /* @__PURE__ */ new Map());
      m.get(tid).set(Number(p.cell_position), p);
    }
    return m;
  }, [plants]);
  if (trays.length === 0 && inGroundPlants.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 gap-4 bg-card rounded-lg border border-border",
        "data-ocid": "garden-layout-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-12 h-12 text-muted-foreground opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "No inventory yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Add trays and plants to see your garden layout." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "garden-layout-view", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground", children: "Garden Floor Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Top-down schematic view of your grow space — click any cell to open plant details" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: "border-emerald-700/40 text-emerald-400 text-xs",
          children: [
            trays.length,
            " tray",
            trays.length !== 1 ? "s" : "",
            " · ",
            plants.length,
            " ",
            "plant",
            plants.length !== 1 ? "s" : ""
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-[oklch(0.12_0.01_145/0.6)] border border-emerald-900/30 rounded-2xl p-6 overflow-x-auto",
        style: {
          backgroundImage: "repeating-linear-gradient(0deg,oklch(0.35 0.06 145/0.08) 0,oklch(0.35 0.06 145/0.08) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,oklch(0.35 0.06 145/0.08) 0,oklch(0.35 0.06 145/0.08) 1px,transparent 1px,transparent 40px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 min-w-[600px]", children: [
          trays.map((tray, trayIdx) => {
            const cellMap = trayPlantMap.get(tray.id.toString()) ?? /* @__PURE__ */ new Map();
            const COLS = 12;
            const ROWS = 6;
            const activeCount = Array.from(cellMap.values()).filter(
              (p) => !p.is_cooked && !p.is_transplanted
            ).length;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "space-y-2",
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.35, delay: trayIdx * 0.07 },
                "data-ocid": `layout-tray-${trayIdx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-emerald-900/40" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-500/80 px-2", children: tray.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground/50 font-mono", children: [
                      activeCount,
                      "/",
                      COLS * ROWS,
                      " active"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-emerald-900/40" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "border border-emerald-700/25 rounded-lg p-2 bg-card/30",
                      style: {
                        boxShadow: "inset 0 1px 8px oklch(0.2 0.05 145/0.15)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "grid gap-0.5",
                          style: {
                            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`
                          },
                          children: Array.from({ length: COLS * ROWS }, (_, i) => {
                            const plant = cellMap.get(i);
                            let cellBg = "bg-muted/10 border-border/30";
                            let cellText = "";
                            let emoji = "";
                            if (plant) {
                              if (plant.is_cooked) {
                                cellBg = "bg-red-950/70 border-red-900/60";
                                emoji = "💀";
                              } else if (plant.is_transplanted) {
                                cellBg = "bg-muted/20 border-muted/30 opacity-50";
                                cellText = "text-muted-foreground/50";
                              } else if (plant.stage === PlantStage.Mature) {
                                cellBg = "bg-primary/25 border-primary/40";
                                cellText = "text-primary";
                              } else if (plant.stage === PlantStage.Seedling) {
                                cellBg = "bg-cyan-950/60 border-cyan-700/40";
                                cellText = "text-cyan-300";
                              } else {
                                cellBg = "bg-emerald-950/60 border-emerald-700/40";
                                cellText = "text-emerald-300";
                              }
                            }
                            const name = plant ? (plant.common_name || plant.variety).slice(0, 6) : "";
                            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => onCellClick(tray, i, plant ?? null),
                                className: [
                                  "relative border rounded-sm flex flex-col items-center justify-center aspect-square transition-smooth hover:scale-105 hover:z-10",
                                  cellBg
                                ].join(" "),
                                style: { minHeight: "28px" },
                                title: plant ? `${plant.common_name || plant.variety} — Cell ${i + 1}` : `Cell ${i + 1} — Empty`,
                                "data-ocid": "layout-cell",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-muted-foreground/30 font-mono absolute top-0 left-0.5 leading-none", children: i + 1 }),
                                  emoji ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] leading-none", children: emoji }) : name ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: `text-[7px] font-semibold leading-none text-center px-0.5 truncate w-full ${cellText}`,
                                      children: name
                                    }
                                  ) : null
                                ]
                              },
                              `layout-${tray.id}-${i}`
                            );
                          })
                        }
                      )
                    }
                  )
                ]
              },
              tray.id.toString()
            );
          }),
          inGroundPlants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "space-y-2",
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.35, delay: trays.length * 0.07 },
              "data-ocid": "layout-inground-zone",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-amber-900/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold tracking-widest uppercase text-amber-500/80 px-2", children: "In Ground Crops" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground/50 font-mono", children: [
                    inGroundPlants.length,
                    " plant",
                    inGroundPlants.length !== 1 ? "s" : ""
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-amber-900/40" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "border border-amber-700/25 rounded-xl p-3 bg-card/30 min-h-[80px]",
                    style: { boxShadow: "inset 0 1px 8px oklch(0.2 0.06 80/0.15)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: inGroundPlants.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex flex-col items-center gap-1 px-3 py-2 rounded-lg border border-amber-700/30 bg-amber-950/30 min-w-[64px] text-center",
                        "data-ocid": "layout-inground-plant",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "🌿" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-amber-300 leading-tight max-w-[60px] truncate", children: p.common_name || p.variety }),
                          p.latin_name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-amber-400/60 italic leading-none max-w-[60px] truncate", children: p.latin_name })
                        ]
                      },
                      p.id.toString()
                    )) })
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 flex-wrap text-xs text-muted-foreground bg-card/50 border border-border rounded-lg px-4 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-[10px] tracking-wide uppercase mr-1", children: "Legend" }),
      [
        {
          cls: "w-3 h-3 rounded-sm bg-muted/10 border border-border/30 inline-block",
          label: "Empty"
        },
        {
          cls: "w-3 h-3 rounded-sm bg-emerald-950/60 border border-emerald-700/40 inline-block",
          label: "Seeded"
        },
        {
          cls: "w-3 h-3 rounded-sm bg-cyan-950/60 border border-cyan-700/40 inline-block",
          label: "Seedling"
        },
        {
          cls: "w-3 h-3 rounded-sm bg-primary/25 border border-primary/40 inline-block",
          label: "Mature"
        },
        {
          cls: "w-3 h-3 rounded-sm bg-muted/20 border border-muted/30 opacity-50 inline-block",
          label: "Transplanted"
        },
        {
          cls: "w-3 h-3 rounded-sm bg-red-950/70 border border-red-900/60 inline-block",
          label: "Cooked"
        },
        {
          cls: "w-3 h-3 rounded-sm bg-amber-950/30 border border-amber-700/25 inline-block",
          label: "In Ground"
        }
      ].map(({ cls, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cls }),
        label
      ] }, label))
    ] })
  ] });
}
function NIMSPage() {
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [selectedTrayId, setSelectedTrayId] = reactExports.useState(null);
  const [cellModalState, setCellModalState] = reactExports.useState({ open: false, cellIndex: 0, plant: null, tray: null });
  const [newSeedState, setNewSeedState] = reactExports.useState({ open: false, trayId: 0n, cellIndex: 0 });
  const [bulkMode, setBulkMode] = reactExports.useState(false);
  const [selectedCells, setSelectedCells] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const [bulkCookConfirm, setBulkCookConfirm] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [qrLabelOpen, setQrLabelOpen] = reactExports.useState(false);
  const { tipsActive, handleDismiss, showTips, hideTips } = useNimsTips();
  const { data: rawTrays = [], isLoading: traysLoading } = useMyTrays();
  const { data: rawPlants = [], isLoading: plantsLoading } = useMyPlants();
  const { data: isAdmin } = useIsAdmin();
  const trays = rawTrays;
  const plants = rawPlants;
  const isLoading = traysLoading || plantsLoading;
  const activeTray = reactExports.useMemo(() => {
    if (!trays.length) return null;
    if (selectedTrayId)
      return trays.find((t) => t.id === selectedTrayId) ?? trays[0];
    return trays[0];
  }, [trays, selectedTrayId]);
  const filteredPlants = reactExports.useMemo(() => {
    if (!search.trim()) return plants;
    const q = search.toLowerCase();
    return plants.filter(
      (p) => (p.common_name ?? "").toLowerCase().includes(q) || (p.latin_name ?? "").toLowerCase().includes(q) || p.variety.toLowerCase().includes(q) || (p.origin ?? "").toLowerCase().includes(q)
    );
  }, [plants, search]);
  const trayPlants = reactExports.useMemo(
    () => activeTray ? filteredPlants.filter((p) => p.tray_id === activeTray.id) : [],
    [filteredPlants, activeTray]
  );
  function openCell(cellIndex, plant) {
    if (!activeTray) return;
    if (!plant) {
      setNewSeedState({ open: true, trayId: activeTray.id, cellIndex });
    } else {
      setCellModalState({ open: true, cellIndex, plant, tray: activeTray });
    }
  }
  function openPlantFromList(plant) {
    const tray = trays.find((t) => t.id === plant.tray_id);
    if (!tray) return;
    setCellModalState({
      open: true,
      cellIndex: Number(plant.cell_position),
      plant,
      tray
    });
  }
  function toggleCellSelect(key) {
    setSelectedCells((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }
  function handleExportCSV() {
    exportNIMSCsv(
      filteredPlants,
      trays.map((t) => ({ id: t.id, name: t.name }))
    );
  }
  function handlePrintTrayMap() {
    if (!activeTray) return;
    const printPlants = trayPlants.map((p) => ({
      cellIndex: Number(p.cell_position),
      commonName: p.common_name || p.variety,
      stage: stageName(p.stage),
      isCooked: p.is_cooked,
      isTransplanted: p.is_transplanted
    }));
    printTrayMap(activeTray.name, printPlants);
  }
  const selectedCount = selectedCells.size;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border-b border-border sticky top-16 z-30",
        "data-ocid": "nims-header",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-bold text-foreground tracking-tight", children: "Nursery Inventory Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs mt-0.5", children: [
                plants.length,
                " plants · ",
                trays.length,
                " trays"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              tipsActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: hideTips,
                  className: "h-8 text-xs text-muted-foreground gap-1.5",
                  "data-ocid": "nims-hide-tips-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-3.5 h-3.5" }),
                    "Hide Tips"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: showTips,
                  className: "h-8 text-xs text-primary/70 hover:text-primary gap-1.5",
                  "data-ocid": "nims-show-tips-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-3.5 h-3.5" }),
                    "Show Tips"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search plants…",
                    value: search,
                    onChange: (e) => setSearch(e.target.value),
                    className: "inventory-search pl-8 h-8 text-sm w-44",
                    "data-ocid": "nims-search"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-secondary rounded-md p-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setViewMode("grid"),
                    className: [
                      "flex items-center gap-1 px-2.5 py-1 rounded text-sm font-medium transition-smooth",
                      viewMode === "grid" ? "bg-card text-primary shadow-subtle" : "text-muted-foreground hover:text-foreground"
                    ].join(" "),
                    "data-ocid": "nims-view-grid",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "w-3.5 h-3.5" }),
                      "Grid"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setViewMode("list"),
                    className: [
                      "flex items-center gap-1 px-2.5 py-1 rounded text-sm font-medium transition-smooth",
                      viewMode === "list" ? "bg-card text-primary shadow-subtle" : "text-muted-foreground hover:text-foreground"
                    ].join(" "),
                    "data-ocid": "nims-view-list",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutList, { className: "w-3.5 h-3.5" }),
                      "List"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setViewMode("layout"),
                    className: [
                      "flex items-center gap-1 px-2.5 py-1 rounded text-sm font-medium transition-smooth",
                      viewMode === "layout" ? "bg-card text-primary shadow-subtle" : "text-muted-foreground hover:text-foreground"
                    ].join(" "),
                    "data-ocid": "nims-view-layout",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "w-3.5 h-3.5" }),
                      "Layout"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                      setBulkMode((v) => !v);
                      setSelectedCells(/* @__PURE__ */ new Set());
                    },
                    className: [
                      "h-8 border-border text-sm",
                      bulkMode ? "bg-primary/10 border-primary/40 text-primary" : "text-muted-foreground"
                    ].join(" "),
                    "data-ocid": "nims-bulk-mode-btn",
                    children: bulkMode ? "Exit Bulk" : "Bulk Select"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NimsTipBadge,
                  {
                    tipKey: "bulk-actions",
                    tipsActive,
                    onDismiss: handleDismiss
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: handleExportCSV,
                    className: "h-8 border-border text-muted-foreground hover:text-foreground",
                    "data-ocid": "nims-export-csv-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5 mr-1.5" }),
                      "Export CSV"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  NimsTipBadge,
                  {
                    tipKey: "csv-export",
                    tipsActive,
                    onDismiss: handleDismiss
                  }
                )
              ] })
            ] })
          ] }),
          bulkMode && selectedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-3 flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-lg px-3 py-2",
              "data-ocid": "nims-bulk-bar",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-foreground", children: [
                  selectedCount,
                  " cell",
                  selectedCount !== 1 ? "s" : "",
                  " selected"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => setBulkCookConfirm(true),
                    className: "h-7 border-red-800/40 text-red-400 hover:bg-red-950/40",
                    "data-ocid": "nims-bulk-cooked-btn",
                    children: "Mark Cooked"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    onClick: () => {
                      const subset = filteredPlants.filter((p) => {
                        const key = viewMode === "grid" ? Number(p.cell_position) : `${p.tray_id}-${p.cell_position}`;
                        return selectedCells.has(key);
                      });
                      exportNIMSCsv(
                        subset,
                        trays.map((t) => ({ id: t.id, name: t.name }))
                      );
                    },
                    className: "h-7 border-border text-muted-foreground hover:text-foreground",
                    "data-ocid": "nims-bulk-export-btn",
                    children: "Export Selected"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    onClick: () => setSelectedCells(/* @__PURE__ */ new Set()),
                    className: "h-7 text-muted-foreground ml-auto",
                    "data-ocid": "nims-bulk-clear-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 mr-1" }),
                      "Clear"
                    ]
                  }
                )
              ]
            }
          ),
          bulkCookConfirm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 bg-red-950/30 border border-red-800/40 rounded-lg px-3 py-2 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-red-300", children: [
              "Mark ",
              selectedCount,
              " cell(s) as cooked? This cannot be undone easily."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: () => {
                  setBulkCookConfirm(false);
                  setSelectedCells(/* @__PURE__ */ new Set());
                  setBulkMode(false);
                },
                className: "h-7 bg-red-900 hover:bg-red-800 text-red-100",
                "data-ocid": "nims-bulk-cooked-confirm",
                children: "Confirm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                onClick: () => setBulkCookConfirm(false),
                className: "h-7 text-muted-foreground",
                children: "Cancel"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "nims-loading", children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-5", children: [
          viewMode === "grid" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TrayManager,
              {
                trays,
                selectedTrayId: (activeTray == null ? void 0 : activeTray.id) ?? null,
                onSelect: (id) => {
                  setSelectedTrayId(id);
                  setSelectedCells(/* @__PURE__ */ new Set());
                }
              }
            ),
            trays.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center justify-center py-20 gap-4 bg-card rounded-lg border border-border",
                "data-ocid": "nims-empty-trays",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-12 h-12 text-muted-foreground opacity-30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "No trays yet" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Add your first tray to start tracking seeds." })
                ]
              }
            ) : activeTray ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground flex items-center gap-1", children: [
                  activeTray.name,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    NimsTipBadge,
                    {
                      tipKey: "tray-grid",
                      tipsActive,
                      onDismiss: handleDismiss
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                    trayPlants.filter(
                      (p) => !p.is_cooked && !p.is_transplanted
                    ).length,
                    " ",
                    "/ 72 active",
                    trayPlants.filter((p) => p.is_cooked).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-red-400", children: [
                      "· ",
                      trayPlants.filter((p) => p.is_cooked).length,
                      " ",
                      "cooked"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: handlePrintTrayMap,
                      className: "h-7 border-border text-muted-foreground hover:text-foreground text-xs gap-1",
                      "data-ocid": "nims-print-tray-btn",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "w-3 h-3" }),
                        "Print Map"
                      ]
                    }
                  ),
                  isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: () => setQrLabelOpen(true),
                      className: "h-7 border-primary/40 text-primary hover:bg-primary/10 text-xs gap-1",
                      "data-ocid": "nims-print-qr-btn",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "w-3 h-3" }),
                        "Print QR Labels"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TrayGrid,
                {
                  tray: activeTray,
                  plants: trayPlants,
                  selectedCells,
                  onCellClick: openCell,
                  onCellSelect: (i) => toggleCellSelect(i),
                  bulkMode
                }
              )
            ] }) : null
          ] }),
          viewMode === "list" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between px-4 py-2 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-foreground flex items-center gap-1", children: [
              "All Plants",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                NimsTipBadge,
                {
                  tipKey: "cell-click",
                  tipsActive,
                  onDismiss: handleDismiss
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ListView,
              {
                plants: filteredPlants,
                trays,
                selectedCells,
                onRowSelect: (key) => toggleCellSelect(key),
                bulkMode,
                onRowClick: openPlantFromList
              }
            )
          ] }),
          viewMode === "layout" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            GardenLayout,
            {
              trays,
              plants: filteredPlants,
              onCellClick: (tray, cellIndex, plant) => {
                if (!plant) {
                  setNewSeedState({
                    open: true,
                    trayId: tray.id,
                    cellIndex
                  });
                } else {
                  setCellModalState({ open: true, cellIndex, plant, tray });
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block w-64 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-40 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "filter-section-title mb-2 flex items-center gap-1", children: [
              "Weather",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                NimsTipBadge,
                {
                  tipKey: "weather",
                  tipsActive,
                  onDismiss: handleDismiss
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(WeatherWidget, {})
          ] }),
          plants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "filter-section-title", children: "Quick Stats" }),
            [
              { label: "Total Plants", value: plants.length },
              {
                label: "Seeds",
                value: plants.filter(
                  (p) => p.stage === PlantStage.Seed && !p.is_cooked
                ).length
              },
              {
                label: "Seedlings",
                value: plants.filter(
                  (p) => p.stage === PlantStage.Seedling && !p.is_cooked
                ).length
              },
              {
                label: "Mature",
                value: plants.filter(
                  (p) => p.stage === PlantStage.Mature && !p.is_cooked
                ).length
              },
              {
                label: "For Sale",
                value: plants.filter((p) => p.for_sale).length
              },
              {
                label: "Transplanted",
                value: plants.filter((p) => p.is_transplanted).length
              },
              {
                label: "Cooked 💀",
                value: plants.filter((p) => p.is_cooked).length
              }
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: value })
            ] }, label))
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WeatherWidget, { compact: true }) })
    ] }),
    cellModalState.tray && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CellDetailModal,
      {
        open: cellModalState.open,
        plant: cellModalState.plant,
        tray: cellModalState.tray,
        cellIndex: cellModalState.cellIndex,
        onClose: () => setCellModalState((s) => ({ ...s, open: false })),
        onSeedPlanted: (trayId, cell) => {
          setCellModalState((s) => ({ ...s, open: false }));
          setNewSeedState({ open: true, trayId, cellIndex: cell });
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      NewSeedModal,
      {
        open: newSeedState.open,
        trayId: newSeedState.trayId,
        cellIndex: newSeedState.cellIndex,
        onClose: () => setNewSeedState((s) => ({ ...s, open: false }))
      }
    ),
    isAdmin && activeTray && /* @__PURE__ */ jsxRuntimeExports.jsx(
      QrLabelDialog,
      {
        open: qrLabelOpen,
        onClose: () => setQrLabelOpen(false),
        trayPlants,
        trayName: activeTray.name
      }
    )
  ] });
}
const DEMO_CELL_STYLES = {
  empty: "bg-card border border-border",
  seeded: "bg-emerald-950/60 border border-emerald-700/60 shadow-[0_0_6px_rgba(52,211,153,0.25)]",
  seedling: "bg-cyan-950/60 border border-cyan-600/50",
  mature: "bg-primary/20 border border-primary/50",
  transplanted: "bg-muted/20 border border-muted/40 opacity-60",
  cooked: "bg-black border border-red-900"
};
function makeDemoGrid() {
  const cells = new Array(72).fill("empty");
  const states = [
    "seeded",
    "seeded",
    "seeded",
    "seedling",
    "seedling",
    "mature",
    "transplanted",
    "cooked"
  ];
  const positions = [
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
    55,
    60,
    63,
    67,
    70
  ];
  positions.forEach((pos, i) => {
    cells[pos] = states[i % states.length];
  });
  return cells;
}
function AnimatedDemoTray() {
  const [cells, setCells] = reactExports.useState(
    () => Array.from({ length: 72 }, (_, i) => ({ id: i, state: "empty" }))
  );
  const [animStep, setAnimStep] = reactExports.useState(0);
  const targetGrid = reactExports.useRef(makeDemoGrid());
  const COLS = 12;
  reactExports.useEffect(() => {
    const filledPositions = targetGrid.current.map((state, i) => state !== "empty" ? i : -1).filter((i) => i !== -1);
    if (animStep < filledPositions.length) {
      const timer = setTimeout(() => {
        const pos = filledPositions[animStep];
        setCells(
          (prev) => prev.map(
            (c) => c.id === pos ? { ...c, state: targetGrid.current[pos] } : c
          )
        );
        setAnimStep((s) => s + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
    const cycleTimer = setTimeout(() => {
      setCells((prev) => {
        const seededIdx = prev.findIndex((c) => c.state === "seeded");
        if (seededIdx !== -1) {
          return prev.map(
            (c, i) => i === seededIdx ? { ...c, state: "seedling" } : c
          );
        }
        const seedlingIdx = prev.findIndex((c) => c.state === "seedling");
        if (seedlingIdx !== -1) {
          return prev.map(
            (c, i) => i === seedlingIdx ? { ...c, state: "mature" } : c
          );
        }
        return prev;
      });
    }, 2200);
    return () => clearTimeout(cycleTimer);
  }, [animStep]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid gap-1 w-full",
        style: { gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` },
        "data-ocid": "nims-demo-tray",
        children: cells.map(({ id, state }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: [
              DEMO_CELL_STYLES[state],
              "relative aspect-square rounded-sm flex items-center justify-center transition-all duration-300"
            ].join(" "),
            style: { minHeight: "28px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground/40 font-mono absolute top-0.5 right-0.5 leading-none", children: id + 1 }),
              state === "seeded" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: "🌱" }),
              state === "seedling" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: "🌿" }),
              state === "mature" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: "🌶️" }),
              state === "transplanted" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[6px] font-bold text-muted-foreground/50 rotate-[-30deg] leading-none", children: "XPLNT" }),
              state === "cooked" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: "💀" })
            ]
          },
          `demo-cell-${id}`
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 flex-wrap text-[11px] text-muted-foreground", children: [
      {
        cls: "w-3 h-3 rounded-sm bg-card border border-border",
        label: "Empty"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-emerald-950/60 border border-emerald-700/60",
        label: "Seeded"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-cyan-950/60 border border-cyan-600/50",
        label: "Seedling"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-primary/20 border border-primary/50",
        label: "Mature"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-muted/20 border border-muted/40 opacity-60",
        label: "Transplanted"
      },
      {
        cls: "w-3 h-3 rounded-sm bg-black border border-red-900",
        label: "Cooked"
      }
    ].map(({ cls, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cls }),
      label
    ] }, label)) })
  ] });
}
const FEATURE_CARDS = [
  {
    icon: Grid3x3,
    title: "72-Cell Tray Grids",
    desc: "Visual 12×6 tray maps. Click any cell to open detailed plant records.",
    color: "text-emerald-400",
    bg: "bg-emerald-950/30 border-emerald-800/40"
  },
  {
    icon: Leaf,
    title: "Full Lifecycle Data",
    desc: "Track common name, latin name, origin, planting date, nutrition, and pest notes per seed.",
    color: "text-cyan-400",
    bg: "bg-cyan-950/30 border-cyan-800/40"
  },
  {
    icon: Sprout,
    title: "Transplant Flow",
    desc: "Mark cells transplanted with container size. All lifecycle data carries forward automatically.",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/30"
  },
  {
    icon: CloudSun,
    title: "Weather Integration",
    desc: "Enable location sharing to auto-log daily weather records alongside your plants.",
    color: "text-sky-400",
    bg: "bg-sky-950/30 border-sky-800/40"
  },
  {
    icon: Camera,
    title: "Progress Photos",
    desc: "Upload compressed progress pictures for each plant — stored efficiently on-chain.",
    color: "text-violet-400",
    bg: "bg-violet-950/30 border-violet-800/40"
  },
  {
    icon: FileText,
    title: "CSV Export & Reports",
    desc: "Export full lifecycle data for any plant or tray with one click.",
    color: "text-amber-400",
    bg: "bg-amber-950/30 border-amber-800/40"
  },
  {
    icon: ToggleLeft,
    title: "Inventory Control",
    desc: "Admin shop toggles mark plants For Sale directly from the tray view.",
    color: "text-fire",
    bg: "bg-fire/10 border-fire/30"
  },
  {
    icon: Download,
    title: "Bulk Actions",
    desc: "Select multiple cells and apply actions — mark cooked, export, or update in bulk.",
    color: "text-rose-400",
    bg: "bg-rose-950/30 border-rose-800/40"
  }
];
const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "🌱",
    title: "Plant a Seed",
    desc: "Add a tray, click a cell, and record the seed's variety, origin, and planting date."
  },
  {
    step: "02",
    icon: "📋",
    title: "Monitor & Log",
    desc: "Track watering schedules, feeding logs, pest pressure, and daily weather automatically."
  },
  {
    step: "03",
    icon: "🪴",
    title: "Transplant",
    desc: "When a seedling is ready, tap Transplant to move it to a new container. All data travels with it."
  },
  {
    step: "04",
    icon: "🌶️",
    title: "Harvest or Sell",
    desc: "Mature plants can be toggled For Sale in the admin panel or harvested with full provenance recorded."
  }
];
function NIMSShowcase() {
  const { login } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-20 sm:py-28 bg-card border-b border-border overflow-hidden",
        "data-ocid": "nims-showcase-hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none opacity-[0.04]",
              "aria-hidden": "true",
              style: {
                backgroundImage: "repeating-linear-gradient(0deg,oklch(0.62 0.26 145) 0,oklch(0.62 0.26 145) 1px,transparent 1px,transparent 52px),repeating-linear-gradient(90deg,oklch(0.62 0.26 145) 0,oklch(0.62 0.26 145) 1px,transparent 1px,transparent 52px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.08] pointer-events-none",
              "aria-hidden": "true",
              style: {
                background: "radial-gradient(ellipse at 50% 0%, oklch(0.55 0.2 145), transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-14 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "space-y-6",
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "border-emerald-700/50 text-emerald-400 text-xs px-3 py-1 font-display tracking-widest uppercase",
                      children: "Free for All Registered Users"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight", children: [
                    "Nursery ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "Inventory" }),
                    " ",
                    "Management System"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-lg", children: "Track every seed from the moment it's planted to the day it's harvested or sold. NIMS gives you professional-grade nursery management — completely free for every IC SPICY member." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "lg",
                        onClick: login,
                        className: "bg-emerald-700 hover:bg-emerald-600 text-foreground font-display font-bold px-8 gap-2 shadow-elevated transition-smooth",
                        "data-ocid": "nims-signin-hero-cta",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-5 h-5" }),
                          "Sign In to Start Tracking"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "lg",
                        className: "border-border hover:border-emerald-700/50 hover:text-emerald-400 font-display px-8 gap-2 transition-smooth",
                        onClick: () => {
                          var _a;
                          return (_a = document.getElementById("nims-how-it-works")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                        },
                        "data-ocid": "nims-how-it-works-scroll",
                        children: [
                          "How It Works",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border rounded-2xl p-5 shadow-elevated", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-display font-semibold text-foreground", children: "Tray Alpha — Spring 2026" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Live demo · cells fill as seeds are planted" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-950/60 text-emerald-400 border-emerald-700/40 text-xs", children: "NIMS Demo" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedDemoTray, {})
                ] })
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "nims-showcase-features",
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-emerald-400 font-display text-sm tracking-widest uppercase mb-3", children: "Everything You Need" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Professional Nursery Tools" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "NIMS was built for serious growers who need real data, not guesswork. Every feature is purpose-built for plant lifecycle management." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: FEATURE_CARDS.map(({ icon: Icon, title, desc, color, bg }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: `border rounded-xl p-5 space-y-3 ${bg}`,
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: i * 0.07 },
              "data-ocid": "nims-feature-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-9 h-9 rounded-lg bg-background/50 flex items-center justify-center ${color}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed", children: desc })
              ]
            },
            title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "nims-how-it-works",
        className: "py-20 bg-muted/30 border-y border-border",
        "data-ocid": "nims-showcase-how-it-works",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-14",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-emerald-400 font-display text-sm tracking-widest uppercase mb-3", children: "Simple Workflow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "How NIMS Works" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border",
                "aria-hidden": "true"
              }
            ),
            HOW_IT_WORKS.map(({ step, icon, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "relative flex flex-col items-center text-center space-y-4",
                initial: { opacity: 0, y: 25 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.12 },
                "data-ocid": "nims-how-step",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-24 h-24 rounded-2xl bg-card border border-border flex flex-col items-center justify-center gap-1 shadow-elevated", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "2.2rem" }, children: icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground/60", children: step })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-[200px]", children: desc })
                ]
              },
              step
            ))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "nims-showcase-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "space-y-6",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-emerald-950/40 border border-emerald-700/30 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-8 h-8 text-emerald-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Ready to Track Your Grow?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "NIMS is completely free for every registered IC SPICY user. Sign in with Internet Identity to access your full nursery management dashboard." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              onClick: login,
              className: "bg-emerald-700 hover:bg-emerald-600 text-foreground font-display font-bold px-10 py-6 text-base gap-2 shadow-elevated transition-smooth",
              "data-ocid": "nims-signin-bottom-cta",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-5 h-5" }),
                "Sign In to Start Tracking"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Free · No subscription · Works with Internet Identity" })
        ]
      }
    ) }) })
  ] });
}
function NIMS() {
  const { isAuthenticated, isInitializing } = useAuth();
  if (isInitializing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center min-h-[60vh] gap-4",
        "data-ocid": "nims-loading-auth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-10 h-10 text-muted-foreground opacity-40 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-64" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48" })
        ]
      }
    );
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(NIMSShowcase, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NIMSPage, {});
}
export {
  NIMS as default
};
