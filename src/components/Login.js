import React, { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingUp = () => {
    console.log("Sign Up clicked");
    setIsSignIn(!isSignIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const validationResult = validation(emailValue, passwordValue);

    setErr(validationResult);
    if (validationResult) {
      return;
    }

    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/99500785?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + ": " + errorMessage);
          // ..
        });
    }
    //sign in
    else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + ": " + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d615dd28-a1ac-4a03-995a-022d24e7b367/web/IN-en-20251124-TRIFECTA-perspective_263f0625-557f-436a-9d4f-b93224d2d6d2_small.jpg"
          alt="mainPhoto"
        />
      </div>
      <form
        className="absolute w-[600px] h-[800px] p-16 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-4xl py-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
          ref={name}
            type="text"
            placeholder="Enter your Name"
            className="p-6 text-xl my-6 w-full bg-gray-950 border border-white rounded-lg"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email or Mobile Number"
          className="p-6 text-xl my-6 w-full bg-gray-950 border border-white rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-6 text-xl my-6 w-full bg-gray-950 border border-white rounded-lg"
        />

        <p className="text-red-500">{err}</p>
        <button
          className="p-6 text-xl my-8 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <h2 className="py-4 text-xl ">
          {isSignIn ? "New to Netflix?" : "Already Registered"}{" "}
          <span onClick={handleSingUp} className="font-bold cursor-pointer">
            {isSignIn ? "Sign up now." : "Sign In"}
          </span>
        </h2>
        <h3 className="py-4 text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </h3>
      </form>
    </>
  );
};

export default Login;
