
import "./scss/style.scss"
import React from "react";
import Header from "./components/Header";
import Life from "./pages/Life";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Vision from "./pages/Vision";
import Visual from "./pages/Visual";
const App = () => {
  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <Visual />
        <Profile />
        <Skills />
        <Portfolio />
        <Vision />
        <Life />
      </div>
    </div>
  );
};
export default App;
