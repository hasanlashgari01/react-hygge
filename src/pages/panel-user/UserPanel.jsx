import { Outlet } from "react-router";
import Header from "../../layouts/panel-user/Header";
import Sidebar from "../../layouts/panel-user/Sidebar";

function UserPanel() {
    return (
        <div>
            <Header />
            <div className="space-container flex gap-x-[18px] mt-10">
                <Sidebar status="hidden" />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserPanel;
