import { useState, createContext, useEffect } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  sendPasswordResetEmail,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../service/FirebaseConfig";
import { Navigate } from "react-router-dom";
const providerG = new GoogleAuthProvider();
const provider = new FacebookAuthProvider();
const providerT = new TwitterAuthProvider();

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUserG = sessionStorage.getItem("@AuthFirebaseGoogle:user");
      const storageTokenG = sessionStorage.getItem("@AuthFirebaseGoogle:token");

      const storageUserT = sessionStorage.getItem("@AuthFirebaseTwitter:user");
      const storageTokenT = sessionStorage.getItem(
        "@AuthFirebaseTwitter:token"
      );

      const storageUserF = sessionStorage.getItem("@AuthFirebaseFacebook:user");
      const storageTokenF = sessionStorage.getItem(
        "@AuthFirebaseFacebook:accessToken"
      );
      if (storageTokenG && storageUserG) {
        setUser(storageUserG);
      }
      if (storageTokenF && storageUserF) {
        setUser(storageUserF);
      }
      if (storageTokenT && storageUserT) {
        setUser(storageUserT);
      }
    };
    loadStorageData();
  });

  function signInEmailandPassword(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function signInGoogle() {
    signInWithPopup(auth, providerG)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.token;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebaseGoogle:token", token);
        sessionStorage.setItem(
          "@AuthFirebaseGoogle:user",
          JSON.stringify(user)
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function signInTwitter() {
    signInWithPopup(auth, providerT)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebaseTwitter:token", token);
        sessionStorage.setItem(
          "@AuthFirebaseTwitter:user",
          JSON.stringify(user)
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = TwitterAuthProvider.credentialFromError(error);
      });
  }

  function signInFacebook() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem(
          "@AuthFirebaseFacebook:accessToken",
          accessToken
        );
        sessionStorage.setItem(
          "@AuthFirebaseFacebook:user",
          JSON.stringify(user)
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  }

  function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function newPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword);
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signInGoogle,
        signInFacebook,
        signInTwitter,
        signOut,
        resetPassword,
        newPassword,
        createUser,
        signInEmailandPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
