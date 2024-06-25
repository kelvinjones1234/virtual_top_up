import { useContext, React, useState, useEffect } from "react";
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
  const { loginUser, userError, setUserError } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // validate login input
  const [errorMessage, setErrorMessage] = useState({});

  const login = (e) => {
    e.preventDefault();
    if (validInputs()) {
      loginUser(username, password);
    }
  };

  useEffect(() => {
    if (userError) {
      setErrorMessage((prev) => ({
        ...prev,
        anonymousError:
          "Incorrect login details. Password and username are case sensitive.",
      }));
    }
  }, [userError]);

  useEffect(() => {
    if (errorMessage.anonymousError) {
      setUserError("");
    }
  }, [errorMessage.anonymousError, setUserError]);

  const validInputs = () => {
    const newError = {};
    if (!username) {
      newError.usernameError = "Please fill in your username";
    }
    if (!password) {
      newError.passwordError = "Please fill in your password";
    }
    setErrorMessage(newError);
    return Object.keys(newError).length === 0;
  };

  return (
    <div className="min-w-[150px] bg-opacity-[95%] z-[-1] font-body_two">
      <div className="authentication bg-bg_one bg-contain md:bg-cover bg-center w-full min-h-screen bg-no-repeat">
        <div className="authenticationnavbar flex justify-between p-4 lg:px-[6rem]">
          <div className="left flex items-center gap-1 ">
            <div className="logo text-link border text-[.7rem] px-2 border-white rounded-[.5rem] font-bold">
              <Link to={"/"}>Atom</Link>
            </div>
            <div className="h-3 w-3 bg-link rounded-full"></div>
            <div className="h-2 w-2 bg-link rounded-full"></div>
            <div className="h-1 w-1 bg-link rounded-full"></div>
          </div>
          <div className="hidden ss:block text-gray-300">
            Don't have an account?
            <span className="text-link font-bold cursor-pointer hover:text-sky-400 transition duration-450 ease-in-out">
              <Link to="/authentication/register"> Get started</Link>
            </span>
          </div>
        </div>
        <form
          onSubmit={login}
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
            {errorMessage.anonymousError && (
              <div className="text-white ">
                <p>
                  Incorrect login details.
                  <br /> Password and username are case sensitive.
                </p>
              </div>
            )}
            <div>
              <input
                type="text"
                value={username}
                placeholder="Username"
                aria-label="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              />
              {errorMessage.usernameError && (
                <div className="text-white mb-3 ">
                  {errorMessage.usernameError}
                </div>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
                autoComplete="current-password"
                className="transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80"
              />
              {errorMessage.passwordError && (
                <div className="text-white">{errorMessage.passwordError}</div>
              )}
            </div>
            <div className="flex flex-wrap w-full text-white justify-between text-[1rem] text-gray-300 py-5">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 md:h-5 md:w-5 mr-3" />
                <label>Remember me</label>
              </div>
              <p className="text-link hover:text-sky-400 font-semibold cursor-pointer">
                Forgot password?
              </p>
            </div>
            <div>
              <button
                className="text-[1rem] my-2 w-full outline-none text-white p-1 h-[3.2rem] bg-link text-black rounded-2xl bg-opacity-[90%] font-semibold hover:bg-sky-400 transition duration-450 ease-in-out"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="text-center text-[1rem] text-gray-300 py-4 ss:hidden">
              <p>
                Don't have an account?{" "}
                <span className="text-link font-semibold cursor-pointer">
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
