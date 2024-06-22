import React, { useContext, useEffect, useState } from "react";
import GeneralLeft from "./GeneralLeft";
import GeneralRight from "./GeneralRight";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthenticationContext";
import axios from "axios";

const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const { user, authTokens } = useContext(AuthContext);

  useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/api/transactions/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        })
        .then((response) => setTransactionHistory(response.data));
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  }, []);

  console.log(transactionHistory);
  return (
    <div className="bg-bg_on h-auto bg-contain bg-no-repeat justify-center mt-[20vh] sm:bg-cover bg-center px-4 ss:px-[5rem] sm:px-[1rem] sm:flex gap-5 md:gap-12 lg:mx-[5rem]">
      <GeneralLeft />
      <div className="min-w-[349.20px] pr-2 mx-auto">
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
        <div className="flex gap-2 text-[.8rem] mt-[2rem]">
          <div className="all-cat">
            <select
              name=""
              id=""
              className="custom-select transition duration-450 ease-in-out mb-2 w-full text-white py-[0.05rem] px-2 bg-[#18202F] rounded-[.5rem] outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
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
              className="custom-select transition duration-450 ease-in-out mb-2 w-full text-white py-[0.05rem] px-2 bg-[#18202F] rounded-[.5rem] outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
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
              className="custom-select transition duration-450 ease-in-out mb-2 w-full text-white py-[0.05rem] px-2 bg-[#18202F] rounded-[.5rem] outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
            >
              <option value="" disabled>
                All Status
              </option>
              <option value="">Failed</option>
              <option value="">Successful</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-center border-[0.01rem] border-gray-900 rounded-[.5rem] bg-opacity-15 shadow-lg shadow-indigo-950/10">
          <div className="overflow-x-auto custom-scrollbar overflow-y-auto h-auto max-h-[500px]">
            <table className="text-white text-[.9rem] mx- w-full">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-2 py-1 text-start rounded-tl-[.5rem]">
                    Reference
                  </th>
                  <th className="px-2 py-1 text-start">Description</th>
                  <th className="px-2 py-1 text-start">Amount</th>
                  <th className="px-2 py-1 text-start">Balance</th>
                  <th className="px-2 py-1 text-start">Purchase Date</th>
                  <th className="px-2 py-1 text-start rounded-tr-[.5rem]">
                    Transaction Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((item) => (
                  <tr className="" key={item.transaction_ref_no}>
                    <td className="px-2 py-[1rem]">
                      {item.transaction_ref_no}
                    </td>
                    <td className="px-2 py-[1rem]">{item.product}</td>
                    <td className="px-2 py-[1rem]">₦ {item.price}</td>
                    <td className="px-2 py-[1rem]">₦ {item.wallet.balance}</td>
                    <td className="px-2 py-[1rem]">{item.date_create.slice(0, 10)}</td>
                    <td className="px-2 py-[1rem]">{item.status_display}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <GeneralRight />
    </div>
  );
};

export default TransactionHistory;
