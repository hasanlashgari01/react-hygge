import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = {
    position: "top-center",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
};

const toastCustom = (status, message) => {
    if (status === "success") {
        console.log(status, message);
        toast.success(message, config);
    } else if (status === "info") {
        toast.info(message, config);
    } else {
        toast.error(message, config);
    }
};

export default toastCustom;
