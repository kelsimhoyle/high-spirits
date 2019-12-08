import React, { useState } from "react";
import { useForm } from "../../useForm";
import { TextInput, Button, Icon } from "react-materialize";
import API from "../../utils/API";

const Login = () => {
    const [values, handleChange] = useForm({ email: "", password: "" });
    const [message, setMessage] = useState("")

    const handleLogin = e => {
        e.preventDefault();
        if (values.email && values.password) {
            API.login({
                username: values.email,
                password: values.password
            }).then(userData => {
                console.log(userData.data.user);
                if (userData.data.loggedIn) {
                    window.location.href = '/dashboard';
                }
                else if (userData.data.message) {
                    setMessage(userData.data.message)
                }
            });
        }
    }
    return (
        <main className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 offset-m3 l6 offset-l3">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    <h2 className="black-text">Login</h2>
                                </span>

                                <div className="row">
                                    <div className="col s12">
                                        {message ? (
                                            <p>{message}</p>
                                        ) :
                                            null}
                                    </div>
                                    <form className="container">
                                        <div className="row">
                                            <TextInput
                                                email
                                                label="Email"
                                                error="Incorrect Email"
                                                validate
                                                name="email"
                                                s="12"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="row">

                                            <TextInput
                                                label="Password"
                                                password
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                s="12"
                                            />


                                        </div>

                                        <Button
                                            node="button"
                                            type="submit"
                                            waves="light"
                                            onClick={e => handleLogin(e)}
                                        >
                                            Submit
                                            <Icon right>
                                                send
                                            </Icon>
                                        </Button>

                                    </form>
                                    <p className="center-align register-button">Don't have an account? <a
                                        href="/users/register">Register</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Login;