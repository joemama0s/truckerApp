import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { UserContextType, UserCtx } from "../lib/context";
import Image from "next/image";

function Navbar() {
  const { username, profileType } = useContext(UserCtx) as UserContextType;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="blue-btn">home</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/employer_profile/1">
                <button className="blue-btn">View Prorfile</button>
              </Link>
            </li>
            <li className="text-white">
              <p>
                Logged in as {username} with profile {profileType}
              </p>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {username && (
          <li>
            <Link href="/login">
              <button className="blue-btn">Log in</button>
            </Link>
          </li>
        )}
        {username && <h1>{username}</h1>}
      </ul>
    </nav>
  );
}

export default Navbar;
