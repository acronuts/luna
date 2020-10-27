import React, {useState} from "react";
import "../../sass/register/register.scss"

export const Register = () => {

    const [currentRegStage, setcurrentRegStage] = useState(0)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const interval = setInterval(() => {
        if (currentRegStage === 1) {
            setcurrentRegStage(2)
        }
    }, 10000)

    const changeStage = () => {
        setcurrentRegStage(+1)
    }


    return (

        <div className="container">

            <div className="wrapper">

                {currentRegStage === 0 ?

                    <>

                        <div className="signIn">

                            <p>REGISTRATION</p>

                        </div>

                        <div className="email">

                            <input
                            type="email"
                            // value={email}
                            // onChange={handleRegEmail}
                            placeholder="Email"
                            />

                        </div>


                        <div className="btn-container">

                            <button type="text" id="signin" onClick={changeStage}>Register</button>

                        </div>

                    </>




                : null }

                {currentRegStage === 1 ?

                    <>

                        <div className="signIn2">

                            <p>REGISTRATION</p>

                        </div>

                        <div className="reg_content">

                            <p>Thanks for your registration. <br/>Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you're junk folder. Our apologies for any inconvienience.thank for </p>

                        </div>

                    </>

                : null }

                {currentRegStage === 2 ?

                    <>

                        <div className="signIn">

                            <p>VERIFICATION</p>

                        </div>

                        <div className="form-tab">

                            <div>

                                <input type="email" placeholder="E-Mail address"/>
                                <input type="number" placeholder="Validation code"/>
                                <input type="text" placeholder="Username"/>
                                <input type="text" placeholder="Location"/>
                                <input type="password" placeholder="Password"/>
                                <input type="password" placeholder="Password repeat"/>

                            </div>

                        </div>

                        <div className="btn-container">

                            <button type="text" id="finish-reg">Finish registration</button>

                        </div>

                    </>

                : null }


            </div>

        </div>
    )
}