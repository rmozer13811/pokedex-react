import "./App.css";

import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Content from "./components/pages/Content";
import background from "./img/pokemon-1-background-25.jpg";
import React from "react";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "90vh",
      }}
    >
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/content" component={Content} />
        <FooterPage />
      </div>
    </div>
  );
}

export default App;
