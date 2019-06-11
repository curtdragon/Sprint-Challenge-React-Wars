import React, {Component} from "react";
import Characters from "./Characters";
import "./StarWars.css"

class StarWars extends Component {

    // nextPage(){

    // }

    render(){
        return (
            <div>
                <div>
                    <button type="button">Previous Page</button>
                    <button type="button">Next Page</button>
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