import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios'


export default class Register extends Component {

    jQuery = () => {
        $(document).ready(() => {
            // Getting references to our form and input
            const signUpForm = $("form.signup");
            const emailInput = $("input#email-input");
            const passwordInput = $("input#password-input");

            // When the signup button is clicked, we validate the email and password are not blank
            signUpForm.on("submit", event => {
                event.preventDefault();
                const userData = {
                    email: emailInput.val().trim(),
                    password: passwordInput.val().trim()
                };

                if (!userData.email || !userData.password) {
                    return;
                }
                // If we have an email and password, run the signUpUser function
                signUpUser(userData.email, userData.password);
                emailInput.val("");
                passwordInput.val("");
            });

            // Does a post to the signup route. If successful, we are redirected to the members page
            // Otherwise we log any errors
            function signUpUser(email, password) {
                axios.post("/api/signup", {
                    email: email,
                    password: password
                })
                    .then(res => {
                        console.log(res);
                        // If there's an error, handle it by throwing up a bootstrap alert
                    })
                    .catch(handleLoginErr);
            }

            function handleLoginErr(err) {
                $("#alert .msg").text(err.responseJSON);
                $("#alert").fadeIn(500);
            }
        });
    }

    componentDidMount() {
        this.jQuery();
    }


    render() {
        return (
            <main className="container-fluid">
                <br />
                <div className="col-md-12">
                    <h3 >Sign up with your email and password</h3>
                </div>

                <form className="signup">
                    <br />
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="E-mail Address" />
                        </div>

                        <div className="col">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control mb-5" id="password-input" placeholder="password" />
                        </div>

                        {/* <div  id="alert" className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span> <span className="msg"></span>
                    </div> */}
                    </div>

                    <div className="sign-up row-md-4">
                        <div className="col-md-12">
                            <button type="submit" className="sign-up btn btn-outline-dark btn-lg mt-3">Sign Up</button>
                        </div>
                        {/* <div className="col-md-12">
                    <p style={styles.text}>Or log in <a href="/login">here</a></p>
                    </div> */}
                    </div>

                </form>
            </main>
        );
    }
}

