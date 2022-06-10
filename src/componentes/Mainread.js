import React from "react"
import { Link } from "react-router-dom"

function Mainread(){
    
    const first = localStorage.getItem("first")
    const last = localStorage.getItem("last")
    const email = localStorage.getItem("email")
    const dob = localStorage.getItem("dob")

    const fullName = first + " "+ last
    
    return(

        <>
            <Link to="/create">
                create
            </Link>

            <Link to={`/url/${first}/${last}/${email}/${dob}`}>
                url
            </Link>
                
            <h2>Contact from LocalSrore</h2>
            
            {/* <div id="content"> */}

                <div>
                    <ul class="ul-wrap">
                        <li>Full name: <strong>{fullName}</strong></li>
                        <li>Email: <strong>{email}</strong></li>
                        <li>Date of Birth: <strong>{dob}</strong></li>
                    </ul>
                </div>

            {/* </div> */}
        </>
    )
}

export default Mainread