import React, { useEffect, useState } from 'react';
import { getInfo } from '../../services/getInfo';
import Table from '../Table/Table';
import './Characters.css'

const API = 'https://hp-api.onrender.com/api/characters';


function Characters() {
    const [Characters, setCharacters] = useState([]);

    useEffect(() => {
        getInfo(API).then(arr => {
            setCharacters(arr);
        })
    }, [])

    //We're using tailwind to the table design
    return (
        Characters ?
            <Table data={Characters} />
            :
            <p>Loading...</p>


    )
}

export default Characters;