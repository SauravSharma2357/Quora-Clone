import BackgroundImage from "../assets/signupBackground.png";
import google from "../assets/Google3.png";
import facebook from "../assets/facebook2.png";
import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../firebase/setup";

const Singnup = () => {
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const facebookSignin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="flex items-center justify-center"
    >
      <div className="bg-white h-11/12 w-5/11 rounded-sm p-8 flex flex-col justify-center items-center">
        <h1 className="text-red-700 text-6xl font-bold font-serif text-center">
          Quora
        </h1>
        <h1 className="text-center font-bold text-gray-500 mt-3">
          A place to share knowledge and better understand the world{" "}
        </h1>
        <div className="flex mt-10">
          <div>
            <h1 className="text-zinc-400 text-sm w-72">
              By continuing you indicate that you agree to quora's{" "}
              <span className="text-cyan-700"> Terms of Sercice </span>
              and <span className="text-cyan-700">Privacy Policy.</span>
            </h1>
            <div
              onClick={googleSignin}
              className=" flex p-4 border border-spacing-1  items-center w-80 rounded-sm mt-5 cursor-pointer"
            >
              <img src={google} alt="" className=" w-6 h-6 ml-2 rounded-full" />
              <h1 className=" ml-7">Continue with Google</h1>
            </div>
            <div
              onClick={facebookSignin}
              className=" flex p-4 border border-spacing-1  items-center w-80 rounded-sm mt-5 cursor-pointer"
            >
              <img
                src={facebook}
                alt=""
                className=" w-7 h-6 ml-2 rounded-full"
              />
              <h1 className=" ml-7">Continue with Facebook</h1>
            </div>
            <h1 className=" text-center text-sm font-semibold text-zinc-600 mt-3 hover:bg-gray-100 rounded-full p-1 cursor-pointer">
              Sign up with Email
            </h1>
          </div>
          <div className=" ml-16">
            <h1>Login</h1>
            <hr className=" w-72 mt-3" />
            <h1 className=" mt-4 font-semibold text-sm">Email</h1>
            <input
              type="text"
              placeholder="Your email"
              className=" border border-spacing-1 p-2 w-72 mt-2"
            />
            <h1 className=" mt-4 font-semibold text-sm">Password</h1>
            <input
              type="text"
              placeholder="Your Password"
              className=" border border-spacing-1 p-2 w-72 mt-2"
            />
            <div className="flex mt-4">
              <h1 className=" text-zinc-400 text-sm mt-4 hover:underline cursor-pointer">
                Forget Password?
              </h1>
              <button
                className="bg-blue-500 text-white p-2 w-40
               ml-5 rounded-full"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div>
          <hr className=" mt-3 text-zinc-600" />
          <h1 className="text-sm text-center mt-3 text-zinc-600">
            About . Careeres . Terms . Contaact . Languages . Your . Ad .
            Choices . Press Quora, Inc. 2024
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Singnup;
