import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserCtx } from "../lib/context";
import Navbar from "../components/navbar";
import { createContext, useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState<string>("");
  const [profileType, setProfileType] = useState<string>("");

  // TODO PREFORM TESTING ON THIS UNDEFINED THING
  const saveUsername = (usrnm: string | undefined) => {
    setUsername(usrnm!);
  };
  const saveProfileType = (profileTp: string | undefined) => {
    setUsername(profileTp!);
  };

  useEffect(() => {
    console.log("In the use effect");
    if (username != "") {
      // Define async function
      // TODO I DONT LOVE THIS QUERY
    } else {
      setUsername("");
    }
  }, [username]);

  return (
    <UserCtx.Provider
      value={{ username, profileType, saveUsername, saveProfileType }}
    >
      <Navbar />
      <Component {...pageProps} />
    </UserCtx.Provider>
  );
}
