import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import useToken from "../../hooks/useToken";
import toastCustom from "../../util/toast";
import SwalModal from "../../util/SwalModal";
import ErrorMessage from "../../components/ErrorMessage";

function Users() {
    const [users, setUsers] = useState([]);

    const [setIsModal] = SwalModal();
    const navigate = useNavigate();
    const token = useToken();
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
                        setUsers(result);
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
        <div>
            <ToastContainer />
            <div>
                <h1 className="dark:text-green-100 text-4xl font-semibold">Users</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Date of Register</th>
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
                                            className="p-1 bg-zinc-200/80 bg-zinc-200 rounded-md laptop:cursor-pointer"
                                            onClick={() =>
                                                setAdmin(user._id, user.fullName, user.role)
                                            }>
                                            <svg className="w-6 h-6">
                                                <use href="#user-plus"></use>
                                            </svg>
                                        </button>
                                        <button
                                            className="p-1 bg-red/10 text-red rounded-md laptop:cursor-pointer"
                                            onClick={() =>
                                                setIsModal({
                                                    status: "pending",
                                                    id: user._id,
                                                    cb: deleteUser,
                                                })
                                            }>
                                            <svg className="w-6 h-6">
                                                <use href="#trash"></use>
                                            </svg>
                                        </button>
                                        <button
                                            className="p-1 bg-zinc-200/80 bg-zinc-200 rounded-md laptop:cursor-pointer"
                                            onClick={() => banUser(user._id)}>
                                            <svg className="w-6 h-6">
                                                <use href="#x-circle"></use>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
                {!users && <ErrorMessage title="There is no user" />}
            </div>
        </div>
    );
}

export default Users;
