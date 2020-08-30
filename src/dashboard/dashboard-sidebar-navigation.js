import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Toolbar from "@material-ui/core/Toolbar";

const DashboardSidebarNavigation = () => {
  const classes = useStyles();

  useEffect(() => {
    // alert("Rendering Dashboard Sidebar Navigation");
  }, []);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Toolbar style={{ width: "6rem", height: "auto" }}>
            <Link to="/" className={classes.logoWithLink}>
              <img
                className={"App-logo"}
                width={"100%"}
                height={"auto"}
                src={logo}
                alt="logo"
              />
              React
            </Link>
          </Toolbar>
          <div className={classes.drawerContainer}>
            <List>
              <Link className={classes.link} to={"inbox"}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"inbox"} />
                </ListItem>
              </Link>
              <Link className={classes.link} to={"settings-and-privacy"}>
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary={"settings and privacy"} />
                </ListItem>
              </Link>
              <a className={classes.link} href={"/"}>
                <ListItem button>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary={"logout"} />
                </ListItem>
              </a>
            </List>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default DashboardSidebarNavigation;

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: { textDecoration: "none", color: "inherit" },
    logoWithLink: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "inherit",
    },
  })
);
