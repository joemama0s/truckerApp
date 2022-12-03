import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "../src/lib/auth_context";
import Image from "next/image";
import { Auth } from "aws-amplify";

function Navbar() {
  const { user, setUser } = useUser();
  const [profileType, setProfileType] = useState<String>("");

  const signUserOut = async () => {
    await Auth.signOut().then(() => {
      // TODO NOT SURE IF THIS IS NEEDED??? Login needs extensive testing
      setUser(null);
    });
  };

  // TODO I HATE THIS!!!!!! MAKE MORE ELEGANT
  user?.getUserAttributes((err, result) => {
    const tmp = result?.filter((att) => att.Name === "custom:profileType");
    if (tmp?.length === 1) {
      setProfileType(tmp[0].Value);
    }
  });

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="blue-btn">home</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {user ? (
          <>
            <li className="push-left">
              <Link href="/employer_profile/1">
                <button className="blue-btn">View Prorfile</button>
              </Link>
            </li>
            <li className="text-white">
              <p>
                Logged in as {user.getUsername()} with profile {profileType}
              </p>
            </li>
            <li>
              <button className="blue-btn" onClick={() => signUserOut()}>
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="text-white">
              <p>Not Signed In</p>
            </li>
            <li>
              <Link href="/login">
                <button className="blue-btn">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
