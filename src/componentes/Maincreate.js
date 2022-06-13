import React from "react"

import { useForm } from "react-hook-form";

function Maincreate(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = evento => {
        
        localStorage.clear();

        localStorage.setItem("first", evento.first);
        localStorage.setItem("last", evento.last);
        localStorage.setItem("email", evento.email);

        let dob = evento.dob
        let dob1 = evento.dob

        if (dob.includes("/")){
            dob1 = dob.replaceAll("/", "-")
            localStorage.setItem("dob", dob1);
        }else{
            localStorage.setItem("dob", dob);
        }
        
    }
  
    return (
        <>
           
            <section id="content">

                <h2>Creating contact</h2>

                <div id="box">

                    <form id="form_contact" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="first">First name <span>(required)</span></label>

                            <input type="text"
                                {...register("first", 
                                    {
                                        required: true
                                    }
                                )}
                            />
                            {errors.first?.type === 'required' && <span className="error">It is required</span>}
                    
                        </div>

                        <div>
                            <label htmlFor="last">Last name <span>(required)</span></label>

                            <input type="text" 
                                {...register("last", 
                                    {
                                        required: true
                                    }
                                )}
                            />
                            {errors.last?.type === 'required' && <span className="error">It is required</span>}

                        </div>

                        <label htmlFor="email">Email <span>(required)</span></label>

                        <div>
                            <input type="text" placeholder="user@server.com"
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
                            {errors.email?.type === 'required' && <span className="error">Is required</span>}
                            {errors.email?.type === 'pattern' && <span className="error">Invalid format</span>}

                        </div>

                        <div>
                            <label htmlFor="dob">Date of birth <span>(required)
                            </span></label>
                            <input type="text" placeholder="mm-dd-yyyy"
                                {...register("dob", 
                                    {
                                        required: true
                                    }
                                )}
                            />
                            {errors.dob?.type === 'required' && <span className="error">It is required</span>}
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