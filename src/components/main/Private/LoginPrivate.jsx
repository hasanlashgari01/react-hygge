import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../../context/authContext";

function LoginPrivate({ children }) {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authContext.isLoggedIn && navigate("/");
    });

    return <>{authContext.isLoggedIn ? navigate("/") : <>{children}</>}</>;
}

export default LoginPrivate;
