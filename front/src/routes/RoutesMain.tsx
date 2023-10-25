import { Navigate, Route, Routes } from "react-router-dom";
import HomePagePublic from "../pages/HomePage";
import AnouncementPagePublic from "../pages/AnouncementPage";
import UserPagePublic from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/home" />} />
      </Route>
      <Route path="/home">
        <Route index element={<HomePagePublic />} />
      </Route>

      <Route path="/anouncement/:id">
        <Route index element={<AnouncementPagePublic />} />
      </Route>

      <Route path="/anouncement/user/:id">
        <Route index element={<UserPagePublic />} />
      </Route>

      <Route path="/login">
        <Route index element={<LoginPage />} />
      </Route>

      <Route path="/register">
        <Route index element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
