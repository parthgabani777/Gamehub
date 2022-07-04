import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import "./auth.css";

function Signup() {
    const navigation = useNavigate();
    const { setAuthTokens, signupHandler } = useAuth();

    const defaultSignupCredentials = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [signupCredentials, setSignupCredentials] = useState(
        defaultSignupCredentials
    );
    const { firstName, lastName, email, password, confirmPassword } =
        signupCredentials;
    const fillGuestDetails = (e) => {
        e.preventDefault();
        setSignupCredentials({
            firstName: "john",
            lastName: "doe",
            email: "johndoe@gmail.com",
            password: "john@asdf",
            confirmPassword: "john@asdf",
        });
    };
    const submitSignupCredentials = async (e) => {
        e.preventDefault();
        try {
            signupCredentials.password === signupCredentials.confirmPassword
                ? await signupHandler(
                      signupCredentials,
                      setAuthTokens,
                      navigation
                  )
                : toast.error("Password and Confirm password should be same.");
        } catch (error) {
            toast.error(error);
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="signup bg-primary">
            <div className="auth text-s">
                <form
                    className="auth-form box-shadow p-4"
                    onSubmit={submitSignupCredentials}
                >
                    <h3 className="text-l text-center py-1">Signup</h3>

                    <div className="input-group py-1">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            className="input text-s"
                            placeholder="John"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => {
                                setSignupCredentials({
                                    ...signupCredentials,
                                    firstName: e.target.value,
                                });
                            }}
                            required
                        />
                    </div>

                    <div className="input-group py-1">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            className="input text-s"
                            id="lastname"
                            placeholder="doe"
                            value={lastName}
                            onChange={(e) => {
                                setSignupCredentials({
                                    ...signupCredentials,
                                    lastName: e.target.value,
                                });
                            }}
                            required
                        />
                    </div>

                    <div className="input-group py-1">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="text"
                            className="input text-s"
                            id="email"
                            placeholder="mail@gmail.com"
                            value={email}
                            onChange={(e) => {
                                setSignupCredentials({
                                    ...signupCredentials,
                                    email: e.target.value,
                                });
                            }}
                            required
                        />
                    </div>

                    <div className="input-group py-1">
                        <label htmlFor="password">Password</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input text-s"
                                id="password"
                                placeholder="************"
                                value={password}
                                onChange={(e) => {
                                    setSignupCredentials({
                                        ...signupCredentials,
                                        password: e.target.value,
                                    });
                                }}
                                required
                            />
                            <i
                                className={`fas ${
                                    showPassword ? "fa-eye-slash" : "fa-eye"
                                } `}
                                onClick={() => {
                                    setShowPassword(!showPassword);
                                }}
                            ></i>
                        </div>
                    </div>

                    <div className="input-group py-1">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input text-s"
                                id="confirm-password"
                                placeholder="************"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setSignupCredentials({
                                        ...signupCredentials,
                                        confirmPassword: e.target.value,
                                    });
                                }}
                                required
                            />
                            <i
                                className={`fas ${
                                    showPassword ? "fa-eye-slash" : "fa-eye"
                                } `}
                                onClick={() => {
                                    setShowPassword(!showPassword);
                                }}
                            ></i>
                        </div>
                    </div>

                    <div className="py-1 text-center">
                        <button className="btn btn-light auth-btn br-1">
                            Create an Account
                        </button>
                    </div>

                    <div className="py-1 text-center">
                        <button
                            className="btn btn-light auth-btn br-1"
                            onClick={fillGuestDetails}
                        >
                            Fill guest details
                        </button>
                    </div>

                    <div className="py-1 text-center">
                        <Link to="/login" className="link-blue">
                            Already have account
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export { Signup };
