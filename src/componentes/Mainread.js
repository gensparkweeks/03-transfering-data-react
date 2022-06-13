import React from "react"

function Mainread(){

    let first, last, email, dob
   
    if (localStorage.getItem("first") === undefined || localStorage.getItem("first") < 1){
        first = " "
        last = " "
        email = " "
        dob = " "
    }else{
        first = localStorage.getItem("first")
        last = localStorage.getItem("last")
        email = localStorage.getItem("email")
        dob = localStorage.getItem("dob")
        
    }
    const fullName = first + " "+ last
    
    return(

        <>
           <section id="content">

                <h2>Contact from LocalStore</h2>
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

export default Mainread