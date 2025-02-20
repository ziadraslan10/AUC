/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../../Components/Second-Navbar/Second-Navbar";
import img0 from "../../assets/A1C/p0.png";
import img1 from "../../assets/A1C/p1.jpg";
import img2 from "../../assets/A1C/p2.jpg";
import img3 from "../../assets/A1C/p3.jpg";
import img4 from "../../assets/A1C/p4.jpg";
import img5 from "../../assets/A1C/p5.jpg";
import img6 from "../../assets/A1C/p6.jpg";
import img7 from "../../assets/A1C/p7.jpg";
import img8 from "../../assets/A1C/p8.jpg";
import img9 from "../../assets/A1C/p9.jpg";
import img10 from "../../assets/A1C/p10.jpg";
import img11 from "../../assets/A1C/p11.jpg";
import img12 from "../../assets/A1C/p12.jpg";

export default function A1B() {
  useEffect(() => {
    done ? window.scrollTo(0, 0) : null;
    setdone(false);
  });

  const [done, setdone] = useState(true);

  const [done1, setdone1] = useState(0);
  const [done2, setdone2] = useState(0);
  const [done3, setdone3] = useState(0);
  const [done4, setdone4] = useState(0);

  return (
    <>
      <SecondNavbar />
      <div className="bg-slate-100 lg:px-20 px-5 py-20">
        <h2 className="text-3xl font-semibold mb-5">Survival English A1C</h2>
        <div className=" lg:px-10 px-5 py-8 bg-white rounded-md ">
          <h3 className="font-bold text-2xl mb-8 text-sky-700">General</h3>

          <div className="">
            <div className={`mb-2`}>
              <div className="flex p-4 rounded-xl border-2 border-gray-200">
                <h3 className={`  `}>
                  <i className="fa-solid fa-comments fa-2xl mx-2 text-red-400"></i>
                  <Link
                    to={``}
                    className="text-blue-700 hover:underline  hover:text-blue-700"
                  >
                    Announcements
                  </Link>
                </h3>
              </div>
            </div>
            <div className={`mb-2`}>
              <div className="flex p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className={`  `}>
                  <i className="fa-solid fa-comments fa-2xl mx-2 text-red-400"></i>
                  <Link
                    to={``}
                    className="text-blue-700 hover:underline  hover:text-blue-700"
                  >
                    News forum
                  </Link>
                </h3>
              </div>
            </div>
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-file-pdf fa-2xl mx-2 text-blue-400"></i>
                  <Link
                    to={`https://scemoodle.aucegypt.edu/pluginfile.php/2573098/mod_resource/content/2/C4%20Comm.%20of%20Info.%20to%20Learner%20-%20Form%281%29-v5-v10-v18-v20-v40-v41.pdf`}
                    className="text-blue-700 hover:underline  hover:text-blue-700 "
                  >
                    Classroom Guidelines
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {done1 ? (
                    <span
                      onClick={() => setdone1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setdone1(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-file-pdf fa-2xl mx-2 text-blue-400"></i>
                  <Link
                    to={`https://scemoodle.aucegypt.edu/pluginfile.php/2573099/mod_resource/content/1/SCE%20Online%20Tutorials%20V1%20PDF.pdf`}
                    className="text-blue-700 hover:underline  hover:text-blue-700 "
                  >
                    SCE Online Tutorials
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {done2 ? (
                    <span
                      onClick={() => setdone2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setdone2(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-file-pdf fa-2xl mx-2 text-blue-400"></i>
                  <Link
                    to={`https://scemoodle.aucegypt.edu/pluginfile.php/2573100/mod_resource/content/1/B10%20Code%20of%20Conduct.pdf`}
                    className="text-blue-700 hover:underline  hover:text-blue-700 "
                  >
                    B10 Policy - Code of Conduct
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {done3 ? (
                    <span
                      onClick={() => setdone3(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setdone3(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-file-pdf fa-2xl mx-2 text-blue-400"></i>
                  <Link
                    to={`https://scemoodle.aucegypt.edu/pluginfile.php/2573101/mod_resource/content/1/ENGG%20A1C%20Updated.pdf`}
                    className="text-blue-700 hover:underline  hover:text-blue-700  "
                  >
                    ENGG A1C - CDF
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {done4 ? (
                    <span
                      onClick={() => setdone4(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setdone4(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-file-pdf fa-2xl mx-2 text-blue-400"></i>
                  <Link
                    to={`https://scemoodle.aucegypt.edu/pluginfile.php/2573101/mod_resource/content/1/ENGG%20A1C%20Updated.pdf`}
                    className="text-blue-700 hover:underline  hover:text-blue-700  "
                  >
                    Learner's Handbook
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              className={`  sm:mb-10    mx-1 box-border  bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to={A1B}>
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Zoom Sessions (Only fo..
                </h2>
                <img className="rounded-b-lg w-fit h-48 " src={img0} alt="" />
              </Link>
            </div>
            <div
              className={` sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session1">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 1: Could you do...
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img1} alt="" />
              </Link>
            </div>
            <div
              className={` sm:mb-10 mx-1 box-border    bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session2">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 2: A Busy Day
                </h2>
                <img className="rounded-b-lg w-full h-48  " src={img2} alt="" />
              </Link>
            </div>
            <div
              className={`h-48  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session3">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 3: Health Issues
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img3} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session4">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 4: Celebrations
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img4} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session5">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  session 5: Weather and ...
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img5} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session6">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  session 6: Vacations
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img6} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session7">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 7: Home & Furn...
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img7} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session8">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 8: Decision Ma...
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img8} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session9">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 9: Work and so...
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img9} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session10">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 10: Helping at h...
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img10} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="session11">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Session 11: Story Telling
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img11} alt="" />
              </Link>
            </div>
            <div
              className={`  sm:mb-10 mx-1 box-border   bg-white border border-gray-200 rounded-lg shadow `}
            >
              <Link to="">
                <h2 className="text-center py-3 text-blue-700 hover:underline">
                  Review
                </h2>
                <img className="rounded-b-lg w-full h-48 " src={img12} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
