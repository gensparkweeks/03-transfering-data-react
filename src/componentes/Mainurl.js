import React from "react"
import { Link, useParams } from "react-router-dom"

function Mainurl(){

    const first = useParams().first;
    const last = useParams().last;
    const email = useParams().email;
    const dob = useParams().dob;

    const fullName = first + " "+ last

    while (dob.includes("/")){
        dob.replace("/", "-")
    }
   
    return(

        <>
            <Link to="/read">
                read
            </Link>
            
            <Link to="/create">
                create
            </Link>
                
            <h2>Contact from Url</h2>         

            <div>
                <ul class="ul-wrap">
                    <li>Full name: <strong>{fullName}</strong></li>
                    <li>Email: <strong>{email}</strong></li>
                    <li>Date of Birth: <strong>{dob}</strong></li>
                </ul>
            </div>

        </>
    )
}

export default Mainurl