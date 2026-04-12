import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";
import { PageLoader } from "./components/ui/LoadingSpinner";
import { useIsAdmin } from "./hooks/useBackend";

const HomePage = lazy(() => import("./pages/Home"));
const MarketplacePage = lazy(() => import("./pages/Marketplace"));
const PlantsPage = lazy(() => import("./pages/Plants"));
const PlantDetailPage = lazy(() => import("./pages/PlantDetail"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const DAOPage = lazy(() => import("./pages/DAO"));
const CommunityPage = lazy(() => import("./pages/Community"));
const AdminPage = lazy(() => import("./pages/Admin"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const OrdersPage = lazy(() => import("./pages/Orders"));
const WalletPage = lazy(() => import("./pages/Wallet"));
const NIMSPage = lazy(() => import("./pages/NIMS"));
const CookBookPage = lazy(() => import("./pages/CookBook"));
const ScheduleBuilderPage = lazy(() => import("./pages/ScheduleBuilder"));
const ClaimPage = lazy(() => import("./pages/Claim"));

// Admin guard component — silently redirects non-admins to home with no DOM trace
function AdminGuard() {
  const { data: isAdmin, isLoading } = useIsAdmin();

  // While loading, show nothing (no flash of access denied)
  if (isLoading) return <PageLoader />;

  // Not admin → immediate invisible redirect, zero DOM presence
  if (!isAdmin) {
    throw redirect({ to: "/" });
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <AdminPage />
    </Suspense>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const marketplaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/marketplace",
  component: MarketplacePage,
});

const plantsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/plants",
  component: PlantsPage,
});

const plantDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/plants/$plantId",
  component: PlantDetailPage,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});

const daoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dao",
  component: DAOPage,
});

const communityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/community",
  component: CommunityPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminGuard,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
});

const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders",
  component: OrdersPage,
});

const walletRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wallet",
  component: WalletPage,
});

const nimsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/nims",
  component: NIMSPage,
});

const cookbookRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cookbook",
  component: CookBookPage,
});

const scheduleBuilderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/schedule-builder",
  component: ScheduleBuilderPage,
});

const claimRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/claim/$claimToken",
  component: ClaimPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  marketplaceRoute,
  plantsRoute,
  plantDetailRoute,
  profileRoute,
  daoRoute,
  communityRoute,
  adminRoute,
  checkoutRoute,
  ordersRoute,
  walletRoute,
  nimsRoute,
  cookbookRoute,
  scheduleBuilderRoute,
  claimRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
