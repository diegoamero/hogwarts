import React, { useEffect, useState } from 'react';
import { getInfo } from '../../services/getInfo';
import Table from '../Table/Table';

const API = 'https://hp-api.onrender.com/api/characters/students';


function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getInfo(API).then(arr => {
            setStudents(arr);
        })
    }, [])

    //We're using tailwind to the table design
    return (
        students ?
            <Table data={students} />
            :
            <p>Loading...</p>


    )
}

export default Students;