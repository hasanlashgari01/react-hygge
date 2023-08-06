import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext";

function Topbar() {
    const authContext = useContext(AuthContext);

    const logoutHandler = () => {
        authContext.logout();
    };

    let userFullname = authContext.userInfos.fullName;

    return (
        <div className="flex justify-between items-center py-3 px-10 bg-green-10 dark:text-grey-light-100">
            <span className="hidden tablet:inline-block text-2xl font-semibold">
                Hello, {userFullname}
            </span>
            <div>
                <div></div>
                <div></div>
                <div className="relative group">
                    <div className="flex items-center gap-3 p-2 bg-gray-50/50 rounded-full">
                        <img
                            src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="w-8 h-8 rounded-full"
                            alt=""
                        />
                        <span className="mr-4 text-base font-semibold">{userFullname}</span>
                    </div>
                    <ul className="absolute right-0 top-full mt-5 space-y-2 w-52 bg-slate-500 rounded-xl p-2.5 opacity-0 invisible group-hover:opacity-100 delay-75 group-hover:visible transition-all">
                        <NavLink to="profile" className="inline-block w-full bg-slate-300 p-2 rounded-md">
                            Profile
                        </NavLink>
                        <NavLink
                            to=""
                            onClick={logoutHandler}
                            className="inline-block w-full bg-slate-300 p-2 rounded-md">
                            Logout
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
