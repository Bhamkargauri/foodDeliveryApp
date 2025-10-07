import loginBg from "../assets/images/imgbg.jpg";

const SignUp = () => {
  return (
    <>
      {/* registration page */}

      <div
        className="font-poppins flex flex-col justify-center px-6 py-6 mx-auto md:h-screen lg:py-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="md:ml-[600px] w-full bg-white/40 backdrop-blur-md rounded-tr-[200px] rounded-bl-[200px] md:mt-0 sm:max-w-md xl:p-0 dark:bg-pink-500/70 shadow-2xl px-8">
          <div className="p-4 space-y-4 md:space-y-5 sm:p-6">
            <h1 className="text-xl font-bold md:text-2xl dark:text-pink-700">
              Sign Up
            </h1>
            <form className="space-y-4 md:space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
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
                  className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
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
                  className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
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
                  className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-pink-700/50 hover:bg-pink-200 hover:text-pink-700 focus:outline-offset-2 text-white font-medium rounded-xl text-sm px-4 py-2 backdrop-blur-md ml-auto block mb-1"
              >
                Sign Up
              </button>

              <p className="text-sm font-light text-right dark:text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign In
                </a>
              </p>
            </form>
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
            <h1 className="text-xl font-bold md:text-2xl dark:text-pink-700">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
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
                  className="text-sm rounded-full block w-full p-2.5 px-4 dark:bg-pink-200 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-yellow-500 text-pink-500 invalid:border-pink-500 invalid:text-pink-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-pink-700/50 hover:bg-pink-200 hover:text-pink-700 focus:outline-offset-2 text-white font-medium rounded-xl text-sm px-4 py-2 backdrop-blur-md ml-auto block mb-1"
              >
                Sign In
              </button>

              <p className="text-sm font-light text-right dark:text-gray-600">
                Create an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SignUp;
