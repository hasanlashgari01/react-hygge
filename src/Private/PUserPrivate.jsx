import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

function PUserPrivate({ children }) {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    return <>{isLoggedIn ? <>{children}</> : navigate("/")}</>;
}

export default PUserPrivate;
