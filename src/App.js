import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/landing";
import Titles from "./components/Titles";
import Work from "./pages/work";

function App() {
  return (
    <Router>
      <Header />
      <Landing />
      <Titles />
      <Work />
    </Router>
  );
}

export default App;
