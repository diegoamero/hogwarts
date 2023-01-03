import React from 'react'

function Table({data}) {
    return (
        <table className="table-auto table w-10/12">
            <thead className='table--head text-5xl'>
                <tr>
                    <th><h3>Name</h3></th>
                    <th><h3>Patronus</h3></th>
                </tr>
            </thead>
            <tbody className='w-11/12 text-center'>{
                data.map((student, index) => {
                    return (
                        <tr key={index} className='w-full'>
                            <td className='flex flex-col justify-center items-center text-2xl'> 
                                <img className="rounded-full h-20 w-20 object-cover" alt={`${student.name}`} src={student.image} />
                                <p>{student.name}</p>
                            </td>
                            <td className='text-lg'>{student.patronus}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table