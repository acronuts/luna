import logo from "../../assets/svgs/logo.svg"


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

                    <p>SIGNUP</p>
                    <p>LOGIN</p>

                </div>

        </div>
    )
}
