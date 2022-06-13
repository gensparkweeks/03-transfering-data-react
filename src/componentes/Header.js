import React from "react"

import {Link} from "react-router-dom"

export default function Header() {

    let first = " "
    let last = " "
    let email = " "
    let dob = " "

    if (localStorage.getItem("first")){
        first = localStorage.getItem("first")
        last = localStorage.getItem("last")
        email = localStorage.getItem("email")
        dob = localStorage.getItem("dob")
    }

    return (
        <div className="header">

            <h1>FirstReactTry</h1>

            <div className="nav">

                <Link className="link" to="/create">
                    Home
                </Link>
                
                <Link className="link" to="/read">
                    Storage
                </Link>

                <Link className="link" to={`/url/${first}/${last}/${email}/${dob}`}>
                    URL
                </Link>
  
            </div>

        </div>
        
    )
}