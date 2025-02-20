/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../../../Components/Second-Navbar/Second-Navbar";
import { LuCircleArrowLeft } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";

function Session_2() {
  useEffect(() => {
    done ? window.scrollTo(0, 0) : null;
    setdone(false);
  });

  const [done, setdone] = useState(true);

  //            Reading
  const [Reading, setReading] = useState(0);
  const [Reading_1, setReading_1] = useState(0);
  const [Reading_2, setReading_2] = useState(0);
  const [Reading_3, setReading_3] = useState(0);
  const [Reading_4, setReading_4] = useState(0);

  //           Listening
  const [Listening, setListening] = useState(0);
  const [Listening_1, setListening_1] = useState(0);
  const [Listening_2, setListening_2] = useState(0);
  const [Listening_3, setListening_3] = useState(0);
  const [Listening_4, setListening_4] = useState(0);
  const [Listening_5, setListening_5] = useState(0);

  //           Videos
  const [Videos, setVideos] = useState(0);
  const [Videos_1, setVideos_1] = useState(0);
  const [Videos_2, setVideos_2] = useState(0);

  return (
    <>
      <SecondNavbar />
      <div className="bg-slate-100 lg:px-20 px-5 py-20">
        <h2 className="text-3xl font-semibold mb-5">Survival English A1C</h2>
        <div className=" lg:px-10 px-5 py-8 bg-white rounded-md ">
          <Link
            to={`/A1C`}
            className="font-bold flex justify-end mb-4 text-sky-700 hover:underline"
          >
            Main course page
          </Link>
          <div className="flex justify-between mt-5">
            <Link
              to={`/A1C/session1`}
              className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              <LuCircleArrowLeft />
              Session 1: Could you do me a favor
            </Link>
            <Link
              to={`/A1C/session3`}
              className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              Session 3: Health Issues
              <FiArrowRightCircle />
            </Link>
          </div>
          <h2 className="mb-8">
            <Link
              to={`/A1C/session1`}
              className="font-bold text-2xl text-sky-700 hover:underline"
            >
              Session 2: A Busy Day
            </Link>
          </h2>

          <div className="">
            {/*                    Reading          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Reading</h3>
                <div className="flex items-center justify-center ">
                  {Reading ? (
                    <span
                      onClick={() => setReading(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setReading(1)}
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
                <h3 className="mb-5 text-blue-400">
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://www.esl-lounge.com/student/vocabulary/3v18-work-and-leisure.php`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Work & Leisure
                  </a>
                </h3>
                <div className="flex items-center justify-center ">
                  {Reading_1 ? (
                    <span
                      onClick={() => setReading_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setReading_1(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://www.rong-chang.com/nse/se/nse016.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Work, Work
                  </a>
                </h3>
                <div className="flex items-center justify-center ">
                  {Reading_2 ? (
                    <span
                      onClick={() => setReading_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setReading_2(1)}
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
                  <a
                    target="_blank"
                    href={`https://scemoodle.aucegypt.edu/pluginfile.php/2573121/mod_resource/content/1/A1C-Moms%20busy%20day.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Mom's Busy Day File
                  </a>
                </h3>
                <div className="flex items-center justify-center ">
                  {Reading_3 ? (
                    <span
                      onClick={() => setReading_3(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setReading_3(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://www.eslfast.com/eslread/ss/s238.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    A Workaholic Dad
                  </a>
                </h3>
                <div className="flex items-center justify-center ">
                  {Reading_4 ? (
                    <span
                      onClick={() => setReading_4(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setReading_4(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/*                    Listening          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Listening</h3>
                <div className="flex items-center justify-center ">
                  {Listening ? (
                    <span
                      onClick={() => setListening(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setListening(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    target="_blank"
                    to={`https://learnenglishteens.britishcouncil.org/skills/listening/a1-listening/interview-swimmer`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Interview with a swimmer
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Listening_1 ? (
                    <span
                      onClick={() => setListening_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setListening_1(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    target="_blank"
                    to={`https://www.esl-lounge.com/student/listening/3L19-far-from-the-office.php`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Far From The Office
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Listening_2 ? (
                    <span
                      onClick={() => setListening_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setListening_2(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    target="_blank"
                    to={`https://www.englishclub.com/efl/podcasts/interesting-facts/bees-neat-freaks/`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Bees are Neat Freaks
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Listening_3 ? (
                    <span
                      onClick={() => setListening_3(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setListening_3(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    to={`https://www.esl-lab.com/intermediate/date-activities/`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    What a busy day!
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Listening_4 ? (
                    <span
                      onClick={() => setListening_4(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setListening_4(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    to={`https://www.eslfast.com/robot/topics/employment/employment17.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Giving an Excuse for Being Late to Work
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Listening_5 ? (
                    <span
                      onClick={() => setListening_5(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setListening_5(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/*                    Videos          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Videos</h3>
                <div className="flex items-center justify-center ">
                  {Videos ? (
                    <span
                      onClick={() => setVideos(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVideos(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    target="_blank"
                    to={`https://www.elllo.org/english/beginner/B01-JohnSarah-PresentSimple-Routine.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Tell me about your day
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Videos_1 ? (
                    <span
                      onClick={() => setVideos_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVideos_1(1)}
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    target="_blank"
                    to={`https://docs.google.com/document/d/1y4nmsR13WoS4uFGXPdxL5Zjm1GDjwNSKGpHkfbxHZ4c/edit?pli=1&tab=t.0`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    master doc
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Videos_2 ? (
                    <span
                      onClick={() => setVideos_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVideos_2(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5">
              <Link
                to={`/A1C/session1`}
                className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
              >
                <LuCircleArrowLeft />
                Session 1: Could you do me a favor
              </Link>
              <Link
                to={`/A1C/session3`}
                className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
              >
                Session 3: Health Issues
                <FiArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Session_2;
