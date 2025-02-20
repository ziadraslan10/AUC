/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../../../Components/Second-Navbar/Second-Navbar";
import { LuCircleArrowLeft } from "react-icons/lu";
import { FiArrowRightCircle } from "react-icons/fi";

function Session_4() {
    useEffect(() => {
      done ? window.scrollTo(0, 0) : null;
      setdone(false);
    });
  
    const [done, setdone] = useState(true);
  //           Vocabulary
  const [Vocabulary, setVocabulary] = useState(0);
  const [Vocabulary_1, setVocabulary_1] = useState(0);
  const [Vocabulary_2, setVocabulary_2] = useState(0);
  const [Vocabulary_3, setVocabulary_3] = useState(0);
  const [Vocabulary_4, setVocabulary_4] = useState(0);
  const [Vocabulary_5, setVocabulary_5] = useState(0);
  const [Vocabulary_6, setVocabulary_6] = useState(0);
  const [Vocabulary_7, setVocabulary_7] = useState(0);

  //            Reading
  const [Reading, setReading] = useState(0);
  const [Reading_1, setReading_1] = useState(0);
  const [Reading_2, setReading_2] = useState(0);
  const [Reading_3, setReading_3] = useState(0);
  const [Reading_4, setReading_4] = useState(0);
  const [Reading_5, setReading_5] = useState(0);

  //           Listening
  const [Listening, setListening] = useState(0);
  const [Listening_1, setListening_1] = useState(0);
  const [Listening_2, setListening_2] = useState(0);
  const [Listening_3, setListening_3] = useState(0);
  const [Listening_4, setListening_4] = useState(0);
  const [Listening_5, setListening_5] = useState(0);
  const [Listening_6, setListening_6] = useState(0);
  const [Listening_7, setListening_7] = useState(0);

  //           Other Links
  const [OtherLinks, setOtherLinks] = useState(0);
  const [OtherLinks_1, setOtherLinks_1] = useState(0);
  const [OtherLinks_2, setOtherLinks_2] = useState(0);
  const [OtherLinks_3, setOtherLinks_3] = useState(0);

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
              to={`/A1C/session3`}
              className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              <LuCircleArrowLeft />
              Session 3: Health Issues
            </Link>
            <Link
              to={`/A1C/session5`}
              className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              Session 5: Weather and Seasons
              <FiArrowRightCircle />
            </Link>
          </div>
          <h2 className="mb-8">
            <Link
              to={`/A1C/session4`}
              className="font-bold text-2xl text-sky-700 hover:underline"
            >
              Session 4: Celebrations
            </Link>
          </h2>

          <div className="">
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
                    to={`https://www.englishclub.com/vocabulary/calendar.php`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Holidays Calendar{" "}
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
                    to={`https://www.esolcourses.com/content/topics/christmas/beginner-christmas-vocabulary.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Christmas words
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
                    to={`https://www.esolcourses.com/content/topics/christmas/father-christmas/adjectives-gap-fill.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Adjectives for describing Christmas
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
                    to={`https://www.esolcourses.com/content/topics/autumn-festivals/halloween/halloween-vocabulary-uk-english.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Halloween Vocabulary
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
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    to={`https://www.esolcourses.com/content/topics/new-year/pre-intermediate/new-year-gap-fill.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    New Year in The UK
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Vocabulary_5 ? (
                    <span
                      onClick={() => setVocabulary_5(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVocabulary_5(1)}
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
                    to={`https://www.esolcourses.com/content/topics/autumn-festivals/halloween/halloween-vocabulary-list.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Halloween Vocabulary list
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Vocabulary_6 ? (
                    <span
                      onClick={() => setVocabulary_6(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVocabulary_6(1)}
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
                    to={`https://www.esolcourses.com/content/topics/thanksgiving/beginners/picture-vocabulary.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Thanksgiving Vocabulary
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Vocabulary_7 ? (
                    <span
                      onClick={() => setVocabulary_7(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVocabulary_7(1)}
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
                <h3 className="mb-5 text-blue-400">
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <a
                    target="_blank"
                    href={`https://www.esolcourses.com/content/topics/christmas/elementary-christmas-reading.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Christmas Reading for information
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
                    href={`https://www.esolcourses.com/content/topics/christmas/pre-intermediate/christmas-trees-an-american-tradition.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Christmas Tree
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
                    href={`https://www.esolcourses.com/content/topics/autumn-festivals/halloween/halloween.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Read about Halloween
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
                    href={`https://www.esolcourses.com/content/topics/festivals/easter/easter-reading-quiz.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Easter
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
                    href={`https://www.esolcourses.com/content/topics/thanksgiving/elementary-thanksgiving-reading.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Thanksgiving Reading
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
                    to={`https://learnenglishteens.britishcouncil.org/skills/listening/b1-listening/celebrations`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Celebrations.
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
                    to={`https://www.esolcourses.com/vocabulary/word-of-the-day/christmas/houseblinging.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Houseblinging
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
                    to={`https://www.esolcourses.com/content/topics/songs/new-year/abba-happy-new-year.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Happy New Year
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
                    to={`https://www.esolcourses.com/content/topics/songs/take-that/could-it-be-magic.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Could It Be Magic
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
                    to={`https://www.esolcourses.com/content/topics/folklore/superstitions/friday-the-thirteenth.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Friday the 13th.
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
                    to={`https://www.esolcourses.com/content/topics/songs/various-artists/fireworks.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Fireworks
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
                    to={`https://www.esolcourses.com/content/topics/thanksgiving/history-of-holidays-pumpkin-pie.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    The History of Pumpkin Pie
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

            {/*                    OtherLinks          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">OtherLinks</h3>
                <div className="flex items-center justify-center ">
                  {OtherLinks ? (
                    <span
                      onClick={() => setOtherLinks(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setOtherLinks(1)}
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
                    to={`https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/prepositions-time`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Prepositions of time
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {OtherLinks_1 ? (
                    <span
                      onClick={() => setOtherLinks_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setOtherLinks_1(1)}
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
                    to={`https://www.youtube.com/watch?v=O2MFducncsg`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Jingle bells - The song
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {OtherLinks_2 ? (
                    <span
                      onClick={() => setOtherLinks_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setOtherLinks_2(1)}
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
                    to={`https://www.englishclub.com/esl-videos/jingle-bells-song.php`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Jingle Bells song Lyrics
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {OtherLinks_3 ? (
                    <span
                      onClick={() => setOtherLinks_3(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setOtherLinks_3(1)}
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
                to={`/A1C/session3`}
                className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
              >
                <LuCircleArrowLeft />
                Session 3: Health Issues
              </Link>
              <Link
                to={`/A1C/session5`}
                className="  mb-1 text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
              >
                Session 5: Weather and Seasons
                <FiArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Session_4;
