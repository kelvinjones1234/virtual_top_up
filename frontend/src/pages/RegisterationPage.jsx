import { useContext, useState, useEffect, React } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import { Link } from "react-router-dom";

const LeftSide = () => (
  <div className="left leading-[3rem] relative hidden justify-center items-center sm:flex h-[363.98px] shadow-lg shadow-indigo-900/20 bg-opacity-50 rounded-2xl w-[20rem] bg-black text-white">
    <div className="atom-logo text-[6vw] font-bold text-gradient absolute">
      Atom <br /> <span className="text-[1.5vw]">Virtual Top Up</span>
    </div>
  </div>
);

const inputStyle =
  "transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-800 hover:border-black focus:border-link bg-opacity-80";

const RegisterationPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { registerUser } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-w-[150px] bg-opacity-[95%] z-[-1] font-body_two">
      <div className="authentication bg-bg_one bg-contain md:bg-cover bg-center w-full min-h-screen bg-no-repeat">
        <div
          className={`authenticationnavbar flex justify-between p-4 md:px-[6rem] fixed top-0 w-full transition-colors duration-200 ${
            isScrolled ? "bg-opacity-100 bg-gray-900" : "bg-transparent"
          }`}
        >
          <div className="left flex items-center gap-1 ">
            <div className="logo text-link border text-[.7rem] px-2 border-white rounded-[.5rem] font-bold">
              <Link to={"/"}>Atom</Link>
            </div>
            <div className="h-3 w-3 bg-link rounded-full"></div>
            <div className="h-2 w-2 bg-link rounded-full"></div>
            <div className="h-1 w-1 bg-link rounded-full"></div>
          </div>
          <div className="right hidden ss:block text-gray-300">
            Already have an account?
            <span className="text-link font-bold cursor-pointer hover:text-sky-500 transition duration-450 ease-in-out">
              <Link to="/authentication/login"> Login</Link>
            </span>
          </div>
        </div>

        <div className="signin-form pt-[15vh] sm:flex justify-between login mx-auto px-4 w-full md:px-[4rem] lg:px-[8rem]">
          <LeftSide />
          <div className="left right sm:w-[50%] max-w-[550px] mx-auto sm:mx-0">
            <div className="top-text pb-6">
              <h5 className="font-bold text-[2rem] text-gray-300 font-heading_two">
                Signup with <span className="text-gradient">Atom</span>
              </h5>
              <p className="text-gray-300 text-[1.2rem]">
                Create an Atom account for free
              </p>
            </div>
            <form action="" onSubmit={registerUser}>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`${inputStyle}`}
                    name="full_name"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-[48%]">
                  <input
                    type="text"
                    placeholder="Username"
                    className={`${inputStyle}`}
                    name="username"
                  />
                  <input
                    type="text"
                    placeholder="Email address"
                    className={`${inputStyle}`}
                    name="email"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-[48%]">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className={`${inputStyle}`}
                    name="phone_number"
                  />
                  <input
                    type="text"
                    placeholder="Transaction Pin"
                    className={`${inputStyle}`}
                    name="transaction_pin"
                  />
                </div>
                <div className="flex flex-col sm:flex-row w-full sm:justify-between">
                  <input
                    type="password"
                    placeholder="Password"
                    className={`${inputStyle} sm:w-[48%]`}
                    name="password"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={`${inputStyle} sm:w-[48%]`}
                    name="confirm_password"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full text-white justify-between text-[1rem] text-gray-300 py-5">
                <div className="left flex place-items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 md:h-5 md:w-5 mr-3"
                  />
                  <div className="mr-6">Remember me</div>
                </div>
                <p className="right text-link font-semibold cursor-pointer hover:text-sky-500 transition duration-450 ease-in-out">
                  Forgot password?
                </p>
              </div>
              <div className="ss:pb-16">
                <button
                  className="my-2 w-full p-1 h-[3.2rem] bg-link text-black rounded-2xl bg-opacity-90 font-semibold hover:bg-sky-500 transition duration-450 ease-in-out"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="text-center text-[1rem] text-gray-300 pt-4 pb-[6rem] ss:hidden">
              <p>
                Already have an account?{" "}
                <span className="text-link font-semibold cursor-pointer hover:text-sky-500 transition duration-450 ease-in-out">
                  <Link to={"/authentication/login"}>Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterationPage;
