import { useTranslation } from "react-i18next";
import { useState, useRef,useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import GradeIcon from "@material-ui/icons/Grade";
import BarChartIcon from "@material-ui/icons/BarChart";
import AnnouncementIcon from "@material-ui/icons/Announcement";

function SideNav() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef();
  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Effect to add the event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-h-full">
      <div className="absolute top-0 left-0 flex items-center m-4 lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </button>
      </div>
      <div
        ref={sideNavRef} // Attach the ref
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block w-60 lg:w-64 min-h-full bg-gradient-to-br from-coligo_blue to-coligo_green h-20  text-coligo_white py-5 ease-in-out transition-all duration-500 hover:transition-all hover:duration-500 fixed`}
      >

        <h1 className="text-4xl font-extrabold text-coligo_white ml-20 mt-3">Coligo</h1>

        <ul className="py-12">
          <li
            className="flex items-center justify-around hover:bg-zinc-200 hover:text-zinc-950  transition-all duration-500 hover:transition-all hover:duration-500
px-1 py-6 cursor-pointer"
          >
            <DashboardIcon />
            {t("dashboard")}
          </li> 

          <li
            className="flex items-center justify-around hover:bg-zinc-200 hover:text-zinc-950 transition-all duration-500 hover:transition-all hover:duration-500
px-1 py-6 cursor-pointer"
          >
            <ScheduleIcon />
            {t("schedule")} 
          </li>

          <li
            className="flex items-center justify-around hover:bg-zinc-200 hover:text-zinc-950 transition-all duration-500 hover:transition-all hover:duration-500
px-1 py-6 cursor-pointer"
          >
            <LibraryBooksIcon />
            {t("courses")} 
          </li>

          <li
            className="flex items-center justify-around hover:bg-zinc-200 hover:text-zinc-950 transform-1 transition-all duration-500 hover:transition-all hover:duration-500
px-1  py-6 cursor-pointer"
          >
            <GradeIcon />
            <span>{t("grade-book")}</span>
          </li>

          <li
            className="flex items-center justify-around hover:bg-zinc-200 hover:text-zinc-950 transform-1 transition-all duration-500 hover:transition-all hover:duration-500
px-1 py-6 cursor-pointer"
          >
            <BarChartIcon />
            {t("performance")} 
          </li>

          <li
            className="flex items-center justify-around hover:bg-zinc-200 hover:text-zinc-950 transform-1 transition-all duration-500 hover:transition-all hover:duration-500
px-1 py-6 cursor-pointer"
          >
            <AnnouncementIcon />
            {t("announcement")} 
          </li>
        </ul>
      </div>
      <div className="lg:block ml-64"> 
      </div>
    </div>
  );
}

export default SideNav;
