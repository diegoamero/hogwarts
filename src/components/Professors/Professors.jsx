import React, { useEffect, useState } from 'react';
import { getInfo } from '../../services/getInfo';
import Table from '../Table/Table';

const API = 'https://hp-api.onrender.com/api/characters/staff';


function Professors() {
    const [Professors, setProfessors] = useState([]);

    useEffect(() => {
        getInfo(API).then(arr => {
            setProfessors(arr);
        })
    }, [])

    //We're using tailwind to the table design
    return (
        Professors ?
            <Table data={Professors} />
            :
            <p>Loading...</p>


    )
}

export default Professors;