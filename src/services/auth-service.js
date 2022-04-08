import axios from "axios";

const loginUser = async (loginCredentials) => {
    try {
        const { data } = await axios.post("/api/auth/login", {
            email: loginCredentials.email,
            password: loginCredentials.password,
        });
        return data;
    } catch (error) {
        console.log(error);
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
        console.log(error);
    }
};

export { loginUser, signupUser };
