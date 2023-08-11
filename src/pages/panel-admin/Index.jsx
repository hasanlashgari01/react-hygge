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
            <table className="mt-10 table-auto w-full border-collapse border border-slate-300">
                <thead>
                    <tr className="bg-green-10">
                        <th className="text-left p-2">Full Name</th>
                        <th className="text-left p-2">Email</th>
                        <th className="hidden tablet:inline-block w-40 text-left p-2">Role</th>
                        <th className="hidden laptop:inline-block text-left p-2">
                            Date of Register
                        </th>
                    </tr>
                </thead>
                {users && (
                    <tbody className="child">
                        {users.map(user => (
                            <tr key={user._id} className="border-b border-gray-300 last:border-0 hover:bg-slate-100 transition-custom">
                                <td className="p-2">{user.fullName}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="hidden tablet:inline-block w-40 p-2">{user.role}</td>
                                <td className="hidden laptop:inline-block p-2">
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
