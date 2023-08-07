import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../../context/authContext";

function PAdminPrivate({ children }) {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        !authContext.isLoggedIn && navigate("/");
    }, [authContext.isLoggedIn]);

    return <>{authContext.userInfos.role === "ADMIN" ? <>{children}</> : navigate("/")}</>;
}

export default PAdminPrivate;
