import React, { useEffect, useState} from 'react';
import { getInfo } from '../../services/getInfo';

const API = 'https://hp-api.onrender.com/api/characters/students';


function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getInfo(API).then(arr => {
            setStudents(arr);
        })
    }, [])


    return (
        <div>{
            students ?
                students.map((student, index) => {
                    return <div key={index}>
                        <p>{student.name}</p>
                        <p>{student.patronus}</p>
                        <img src={student.image} alt="harry-potter-character" />
                    </div>
                })
                :
                <p>Loading...</p>
        }</div>

    )
}

export default Students;