import React from "react";
import { Routes, Route } from "react-router-dom";
import Games from "./pages/game/Games";
import GameDetails from "./pages/game/GameDetails";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Inbox from "./dashboard/inbox";
import DashboardDefaultContent from "./dashboard/dashboard-default-content";
import SettingsAndPrivacy from "./dashboard/settings-and-privacy";

/*Routes is used to be Switch*/
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="games" element={<Games />} />
      <Route path="game-details/:id" element={<GameDetails />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="/" element={<DashboardDefaultContent />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="settings-and-privacy" element={<SettingsAndPrivacy />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
