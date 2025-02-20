/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../../../Components/Second-Navbar/Second-Navbar";
import { LuCircleArrowLeft } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";

function Session_7() {
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

  //           Vocabulary
  const [Vocabulary, setVocabulary] = useState(0);
  const [Vocabulary_1, setVocabulary_1] = useState(0);
  const [Vocabulary_2, setVocabulary_2] = useState(0);
  const [Vocabulary_3, setVocabulary_3] = useState(0);
  const [Vocabulary_4, setVocabulary_4] = useState(0);

  //           Listening
  const [Listening, setListening] = useState(0);
  const [Listening_1, setListening_1] = useState(0);

  //           Grammar
  const [Grammar, setGrammar] = useState(0);
  const [Grammar_1, setGrammar_1] = useState(0);

  //           Videos
  const [Videos, setVideos] = useState(0);
  const [Videos_1, setVideos_1] = useState(0);

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
              to={`/A1C/session6`}
              className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              <LuCircleArrowLeft />
              Session 6: Vacations
            </Link>
            <Link
              to={`/A1C/session8`}
              className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              Session 8: Decision Making
              <FiArrowRightCircle />
            </Link>
          </div>
          <h2 className="mb-8">
            <Link
              to={`/A1C/session7`}
              className="font-bold text-2xl text-sky-700 hover:underline"
            >
              Session 7: Home & Furniture
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
                    href={`https://en.islcollective.com/resources/printables/worksheets_doc_docx/this_is_my_house/present-simple-rooms/4833`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    This is my house
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
                    href={`https://www.eslfast.com/easyread/es/easy044.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    My Family’s House
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
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://www.eslfast.com/easyread/es/easy166.htm#google_vignette`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    A small apartment
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
                    href={`https://www.eslfast.com/easyread/es/easy006.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    The top bunk
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

            {/*                    Vocabulary          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Vocabulary</h3>
                <div className="flex items-center justify-center ">
                  {Vocabulary ? (
                    <span
                      onClick={() => setVocabulary(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVocabulary(1)}
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
                    to={`https://agendaweb.org/vocabulary/house_furniture-exercises.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    House furniture
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Vocabulary_1 ? (
                    <span
                      onClick={() => setVocabulary_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVocabulary_1(1)}
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
                    to={`https://learnenglishkids.britishcouncil.org/grammar-vocabulary/word-games/home-objects`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Home Objects
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Vocabulary_2 ? (
                    <span
                      onClick={() => setVocabulary_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVocabulary_2(1)}
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
                    to={`https://learnenglishkids.britishcouncil.org/grammar-vocabulary/word-games/furniture`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Furniture
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Vocabulary_3 ? (
                    <span
                      onClick={() => setVocabulary_3(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVocabulary_3(1)}
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
                    to={`https://learnenglishkids.britishcouncil.org/grammar-vocabulary/word-games/rooms`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Rooms
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Vocabulary_4 ? (
                    <span
                      onClick={() => setVocabulary_4(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVocabulary_4(1)}
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
                    to={`https://esl.bowvalleycollege.ca/listen/mp3/mason.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Mr. Mason’s apartment
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
                    to={`https://www.grammar.cl/Present/ThereIsThereAre.htm`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Use of there is and there are
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
                    to={`https://www.youtube.com/watch?v=L3nigtEU7rE`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Around the house
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

            <div className="flex justify-between mt-5">
              <Link
                to={`/A1C/session6`}
                className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
              >
                <LuCircleArrowLeft />
                Session 6: Vacations
              </Link>
              <Link
                to={`/A1C/session8`}
                className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
              >
                Session 8: Decision Making
                <FiArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Session_7;
