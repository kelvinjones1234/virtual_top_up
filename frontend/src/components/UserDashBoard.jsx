import React, { useContext } from "react";
import right_arrow from "../assets/right_arrow.svg";
import { AuthContext } from "../context/AuthenticationContext";
import GeneralLeft from "./GeneralLeft";
import GeneralRight from "./GeneralRight";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useWallet } from "../context/WalletContext";
import { FaAngleRight } from "react-icons/fa6";

const UserDashBoard = () => {
  const { productData } = useContext(ProductContext);
  const { walletData } = useWallet();

  return (
    <div className="mt-[20vh] sm:bg-cover bg-center px-4 ss:px-[5rem] sm:px-[1rem] sm:flex gap-5 md:gap-12 justify-center lg:mx-[5rem] font-body_two">
      {/* left layer */}
      <GeneralLeft />

      {/* middle layer */}

      <div className="flex flex-col justify-center text-[.8rem] md:text-[1rem]">
        <div className="rounded-[1rem] bg-primary p-4 xs:p-8 text-white shadow-lg shadow-indigo-900/10">
          <div className="flex justify-between items-center">
            <p className="pb-6">Available Balance</p>
            <Link to={"/user/dashboard/transactions"}>
              <div className="flex gap-3 cursor-pointer items-center mb-6 hover:text-sky-400 transition-all duration-400 ease-in-out">
                <p className="">Transaction History </p>
                <FaAngleRight className="h-[.9rem] mt-[0.08]" />
              </div>
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[1.5rem] font-bold">
              ₦ {walletData && walletData.balance}
            </p>
            <div className="button flex items-center">
              <div className="bg-green-500 hover:bg-green-600 transition duration-400 ease-in-out text-primary rounded-[2rem] pb-[.3rem] pt-[.4rem] px-[.9rem] font-bold cursor-pointer">
                + Fund Wallet
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[1rem] my-4 bg-primary p-4 xs:p-8 text-white shadow-lg shadow-indigo-900/10 text-[.8rem]">
          <p>
            You can create a shortcut for frequent activities and also transfer
            atom credit to other users with their phone number.
          </p>
          <div className="button flex items-center justify-between pt-4">
            <div className="bg-white cursor-pointer hover:bg-gray-200 transiton duration-500 ease-in-out text-primary rounded-[2rem] pb-[.3rem] pt-[.4rem] px-[.9rem] font-bold">
              Create Shortcut
            </div>
            <div className="text-white border border-green-500 hover:text-green-600 transiton duration-500 ease-in-out cursor-pointer rounded-[2rem] pb-[.3rem] pt-[.4rem] px-[.9rem] font-bold">
              Transfer Credit
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-5 gap-6">
          {productData.map((item) => (
            <Link
              key={item.id}
              to={`/user/dashboard/services/${item.category.toLowerCase()}`}
            >
              <div className="service-card shadow-lg shadow-indigo-500/5 p-4 h-[5.5rem] w-[5.5rem] xs:h-[6rem] xs:w-[6rem] bg-primary rounded-2xl flex flex-col justify-center items-center cursor-pointer">
                <img
                  src={`http://127.0.0.1:8000${item.image}`}
                  alt={item.name}
                  className="h-10 w-10 object-contain"
                />
                <p className="text-white text-[.7rem] text-center">
                  {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-white py-3 px-12 rounded-[2rem] text-primary font-bold shadow-indigo-500/30">
            Get Premium Service
          </button>
        </div>
      </div>
      <GeneralRight />
    </div>
  );
};

export default UserDashBoard;
