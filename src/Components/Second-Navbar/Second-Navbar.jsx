/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";


export default function SecondNavbar() {
  return (
    <>
      <nav className=" border-gray-200 bg-sky-600 text-white fixed top-16 mt-2 right-0 left-0 py-1 ">
        <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl ">
          <div className=" flex items-center gap-5 lg:ml-20">
            {
              <ul className="flex relative x">
                <NavLink 
                to={`/A1C`}
                className={`text-white relative`}>
                  
                  <li className={`hover:bg-sky-800 hover:text-white p-4`}>
                    Course
                  </li>
                </NavLink>
                <NavLink
                  className="text-white relative"
                  to={`participants/${""}`}
                >
                  <li className={`hover:bg-sky-800  hover:text-white p-4`}>
                    Participants
                  </li>
                </NavLink>
                <NavLink className={`text-white relative`} to={`grades/${""}`}>
                  <li className={`hover:bg-sky-800  hover:text-white p-4`}>
                    Grades
                  </li>
                </NavLink>
                <NavLink
                  className={`text-white relative`}
                  to={`competencies/${""}`}
                >
                  <li
                    className={`hover:bg-sky-800  hover:text-white hover p-4`}
                  >
                    Competencies
                  </li>
                </NavLink>
              </ul>
            }
          </div>
        </div>
      </nav>
      <div className="container mt-16 mb-5">
        <Outlet />
      </div>
    </>
  );
}
