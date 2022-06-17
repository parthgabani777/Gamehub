import axios from "axios";

const loginUser = async (loginCredentials) => {
    try {
        const { data } = await axios.post("/api/auth/login", {
            email: loginCredentials.email,
            password: loginCredentials.password,
        });
        return data;
    } catch (error) {
        switch (error.response.status) {
            case 401:
                throw "Wrong password.";
            case 404:
                throw "Username not found.";
            default:
                throw "Login failed.";
        }
    }
};

const signupUser = async (signupCredentials) => {
    try {
        const { data } = await axios.post("/api/auth/signup", {
            firstName: signupCredentials.firstName,
            lastName: signupCredentials.lastName,
            email: signupCredentials.email,
            password: signupCredentials.password,
        });
        return data;
    } catch (error) {
        switch (error.response.status) {
            case 422:
                throw "Email alrady exists.";
            default:
                throw "Signup failed.";
        }
    }
};

export { loginUser, signupUser };
