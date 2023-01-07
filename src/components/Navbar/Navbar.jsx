import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    let activeStyle = {
        textDecoration: 'underline',
    };

    return (
        <nav className='w-11/12'>
            <ul className='text-5xl p-3 flex flex-row justify-evenly items-center w-full'>
                <li>
                    <NavLink to='characters' className={({isActive}) => isActive ? activeStyle: undefined}>
                        Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink to='students' className={({isActive}) => isActive ? activeStyle: undefined}>
                        Students
                    </NavLink>
                </li>
                <li>
                    <NavLink to='professors' className={({isActive}) => isActive ? activeStyle: undefined}>
                        Professors
                    </NavLink>
                </li>
                <li>
                    <NavLink to='houses' className={({isActive}) => isActive ? activeStyle: undefined}>
                        Houses
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar