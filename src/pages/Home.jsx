import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import widgetData from "../components/widgetData";
import ProgressWidget from "../components/ProgressWidget";
import Graph from "../components/Graph";
import BasicTable from "../components/BasicTable";

function Home() {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className=" w-full">
        <Navbar />
        <div className="min-[768px]:px-4 px-2 grid grid-cols-8  min-[768px]:pt-4 pt-2  min-[768px]:gap-4 gap-2">
          {widgetData.map((wid) => {
            return (
              <Widget
                title={wid.title}
                key={wid.title}
                value={wid.value}
                icon={wid.icon}
                link={wid.link}
              />
            );
          })}
          <ProgressWidget />
          <Graph />
          <BasicTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
