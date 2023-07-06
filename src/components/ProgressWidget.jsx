import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ProgressWidget() {
  return (
    <div className="bg-white  text-center rounded-lg shadow-md p-5  min-[768px]:col-span-3 col-span-8">
      <span className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-500"> Total Revenue </h1>
        <MoreVertIcon className="text-gray-500" />
      </span>
      <CircularProgressbar
        value={70}
        text={"70%"}
        strokeWidth={5}
        className=" min-[768px]:w-[7rem] w-[10rem] mx-auto my-5"
      />
      <div className="text-slate-500 pt-2">Total sales made today</div>
      <div className="py-4 text-3xl">$420</div>
      <p className="text-slate-500 text-sm font-light px-4 pb-3">
        Previous transactions processing. Last payments may not be included.
      </p>

      <div className="flex justify-between px-4 text-slate-500 text-sm">
        <div className="flex flex-col ">
          <p className=" tracking-wider">Target</p>
          <span className="py-2 text-red-500">
            <KeyboardArrowDownIcon className="pb-[.1rem]" />
            $12.5k
          </span>
        </div>
        <div className="flex flex-col ">
          <p className=" tracking-wider">Last Week</p>
          <span className="py-2 text-green-600">
            <KeyboardArrowUpIcon className="pb-[.1rem]" />
            $12.5k
          </span>
        </div>
        <div className="flex flex-col ">
          <p className=" tracking-wider">Last Month</p>
          <span className="py-2 text-green-600">
            <KeyboardArrowUpIcon className="pb-[.1rem]" />
            $12.5k
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressWidget;
