import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { getInfo } from '../../services/getInfo';
import Table from '../../components/Table/Table';


function CharactersHouseHouse() {
    const {house} = useParams();
    const API = `https://hp-api.onrender.com/api/characters/house/${house}`;

    const [CharactersHouse, setCharactersHouse] = useState([]);

    useEffect(() => {
        getInfo(API).then(arr => {
            setCharactersHouse(arr);
        })
    }, [API])

    //We're using tailwind to the table design
    return (
        CharactersHouse ?
            <Table data={CharactersHouse} />
            :
            <p>Loading...</p>
    )
}

export default CharactersHouseHouse;