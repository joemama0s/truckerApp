import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { Auth } from "aws-amplify";
import { useUser } from "../lib/auth_context";
import { CognitoUser } from "@aws-amplify/auth";

export default function Login() {
  const router = useRouter();
  let loading = false;
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const verificationRef = useRef<HTMLInputElement>(null);
  const [enteringCode, setEnteringCode] = useState<boolean>(false);
  const { user, setUser } = useUser();
  // TODO Fix red underline
  // function checkEmployeeLogin() {
  //   setUser(usernameRef?.current?.value);
  //   saveProfileType("employer");
  //   router.push("/employer_profile/" + usernameRef?.current?.value);
  // }

  // function checkDriverLogin() {
  //   saveUsername(usernameRef?.current?.value);
  //   saveProfileType("driver");
  //   router.push("/driver_profile/" + usernameRef?.current?.value);
  // }
  async function submitSignIn() {
    try {
      if (enteringCode) {
        await verify();
      } else {
        await signUp();
        setEnteringCode(true);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function signUp(): Promise<CognitoUser> {
    try {
      const username = usernameRef?.current?.value
        ? usernameRef?.current?.value
        : "";
      const password = passwordRef?.current?.value
        ? passwordRef?.current?.value
        : "";
      // TODO add email input
      const email = "kekadi1147@teknowa.com";

      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email, // optional
        },
        autoSignIn: {
          // optional - enables auto sign in after user is    confirmed
          enabled: true,
        },
      });
      console.log(user);
      console.log("Successfully added user");
      return user;
    } catch (error) {
      console.log("error signing up:", error);
      throw error;
    }
  }

  async function verify() {
    const username = "poopoopeepee";
    const password = "joemama23";
    const code = verificationRef?.current?.value
      ? verificationRef?.current?.value
      : "";
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser = await Auth.signIn(username, password);
      console.log("Success! Verified User");
    } catch (error) {
      console.log("Error verifying: ", error);
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(enteringCode);
  return (
    <div>
      <h1 className="text-3xl text-yellow-400 font-bold underline">
        Login Page!
      </h1>
      <p>
        Use ID 1 or 2 for username to go to a profile. All others will redirect,
        password not considered
      </p>
      {!enteringCode ? (
        <div className="container">
          <div className="bg-blue-300 text-center w-1/3 px-3 py-4 text-white-100 mx-auto rounded">
            <input
              type="text"
              placeholder="Username"
              className="block w-full mx-auto text-sm py-2 px-3 rounded"
              ref={usernameRef}
            />
            <input
              type="text"
              placeholder="Password NOT CONSIDERED"
              className="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
              ref={passwordRef}
            />
            <button
              onClick={() => {
                console.log("BUTTON CLICKED");
              }}
              className="bg-blue-300 text-white-100 font-bold py-2 px-4 rounded border block mx-auto w-full"
            >
              Sign in as driver
            </button>
            <button
              onClick={() => {
                console.log("BUTTON CLICKED");
              }}
              className="bg-blue-300 text-white-100 font-bold py-2 px-4 rounded border block mx-auto w-full"
            >
              Sign in as employer
            </button>
            <button
              onClick={submitSignIn}
              className="bg-blue-300 text-white-100 font-bold py-2 px-4 rounded border block mx-auto w-full"
            >
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="bg-blue-300 text-center w-1/3 px-3 py-4 text-white-100 mx-auto rounded">
            <input
              type="text"
              placeholder="Verification Code"
              className="block w-full mx-auto text-sm py-2 px-3 rounded"
              ref={verificationRef}
            />
            <button
              onClick={submitSignIn}
              className="bg-blue-300 text-white-100 font-bold py-2 px-4 rounded border block mx-auto w-full"
            >
              Submit Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
