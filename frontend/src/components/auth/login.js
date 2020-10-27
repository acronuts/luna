import "../../sass/login/login.scss"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {userLogin} from "../../actions/userLoginAction";

export const Login = () => {

    const dispatch = useDispatch()
    // let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const nextButtonHandler = async(event) => {

        const user = await dispatch(userLogin({
            username: username,
            password: password
        }))

        console.log("User", user)

    }





    return (

        <main className="container">

            <div className="wrapper">

                <div className="login">

                    <p>LOGIN</p>

                </div>

                <div className="inputs">

                    <input className="username" placeholder="Username" onChange={ event => setUsername(event.target.value)}/>
                    <input className="password" placeholder="Password" onChange={ event => setPassword(event.target.value)}/>

                </div>

                <div className="btn-container">

                    <button type="submit" className="button" id="login">Login</button>

                </div>
            </div>

        </main>
    )
}