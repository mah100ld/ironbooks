import React from 'react'
import { v4 as uuidv4 } from "uuid"


export default function user({firstName, lastName, campus, role, linkedin}) {
    
    const id = uuidv4()

    return (
        
            <tr key = {id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{campus}</td>
                <td>{role}</td>
                <td>{linkedin}</td>
            </tr>
        
    )
}


// "firstName": "Axel",
// "lastName": "Dahlin",
// "campus": "Berlin",
// "role": "student",
// "linkedin": "https://www.linkedin.com/in/axel-dahlin-72a3b813b/"