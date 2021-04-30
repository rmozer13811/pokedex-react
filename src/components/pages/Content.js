import axios from "axios";
import React, { Component } from "react";

class Content extends Component {
  state = {
    pokemon: null,
    searchWord: "",
  };

  buildPokemonTypes = () => {
    const firstType = this.state.pokemon.types[0].type.name;
    const secondType =
      this.state.pokemon.types.length > 1
        ? `/${this.state.pokemon.types[1].type.name}`
        : "";
    return firstType + secondType;
  };

  onInputchange = (event) => {
    this.setState({
      searchWord: event.target.value,
    });
  };

  getPokemon = async () => {
    const lowerCaseWord = this.state.searchWord.toLowerCase();
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${lowerCaseWord}`
    );
    this.setState({
      pokemon: res.data,
    });
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div
        class="container mt-1"
        style={{
          fontFamily: "sans-serif",
        }}
      >
        <h3
          style={{
            fontSize: "40px",
          }}
        >
          Insert Pokémon!
        </h3>
        <input
          class="form-control"
          onChange={this.onInputchange}
          id="selected-word"
        ></input>
        <button class="btn btn-success my-2" onClick={this.getPokemon}>
          Gotta catch em all!!
        </button>
        <br />

        <div
          style={{
            fontSize: "32px",
            texttransform: "capitalize",
          }}
        >
          {this.Capitalize(
            this.state.pokemon ? this.state.pokemon.forms[0].name : ""
          )}
        </div>
        <div
          style={{
            fontSize: "32px",
            texttransform: "capitalize",
          }}
        >
          {this.state.pokemon
            ? `Type: ${this.Capitalize(this.buildPokemonTypes())}`
            : ""}
        </div>
        <div
          style={{
            fontSize: "32px",
            texttransform: "capitalize",
          }}
        >
          {this.state.pokemon
            ? `Height: ${Math.round(this.state.pokemon.height / 3.281)}m`
            : ""}
        </div>
        <div
          style={{
            fontSize: "32px",
            texttransform: "capitalize",
          }}
        >
          {this.state.pokemon
            ? `Weight: ${Math.round(this.state.pokemon.weight / 2.205)}kg`
            : ""}
        </div>
        <div class="d-flex flex-row bd-highlight mb-3">
          <img
            class=""
            style={{
              width: "400px",
            }}
            src={
              this.state.pokemon ? this.state.pokemon.sprites.front_default : ""
            }
          ></img>
          <img
            class=""
            style={{
              width: "400px",
            }}
            src={
              this.state.pokemon ? this.state.pokemon.sprites.back_default : ""
            }
          ></img>
          <img
            class=""
            style={{
              width: "400px",
            }}
            src={
              this.state.pokemon ? this.state.pokemon.sprites.front_shiny : ""
            }
          ></img>
        </div>
      </div>
    );
  }
}

export default Content;
