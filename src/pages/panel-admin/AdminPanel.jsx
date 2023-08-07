import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/panel-admin/Sidebar";
import Topbar from "../../layouts/panel-admin/Topbar";

function AdminPanel() {
    return (
        <div className="flex bg-white dark:bg-grey-3 transition-dark">
            <Sidebar />
            <div className="flex-1">
                <Topbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
