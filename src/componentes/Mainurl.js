import React from "react"
import { useParams } from "react-router-dom"

function Mainurl(){

    const params = useParams();
 
    let first, last, email, dob

    if (params.first.length < 1){
        first = " "
        last = " "
        email = " "
        dob = " "
    }else{
        first = params.first;
        last =  params.last;
        email = params.email;
        dob =   params.dob;
    }

    const fullName = first + " "+ last

    return(

        <>
            <section id="content">
                
                <h2>Contact from URL</h2>         

                <div>
                    <ul className="ul-wrap">
                        <li>Full name: <strong>{fullName}</strong></li>
                        <li>Email: <strong>{email}</strong></li>
                        <li>Date of Birth: <strong>{dob}</strong></li>
                    </ul>
                </div>

            </section>       
            

        </>
    )
}

export default Mainurl