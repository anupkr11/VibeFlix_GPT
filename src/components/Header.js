import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
        // ...
      }
    });
  }, []);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="absolute top-0 left-0 right-0 w-full px-16 py-8 bg-gradient-to-b from-black/50 to-black/0 z-10 flex justify-between">
        <img
          className="w-60"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && <div className="flex items-center gap-6">
          <img src={user.photoURL} alt="usericon" className="w-12 h-12" />
          <button
            onClick={handleSignOut}
            className="bg-red-700 px-6 py-2 rounded-lg text-white font-bold"
          >
            {" "}
            Sign Out
          </button>
        </div>}
      </div>
    </>
  );
};

export default Header;
