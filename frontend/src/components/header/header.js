import logo from "../../assets/svgs/logo2.svg"
import "../../sass/header/header.scss"


export const Header = () => {

    return (

        <div className="header">

                <div className="logo">

                    <img src={logo} id="luna-logo"/>

                </div>

                <div className="home-search-profile">

                    <p>Home</p>
                    <p>Search</p>
                    <p>Profile</p>

                </div>

                <div className="signup-login">

                    <button id="left">SIGNUP</button>
                    <button id="right">LOGIN</button>

                </div>

        </div>
    )
}
