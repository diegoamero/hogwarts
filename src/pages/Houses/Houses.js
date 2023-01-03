import React from 'react';
import {Link} from 'react-router-dom';

function Houses() {
  return (
    <ul className="housesList">
      <h3 className="housesList--title">Choose House</h3>
      <li className="characters__gryffinfor">
        <Link className='housesLink' to={'gryffindor'}>
          <p className="housesList--name">Gryffindor</p>
        </Link>
      </li>

      <li className="characters__ravenclaw">
        <Link className='housesLink' to={'ravenclaw'}>
          <p className="housesList--name">Ravenclaw</p>
        </Link>
      </li>

      <li className="characters__slytherin">
        <Link className='housesLink' to={'slytherin'}>
          <p className="housesList--name">Slytherin</p>
        </Link>
      </li>

      <li className="characters__">
        <Link className='housesLink' to={'hufflepuff'}>
          <p className="housesList--name">Hufflepuff</p>
        </Link>
      </li>
    </ul>
  )
}

export default Houses