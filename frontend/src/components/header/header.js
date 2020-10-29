import logo from "../../assets/svgs/logo2.svg"
import "../../sass/header/header.scss"
import {Link} from "react-router-dom";



export const Header = () => {

    return (

        <div className="header">

                <div className="logo">

                    <Link to="/"><img src={logo} id="luna-logo"/></Link>

                </div>

                <div className="home-search-profile">

                    <Link to="/"><p>Home</p></Link>
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
