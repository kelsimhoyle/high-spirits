import React, { useState } from "react";
import { useForm } from "../../useForm";
import { TextInput, Button, Icon, Range } from "react-materialize";
import API from "../../utils/API";

const Login = props => {
    const [values, handleChange] = useForm({ rating: "", comment: "" });
    const [message, setMessage] = useState("")

    const submitRating = e => {
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


        <div className="row">
            <div className="col s12">
                {message ? (
                    <p>{message}</p>
                ) :
                    null}
            </div>
            <form className="container">
            <div className="row">
                <h2>How would you rate this alcohol?</h2>
            </div>
                <div className="row">
                    <Range
                        max="5"
                        min="0"
                        name="rating"
                        value={values.rating}
                        onChange={handleChange}
                    />
                </div>
                <div className="row">

                    <TextInput
                        label="Comments"
                        password
                        name="comment"
                        value={values.comment}
                        onChange={handleChange}
                        s="12"
                    />


                </div>

                <Button
                    node="button"
                    type="submit"
                    waves="light"
                    onClick={e => submitRating(e)}
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


    )
}

export default Login;