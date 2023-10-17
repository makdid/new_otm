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
const Home = lazy(() => import("../components/layout/public/Home"));
const SignIn = lazy(() => import("../pages/auth/SignIn"));
const Page404 = lazy(() => import("../pages/Page404"));
const Page500 = lazy(() => import("../pages/Page500"));

const DashboardWo = lazy(() => import("../pages/dashboard/dashboard-wo"));
const DashboardPm = lazy(() => import("../pages/dashboard/dashboard-pm"));

const WorkOrderAll = lazy(() => import("../pages/work-order/all-wo"));
const WorkOrderNS = lazy(() => import("../pages/work-order/not-started-wo"));
const WorkOrderS = lazy(() => import("../pages/work-order/started-wo"));
const WorkOrderC = lazy(() => import("../pages/work-order/completed"));
const WorkOrderF = lazy(() => import("../pages/work-order/finished-wo"));

const PreventiveMaintenanceAll = lazy(() => import("../pages/preventive-maintenance/all-pm"));
const PreventiveMaintenanceSchedules = lazy(() => import("../pages/preventive-maintenance/pm-schedules"));

const Project = lazy(() => import("../pages/project/projects"));

const DailyReport = lazy(() => import("../pages/daily-report/reports"));

const AssetList = lazy(() => import("../pages/asset/list-asset"));
const AssetCertificate = lazy(() => import("../pages/asset/list-certificate"));

const ListOfSpareparts = lazy (() => import("../pages/sparepart/list-sparepart"))

const Vendor = lazy (() => import("../pages/contact/vendor"))
const Contact = lazy (() => import("../pages/contact/contact-person"))

const Setting = lazy (()=> import("../pages/setting/year"))

const Profile = lazy (()=> import("../pages/profile/index"))

function App() {
  const { configs } = useConfig();
  useWeighbridge();

  const otm = useSelector((state) => state.wb);

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
        <Route path="otm" name="signedPages" element={<LayoutSigned />}>
          <Route path="dashboard-wo" name="Dashboard Wo" element={<DashboardWo />} />
          <Route path="dashboard-pm" name="Dashboard Pm" element={<DashboardPm/>} />

          <Route path="all-wo" name="Work Order All" element={<WorkOrderAll/>} />
          <Route path="not-started-wo" name="Work Order NS" element={<WorkOrderNS/>} />
          <Route path="started-wo" name="Work Order S" element={<WorkOrderS/>} />
          <Route path="completed" name="WorkOrder C" element={<WorkOrderC/>} />
          <Route path="finished-wo" name="WorkOrder F" element={<WorkOrderF/>} />
          
          <Route path="all-pm" name="Preventive Maintenance" element={<PreventiveMaintenanceAll/>} />
          <Route path="pm-schedules" name="Preventive Maintenance" element={<PreventiveMaintenanceSchedules/>} />

          <Route path="projects" name="project" element={<Project/>} />

          <Route path="reports" name="report" element={<DailyReport/>} />

          <Route path="list-asset" name="asset list" element={<AssetList/>} />
          <Route path="list-certificate" name="asset list" element={<AssetCertificate/>} />

          <Route path="list-spareparts" name="list sparepart" element= {<ListOfSpareparts/>}/>

          <Route path="vendor" name="vendor" element= {<Vendor/>}/>
          <Route path="contact-person" name="contact" element= {<Contact/>}/>

          <Route path="year" name="Setting" element= {<Setting/>}/>

          <Route path="profile" name="Profile" element= {<Profile/>}/>

          <Route path="*" name="Page 404" element={<div>Page 404 Admin</div>} />
        </Route>
        {/* </Route> */}

        <Route path="*" name="Page 404" element={<div>Page 404</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
