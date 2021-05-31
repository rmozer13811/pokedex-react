import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Content from "./components/pages/Content";
import background from "./img/pokemon-1-background-25.jpg";
import React from "react";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
      }}
    >
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/content" component={Content} />
      </div>
    </div>
  );
}

export default App;
