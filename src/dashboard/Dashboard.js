import React from "react";
import DashboardSidebarNavigation from "./dashboard-sidebar-navigation";
import { Outlet } from "react-router";
import { Grid } from "@material-ui/core";

const Dashboard = () => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <DashboardSidebarNavigation />
      <Outlet />
    </Grid>
  );
};

export default Dashboard;
