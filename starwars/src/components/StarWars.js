import React from 'react';
import Characters from "./Characters";

const StarWars = props => {
    return (
        <div>
            {props.starwarsChars.map(index =>(
                <Characters
                    starwarsChar={index}
                />
            ))};
        </div>
    );
};

export default StarWars;


