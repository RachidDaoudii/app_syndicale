import { Routes, Route, RouterProvider } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import Dashboard from "./pages/dashboard/dashboard";
import Appartement from "./pages/appartement";
import Paiement from "./pages/paiement";
import AddAppartement from "./pages/appartement/add";
import EditAppartement from "./pages/appartement/edit";
import Client from "./pages/client";
import AddClient from "./pages/client/add";
import AddPaiement from "./pages/paiement/add";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setlogin } from "./redux/features/auth/authSlice";
import PrivateRoute from "./components/PrivateRoute";

const MainRoute = () => {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("USER"));

  useEffect(() => {
    dispatch(setlogin(user));
  }, []);
  return (
    <Routes>
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/auth/sign-in" element={<SignIn />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard/appartement" element={<Appartement />} />
        <Route path="/dashboard/paiement" element={<Paiement />} />
        <Route path="/dashboard/paiement/add" element={<AddPaiement />} />
        <Route path="/dashboard/client" element={<Client />} />
        <Route path="/dashboard/appartement/add" element={<AddAppartement />} />
        <Route path="/dashboard/client/add" element={<AddClient />} />
        <Route
          path="/dashboard/appartement/edit/:id"
          element={<EditAppartement />}
        />
      </Route>
    </Routes>
  );
};

export default MainRoute;
