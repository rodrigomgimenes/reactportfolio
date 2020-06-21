import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Webpages
import Home from "./components/pages/homepage/Home";
import About from "./components/pages/about/About";
import Experience from "./components/pages/experience/Experience";
import Skills from "./components/pages/skills/Skills";
import Portfolio from "./components/pages/portfolio/Portfolio";


function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
