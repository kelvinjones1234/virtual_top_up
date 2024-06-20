import React from "react";
import GeneralLeft from "./GeneralLeft";
import GeneralRight from "./GeneralRight";
import { Link } from "react-router-dom";

const TransactionHistory = () => {
  return (
    <div className="bg-bg_on h-auto bg-contain bg-no-repeat justify-center mt-[20vh] sm:bg-cover bg-center px-4 ss:px-[5rem] sm:px-[1rem] sm:flex gap-5 md:gap-12 lg:mx-[5rem]">
      <GeneralLeft />
      <div className="w-full mx-auto">
        <div>
          <h2 className="font-bold font-heading_two text-white text-[1.5rem]">
            Transaction History
          </h2>
          <div className="flex items-center text-gray-100 py-4 font-semibold">
            <Link to={"/user/dashboard"}>Dashboard</Link>{" "}
            <div className="h-1 w-1 mx-5 bg-white rounded-full"></div>
            <span className="text-gray-500">History</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="all-cat">
            <select
              name=""
              id=""
              className="custom-select transition duration-450 ease-in-out mb-2 w-full text-white py-[0.05rem] px-2 bg-[#18202F] text-[1rem] rounded-xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
            >
              <option value="" disabled>
                TimeFrame
              </option>
              <option value="">July</option>
              <option value="">August</option>
            </select>
          </div>
          <div className="time-interval">
            <select
              name=""
              id=""
              className="custom-select transition duration-450 ease-in-out mb-2 w-full text-white py-[0.05rem] px-2 bg-[#18202F] text-[1rem] rounded-xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="">Data</option>
              <option value="">Airtime</option>
            </select>
          </div>
          <div className="status">
            <select
              name=""
              id=""
              className="custom-select transition duration-450 ease-in-out mb-2 w-full text-white py-[0.05rem] px-2 bg-[#18202F] text-[1rem] rounded-xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
            >
              <option value="" disabled>
                All Status
              </option>
              <option value="">Failed</option>
              <option value="">Successful</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-center border-[0.01rem] border-gray-900 p-5 rounded-[1.5rem] bg-opacity-15 shadow-lg shadow-indigo-950/10">
          <div>
            <div>
              <input
                type="text"
                name="iuc_number"
                placeholder="IUC Number"
                aria-label="IUC Number"
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Pin"
                aria-label="Password"
                autoComplete="current-password"
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
              />
            </div>
            <div>
              <input
                type="text"
                disabled
                name="price"
                placeholder="Price"
                value=""
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 bg-opacity-80"
              />
            </div>

            <div>
              <button
                className="text-[1rem] my-2 w-full outline-none text-white p-1 h-[3.2rem] bg-[#1CCEFF] text-black rounded-2xl bg-opacity-[90%] font-semibold hover:bg-sky-500 transition duration-450 ease-in-out"
                type="submit"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      <GeneralRight />
    </div>
  );
};

export default TransactionHistory;
