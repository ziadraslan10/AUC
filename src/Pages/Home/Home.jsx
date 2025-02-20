/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import img1 from "../../assets/Screenshot 2024-12-25 211844.png";
import img2 from "../../assets/f1.png";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>
      <div className="bg-slate-100 lg:px-20 px-5 py-5">
        <h2 className="text-2xl font-bold mb-5">
          School of Continuing Education Moodle
        </h2>
        <div className=" px-10 py-20 bg-white rounded-md  ">
          <h3 className="font-bold text-2xl">My courses</h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 space-y-4 mt-8">
            {/* A1C */}
            <div className="max-w-sm  sm:w-full sm:mb-10  box-border   bg-white border border-gray-200 rounded-lg shadow ">
              <Link to={"/A1C"}>
                <img className="rounded-t-lg " src={img1} alt="" />
              </Link>
              <div className="p-3">
                <Link to={"/A1C"}>
                  <h5 className=" text-lg  tracking-tight text-blue-600 ">
                    Survival English A1C
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Skill Level: Beginner
                </p>
              </div>
              <div className="px-3">
                <span></span>
                <div className="bg-slate-200 rounded-2xl">
                  <div className="bg-blue-500  w-1/6 p-2 text-slate-600 text-right text-xl rounded-2xl"></div>
                </div>
                <p>15% complete</p>
              </div>
              <div className="flow-root px-3">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={img2}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-3">
                        <Link to={""}>
                          <p className=" font-medium truncate text-blue-600">
                            ##ay 7agh##
                          </p>
                        </Link>
                        <p className="text-sm truncate dark:text-gray-400">
                          Teasher
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* A1D */}
            <div className="max-w-sm  sm:w-full sm:mb-10  box-border   bg-white border border-gray-200 rounded-lg shadow ">
              <img className="rounded-t-lg" src={img1} alt="" />
              <div className="p-3">
                <h5 className=" text-lg  tracking-tight text-blue-600">
                  Survival English A1D
                </h5>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Skill Level: Beginner
                </p>
              </div>
              <div className="px-3">
                <span></span>
                <div className="bg-slate-200 rounded-2xl">
                  <div className="bg-  w-5/6 p-2 text-slate-600 text-right text-xl rounded-2xl"></div>
                </div>
                <p>0% complete</p>
              </div>
              <div className="flow-root px-3">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={img2}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-3">
                        <p className=" font-medium truncate text-blue-600">
                          ##ay 7agh##
                        </p>
                        <p className="text-sm truncate dark:text-gray-400">
                          Teasher
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* A2A */}
            <div className="max-w-sm  sm:w-full sm:mb-10  box-border   bg-white border border-gray-200 rounded-lg shadow ">
              <img className="rounded-t-lg" src={img1} alt="" />
              <div className="p-3">
                <h5 className=" text-lg  tracking-tight text-blue-600">
                  Survival English A2A
                </h5>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                  Skill Level: Beginner
                </p>
              </div>
              <div className="px-3">
                <span></span>
                <div className="bg-slate-200 rounded-2xl">
                  <div className="bg-  w-5/6 p-2 text-slate-600 text-right text-xl rounded-2xl"></div>
                </div>
                <p>0% complete</p>
              </div>
              <div className="flow-root px-3">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={img2}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-3">
                        <p className=" font-medium truncate text-blue-600">
                          ##ay 7agh##
                        </p>
                        <p className="text-sm truncate dark:text-gray-400">
                          Teasher
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
