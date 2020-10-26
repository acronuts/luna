
import facebook from "../../assets/svgs/facebook.svg"
import twitter from "../../assets/svgs/twitter.svg"
import google from "../../assets/svgs/googleplus.svg"
import instagram from "../../assets/svgs/instagram.svg"

const Login = () => {



    return (

        <main className="container">

            <div className="wrapper">

                <div className="login">

                    <p>LOGIN</p>

                </div>

                <div className="inputs">

                    <input className="username"/>
                    <input className="password"/>

                </div>

                <div className="login-button">

                    <button type="submit" className="button"/>

                </div>
            </div>

        </main>
    )
}