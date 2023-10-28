import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptClick = () => {
    // Toggle GPT search
    dispatch(toggleGptSearchView());
  };

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

  const handleLangChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="m-3 rounded-lg bg-gray-800 border-4 border-stone-900 text-white"
              onChange={handleLangChange}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="m-0 md:m-3 rounded-lg px-4 text-white bg-purple-900 border-4 border-stone-900"
            onClick={handleGptClick}
          >
            {showGptSearch ? "Home Page" :  "GPT Search"}
          </button>
          <p className="px-2 py-4 text-white font-bold ">{user.displayName}</p>
          <img
            className="hidden md:block w-12 h-12"
            src={user?.photoURL}
            alt="userImg"
          />
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
