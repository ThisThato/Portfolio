import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/landing";
import Titles from "./components/Titles";
import Workscreen from "./pages/workscreen";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Landing />
      <Titles />
      <Workscreen />
    </Router>
  );
}

export default App;
