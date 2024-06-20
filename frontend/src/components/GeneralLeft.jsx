import { AuthContext } from "../context/AuthenticationContext";
import dashboard from "../assets/dashboard.svg";
import transfer from "../assets/transfer.svg";
import price_list from "../assets/price_list.svg";
import logout from "../assets/logout.svg";
import services from "../assets/services.svg";
import right_arrow from "../assets/right_arrow.svg";
import bottom_arrow from "../assets/bottom_arrow.svg";
import Transfer from "./Transfer";

import { Link, useLocation } from "react-router-dom";
import { useContext, React, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const GeneralLeft = () => {
  const { logoutUser } = useContext(AuthContext);
  const { productData } = useContext(ProductContext);
  const [servicesDropDown, setservicesDropDown] = useState(false);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [transferForm, setTransferForm] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleServicesDropDowns = () => {
    setservicesDropDown((previous) => !previous);
    if (transferForm) {
      setTransferForm(false);
    }
  };

  const handleTransferForm = () => {
    setTransferForm((previous) => !previous);
    if (servicesDropDown) {
      setservicesDropDown(false);
    }
  };

  return (
    <div className="w-[25rem] h-[calc(100vh-25vh)] bord hidden pr-5 sm:block overflow-y-auto sticky top-[15vh] self-start font-body_two custom-scrollbar">
      <div>
        <div
          className={`py-[.7rem] rounded-xl font-bold text-white px-4 mt-4 max-w-[13rem] sm:mt-0 ${
            activePath === "/user/dashboard"
              ? "bg-white bg-opacity-20"
              : "hover:bg-white hover:bg-opacity-5 transition duration-400 ease-in-out"
          }`}
        >
          <div className="cursor-pointer inline-flex items-center gap-3">
            <img src={dashboard} alt="" className="w-4" />
            <Link to={"/user/dashboard"}>
              <p className="">Dashboard</p>
            </Link>
          </div>
        </div>
        <div
          className={`py-[.7rem] gap-3 rounded-xl flex items-center max-w-[13rem] font-bold text-white px-4 mt-4 ${
            activePath === "/user/transfer"
              ? "bg-white bg-opacity-20"
              : "hover:bg-white hover:bg-opacity-5 transition duration-400 ease-in-out"
          }`}
        >
          <img src={transfer} alt="" className="w-4" />
          <p className="cursor-pointer" onClick={handleTransferForm}>
            Transfer
          </p>
        </div>
        <div className={`relative my-5 ${transferForm ? "block" : "hidden"}`}>
          <Transfer />
        </div>
        <div className="">
          <div
            className={`py-[.7rem] rounded-xl max-w-[13rem] flex items-center font-bold text-white px-4 mt-4 hover:bg-white hover:bg-opacity-5 transition duration-400 ease-in-out 
          ${
            servicesDropDown
              ? "bg-white bg-opacity-5"
              : "hover:bg-white hover:bg-opacity-5"
          } ${
              activePath === "/user/dashboard/services/data" ||
              activePath === "/user/dashboard/services/airtime" ||
              activePath === "/user/dashboard/services/cable subscription"
                ? "bg-white bg-opacity-20"
                : "hover:bg-white hover:bg-opacity-5 transition duration-400 ease-in-out"
            }`}
          >
            <div
              className="flex items-center relative cursor-pointer"
              onClick={handleServicesDropDowns}
            >
              <div className="flex items-center gap-3">
                <img src={services} alt="" className="w-4" />
                <div className="">Services</div>
              </div>
              <div className="ml-[2rem]">
                <img
                  src={servicesDropDown ? bottom_arrow : right_arrow}
                  alt=""
                  className="w-4 absolute top-[.3rem]"
                />
              </div>
            </div>
          </div>
          <div
            className={`dropdown transition-all max-w-[13rem] duration-400 ease-in-out overflow-hidden ${
              servicesDropDown ? "block" : "hidden"
            }`}
          >
            <div className="sidebar-auth-dropdown text-white">
              {productData.slice(0, 4).map((items) => (
                <li
                  className="mt-4 pl-11 bg-opacity-25 flex py-2 px-2 rounded-xl hover:bg-white max-w-[13rem] hover:bg-opacity-5 transition duration-400 ease-in-out"
                  key={items.id}
                >
                  <Link
                    to={`/user/dashboard/services/${items.category.toLowerCase()}`}
                  >
                    {items.category}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`py-[.7rem] gap-3 rounded-xl max-w-[13rem] flex items-center font-bold text-white px-4 mt-4 ${
            activePath === "/user/price-list"
              ? "bg-white bg-opacity-20"
              : "hover:bg-white hover:bg-opacity-5 transition duration-400 ease-in-out"
          }`}
        >
          <img src={price_list} alt="" className="w-4" />
          <Link to={"/user/price-list"}>
            <p className="cursor-pointer">Price List</p>
          </Link>
        </div>
        <div
          className="hover:bg-white hover:bg-opacity-5 max-w-[13rem] transition duration-400 ease-in-out py-[.7rem] gap-3 rounded-xl flex items-center font-bold text-white px-4 mt-4"
          onClick={logoutUser}
        >
          <img src={logout} alt="" className="w-4" />
          <p className="cursor-pointer">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralLeft;
