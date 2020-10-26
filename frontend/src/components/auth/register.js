import React, {useState} from "react";


const Register = () => {

    const [currentRegStage, setcurrentRegStage] = useState(0)


    return (

        <div className="wrapper">

            {currentRegStage === 0 ?

                <section className="singIn">

                    <p>Registration</p>

                    <div className="form-tab">

                        <div className="email">

                            <input
                            type="email"
                            // value={email}
                            // onChange={handleRegEmail}
                            placeholder="Email"
                            />

                        </div>

                    </div>

                    <div className="btn-container">

                        <button type="text" id="signin" >Continue</button>

                    </div>


                </section>

            : null }

            {currentRegStage === 1 ?

                <section className="singIn">

                    <div>

                        <p>Registration</p>

                    </div>

                    <div>

                        <p>Thanks for your registration. Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you're junk folder. Our apologies for any inconvienience.thank for </p>

                    </div>

                </section>

            : null }

            {currentRegStage === 2 ?

                <section className="singIn">

                    <div>

                        <p>Verification</p>

                    </div>

                    <div className="form-tab">

                        <div>

                            <input type="email"/>
                            <input type="number"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="password"/>
                            <input type="password"/>

                        </div>

                    </div>

                    <div className="btn-container">

                        <button type="text" id="signin" >Continue</button>

                    </div>

                </section>

            : null }


        </div>
    )
}