/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../../../Components/Second-Navbar/Second-Navbar";
import { LuCircleArrowLeft } from "react-icons/lu";

function Session_11() {
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

  //           Writing
  const [Writing, setWriting] = useState(0);
  const [Writing_1, setWriting_1] = useState(0);
  const [Writing_2, setWriting_2] = useState(0);
  const [Writing_3, setWriting_3] = useState(0);

  //           Videos
  const [Videos, setVideos] = useState(0);
  const [Videos_1, setVideos_1] = useState(0);
  const [Videos_2, setVideos_2] = useState(0);
  const [Videos_3, setVideos_3] = useState(0);
  const [Videos_4, setVideos_4] = useState(0);

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
              to={`/A1C/session10`}
              className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
            >
              <LuCircleArrowLeft />
              Session 10: Helping at home
            </Link>
          </div>
          <h2 className="mb-8">
            <Link
              to={`/A1C/session11`}
              className="font-bold text-2xl text-sky-700 hover:underline"
            >
              Session 11: Story Telling
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
                    href={`https://scemoodle.aucegypt.edu/pluginfile.php/2573259/mod_resource/content/1/story-time-fun-activities-games_7584.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Story Time
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
                    href={`https://scemoodle.aucegypt.edu/pluginfile.php/2573260/mod_resource/content/2/legends-about-the-discovery-of-fire-key-included-reading-comprehension-exercises_20949.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Legends about The Discovery of Fire.
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
                    href={`https://scemoodle.aucegypt.edu/pluginfile.php/2573261/mod_resource/content/1/detective-stories-reading-comprehension-exercises_22921.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Storytelling
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
                  <i className="fa-solid fa-file-pdf fa-2xl mx-2 text-blue-400"></i>

                  <a
                    target="_blank"
                    href={`https://scemoodle.aucegypt.edu/pluginfile.php/2573262/mod_resource/content/1/sleeping-beautypast-simple-reading-comprehension-exercises_20787.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    The Sleeping Beauty
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

            {/*                    Writing          */}
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5 font-bold">Writing</h3>
                <div className="flex items-center justify-center ">
                  {Writing ? (
                    <span
                      onClick={() => setWriting(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setWriting(1)}
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
                    to={`https://englishforeveryone.org/PDFs/Finish%20the%20Story%20-%20The%20Snow%20Day.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    The Snow Day
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Writing_1 ? (
                    <span
                      onClick={() => setWriting_1(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setWriting_1(1)}
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
                    to={`https://englishforeveryone.org/PDFs/Finish%20the%20Story%20-%20The%20Birthday%20Party.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    The Birthday Party
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Writing_2 ? (
                    <span
                      onClick={() => setWriting_2(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setWriting_2(1)}
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
                    to={`https://englishforeveryone.org/PDFs/Finish%20the%20Story%20-%20Beachtrip.pdf`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    The Beach Trip
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Writing_3 ? (
                    <span
                      onClick={() => setWriting_3(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setWriting_3(1)}
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
                    to={`https://www.manythings.org/videos/aesop/40.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    The Peacock's Complaint - A Story of Peacock
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
                    to={`https://www.manythings.org/videos/aesop/21.html`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    The Dove and the Ant
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
            <div className={`mb-2`}>
              <div className="lg:flex justify-between p-4 rounded-xl border-2 border-gray-200 ">
                <h3 className="mb-5">
                  <i className="fa-solid fa-globe fa-2xl mx-1 text-blue-400"></i>
                  <Link
                    target="_blank"
                    to={`https://learnenglishkids.britishcouncil.org/listen-watch/short-stories/little-red-riding-hood?_ga=2.161107645.1469881355.1554893343-1395911027.1554893343`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Little red riding hood
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Videos_3 ? (
                    <span
                      onClick={() => setVideos_3(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVideos_3(1)}
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
                    to={`https://learnenglishkids.britishcouncil.org/listen-watch/short-stories/jack-beanstalk?_ga=2.206130451.1469881355.1554893343-1395911027.1554893343`}
                    className="text-sky-700 hover:underline  hover:text-sky-900 "
                  >
                    Jack and the beanstalk
                  </Link>
                </h3>
                <div className="flex items-center justify-center ">
                  {Videos_4 ? (
                    <span
                      onClick={() => setVideos_4(0)}
                      className={` cursor-pointer text-sm bg-green-200 p-2 border-gray-300 rounded-md border-2 `}
                    >
                      <i className="fa-solid fa-check mr-2"></i>Done
                    </span>
                  ) : (
                    <span
                      onClick={() => setVideos_4(1)}
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
                to={`/A1C/session10`}
                className=" text-sky-700 hover:underline hover:text-sky-900 flex items-center gap-1"
              >
                <LuCircleArrowLeft />
                Session 10: Helping at home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Session_11;
