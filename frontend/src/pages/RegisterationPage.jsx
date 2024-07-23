import { useContext, useState, useEffect, React } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import { Link } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";

const LeftSide = () => (
  <div className="left mt-[6.8rem] leading-[3rem] relative hidden justify-center items-center sm:flex h-[363.98px] shadow-lg shadow-indigo-900/20 bg-opacity-50 rounded-2xl w-[20rem] bg-black text-white">
    <div className="atom-logo text-[6vw] font-bold text-gradient absolute">
      Atom <br /> <span className="text-[1.5vw]">Virtual Top Up</span>
    </div>
  </div>
);

const inputStyle =
  "transition duration-450 ease-in-out my-2 w-full text-white py-1 px-4 h-[3.5rem] bg-[#18202F] text-[1.2rem] rounded-2xl outline-0 border border-gray-700 hover:border-black focus:border-link bg-opacity-80";

const RegisterationPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { registerUser } = useContext(AuthContext);
  const { setLoading } = useContext(GeneralContext);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone_number: "",
    transaction_pin: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
  };
  return (
    <div className="min-w-[150px] bg-opacity-[95%] z-[-1] font-body_two">
      <div className="authentication bg-bg_one bg-contain md:bg-cover bg-center w-full min-h-screen bg-no-repeat fixed z-[-1]"></div>
      <div>
        <div
          className={`authenticationnavbar flex justify-between p-4 md:px-[6rem] fixed top-0 w-full transition-colors duration-200 ${
            isScrolled ? "bg-opacity-100 bg-gray-900" : "bg-transparent"
          }`}
        >
          <div className="left flex items-center gap-1">
            <Link to={"/"}>
              <div className="logo font-heading_one text-green-500 border border-green-500 px-2 text-[.7rem] px-2 border-white rounded-[.5rem] font-bold">
                Atom
              </div>
            </Link>
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-between">
                <div className="w-full sm:w-[48%]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className={inputStyle}
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={inputStyle}
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <input
                    type="text"
                    placeholder="Username"
                    className={inputStyle}
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <input
                    type="text"
                    placeholder="Email address"
                    className={inputStyle}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className={inputStyle}
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <input
                    type="password"
                    placeholder="Transaction Pin"
                    className={inputStyle}
                    name="transaction_pin"
                    autoComplete="current-password"
                    value={formData.transaction_pin}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <input
                    type="password"
                    placeholder="Password"
                    className={inputStyle}
                    name="password"
                    value={formData.password}
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-[48%]">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={inputStyle}
                    name="confirm_password"
                    autoComplete="current-password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="ss:pb-16">
                <button
                  className="my-6 w-full p-1 h-[3.2rem] bg-link text-black rounded-2xl bg-opacity-90 font-semibold hover:bg-sky-500 transition duration-450 ease-in-out"
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
                  <Link to="/authentication/login">Login</Link>
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
