import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return <div>{auth && auth.isAuth ? children : children}</div>;
};

export default PrivateRoute;
