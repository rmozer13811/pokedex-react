import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div class="container text-center">
      <audio
        ref="audio_tag"
        src="/src/sounds/2021-04-30 11-09-58 (mp3cut.net).mp3"
        controls
        autoPlay
      />
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
