import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";

export default function PAdminPrivate({ children }) {
    const { userInfos } = useContext(AuthContext);
    const navigate = useNavigate();

    return <>{userInfos?.role === "ADMIN" ? <>{children}</> : navigate("/")}</>;
}
