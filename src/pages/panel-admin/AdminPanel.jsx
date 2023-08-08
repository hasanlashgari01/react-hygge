import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/panel-admin/Sidebar";
import Topbar from "../../layouts/panel-admin/Topbar";

function AdminPanel() {
    return (
        <div>
            <Topbar />
            <div className="flex bg-white dark:bg-grey-3 transition-custom">
                <Sidebar />
                <div className="flex-1 bg-grey-light-100 p-[30px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
