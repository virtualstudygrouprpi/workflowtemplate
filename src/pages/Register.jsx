import {useRegister} from "../contexts/RegisterContext";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Header from "../components/Header";

const Register = () => {
    const {register} = useRegister();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitRegistration = async (err) => {
        err.preventDefault();
        const response = await register(username, email, password);
        //response.success
        //let response = true
        if (response.success) {
            navigate("/");
        } else {
            setError("Invalid Email/Password");
        }
    };

    return (
        <div>
            <Header/>
            <div className={"pageDesign"}>
                <form onSubmit={submitRegistration}>
                    {error && <p className="errorMessage"> {error} </p>}
                    <div className={"form-group"}>
                        <label className={"label-group"}>Username: </label>
                        <div className={"col-2"}>
                            <input
                                className={"form-control col-xs-4"}
                                id={"UsernameInput"}
                                type={"username"}
                                placeholder={"Username"}
                                defaultValue={""}
                                onChange={(err) => setUsername(err.target.value)}
                            />
                        </div>
                    </div>
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
                                id={"registerPasswordInput1"}
                                type={"password"}
                                placeholder={"Password"}
                                defaultValue={""}
                                onChange={(err) => setPassword(err.target.value)}
                            />
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <label className={"label-group"}>Re-type Password: </label>
                        <div className={"col-2"}>
                            <input
                                className={"form-control"}
                                id={"registerPasswordInput2"}
                                type={"password"}
                                placeholder={"Re-type Password"}
                                defaultValue={""}
                                onChange={(err) => setPassword(err.target.value)}
                            />
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <button
                            className={"btn btn-primary"}
                            type={"submit"}>
                            Confirm Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;