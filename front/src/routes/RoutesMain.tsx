import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/home" />} />
      </Route>
      <Route path="/home">
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/login">
        <Route index element={<LoginPage />} />
      </Route>

      <Route path="/register">
        <Route index element={<RegisterPage />} />
      </Route>

      <Route path="/dashboard">
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
