import React, { useState, useEffect, useContext } from "react";
import GeneralLeft from "./GeneralLeft";
import GeneralRight from "./GeneralRight";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthenticationContext";

const Profile = () => {
  const { authTokens } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    transaction_pin: "",
  });

  useEffect(() => {
    // Fetch user data
    axios
      .get("http://127.0.0.1:8000/api/user/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user data!", error);
      });
  }, [authTokens.access]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    axios
      .put("http://127.0.0.1:8000/api/user/", userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      })
      .then((response) => {
        console.log("User data updated successfully:", response.data);
        setSuccessMessage("Profile updated successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000); // Hide message after 3 seconds
      })
      .catch((error) => {
        console.error("There was an error updating the user data!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (userData.phone_number.length !== 11) {
      newErrors.phone_number = "Invalid Phone Number.";
    }
    if (userData.transaction_pin.length !== 4) {
      newErrors.transaction_pin = "Transaction pin must be exactly 4 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="mt-[20vh] sm:bg-cover bg-center px-4 justify-center ss:px-[5rem] sm:px-[1rem] sm:flex gap-5 md:gap-12 lg:mx-[5rem]">
      <GeneralLeft />
      <div>
        <div>
          <h2 className="font-bold font-heading_two text-white text-[1.5rem]">
            Profile
          </h2>
          <div className="flex items-center text-gray-100 py-4 font-semibold">
            <Link to={"/user/dashboard"}>Dashboard</Link>{" "}
            <div className="h-1 w-1 mx-5 bg-white rounded-full"></div>
            <span className="text-gray-500">Edit Profile</span>
          </div>
        </div>
        <div className="flex flex-col justify-center border-[0.01rem] border-gray-900 p-5 rounded-[1.5rem] bg-opacity-15 shadow-lg shadow-indigo-950/10">
          {successMessage && (
            <div className="transition-opacity duration-1000 ease-in-out bg-green-500 text-white p-2 rounded mb-4">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="">
            <div>
              <input
                disabled
                type="text"
                name="username"
                aria-label="User Name"
                value={userData.username}
                className="sm:w-[40vw] transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              />
            </div>
            <div>
              <input
                type="text"
                name="first_name"
                aria-label="First Name"
                value={userData.first_name}
                onChange={handleChange}
                className="sm:w-[40vw] transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              />
            </div>
            <div>
              <input
                type="text"
                name="last_name"
                aria-label="Last Name"
                value={userData.last_name}
                onChange={handleChange}
                className="sm:w-[40vw] transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                aria-label="Phone number"
                value={userData.phone_number}
                onChange={handleChange}
                className="sm:w-[40vw] transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              />
              {errors.phone_number && (
                <div className="text-red-500">{errors.phone_number}</div>
              )}
            </div>
            <div>
              <input
                type="password"
                name="transaction_pin"
                placeholder="Pin"
                aria-label="Transaction Pin"
                value={userData.transaction_pin}
                onChange={handleChange}
                className="sm:w-[40vw] transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              />
              {errors.transaction_pin && (
                <div className="text-red-500">{errors.transaction_pin}</div>
              )}
            </div>
            <div>
              <button
                className="text-[1rem] my-2 w-full outline-none text-white p-1 h-[3.2rem] bg-link text-black rounded-2xl bg-opacity-[90%] font-semibold hover:bg-sky-500 transition duration-450 ease-in-out"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <GeneralRight />
    </div>
  );
};

export default Profile;
