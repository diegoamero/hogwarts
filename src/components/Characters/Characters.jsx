import React from "react";
import { Link } from "react-router-dom";
import './Characters.css'
function Characters() {

    return (
        <ul className="housesList">
            <h3 className="housesList--title">HOUSES</h3>
            <li className="characters__gryffinfor">
                <Link className='housesLink' to={'characters/gryffindor'}>
                    <p className="housesList--name">Gryffindor</p>
                </Link>
            </li>

            <li className="characters__ravenclaw">
                <Link className='housesLink' to={'characters/ravenclaw'}>
                    <p className="housesList--name">Ravenclaw</p>
                </Link>
            </li>

            <li className="characters__slytherin">
                <Link className='housesLink' to={'characters/ravenclaw'}>
                    <p className="housesList--name">Slytherin</p>
                </Link>
            </li>

            <li className="characters__">
                <Link className='housesLink' to={'characters/hufflepuff'}>
                    <p className="housesList--name">Hufflepuff</p>
                </Link>
            </li>
        </ul>
    )
}

export default Characters;