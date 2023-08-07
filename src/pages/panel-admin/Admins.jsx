import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import toastCustom from "../../util/toast";
import ErrorMessage from "../../components/ErrorMessage";
import useToken from "../../hooks/useToken";

function Admins() {
    const [admins, setAdmins] = useState([]);

    const navigate = useNavigate();
    const token = useToken();
    const BASE_URL = "http://localhost:4000/api/admins";

    useEffect(() => {
        getAllAdmins();
    }, []);

    const getAllAdmins = () => {
        if (token) {
            fetch(`${BASE_URL}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(result => {
                    if (result.statusCode === 401) {
                        navigate("/");
                    } else {
                        setAdmins(result);
                    }
                });
        }
    };

    const setUser = (adminId, fullName) => {
        let firstname = fullName?.split(" ")[0];

        if (token) {
            fetch(`${BASE_URL}/set-user/${adminId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    toastCustom("info", `${firstname} change role to USER`);
                    getAllAdmins();
                });
        }
    };

    return (
        <div className="space-container py-10">
            <ToastContainer />
            <table className="w-full">
                <thead>
                    <tr className="bg-green-100/40">
                        <th className="border py-2.5">Full Name</th>
                        <th className="border py-2.5">Email</th>
                        <th className="border py-2.5">Role</th>
                        <th className="border py-2.5">Date of Register</th>
                    </tr>
                </thead>
                {admins && (
                    <tbody>
                        {admins.map(admin => (
                            <tr key={admin._id}>
                                <td>{admin.fullName}</td>
                                <td>{admin.email}</td>
                                <td>{admin.role}</td>
                                <td>{admin.createdAt.slice(0, 10)}</td>
                                <td className="flex gap-x-2.5">
                                    <button
                                        className="w-16 bg-slate-200"
                                        onClick={() => setUser(admin._id, admin.fullName)}>
                                        User
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            {!admins && <ErrorMessage title="There is no admin" />}
        </div>
    );
}

export default Admins;
