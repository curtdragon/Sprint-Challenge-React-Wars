import React, {Component} from "react";
import "./App.css";
import StarWars from "./components/StarWars";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage:"",
      previousPage:"",
      currentPage:""
    };
  };

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  nPage = () => {    
    this.getCharacters(this.state.nextPage);
  }

  pPage = () => {
    this.getCharacters(this.state.previousPage);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(
          {starwarsChars: data.results,
            nextPage: data.next,
            previousPage: data.previous},
        );
        
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars
        starwarsChars={this.state.starwarsChars}
        nPage={this.nPage}
        pPage={this.pPage}
        />
      </div>
    );
  };
};

export default App;
