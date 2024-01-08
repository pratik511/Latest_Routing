import { Navigate } from "react-router-dom";

const PublicRoute = ({ element }) => {
  const isAuthenticated = true;

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PublicRoute;
