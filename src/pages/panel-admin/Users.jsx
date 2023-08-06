import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import toastCustom from "../../util/toast";
import SwalModal from "../../util/SwalModal";
import ErrorMessage from "../../components/ErrorMessage";

function Users() {
    const [users, setUsers] = useState([]);

    const [setIsModal] = SwalModal();
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("user"));
    const BASE_URL = "http://localhost:4000/api/users";

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        if (token) {
            fetch(`${BASE_URL}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(result => {
                    if (result.status === 401) {
                        navigate("/");
                    } else if (result.status === 404) {
                        setUsers(null);
                    } else {
                        setUsers(result.users);
                    }
                });
        }
    };

    const setAdmin = (userId, fullName) => {
        let firstname = fullName?.split(" ")[0];

        if (token) {
            fetch(`${BASE_URL}/set-admin/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    toastCustom("info", `${firstname} change role to ADMIN`);
                    getAllUsers();
                });
        }
    };

    const deleteUser = (userId, fullName) => {
        let firstname = fullName?.split(" ")[0];
        if (token) {
            fetch(`http://localhost:4000/api/users/${userId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(result => {
                    getAllUsers();
                    toastCustom("success", `${firstname} was successfully removed`);
                });
        }
    };

    const banUser = userId => console.log(userId);

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
                {users && (
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.createdAt.slice(0, 10)}</td>
                                <td className="flex gap-x-2.5">
                                    <button
                                        className="w-16 bg-slate-200"
                                        onClick={() => setAdmin(user._id, user.fullName, user.role)}>
                                        {user.role === "USER" ? "Admin" : "user"}
                                    </button>
                                    <button
                                        className="w-16 bg-red text-white"
                                        onClick={() => setIsModal({ status: "pending", id: user._id, cb: deleteUser })}>
                                        Delete
                                    </button>
                                    <button className="w-16 bg-slate-200" onClick={() => banUser(user._id)}>
                                        Ban
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            {!users && <ErrorMessage title="There is no user" />}
        </div>
    );
}

export default Users;
