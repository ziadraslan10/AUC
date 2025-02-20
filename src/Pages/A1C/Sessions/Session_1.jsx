/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../../../Components/Second-Navbar/Second-Navbar";
import { LuCircleArrowLeft } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";


function Session_1() {
  useEffect(() => {
    done ? window.scrollTo(0, 0) : null;
    setdone(false);
  });

  const [done, setdone] = useState(true);

  //           Vocabulary
  const [vocabulary, setvocabulary] = useState(0);
  const [vocabulary_1, setvocabulary_1] = useState(0);
  const [vocabulary_2, setvocabulary_2] = useState(0);

  //            Reading
  const [Reading, setReading] = useState(0);
  const [Reading_1, setReading_1] = useState(0);

  //           Listening
  const [Listening, setListening] = useState(0);
  const [Listening_1, setListening_1] = useState(0);
  const [Listening_2, setListening_2] = useState(0);
  const [Listening_3, setListening_3] = useState(0);
  const [Listening_4, setListening_4] = useState(0);

  //           Grammar
  const [Grammar, setGrammar] = useState(0);
  const [Grammar_1, setGrammar_1] = useState(0);
  const [Grammar_2, setGrammar_2] = useState(0);

  //            Dictation
  const [Dictation, setDictation] = useState(0);
  const [Dictation_1, setDictation_1] = useState(0);

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
            <Link to={``} className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1">
            <LuCircleArrowLeft/>
              Zoom Sessions (Only for Online Classes)
            </Link>
            <Link
              to={`/A1C/session2`}
              className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              Session 2: A Busy Day
              <FiArrowRightCircle/>
            </Link>
          </div>
          <h2 className="mb-8">
            <Link
              to={`/A1C/session1`}
              className="font-bold text-2xl text-sky-700 hover:underline"
            >
              Session 1: Could you do me a favor
            </Link>
          </h2>

          <div className="">
            {/*                    Vocabulary          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Vocabulary</h3>
                <div className="flex items-center justify-center ">
                  {vocabulary ? (
                    <span
                      onClick={() => setvocabulary(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setvocabulary(1)}
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
                    to={`http://www.esl.net/pdf/interchange_3ed_studbk_lev3_unit3.pdf?lbisphpreq=1`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Could you do me a favor?
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {vocabulary_1 ? (
                    <span
                      onClick={() => setvocabulary_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setvocabulary_1(1)}
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
                    to={`http://www.esl.net/pdf/interchange_3ed_workbk_lev3_unit3.pdf?lbisphpreq=1`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Could you do me a favor? Part2
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {vocabulary_2 ? (
                    <span
                      onClick={() => setvocabulary_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setvocabulary_2(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>

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
                <h3 className="mb-5">
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://www.rong-chang.com/nnse2/se2/snse2045.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    A Dangerous Favor
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
                    to={`https://www.youtube.com/watch?v=fehCfeIX3NE`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Will you..............?
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
                    to={`https://www.youtube.com/watch?v=-QRKjvJyGf8`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Can you help me?
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
                    to={`https://www.eslfast.com/robot/topics/employment/employment11.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Asking for Help
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
                    to={`https://www.youtube.com/watch?v=sb8b2jfDdk4`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Will you do me a favor?
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

            {/*                    Grammar          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Grammar</h3>
                <div className="flex items-center justify-center ">
                  {Grammar ? (
                    <span
                      onClick={() => setGrammar(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setGrammar(1)}
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
                    to={`https://www.thoughtco.com/asking-a-favor-in-english-4164581`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Ask For a Favor
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Grammar_1 ? (
                    <span
                      onClick={() => setGrammar_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setGrammar_1(1)}
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
                    to={`https://eslgold.com/speaking-4/ss_asking_favors/`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Asking For Favors Part 2
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Grammar_2 ? (
                    <span
                      onClick={() => setGrammar_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setGrammar_2(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/*                    Dictation          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Dictation</h3>
                <div className="flex items-center justify-center ">
                  {Dictation ? (
                    <span
                      onClick={() => setDictation(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setDictation(1)}
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
                    href={`https://www.englishclub.com/listening/dictations-m-requests.php`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Request 1
                  </a>
                </h3>
                <div className="flex items-center justify-center ">
                  {Dictation_1 ? (
                    <span
                      onClick={() => setDictation_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setDictation_1(1)}
                      className={` cursor-pointer text-sm border-gray-300 rounded-md border-2 p-2 `}
                    >
                      Mack as done
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5">
            <Link to={``} className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1">
            <LuCircleArrowLeft/>
              Zoom Sessions (Only for Online Classes)
            </Link>
            <Link
              to={`/A1C/session2`}
              className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              Session 2: A Busy Day
              <FiArrowRightCircle/>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Session_1;
