import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/configFirebase";
import { signOut } from "firebase/auth";

import { useState, useEffect } from "react";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    try {
      await signOut(auth);

      dispatch({ type: "LOGOUT" });
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

  return { logout, error, isPending };
};
