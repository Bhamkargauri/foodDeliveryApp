import { useRef, useState } from "react";
import loginBg from "../assets/images/imgbg.jpg";
import { DataValidation } from "./Validation";

const SignUp = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const email = useRef(null);
  // console.log("Email = ", email);
  const password = useRef(null);
  // console.log("Password = ", password);

  const handleForm = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const isValid = DataValidation(emailValue, passwordValue);
  };

  return (
    <>
      {/* registration page */}
      <div
        className="font-poppins flex flex-col justify-center min-h-screen px-4 sm:px-6 py-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div
          className="
      w-full sm:w-[90%] md:w-[70%] lg:w-[40%] xl:w-[40%]
      bg-white/40 backdrop-blur-md
      rounded-tr-[200px] rounded-bl-[200px]
      shadow-2xl
      px-6 sm:px-8 md:px-10 py-6 sm:py-8
      dark:bg-pink-500/70
      transition-all duration-300
      ml-auto
      mr-28
    "
        >
          <div className="p-2 sm:p-4 md:p-6 space-y-4 md:space-y-5">
            {isLoginOpen ? (
              <form className="space-y-4 md:space-y-4" onSubmit={handleSubmit}>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-pink-700 text-center md:text-left">
                  Sign In
                </h1>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    ref={email}
                    className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 
              dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 
              focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    ref={password}
                    placeholder="******"
                    className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 
              dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 
              focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-pink-700/50 hover:bg-pink-200 hover:text-pink-700 focus:outline-offset-2 
            text-white font-medium rounded-xl text-sm px-4 py-2 backdrop-blur-md ml-auto block mb-1 cursor-pointer"
                >
                  Sign In
                </button>

                <p className="text-sm font-light text-right dark:text-gray-600">
                  Create an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    onClick={handleForm}
                  >
                    Sign Up
                  </a>
                </p>
              </form>
            ) : (
              <form className="space-y-4 md:space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-pink-700 text-center md:text-left">
                  Sign Up
                </h1>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 
              dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 
              focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 
              dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 
              focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 
              dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 
              focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 
              dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 
              focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
                    required
                  />
                </div>

                <button
                    type="submit"
                    
                  className="bg-pink-700/50 hover:bg-pink-200 hover:text-pink-700 focus:outline-offset-2 
            text-white font-medium rounded-xl text-sm px-4 py-2 backdrop-blur-md ml-auto block mb-1 cursor-pointer"
                >
                  Sign Up
                </button>

                <p className="text-sm font-light text-right dark:text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    onClick={handleForm}
                  >
                    Sign In
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* login page */}

      {/* <div
        className="font-poppins flex flex-col justify-center px-6 py-6 mx-auto md:h-screen lg:py-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="md:ml-[600px] w-full bg-white/40 backdrop-blur-md rounded-tr-[200px] rounded-bl-[200px] md:mt-0 sm:max-w-md xl:p-0 dark:bg-pink-500/70 shadow-2xl px-8">
          <div className="p-4 space-y-4 md:space-y-5 sm:p-6">
            
            
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SignUp;
