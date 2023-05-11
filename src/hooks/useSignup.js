import { useAuthContext } from "./useAuthContext";
import { auth, db } from "../firebase/configFirebase";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

import { useState, useEffect } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const { dispatch } = useAuthContext();

  const verifyDisplayName = async (newDisplayName) => {
    const docRef = doc(db, "players", newDisplayName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().displayName;
    } else {
      return null;
    }
  };

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const displayNameExists = await verifyDisplayName(displayName);

      if (!displayNameExists) {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "players", displayName), {
          displayName: displayName,
          score: 0,
        });

        if (!response) {
          throw new Error("Could not complete auth");
        }
        //add displayName
        await updateProfile(auth.currentUser, { displayName: displayName });

        dispatch({ type: "LOGIN", payload: response.user });
      } else {
        throw new Error("Display name is taken");
      }

      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  //cleanup function
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
