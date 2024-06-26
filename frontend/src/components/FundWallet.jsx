import React, { useEffect } from "react";
import GeneralLeft from "./GeneralLeft";
import GeneralRight from "./GeneralRight";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const FundWallet = () => {
  useEffect(() => {
    const loadMonnifySDK = async () => {
      const script = document.createElement("script");
      script.src = "https://sdk.monnify.com/plugin/monnify.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Monnify SDK Loaded");
      };

      script.onerror = () => {
        console.error("Failed to load Monnify SDK");
      };

      return () => {
        document.body.removeChild(script);
      };
    };

    loadMonnifySDK();
  }, []);

  const payWithMonnify = async () => {

    if (typeof MonnifySDK === "undefined") {
      console.error("Monnify SDK is not loaded yet.");
      return;
    }

    MonnifySDK.initialize({
      amount: 100,
      currency: "NGN",
      reference: String(new Date().getTime()),
      customerFullName: "Damilare Ogunnaike",
      customerEmail: "ogunnaike.damilare@gmail.com",
      apiKey: "MK_TEST_YX3CEVCCPN",
      contractCode: "9500216336",
      paymentDescription: "Lahray World",
      metadata: {
        name: "Damilare",
        age: 45,
      },
      onLoadStart: () => {
        console.log("Loading has started");
      },
      onLoadComplete: () => {
        console.log("SDK is UP");
      },
      onComplete: (response) => {
        console.log("Transaction complete:", response);
      },
      onClose: (data) => {
        console.log("Modal closed:", data);
      },
    });
  };

  return (
    <div className="mt-[20vh] sm:bg-cover bg-center px-4 ss:px-[5rem] sm:px-[1rem] sm:flex gap-5 md:gap-12 justify-center lg:mx-[5rem] font-body_two">
      {/* Left layer */}
      <GeneralLeft />

      {/* Middle layer */}
      <div className="min-w-[400px]">
        <div>
          <input
            type="text"
            placeholder="Enter Amount"
            aria-label="Enter Amount"
            className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
          />
        </div>
        <div>
          <button
            onClick={payWithMonnify}
            className="text-[1rem] my-2 w-full outline-none text-white p-1 h-[3.2rem] bg-link text-black rounded-2xl bg-opacity-[90%] font-semibold hover:bg-sky-400 transition duration-450 ease-in-out"
            type="button"
          >
            Proceed
          </button>
        </div>
      </div>

      {/* Right layer */}
      <GeneralRight />
    </div>
  );
};

export default FundWallet;
