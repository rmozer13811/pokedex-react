import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="container text-center">
      <h1>POKEDEX</h1>
      <h2>Insert a pokemon name to discover more about it! </h2>
      <div class="d-flex justify-content-center">
        <Link to={"/content"}>
          <button class="btn btn-success">Let's Go!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
