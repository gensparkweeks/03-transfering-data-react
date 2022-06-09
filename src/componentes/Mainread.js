import React from "react"
import { Link } from "react-router-dom"

function Mainread(){
    
    const fullName = localStorage.getItem("first")+" "+ localStorage.getItem("last")
    const email = localStorage.getItem("email")
    const dob = localStorage.getItem("dob")
    
    return(

        <>
            <Link to="/create">
                create
            </Link>
                
            <h2>Reading contacts</h2>
            
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