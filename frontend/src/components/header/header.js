import logo from "../../assets/svgs/logo2.svg"
import "../../sass/header/header.scss"
import {Link} from "react-router-dom";



export const Header = () => {

    return (

        <div className="header">

                <div className="logo">

                    <img src={logo} id="luna-logo"/>

                </div>

                <div className="home-search-profile">

                    <p>Home</p>
                    <p>Search</p>
                    <Link to="/userprofile"><p>Profile</p></Link>

                </div>

                <div className="signup-login">

                    <Link to="/register"><button id="left">SIGNUP</button></Link>
                    <Link to="/login"><button id="right">LOGIN</button></Link>

                </div>

        </div>
    )
}
