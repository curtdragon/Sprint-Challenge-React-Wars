import React from "react";

const Characters =props => {
    return (
        <div className="char">
            <h2>{props.starwarsChar.name}</h2>
            <div className="physical">
                <p>Birth Year: {props.starwarsChar.birth_year}</p>
                <p>Eye Color: {props.starwarsChar.eye_color}</p>
                <p>Gender: {props.starwarsChar.gender}</p>
                <p>Hair Color: {props.starwarsChar.hair_color}</p>
                <p>Height: {props.starwarsChar.height}</p>
                <p>Mass: {props.starwarsChar.mass}</p>
                <p>Skin Color: {props.starwarsChar.skin_color}</p>
                <p>Home World: {props.starwarsChar.homeworld}</p>
            </div>
            <div>
                <ul>
                    <p>Species</p>
                    <li>{props.starwarsChar.species[0]}</li>
                </ul>
                <ul>
                    <p>Appeared in Films</p>
                    <li>{props.starwarsChar.films[0]}</li>
                    <li>{props.starwarsChar.films[1]}</li>
                </ul>
                <ul>
                    <p>Starships</p>
                    <li>{props.starwarsChar.starships[0]}</li>
                </ul>
                <ul>
                    <p>Vehicles</p>
                    <li>{props.starwarsChar.vehicles[0]}</li>
                </ul>
                <p>Created: {props.starwarsChar.created}</p>
                <p>Edited: {props.starwarsChar.edited}</p>
                <p>URL: {props.starwarsChar.url}</p>
            </div>
        </div>
    );
};

export default Characters;