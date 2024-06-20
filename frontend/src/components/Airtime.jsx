import axios from "axios";
import { ProductContext } from "../context/ProductContext";
import GeneralLeft from "./GeneralLeft";
import GeneralRight from "./GeneralRight";
import { useState, React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Airtime = () => {
  const { airtimeNetworks } = useContext(ProductContext);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [airtimeTypes, setAirtimeTypes] = useState([]);
  const [selectedAirtimeType, setSelecedAirtimeType] = useState("");
  const [bypassPhoneNumber, setBypassPhoneNumber] = useState(false);

  const handleNetworkChange = (e) => {
    setSelectedNetwork(e.target.value);
    setAirtimeTypes([]);
    setSelecedAirtimeType("");
  };

  const handleSelectedAirtimeTypeChange = (e) => {
    setSelecedAirtimeType(e.target.value);
  };

  useEffect(() => {
    if (selectedNetwork) {
      axios
        .get(
          `http://127.0.0.1:8000/api/airtime/airtime-type/${selectedNetwork}/`
        )
        .then((response) => setAirtimeTypes(response.data))
        .catch((error) => console.error("Error fetching plan types:", error));
    }
  }, [selectedNetwork]);

  const handleBypass = () => {
    setBypassPhoneNumber(!bypassPhoneNumber);
  };

  return (
    <div className="bg-bg_on h-auto bg-contain bg-no-repeat mt-[20vh] justify-center sm:bg-cover bg-center px-4 ss:px-[5rem] sm:px-[1rem] sm:flex gap-5 md:gap-12 lg:mx-[5rem] font-body_two">
      <GeneralLeft />
      <div>
        <div>
          <h2 className="font-bold font-heading_two text-white text-[1.5rem]">
            Buy Airtime
          </h2>
          <div className="flex items-center text-gray-100 py-4 font-semibold">
            <Link to={"/user/dashboard"}>Dashboard</Link>{" "}
            <div className="h-1 w-1 mx-5 bg-white rounded-full"></div>
            <span className="text-gray-500">Airtime</span>
          </div>
        </div>
        <div className="flex flex-col justify-center border-[0.01rem] border-gray-900 p-5 rounded-[1.5rem] bg-opacity-15 shadow-lg shadow-indigo-950/10">
          <form>
            <div>
              <select
                name="network"
                aria-label="Network"
                className="custom-select sm:w-[40vw] transition duration-450 ease-in-out mb-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
                value={selectedNetwork}
                onChange={handleNetworkChange}
              >
                <option value="" disabled>
                  Network
                </option>
                {airtimeNetworks.map((item) => (
                  <option key={item.network_id} value={item.network}>
                    {item.network.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                name="planType"
                aria-label="Plan Type"
                className="custom-select sm:w-[40vw] transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
                value={selectedAirtimeType}
                onChange={handleSelectedAirtimeTypeChange}
                disabled={
                  !selectedNetwork ||
                  !airtimeTypes.some((type) => type.is_active)
                }
              >
                <option value="" disabled>
                  Plan Type
                </option>
                {airtimeTypes.map((item) => (
                  <option
                    key={item.id}
                    value={item.airtime_type}
                    disabled={!item.is_active}
                  >
                    {item.airtime_type.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                aria-label="Phone number"
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
              />
            </div>
            <div>
              <input
                type="text"
                name="amount"
                placeholder="Amount"
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 bg-opacity-80"
              />
            </div>
            <div>
              <input
                type="password"
                name="pin"
                placeholder="Transaction Pin"
                aria-label="Password"
                autoComplete="current-password"
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
              />
            </div>

            <div className="flex flex-wrap w-full text-white justify-between text-[1rem] py-5">
              <p
                className="text-white opacity-80 font-semibold cursor-pointer"
                onClick={handleBypass}
              >
                Bypass Phone Number
              </p>
              <div className="flex items-center mr-3">
                <div
                  className={`h-4 w-9 rounded-2xl flex items-center relative ${
                    bypassPhoneNumber ? "bg-gray-600" : "bg-primary"
                  }`}
                >
                  <div
                    className={`button h-5 w-5 bg-white rounded-full absolute transition-all duration-500 ease-in-out ${
                      bypassPhoneNumber ? "right-0" : "left-0"
                    }`}
                    onClick={handleBypass}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="text-[1rem] my-2 w-full outline-none text-white p-1 h-[3.2rem] bg-[#1CCEFF] text-black rounded-2xl bg-opacity-[90%] font-semibold hover:bg-sky-500 transition duration-450 ease-in-out"
                type="submit"
              >
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
      <GeneralRight />
    </div>
  );
};

export default Airtime;
