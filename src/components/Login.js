import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSingUp = () => {
    console.log("Sign Up clicked");
    setIsSignIn(!isSignIn);
  }
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d615dd28-a1ac-4a03-995a-022d24e7b367/web/IN-en-20251124-TRIFECTA-perspective_263f0625-557f-436a-9d4f-b93224d2d6d2_small.jpg"
          alt="mainPhoto"
        />
      </div>
      <form className="absolute w-[600px] h-[800px] p-16 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-4xl py-6">{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && <input type="text" placeholder="Enter your Name"className="p-6 text-xl my-6 w-full bg-gray-950 border border-white rounded-lg"/>}

        <input
          type="email"
          placeholder="Email or Mobile Number"
          className="p-6 text-xl my-6 w-full bg-gray-950 border border-white rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-6 text-xl my-6 w-full bg-gray-950 border border-white rounded-lg"
        />


        <button className="p-6 text-xl my-8 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <h2 className="py-4 text-xl ">
          {isSignIn ? "New to Netflix?" : "Already Registered"} <span onClick={handleSingUp} className="font-bold cursor-pointer">{isSignIn ? "Sign up now." : "Sign In"}</span>
        </h2>
        <h3 className="py-4 text-gray-500">This page is protected by Google reCAPTCHA to ensure you're not a bot.</h3>
      </form>
    </>
  );
};

export default Login;
