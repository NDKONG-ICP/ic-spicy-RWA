import { d as createLucideIcon, at as shimExports, r as reactExports, j as jsxRuntimeExports, c as cn, aa as useQuery, ab as useActor, ac as useQueryClient, ad as useMutation, ae as createActor, w as useAuth, a as Button, X, m as motion, A as AnimatePresence, B as Badge, f as ue, S as SOCIAL_LINKS } from "./index-LPJkeeMn.js";
import { c as createContextScope } from "./index-C6icFMY8.js";
import { u as useCallbackRef, a as useLayoutEffect2 } from "./index-BlOHC6Km.js";
import { P as Primitive } from "./index-3nV1auV4.js";
import { S as Separator } from "./separator-Di6Ncu5b.js";
import { S as Skeleton } from "./skeleton-eXdTQJWV.js";
import { T as Textarea } from "./textarea-DExvf-Ln.js";
import { P as Plus } from "./plus-DaTrIbX5.js";
import { U as Users } from "./users-BC3XT1SY.js";
import { S as Share2 } from "./share-2-BwcSDcjG.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-B7dbkp97.js";
import { S as Send } from "./send-HY9Jh9w9.js";
import { C as Copy } from "./copy-CTPIa1Ik.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$3);
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
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
function useIsHydrated() {
  return shimExports.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
function subscribe() {
  return () => {
  };
}
var AVATAR_NAME = "Avatar";
var [createAvatarContext] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = reactExports.useState("idle");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { ...avatarProps, ref: forwardedRef })
      }
    );
  }
);
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, src, onLoadingStatusChange = () => {
    }, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
    const handleLoadingStatusChange = useCallbackRef((status) => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    });
    useLayoutEffect2(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = reactExports.useState(delayMs === void 0);
    reactExports.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;
  }
);
AvatarFallback$1.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
  if (!image) {
    return "idle";
  }
  if (!src) {
    return "error";
  }
  if (image.src !== src) {
    image.src = src;
  }
  return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
  const isHydrated = useIsHydrated();
  const imageRef = reactExports.useRef(null);
  const image = (() => {
    if (!isHydrated) return null;
    if (!imageRef.current) {
      imageRef.current = new window.Image();
    }
    return imageRef.current;
  })();
  const [loadingStatus, setLoadingStatus] = reactExports.useState(
    () => resolveLoadingStatus(image, src)
  );
  useLayoutEffect2(() => {
    setLoadingStatus(resolveLoadingStatus(image, src));
  }, [image, src]);
  useLayoutEffect2(() => {
    const updateStatus = (status) => () => {
      setLoadingStatus(status);
    };
    if (!image) return;
    const handleLoad = updateStatus("loaded");
    const handleError = updateStatus("error");
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    if (typeof crossOrigin === "string") {
      image.crossOrigin = crossOrigin;
    }
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [image, crossOrigin, referrerPolicy]);
  return loadingStatus;
}
var Root = Avatar$1;
var Fallback = AvatarFallback$1;
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
function useBackendActor() {
  return useActor(createActor);
}
function usePosts() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listPosts();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 3e4
  });
}
function useCommentsByPost(postId) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["comments", postId == null ? void 0 : postId.toString()],
    queryFn: async () => {
      if (!actor || postId === void 0) return [];
      return actor.listCommentsByPost(postId);
    },
    enabled: !!actor && !isFetching && postId !== void 0
  });
}
function useCreatePost() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Not connected");
      return actor.createPost(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] })
  });
}
function useLikePost() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      postId,
      liked
    }) => {
      if (!actor) throw new Error("Not connected");
      return liked ? actor.unlikePost(postId) : actor.likePost(postId);
    },
    onMutate: async ({ postId, liked }) => {
      await qc.cancelQueries({ queryKey: ["posts"] });
      const prev = qc.getQueryData(["posts"]);
      qc.setQueryData(
        ["posts"],
        (old) => (old == null ? void 0 : old.map(
          (p) => p.id === postId ? {
            ...p,
            caller_liked: !liked,
            like_count: liked ? p.like_count - 1n : p.like_count + 1n
          } : p
        )) ?? []
      );
      return { prev };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx == null ? void 0 : ctx.prev) qc.setQueryData(["posts"], ctx.prev);
    },
    onSettled: () => qc.invalidateQueries({ queryKey: ["posts"] })
  });
}
function useCreateComment() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Not connected");
      return actor.createComment(input);
    },
    onSuccess: (_data, vars) => {
      qc.invalidateQueries({ queryKey: ["comments", vars.post_id.toString()] });
      qc.invalidateQueries({ queryKey: ["posts"] });
    }
  });
}
function useFollowUser() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      target,
      following
    }) => {
      if (!actor) throw new Error("Not connected");
      return following ? actor.unfollowUser(target) : actor.followUser(target);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["profile"] });
      qc.invalidateQueries({ queryKey: ["userProfile"] });
    }
  });
}
function timeAgo(ts) {
  const diff = Date.now() - Number(ts) / 1e6;
  if (diff < 6e4) return "Just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  if (diff < 6048e5) return `${Math.floor(diff / 864e5)}d ago`;
  return new Date(Number(ts) / 1e6).toLocaleDateString();
}
function getAuthorDisplay(post) {
  if (post.is_anonymous) return "🌶 Anonymous";
  if (post.author_username) return `@${post.author_username}`;
  return post.author_text.length > 12 ? `${post.author_text.slice(0, 6)}…${post.author_text.slice(-4)}` : post.author_text;
}
function getAuthorInitial(post) {
  if (post.is_anonymous) return "🌶";
  if (post.author_username)
    return post.author_username.slice(0, 1).toUpperCase();
  return post.author_text.slice(0, 1).toUpperCase();
}
function getCommentAuthorDisplay(comment) {
  if (comment.author_username) return `@${comment.author_username}`;
  const t = comment.author.toText();
  return `${t.slice(0, 6)}…${t.slice(-4)}`;
}
function getCommentInitial(comment) {
  if (comment.author_username)
    return comment.author_username.slice(0, 1).toUpperCase();
  return comment.author.toText().slice(0, 1).toUpperCase();
}
function SharePanel({
  postId,
  content,
  onClose
}) {
  const postUrl = `${window.location.origin}/community?post=${postId.toString()}`;
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedText = encodeURIComponent(
    `${content.slice(0, 100)}… via @icspicyrwa`
  );
  const shareTargets = [
    {
      label: "Facebook",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-4 h-4" }),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      colorClass: "text-blue-400"
    },
    {
      label: "X / Twitter",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      colorClass: "text-foreground"
    },
    {
      label: "Instagram",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4" }),
      url: SOCIAL_LINKS.instagram,
      colorClass: "text-pink-400"
    },
    {
      label: "TikTok",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
      url: SOCIAL_LINKS.tiktok,
      colorClass: "text-cyan-400"
    }
  ];
  const copyLink = () => {
    navigator.clipboard.writeText(postUrl).then(() => {
      ue.success("Link copied!");
      onClose();
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 8 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: 8 },
      className: "absolute right-0 bottom-10 z-20 w-52 rounded-xl bg-card border border-border shadow-elevated p-2",
      "data-ocid": "share-panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground px-2 py-1 font-medium", children: "Share this post" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-1" }),
        shareTargets.map(({ label, icon, url, colorClass }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm hover:bg-muted/40 transition-smooth ${colorClass}`,
            onClick: onClose,
            "data-ocid": `share-${label.toLowerCase().replace(/[\s/]+/g, "-")}`,
            children: [
              icon,
              label
            ]
          },
          label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: copyLink,
            className: "flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 w-full transition-smooth",
            "data-ocid": "share-copy-link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
              "Copy link"
            ]
          }
        )
      ]
    }
  );
}
function CommentThread({
  postId,
  commentCount
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [newComment, setNewComment] = reactExports.useState("");
  const { isAuthenticated, login } = useAuth();
  const { data: comments, isLoading } = useCommentsByPost(
    open ? postId : void 0
  );
  const createComment = useCreateComment();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    try {
      await createComment.mutateAsync({
        post_id: postId,
        content: newComment.trim()
      });
      setNewComment("");
      ue.success("Comment posted!");
    } catch {
      ue.error("Failed to post comment.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "comment-thread", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-smooth",
        "data-ocid": "comment-toggle-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: commentCount.toString() }),
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pl-4 border-l-2 border-border space-y-3", children: [
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-3/4" })
          ] }) : comments && comments.length > 0 ? comments.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "w-6 h-6 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-secondary text-foreground text-xs font-medium", children: getCommentInitial(c) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                getCommentAuthorDisplay(c),
                " · ",
                timeAgo(c.created_at)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-0.5 break-words", children: c.content })
            ] })
          ] }, c.id.toString())) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No comments yet. Be the first!" }),
          isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "flex gap-2 mt-3",
              "data-ocid": "comment-form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: newComment,
                    onChange: (e) => setNewComment(e.target.value),
                    placeholder: "Write a comment…",
                    className: "flex-1 min-w-0 rounded-lg bg-muted/40 border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-smooth",
                    maxLength: 512,
                    "data-ocid": "comment-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    size: "sm",
                    className: "bg-primary shrink-0",
                    disabled: createComment.isPending || !newComment.trim(),
                    "data-ocid": "comment-submit-btn",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" })
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: login,
              className: "text-xs text-primary hover:underline",
              "data-ocid": "comment-login-btn",
              children: "Sign in to comment"
            }
          )
        ] })
      }
    ) })
  ] });
}
function PostCard({ post }) {
  const { isAuthenticated, login, principal } = useAuth();
  const likePost = useLikePost();
  const followUser = useFollowUser();
  const [showShare, setShowShare] = reactExports.useState(false);
  const isOwnPost = !post.is_anonymous && post.author_principal && (principal == null ? void 0 : principal.toText()) === post.author_principal.toText();
  const handleLike = () => {
    if (!isAuthenticated) {
      ue.error("Sign in to like posts.");
      login();
      return;
    }
    likePost.mutate({ postId: post.id, liked: post.caller_liked });
  };
  const handleFollow = () => {
    if (!isAuthenticated) {
      login();
      return;
    }
    if (!post.author_principal) return;
    followUser.mutate(
      { target: post.author_principal, following: false },
      {
        onSuccess: () => ue.success("Now following!"),
        onError: () => ue.error("Failed to follow.")
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "rounded-2xl bg-card border border-border p-5 shadow-subtle hover:border-primary/30 transition-smooth relative",
      "data-ocid": "post-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "w-10 h-10 shrink-0 ring-2 ring-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AvatarFallback,
              {
                className: post.is_anonymous ? "bg-muted text-base" : "bg-primary/15 text-primary font-bold text-sm",
                children: getAuthorInitial(post)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: getAuthorDisplay(post) }),
                post.is_anonymous && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-[10px] px-1.5 py-0 border-muted-foreground/30 text-muted-foreground",
                    children: "anon"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: timeAgo(post.created_at) })
            ] })
          ] }),
          post.author_principal && !post.is_anonymous && !isOwnPost && isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "border-border h-7 text-xs shrink-0 hover:border-primary/50 hover:text-primary",
              onClick: handleFollow,
              disabled: followUser.isPending,
              "data-ocid": "post-follow-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3 mr-1" }),
                "Follow"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed mb-4 break-words", children: post.content }),
        post.image_key && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 rounded-xl overflow-hidden border border-border bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: post.image_key,
            alt: "Attached media",
            className: "w-full object-cover max-h-80",
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 relative pt-3 border-t border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleLike,
              className: [
                "flex items-center gap-1.5 text-xs font-medium transition-smooth group",
                post.caller_liked ? "text-primary" : "text-muted-foreground hover:text-primary"
              ].join(" "),
              "aria-label": post.caller_liked ? "Unlike post" : "Like post",
              "data-ocid": "post-like-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Heart,
                  {
                    className: `w-4 h-4 transition-smooth ${post.caller_liked ? "fill-current scale-110" : "group-hover:scale-110"}`
                  }
                ),
                post.like_count.toString()
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CommentThread, { postId: post.id, commentCount: post.comment_count }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setShowShare((v) => !v),
              className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-smooth ml-auto",
              "aria-label": "Share post",
              "data-ocid": "post-share-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" }),
                "Share"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showShare && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SharePanel,
            {
              postId: post.id,
              content: post.content,
              onClose: () => setShowShare(false)
            }
          ) })
        ] })
      ]
    }
  );
}
function CreatePostForm({ onClose }) {
  const [content, setContent] = reactExports.useState("");
  const [anonymous, setAnonymous] = reactExports.useState(false);
  const [imageDataUrl, setImageDataUrl] = reactExports.useState(null);
  const [imageName, setImageName] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  const createPost = useCreatePost();
  const handleFileChange = (e) => {
    var _a;
    const file = ((_a = e.target.files) == null ? void 0 : _a[0]) ?? null;
    if (file && file.size > 5 * 1024 * 1024) {
      ue.error("Photo must be under 5MB.");
      return;
    }
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onload = (ev) => {
        var _a2;
        return setImageDataUrl((_a2 = ev.target) == null ? void 0 : _a2.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageDataUrl(null);
      setImageName("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      await createPost.mutateAsync({
        content: content.trim(),
        anonymous,
        image_key: imageDataUrl ?? void 0
      });
      ue.success("Post published! 🌶️");
      setContent("");
      setAnonymous(false);
      setImageDataUrl(null);
      setImageName("");
      onClose();
    } catch {
      ue.error("Failed to publish post.");
    }
  };
  const charCount = content.length;
  const maxChars = 1024;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: -12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -12 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "rounded-2xl bg-card border border-primary/30 p-6 space-y-4 shadow-elevated",
          "data-ocid": "create-post-form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "New Post" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "text-muted-foreground hover:text-foreground transition-smooth rounded-md p-1",
                  "aria-label": "Close form",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: content,
                  onChange: (e) => setContent(e.target.value),
                  placeholder: "Share your grow journey, tips, chili harvest results, or ask the community…",
                  className: "resize-none text-sm min-h-[110px] pr-12",
                  rows: 4,
                  maxLength: maxChars,
                  "data-ocid": "post-content-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `absolute bottom-2.5 right-3 text-[10px] tabular-nums ${charCount > maxChars * 0.9 ? "text-primary" : "text-muted-foreground"}`,
                  children: [
                    charCount,
                    "/",
                    maxChars
                  ]
                }
              )
            ] }),
            imageDataUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden border border-border max-h-40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: imageDataUrl,
                  alt: "Preview",
                  className: "w-full object-cover max-h-40"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setImageDataUrl(null);
                    setImageName("");
                  },
                  className: "absolute top-2 right-2 bg-background/80 rounded-full p-1 text-foreground hover:text-primary transition-smooth",
                  "aria-label": "Remove image",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a;
                      return (_a = fileRef.current) == null ? void 0 : _a.click();
                    },
                    className: "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-smooth",
                    "aria-label": "Attach a photo",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4" }),
                      imageName ? `${imageName.slice(0, 16)}…` : "Add photo"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: fileRef,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: handleFileChange,
                    "data-ocid": "post-image-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    className: "flex items-center gap-2 text-xs text-muted-foreground cursor-pointer select-none hover:text-foreground transition-smooth",
                    htmlFor: "post-anon",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "post-anon",
                          type: "checkbox",
                          checked: anonymous,
                          onChange: (e) => setAnonymous(e.target.checked),
                          className: "rounded border-border accent-primary",
                          "data-ocid": "post-anonymous-checkbox"
                        }
                      ),
                      "Post anonymously"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  size: "sm",
                  className: "bg-primary hover:bg-primary/90",
                  disabled: createPost.isPending || !content.trim(),
                  "data-ocid": "post-submit-btn",
                  children: createPost.isPending ? "Posting…" : "Publish 🌶️"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function FeedSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "community-loading", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl bg-card border border-border p-5 space-y-3",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-10 h-10 rounded-full shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-32" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-20" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/5" })
      ]
    },
    i
  )) });
}
function CommunityPage() {
  const { isAuthenticated, login } = useAuth();
  const { data: posts, isLoading } = usePosts();
  const [showForm, setShowForm] = reactExports.useState(false);
  const sortedPosts = posts ? [...posts].sort((a, b) => Number(b.created_at - a.created_at)) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "community-page", className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground mb-1", children: [
            "🌶️ IC SPICY ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-fire", children: "Community" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Connect with fellow pepper enthusiasts — share grows, tips, and harvests." })
        ] }),
        isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: () => setShowForm((v) => !v),
            className: "bg-primary hover:bg-primary/90 shrink-0",
            "data-ocid": "community-new-post-btn",
            children: [
              showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
              showForm ? "Cancel" : "New Post"
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: login,
            className: "border-primary/40 text-primary hover:bg-primary/10 shrink-0",
            "data-ocid": "community-login-btn",
            children: "Sign in to post"
          }
        )
      ] }),
      !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          className: "mt-4 rounded-xl bg-primary/8 border border-primary/20 px-4 py-3 flex items-center justify-between gap-3 flex-wrap",
          "data-ocid": "community-auth-banner",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "Join the conversation." }),
              " ",
              "Sign in with Internet Identity to post, like, and comment."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "bg-primary hover:bg-primary/90 shrink-0",
                onClick: login,
                children: "Sign in"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreatePostForm, { onClose: () => setShowForm(false) }) }) }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(FeedSkeleton, {}) : sortedPosts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "post-list", children: sortedPosts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: Math.min(i * 0.05, 0.3) },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostCard, { post: p })
      },
      p.id.toString()
    )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "flex flex-col items-center justify-center py-24 text-center",
        "data-ocid": "community-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🌶️" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-xl mb-2", children: "Be the first to post!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6 max-w-xs leading-relaxed", children: "Share your chili growing journey, rare plant discoveries, or farming tips with the IC SPICY community." }),
          isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "bg-primary hover:bg-primary/90",
              onClick: () => setShowForm(true),
              "data-ocid": "community-empty-cta",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
                "Start the conversation"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "border-primary/40 text-primary",
              onClick: login,
              "data-ocid": "community-empty-login",
              children: "Sign in to post"
            }
          )
        ]
      }
    )
  ] });
}
export {
  CommunityPage as default
};
