import { loginUser, signupUser } from "../../services/auth-service";

const loginHandler = async (loginCredentials, setAuthTokens, navigation) => {
    const { encodedToken } = await loginUser(loginCredentials);
    localStorage.setItem("token", encodedToken);
    setAuthTokens(encodedToken);
    navigation("/");
};

const signupHandler = async (signupCredentials, setAuthTokens, navigation) => {
    const { encodedToken } = await signupUser(signupCredentials);
    localStorage.setItem("token", encodedToken);
    setAuthTokens(encodedToken);
    navigation("/");
};

const signoutHandler = async (removeAuthTokens, navigation) => {
    try {
        localStorage.removeItem("token");
        removeAuthTokens();
        navigation("/");
    } catch (error) {
        console.log(error);
    }
};

export { loginHandler, signupHandler, signoutHandler };
