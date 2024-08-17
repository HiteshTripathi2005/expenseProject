import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  async function signInWithGoogle() {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userId: result.user.uid,
      profilePhoto: result.user.photoURL,
      name: result.user.displayName,
      isAuth: true,
    };
    console.log(authInfo);
    localStorage.setItem("userlogin", JSON.stringify(authInfo));
    navigate("/expense");
  }

  return (
    <div className="login">
      <p>Sign in with google</p>
      <button onClick={signInWithGoogle}>sign in</button>
    </div>
  );
};
