import React from "react";
import Characters from "./Characters";
import "./StarWars.css"

const StarWars = props => {
    return (
        <div className="char-list">
            {props.starwarsChars.map(index =>(
                <Characters
                    starwarsChar={index}
                    key={index.name}
                />
            ))}
        </div>
    );
};

export default StarWars;