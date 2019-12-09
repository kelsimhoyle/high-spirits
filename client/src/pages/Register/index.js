import React, { useState } from "react";
import { useForm } from "../../useForm";
import { Slider, Slide, Caption } from "react-materialize";
import API from "../../utils/API";

const Register = () => {
    const [values, handleChange] = useForm({ name: "", email: "", password: "", password2: "" });
    const [message, setMessage] = useState("")

    const signup = e => {
        e.preventDefault();
        console.log("signing up")
        const { name, email, password, password2 } = values;
        console.log(name)
        if (name && email && password && password2) {
            if (password === password2) {
                console.log("going to api")
                API.signup({
                    name: name,
                    username: email,
                    password: password
                }).then(user => {
                    console.log(user)
                    setMessage("Successfully signed up.")

                    if (user.data) {
                        console.log("log in successful");
                        window.location.href = '/dashboard';
                        console.log(user.data)
                    } else {
                        console.log("something went wrong :(")
                        console.log(user.data);
                    }
                });
            } else {
                setMessage("Passwords must match.")
            }
        }
    }


    return (
        <body>
            <main className="register-page">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">
                                    <h3 className="center-align">Create an Account</h3>
                                    <p className="lead mt-4 center-align">Already have an account? <a href="/users/login">Login</a></p>
                                </span>

                                <div className="row">
                                    <div className="col s12">
                                        {message ? (
                                            <p>{message}</p>
                                        ) :
                                            null
                                        }
                                    </div>
                                    <form className="container">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    className="validate"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                                <label for="name"> Name</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    className="validate"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                />
                                                <label for="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    className="validate" />
                                                <label for="password">Password</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input
                                                    id="password2"
                                                    type="password"
                                                    name="password2"
                                                    className="validate"
                                                    value={values.password2}
                                                    onChange={handleChange}
                                                />
                                                <label for="password2">Confirm</label>
                                            </div>
                                        </div>
                                        <button className="btn waves-effect waves-light" id="register-submit" onClick={e => signup(e)}>Submit
                            <i className="material-icons right">send</i>
                                        </button>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6">

                        <div className="card">
                            <div className="card-image">
                                <Slider
                                    fullscreen={false}
                                    options={{
                                        duration: 500,
                                        height: 400,
                                        indicators: true,
                                        interval: 6000
                                    }}
                                >
                                    <Slide image={<img alt="" src="/img/cocktails.jpeg" />}>
                                        <Caption placement="center">
                                            <h2>Explore.</h2>
                                            <h4 className="white-text">See what Colorado drinks</h4>
                                        </Caption>
                                    </Slide>

                                    <Slide image={<img alt="" src="/img/glass.jpeg" />}>
                                        <Caption placement="right">
                                            <h2>Stash.</h2>
                                            <h4 className="white-text">Save a list of your favorites</h4>
                                        </Caption>
                                    </Slide>
                                    <Slide image={<img alt="" src="/img/gin.jpeg" />}>
                                        <Caption placement="center">
                                            <h2>Plan.</h2>
                                            <h4 className="white-text">Get excited for future trips out</h4>
                                        </Caption>
                                    </Slide>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Register;