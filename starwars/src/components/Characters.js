import React from 'react';


function Characters(props){
    return (
        <div>
            <h3>{props.starwarsChar.name}</h3>
            <h3>{props.starwarsChar.birth_year}</h3>

        </div>
    );
};

export default Characters;