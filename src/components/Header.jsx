import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        Navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        Navigate("/");
      }
    });

    // Unsubscribe when component unmount.
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate("/");
      })
      .catch((error) => {
        // An error happened.
        Navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <p className="p-4 text-white font-bold ">{user.displayName}</p>
          <img className="hidden md:block w-12 h-12" src={user?.photoURL} alt="userImg" />
          <button
            type="button"
            onClick={handleSignOut}
            className="font-bold text-white px-4"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
