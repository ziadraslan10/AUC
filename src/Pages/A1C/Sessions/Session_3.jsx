/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../../../Components/Second-Navbar/Second-Navbar";
import { LuCircleArrowLeft } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";

function Session_3() {
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
  const [Reading_5, setReading_5] = useState(0);
  const [Reading_6, setReading_6] = useState(0);

  //           Listening
  const [Listening, setListening] = useState(0);
  const [Listening_1, setListening_1] = useState(0);
  const [Listening_2, setListening_2] = useState(0);
  const [Listening_3, setListening_3] = useState(0);
  const [Listening_4, setListening_4] = useState(0);
  const [Listening_5, setListening_5] = useState(0);
  const [Listening_6, setListening_6] = useState(0);
  const [Listening_7, setListening_7] = useState(0);

  //           Speaking
  const [Speaking, setSpeaking] = useState(0);
  const [Speaking_1, setSpeaking_1] = useState(0);
  const [Speaking_2, setSpeaking_2] = useState(0);
  const [Speaking_3, setSpeaking_3] = useState(0);
  const [Speaking_4, setSpeaking_4] = useState(0);

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
              to={`/A1C/session2`}
              className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              <LuCircleArrowLeft />
              Session 2: A Busy Day
            </Link>
            <Link
              to={`/A1C/session4`}
              className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              Session 4: Celebrations
              <FiArrowRightCircle />
            </Link>
          </div>
          <h2 className="mb-8">
            <Link
              to={`/A1C/session3`}
              className="font-bold text-2xl text-sky-700 hover:underline"
            >
              Session 3: Health Issues
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
                <i className="fa-solid fa-file-pdf fa-2xl mx-2 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://scemoodle.aucegypt.edu/pluginfile.php/2573132/mod_resource/content/1/fat_reading_elementary.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    
Fat- Frank File
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
                <i className="fa-solid fa-file-pdf fa-2xl mx-2 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://scemoodle.aucegypt.edu/pluginfile.php/2573133/mod_resource/content/1/fat_frank_tasks_elementary.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Fat - Frank (Exercises) File
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
                    href={`https://scemoodle.aucegypt.edu/pluginfile.php/2573134/mod_resource/content/1/obesity-the-number-1-problem.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    
Obesity File
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
                    href={`https://www.eslfast.com/supereasy/se/supereasy046.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Losing weight
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
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://www.usingenglish.com/comprehension/21.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Intelligence pills
                  </a>
                </h3>
                <div className="flex items-center justify-center ">
                  {Reading_5 ? (
                    <span
                      onClick={() => setReading_5(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setReading_5(1)}
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
                    href={`https://www.esl-lounge.com/student/reading/1r22-elementary-reading-michael-and-his-stomach-true-false-questions.php`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    
Michael and his stomach
                  </a>
                </h3>
                <div className="flex items-center justify-center ">
                  {Reading_6 ? (
                    <span
                      onClick={() => setReading_6(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setReading_6(1)}
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
                    to={`https://www.esl-lab.com/easy/drugs-medication/`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    
Medical Advice.
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
                    to={`https://www.elllo.org/english/1401/1412-John-Sarah-Healthy-Life.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Lifestyle Change
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
                    to={`https://www.elllo.org/english/0801/T832-Jeff-Health.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Health
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
                    to={`https://www.elllo.org/english/0701/T740-Keren-Healthy.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Staying Healthy
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
                    to={`https://www.elllo.org/english/1101/1101-Adria-Healthcare.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    
Healthcare
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
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    to={`https://www.esl-lab.com/intermediate/healthy-lifestyle/`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    
                    A Healthy Lifestyle
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Listening_6 ? (
                    <span
                      onClick={() => setListening_6(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setListening_6(1)}
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
                    to={`https://www.elllo.org/english/Games/G050Hospitals.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    
Healthcare
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Listening_7 ? (
                    <span
                      onClick={() => setListening_7(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setListening_7(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/*                    Speaking          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Speaking</h3>
                <div className="flex items-center justify-center ">
                  {Speaking ? (
                    <span
                      onClick={() => setSpeaking(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setSpeaking(1)}
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
                    target="_blank"
                    to={`https://scemoodle.aucegypt.edu/pluginfile.php/2573147/mod_resource/content/1/whats-the-matter-fun-activities.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    What is the Matter? File
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Speaking_1 ? (
                    <span
                      onClick={() => setSpeaking_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setSpeaking_1(1)}
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
                    target="_blank"
                    to={`https://scemoodle.aucegypt.edu/pluginfile.php/2573148/mod_resource/content/1/health-problemsquiz-fun%20game.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Health problem Fun game File
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Speaking_2 ? (
                    <span
                      onClick={() => setSpeaking_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setSpeaking_2(1)}
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
                    target="_blank"
                    to={`https://scemoodle.aucegypt.edu/pluginfile.php/2573149/mod_resource/content/1/health-problems-vocabulary.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    
Health Problems Vocabulary File
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Speaking_3 ? (
                    <span
                      onClick={() => setSpeaking_3(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setSpeaking_3(1)}
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
                    to={`https://docs.google.com/document/d/1GOVmLDz3XKt9ZzByjm3mu80BVmQ_j9BXjXwqGzReZFc/edit?tab=t.0`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    master doc
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Speaking_4 ? (
                    <span
                      onClick={() => setSpeaking_4(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setSpeaking_4(1)}
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
              to={`/A1C/session2`}
              className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              <LuCircleArrowLeft />
              Session 2: A Busy Day
            </Link>
            <Link
              to={`/A1C/session4`}
              className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              Session 4: Celebrations
              <FiArrowRightCircle />
            </Link>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Session_3;
