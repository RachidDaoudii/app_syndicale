import { Routes, Route, RouterProvider, useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setlogin } from "./redux/features/auth/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import OverView from "./pages/dashboard/overView";
import EditClient from "./pages/client/edit";
import EditPaiement from "./pages/paiement/edit"

const MainRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("USER"));

  useEffect(() => {
    dispatch(setlogin(user));
  }, []);

  if (user?.User?.isAuth) {
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
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
          <Route path="/dashboard/overview" element={<OverView />} />
          <Route path="/dashboard/appartement" element={<Appartement />} />
          <Route path="/dashboard/paiement" element={<Paiement />} />
          <Route path="/dashboard/paiement/add" element={<AddPaiement />} />
          <Route path="/dashboard/client" element={<Client />} />
          <Route
            path="/dashboard/appartement/add"
            element={<AddAppartement />}
          />
          <Route path="/dashboard/client/add" element={<AddClient />} />
          <Route
            path="/dashboard/appartement/edit/:id"
            element={<EditAppartement />}
          />
          <Route path="/dashboard/client/edit/:id" element={<EditClient />} />
          <Route path="/dashboard/paiement/edit/:id" element={<EditPaiement />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="*" element={<SignIn />} />
      </Routes>
    );
  }
};

export default MainRoute;
