import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/landing";
import Titles from "./components/Titles";
import InfoScreen from "./pages/infoScreen";
import WorkScreen from "./pages/WorkScreen";
import EducationScreen from "./pages/educationScreen";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Landing />
      <Titles />
      <InfoScreen />
      <WorkScreen />
      <EducationScreen />
    </Router>
  );
}

export default App;
