import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import '../styles/loginStyles.css';
import Header from "../components/Header";
import changeUserAuthed from "../components/Header";

const Login = () => {
    const {login} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitLogin = async (err) => {
        err.preventDefault();
        //const response = await login(email, password);
        //response.success
        let response = true
        if (response) {
            navigate("/");
            changeUserAuthed(true);
        } else {
            setError("Invalid Email/Password");
        }
    };

    return (
        <div>
            <Header/>
            <div className={"pageDesign"}>
                <form onSubmit={submitLogin}>
                    {error && <p className="errorMessage"> {error} </p>}
                    <div className={"form-group"}>
                        <label className={"label-group"}>Email: </label>
                        <div className={"col-2"}>
                            <input
                                className={"form-control col-xs-4"}
                                id={"EmailInput"}
                                type={"email"}
                                placeholder={"Email"}
                                defaultValue={""}
                                onChange={(err) => setEmail(err.target.value)}
                            />
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <label className={"label-group"}>Password: </label>
                        <div className={"col-2"}>
                            <input
                                className={"form-control"}
                                id={"passwordInput"}
                                type={"password"}
                                placeholder={"Password"}
                                defaultValue={""}
                                onChange={(err) => setPassword(err.target.value)}
                            />
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <button
                            className={"btn btn-primary"}
                            type={"submit"}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;