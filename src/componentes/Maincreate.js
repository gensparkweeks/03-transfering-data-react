import React from "react"

function Maincreate(){

    return (
        <>
            <a href="contact.html">read</a>
            
            <section id="content">

                <h2>Creating contacts</h2>

                <div id="box">
                    

                    <form id="form_contact" action="" method="post">
                        <div>
                            <label for="first">First name <span>(required)</span></label>
                            <input type="text" name="first" id="first"/>
                        </div>

                        <div>
                            <label for="last">Last name <span>(required)</span></label>
                            <input type="text" name="last" id="last"/>
                        </div>

                        <label for="email">Email <span>(required)</span></label>

                        <div>
                            <input type="email" name="email" id="email"/>
                        </div>

                        <div>
                            <label for="dob">Date of birth <span>(required)
                            </span></label>
                            <input type="text" name="date" id="dob" placeholder="mm/dd/yyyy"/>
                        </div>

                        <div>
                            <input type="submit" value="Submit" onclick="return validateform()"/>
                            <span id="errorf"></span>
                        </div>


                    </form>

                </div>

            </section>
        </>
    )
}

export default Maincreate