import React, {Component} from "react";
import Characters from "./Characters";
import "./StarWars.css"

class StarWars extends Component {

    render(){
        return (
            <div>
                <div>
                    <button type="button" onClick={this.props.pPage}>Previous Page</button>
                    <button type="button" onClick={this.props.nPage}>Next Page</button>
                </div>
                <div className="char-list">   
                    {this.props.starwarsChars.map(index => (
                        <Characters
                            starwarsChar={index}
                            key={index.name}
                        />
                    ))}
                </div>
            </div>
        );
    };
};

export default StarWars;