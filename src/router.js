import React from "react";
import DashboardDefaultContent from "./dashboard/dashboard-default-content";
import Games from "./pages/game/Games";
import GameDetails from "./pages/game/GameDetails";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Inbox from "./dashboard/inbox";
import SettingsAndPrivacy from "./dashboard/settings-and-privacy";
import { Route, Routes } from "react-router";
import { useRoutes } from "react-router-dom";

/*Routes is used to be Switch*/
const Router = () => {
  /* nesting routes*/
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/games" element={<Games />} />
      <Route path="/game-details/:id" element={<GameDetails />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/" element={<DashboardDefaultContent />} />
        <Route path="/dashboard/inbox" element={<Inbox />} />
        <Route
          path="/dashboard/settings-and-privacy"
          element={<SettingsAndPrivacy />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  /* object-based routes
  return useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "games", element: <Games /> },
    { path: "game-details/:id", element: <GameDetails /> },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        { path: "/", element: <DashboardDefaultContent /> },
        { path: "inbox", element: <Inbox /> },
        { path: "settings-and-privacy", element: <SettingsAndPrivacy /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
*/
};
export default Router;
