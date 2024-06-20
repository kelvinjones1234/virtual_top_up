import { useContext, React } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import { Link } from "react-router-dom";

const LeftSide = () => (
  <div className="left leading-[3rem] relative hidden justify-center items-center sm:flex h-[364px] shadow-lg shadow-indigo-900/20 bg-opacity-50 rounded-2xl w-[20rem] bg-black text-white">
    <div className="atom-logo text-[6vw] font-bold text-gradient absolute">
      Atom <br /> <span className="text-[1.5vw]">Virtual Top Up</span>
    </div>
  </div>
);

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  return (
    <div className="bg-primary min-h-screen min-w-[150px] bg-opacity-[95%] z-[-1] font-body_two">
      <div className="authentication bg-bg_one bg-contain md:bg-cover bg-center w-full min-h-screen bg-no-repeat">
        <div className="authenticationnavbar flex justify-between p-4 lg:px-[6rem]">
          <div className="logo text-white">Atom</div>
          <div className="hidden ss:block text-gray-300">
            Don't have an account?
            <span className="text-[#1CCEFF] font-bold cursor-pointer hover:text-sky-500 transition duration-450 ease-in-out">
              <Link to="/authentication/register"> Get started</Link>
            </span>
          </div>
        </div>

        <form
          onSubmit={loginUser}
          className="font-poppins mt-[15vh] sm:flex justify-between login mx-auto px-4 w-full md:px-[4rem] lg:px-[8rem]"
        >
          <LeftSide />
          <div className="right sm:w-[50%] max-w-[550px] mx-auto sm:mx-0">
            <div className="top-text pb-6">
              <h5 className="font-bold font-heading_two text-[2rem] text-gray-300">
                Signin to <span className="text-gradient">Atom</span>
              </h5>
              <p className="text-gray-300 text-[1.2rem]">
                Enter your details below
              </p>
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                aria-label="Username"
                autoComplete="username"
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                autoComplete="current-password"
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-[#1CCEFF] bg-opacity-80"
              />
            </div>
            <div className="flex flex-wrap w-full text-white justify-between text-[1rem] text-gray-300 py-5">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 md:h-5 md:w-5 mr-3" />
                <label>Remember me</label>
              </div>
              <p className="text-[#1CCEFF] font-semibold cursor-pointer">
                Forgot password?
              </p>
            </div>
            <div>
              <button
                className="text-[1rem] my-2 w-full outline-none text-white p-1 h-[3.2rem] bg-[#1CCEFF] text-black rounded-2xl bg-opacity-[90%] font-semibold hover:bg-sky-500 transition duration-450 ease-in-out"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="text-center text-[1rem] text-gray-300 py-4 ss:hidden">
              <p>
                Don't have an account?{" "}
                <span className="text-[#1CCEFF] font-semibold cursor-pointer">
                  <Link to={"/authentication/register"}>Get started</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
