import React from "react"
import { Link } from "react-router-dom"

function Mainread(){

    return(

        <>
            <Link to="/create">
                create
            </Link>
                
            <h2>Reading contacts</h2>
            
            <div id="content">

                <div>
                    <ul class="content">

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Mainread