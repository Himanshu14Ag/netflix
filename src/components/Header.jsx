import React from "react";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const Navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate('/');
      })
      .catch((error) => {
        // An error happened.
        Navigate('/error');
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (<div className="flex p-4">
        <img
          className="w-10 h-10"
          src={user?.photoURL}
          alt="userImg"
        />
        <button
          type="button"
          onClick={handleSignOut}
          className="font-bold text-white px-6"
        >
          Sign Out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
