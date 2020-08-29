import React from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import NavigationBar from "./shared/components/navigation-bar";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
