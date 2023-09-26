import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { useWeighbridge, useConfig } from "../common/hooks";

import "react-toastify/dist/ReactToastify.css";
import "./app.css";

// Containers
const LayoutPublic = lazy(() => import("../components/layout/public/LayoutPublic"));
const LayoutSigned = lazy(() => import("../components/layout/signed/LayoutSigned"));

// Pages
const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/auth/SignIn"));
const Page404 = lazy(() => import("../pages/Page404"));
const Page500 = lazy(() => import("../pages/Page500"));

const DashboardAll = lazy(() => import("../pages/dashboard/DashboardWorkOrder"));
// const DashboardAll = lazy(() => import("../pages/dashboard/PreventiveMaintenaince"));

const MDProvince = lazy(() => import("../pages/master-data/md-province"));
const MDCity = lazy(() => import("../pages/master-data/md-city"));

function App() {
  const { configs } = useConfig();
  useWeighbridge();

  const wb = useSelector((state) => state.wb);

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  return (
    <Suspense fallback={loading}>
      <ToastContainer />
      {/* <div>Weight on weighbride: {wb.weight}</div> */}
      <Routes>
        {/* public routes */}
        <Route path="/" name="Public Pages" element={<LayoutPublic />}>
          <Route index name="Home Page" element={<Home />} />
          <Route path="home" name="Home Page" element={<Home />} />
          <Route path="signin" name="Sign In Page" element={<SignIn />} />
          <Route exact path="404" name="Page 404" element={<Page404 />} />
          <Route exact path="500" name="Page 500" element={<Page500 />} />
        </Route>

        {/* protected routes */}
        {/* <Route element={<RequireAuth />}> */}
        <Route path="wb" name="signedPages" element={<LayoutSigned />}>
          <Route index name="dashboardwo" element={<DashboardAll />} />
          <Route path="dashboard/all" name="dashboardwo" element={<DashboardAll />} />
          <Route path="dashboard/pks" name="dashboardPks" element={<div>Dashboard PKS</div>} />
          <Route path="dashboard/t30" name="dashboardT30" element={<div>Dashboard T30</div>} />
          <Route path="dashboard/labanan" name="dashboardLabanan" element={<div>Dashboard Labanan</div>} />

          <Route path="transaction/pks" name="transactionPks" element={<div>PKS Transaction</div>} />
          <Route path="transaction/pks/:id" name="transactionPksDetails" element={<div>PKS Transaction Details</div>} />

          <Route path="transaction/t30" name="transactionT30" element={<div>T30 Transaction</div>} />
          <Route
            path="transaction/t30/:id"
            name="transactionT30Details"
            element={<div>T30 Transaction detailss</div>}
          />

          <Route path="transaction/labanan" name="transactionLabanan" element={<div>Labanan Transaction</div>} />
          <Route
            path="transaction/labanan/:id"
            name="transactionLabananDetails"
            element={<div>Labanan Transaction Details</div>}
          />

          <Route path="md/provinces" name="mdProvice" element={<MDProvince />} />
          <Route path="md/cities" name="mdCity" element={<MDCity />} />

          <Route path="*" name="Page 404" element={<div>Page 404 Admin</div>} />
        </Route>
        {/* </Route> */}

        <Route path="*" name="Page 404" element={<div>Page 404 Public</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
