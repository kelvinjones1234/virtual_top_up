import React, { useContext, useEffect, useState } from "react";
import GeneralLeft from "./GeneralLeft";
import GeneralRight from "./GeneralRight";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthenticationContext";
import axios from "axios";

const TransactionHistory = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [timeframe, setTimeframe] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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

  useEffect(() => {
    let filtered = transactionHistory;

    if (category) {
      filtered = filtered.filter((item) => item.transaction_type === category);
    }

    if (status) {
      filtered = filtered.filter((item) => item.status_display === status);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.transaction_ref_no
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.product.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTransactions(filtered);
  }, [timeframe, category, status, searchTerm, transactionHistory]);

  return (
    <div className="bg-bg_on h-auto bg-contain bg-no-repeat justify-center mt-[20vh] sm:bg-cover bg-center px-4 ss:px-[5rem] sm:px-[1rem] sm:flex gap-5 lg:mx-[5rem]">
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
        <div className="flex gap-2 text-[.8rem] mt-[2rem] md:text-[1rem]">
          <div className="time-interval">
            <select
              name="category"
              id="category"
              className="custom-select transition duration-450 ease-in-out mb-2 w-full text-white py-[0.05rem] px-2 bg-[#18202F] rounded-[.5rem] outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All category</option>
              <option value="Data">Data</option>
              <option value="Airtime">Airtime</option>
              <option value="Cable Subscription">Cable Subscription</option>
            </select>
          </div>
          <div className="status">
            <select
              name="status"
              id="status"
              className="custom-select transition duration-450 ease-in-out mb-2 w-full text-white py-[0.05rem] px-2 bg-[#18202F] rounded-[.5rem] outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="Failed">Failed</option>
              <option value="Success">Successful</option>
            </select>
          </div>
        </div>
        <div className="py-2">
          <input
            type="search"
            placeholder="Search for transaction"
            className="outline-0 text-white py-[0.05rem] px-2 bg-[#18202F] rounded-[.5rem] border border-gray-700"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center border-[0.01rem] border-gray-900 rounded-[.5rem] bg-opacity-15 shadow-lg shadow-indigo-950/10">
          <div className="overflow-x-auto custom-scrollbar overflow-y-auto h-auto max-h-[500px]">
            <table className="text-white text-[.9rem] md:text-[1rem] mx-auto">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-2 py-1 text-start rounded-tl-[.5rem] w-[15rem]">
                    Reference
                  </th>
                  <th className="px-2 py-1 text-start w-[15rem]">
                    Description
                  </th>
                  <th className="px-2 py-1 text-start w-[15rem]">Amount</th>
                  <th className="px-2 py-1 text-start w-[15rem]">Balance</th>
                  <th className="px-2 py-1 text-start w-[15rem]">
                    Purchase Date
                  </th>
                  <th className="px-2 py-1 text-start rounded-tr-[.5rem] w-[15rem]">
                    Transaction Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((item) => (
                  <tr className="" key={item.transaction_ref_no}>
                    <td className="px-2 py-[1rem]">
                      {item.transaction_ref_no}
                    </td>
                    <td className="px-2 py-[1rem]">{item.product}</td>
                    <td className="px-2 py-[1rem]">₦ {item.price}</td>
                    <td className="px-2 py-[1rem]">₦ {item.wallet.balance}</td>
                    <td className="px-2 py-[1rem]">
                      {item.date_create.slice(0, 10)}
                    </td>
                    <td className={`px-2 py-[1rem]`}>
                      <div
                        className={`${
                          item.status_display === "Success"
                            ? "text-green-400 bg-white bg-opacity-20"
                            : "text-red-400 bg-white bg-opacity-20"
                        } text-center rounded-[.8rem] font-bol`}
                      >
                        {item.status_display}
                      </div>
                    </td>
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
