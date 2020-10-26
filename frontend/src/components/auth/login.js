
import facebook from "../../assets/svgs/facebook.svg"
import twitter from "../../assets/svgs/twitter.svg"
import google from "../../assets/svgs/googleplus.svg"
import instagram from "../../assets/svgs/instagram.svg"
import "../../sass/login/login.scss"

export const Login = () => {



    return (

        <main className="container">

            <div className="wrapper">

                <div className="login">

                    <p>LOGIN</p>

                </div>

                <div className="inputs">

                    <input className="username" placeholder="Username"/>
                    <input className="password" placeholder="Password"/>

                </div>

                <div className="btn-container">

                    <button type="submit" className="button" id="login">Login</button>

                </div>
            </div>

        </main>
    )
}