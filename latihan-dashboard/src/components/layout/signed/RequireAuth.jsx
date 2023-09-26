import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = (props) => {
  // const { allowedRoles } = props;
  const { menu } = props;
  const auth = useAuth();
  const location = useLocation();

  // return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
  // return auth?.role[menu] > 0 ? (
  //   <Outlet />
  // ) : auth?.user ? (
  //   <Navigate to="/500" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/signin" state={{ from: location }} replace />
  // );
  return auth?.user ? <Outlet /> : <Navigate to="/signin" state={{ from: location }} replace />;
};

export default RequireAuth;
