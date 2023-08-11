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
            <div className="grid grid-cols-3 gap-[30px]">
                <InfoBadge title="Users" count={usersCount} />
                <InfoBadge title="Products" count={productsCount} />
                <InfoBadge title="Comments" count={commentsCount} />
            </div>
            <table className="w-full mt-10">
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
                            <tr key={user._id} className="">
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.createdAt.slice(0, 10)}</td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </>
    );
}

export default Index;
