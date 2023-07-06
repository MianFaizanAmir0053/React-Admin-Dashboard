import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListIcon from "@mui/icons-material/List";

function Navbar() {
  return (
    <div className="px-4 h-fit flex text-white justify-between w-full border-b  py-[14px]">
      <div className="">
        <div className="border px-2 w-fit flex">
          <input
            type="text"
            placeholder="Search..."
            className="text-black outline-none  max-[768px]:w-[5rem] "
          />
          <SearchIcon className="text-black" />
        </div>
      </div>

      <div className="flex">
        <ul className="text-black flex">
          <li className=" min-[768px]:px-3 px-[0.25rem] flex items-center">
            <LanguageIcon />
            <span>English</span>
          </li>
          <li className="min-[768px]:px-3 px-[0.25rem] flex items-center">
            <DarkModeOutlinedIcon />
            <span className=" line-clamp-1">Dark Mode</span>
          </li>
          <li className="min-[768px]:px-3 px-[0.25rem] items-center">
            <FullscreenExitIcon />
          </li>
          <li className="min-[768px]:px-3 px-[0.25rem] items-center relative">
            <NotificationsNoneIcon />
            <div className="absolute top-[-5px] right-1 text-center px-[7px]  font-semibol rounded-xl bg-red-500 text-white text-sm">
              4
            </div>
          </li>
          <li className="min-[768px]:px-3 px-[0.25rem] items-center relative">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="absolute top-[-5px] right-1 text-center px-[7px]  font-semibol rounded-xl bg-red-500 text-white text-sm">
              4
            </div>
          </li>
          <li className="min-[768px]:px-3 px-[0.25rem] items-center">
            <ListIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
