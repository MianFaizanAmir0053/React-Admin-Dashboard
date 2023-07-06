import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import WalletIcon from "@mui/icons-material/Wallet";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className=" min-h-[100vh] border-r">
      <div className="text-bold py-[1.48rem] text-violet-700 font-semibold  min-[768px]:py-[0.95rem] text-center border-b">
        faizanadmin
      </div>
      <div className="flex flex-col">
        <div className="flex items-center min-[768px]:p-2 p-1 space-x-1">
          <ul>
            <div>
              <p className="text-slate-400 text-xs ">MAIN</p>
              <li className="flex  px-4 py-2 text-center">
                <DashboardIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Dashboard</div>
              </li>
            </div>

            <div>
              <p className="text-slate-400 text-xs ">LISTS</p>
              <li className="flex  px-4 py-2 text-center">
                <GroupIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <a href={"/users"}>Customers</a>
              </li>
              <li className="flex  px-4 py-2 text-center">
                <InventoryIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Inventory</div>
              </li>
              <li className="flex  px-4 py-2 text-center">
                <WalletIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Wallet</div>
              </li>
              <li className="flex  px-4 py-2 text-center">
                <LocalShippingIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Orders</div>
              </li>
            </div>
            <div>
              <p className="text-slate-400 text-xs ">USEFULL</p>

              <li className="flex  px-4 py-2 text-center">
                <AssessmentIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Reports</div>
              </li>
              <li className="flex  px-4 py-2 text-center">
                <NotificationsIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Notifications</div>
              </li>
            </div>
            <div>
              <p className="text-slate-400 text-xs ">SERVICE</p>
              <li className="flex  px-4 py-2 text-center">
                <SettingsSystemDaydreamIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Settings</div>
              </li>
              <li className="flex  px-4 py-2 text-center">
                <PsychologyIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Support</div>
              </li>

              <li className="flex  px-4 py-2 text-center">
                <SettingsIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Settings</div>
              </li>
            </div>
            <div>
              <p className="text-slate-400 text-xs ">USER</p>
              <li className="flex  px-4 py-2 text-center">
                <AccountBoxIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Account</div>
              </li>
              <li className="flex  px-4 py-2 text-center">
                <LogoutIcon className="text-violet-700 mr-2 p-[0.15rem]" />
                <div>Logout</div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
