import React from "react"
import { Link } from "react-router-dom"

import { useForm } from "react-hook-form";

function Maincreate(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    let first, last, email, dob

    if (localStorage.getItem("first")){
        first = localStorage.getItem("first")
        last = localStorage.getItem("last")
        email = localStorage.getItem("email")
        dob = localStorage.getItem("dob")
    }

    const onSubmit = evento => {
        
        localStorage.clear();

        localStorage.setItem("first", evento.first);
        localStorage.setItem("last", evento.last);
        localStorage.setItem("email", evento.email);
        localStorage.setItem("dob", evento.dob);

        first = localStorage.getItem("first")
        last = localStorage.getItem("last")
        email = localStorage.getItem("email")
        dob = localStorage.getItem("dob")

    }
  
    return (
        <>

            <Link to="/read">
                read
            </Link>

            <Link to={`/url/${first}/${last}/${email}/${dob}`}>
                url
            </Link>
            
            <section id="content">

                <h2>Creating contact</h2>

                <div id="box">

                    <form id="form_contact" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label for="first">First name <span>(required)</span></label>

                            <input type="text"
                                {...register("first", {
                                    required: true
                                    }
                                )}
                            />
                            {errors.first?.type === 'required' && <p>First name is required</p>}
                    
                        </div>

                        <div>
                            <label for="last">Last name <span>(required)</span></label>

                            <input type="text" 
                                {...register("last", 
                                    {
                                        required: true
                                    }
                                )}
                            />
                            {errors.last?.type === 'required' && <p>Last name is required</p>}

                        </div>

                        <label for="email">Email <span>(required)</span></label>

                        <div>
                            <input type="text"
                                {...register("email", 
                                    {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Is not a valid format"
                                        }
                                    }
                                )}
                            />
                            {errors.email?.type === 'required' && <span>Email name is required</span>}
                            {errors.email?.type === 'pattern' && <span>It is not a valiad format</span>}

                        </div>

                        <div>
                            <label for="dob">Date of birth <span>(required)
                            </span></label>
                            <input type="text" placeholder="mm/dd/yyyy"
                                {...register("dob", 
                                    {
                                        required: true
                                    }
                                )}
                            />
                            {errors.dob?.type === 'required' && <p>DoB is required</p>}
                        </div>

                        <div>
                            <input type="submit" value="Submit"/>
                        </div>

                    </form>

                </div>

            </section>
        </>
    )
}

export default Maincreate