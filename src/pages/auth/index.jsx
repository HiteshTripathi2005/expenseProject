import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

export const Auth = () => {
  async function signInWithGoogle() {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  }

  return (
    <div className="login">
      <p>Sign in with google</p>
      <button onClick={signInWithGoogle}>sign in</button>
    </div>
  );
};
