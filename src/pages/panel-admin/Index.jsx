import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import InfoBadge from "../../components/panel-admin/InfoBadge";

function Index() {
    const token = useToken();

    const [usersCount, setUsersCount] = useState();
    const [infos, setInfos] = useState([]);
    const [users, setUsers] = useState();
    const { productsCount, commentsCount } = infos;

    useEffect(() => {
        fetch("http://localhost:4000/api/panel/index", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(result => {
                setInfos(result);
                setUsersCount(result.usersCount);
                setUsers(result.users.slice(0, 10));
            });
    }, [usersCount]);

    return (
        <>
            <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-[30px]">
                <InfoBadge title="Users" count={usersCount} />
                <InfoBadge title="Products" count={productsCount} />
                <InfoBadge title="Comments" count={commentsCount} />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th className="hidden tablet:inline-block w-40">Role</th>
                        <th className="hidden laptop:inline-block">Date of Register</th>
                    </tr>
                </thead>
                {users && (
                    <tbody className="child">
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td className="hidden tablet:inline-block w-40">{user.role}</td>
                                <td className="hidden laptop:inline-block">
                                    {user.createdAt.slice(0, 10)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </>
    );
}

export default Index;
