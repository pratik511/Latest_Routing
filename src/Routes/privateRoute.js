import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = true;

  return !isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;