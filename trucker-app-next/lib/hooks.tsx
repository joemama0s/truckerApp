import { useEffect, useState } from "react";

export function useUserData() {
  const [username, setUsername] = useState("");
  const [profileType, setProfileType] = useState("");

  useEffect(() => {
    if (username) {
      // Define async function
      // TODO I DONT LOVE THIS QUERY
    } else {
      setUsername("");
    }
  }, [username]);

  return { username, setUsername, profileType, setProfileType };
}
