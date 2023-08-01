import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Link } from "react-router-dom";

function Widget({ title, value, icon, link }) {
  return (
    <div className=" col-span-4 min-[768px]:col-span-2 shadow-md p-4 rounded-md w-full">
      <div className="flex justify-between text-sm text-slate-400 ">
        <div className="font-semibold uppercase">{title}</div>
        <div className="flex items-center text-green-700">
          <KeyboardArrowUpOutlinedIcon />
          <span>20%</span>
        </div>
      </div>
      <div className="py-4 font-thin text-4xl">{value}</div>
      <div className="flex justify-between text-xs text-black ">
        <Link to={link} className="border-b mb-[5px] border-black text-black ">
          See all {title}s
        </Link>
        {icon}
      </div>
    </div>
  );
}

export default Widget;
