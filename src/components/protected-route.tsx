import { Navigate } from "react-router-dom";
import useLogin from "../hooks/use-login";

export const ProtectedRoute = ({ children }: any) => {
  const isLoggedIn = useLogin((state) => state.isLoggedIn);
  if (!isLoggedIn) {
    console.log(isLoggedIn);
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
