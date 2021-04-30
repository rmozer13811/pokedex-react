import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Content from "./components/pages/Content";
import background from "./img/pokemon-1-background-25.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/content" component={Content} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
