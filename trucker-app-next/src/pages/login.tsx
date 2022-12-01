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
  const [errorString, setErrorString] = useState<string>("");
  const { user, setUser } = useUser();

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  const reportError = ({ message }: { message: string }) => {
    setErrorString(message);
  };

  async function submitSignIn() {
    try {
      await submitLogin();
    } catch (err) {
      console.error(err);
      reportError({ message: getErrorMessage(err) });
    }
  }

  // TODO USE THIS FOR MORE OPTIMIZED ERROR LOGGING
  // throw new Error("Please Select Profile Type");
  async function submitLogin() {
    try {
      const usernameValue = usernameRef?.current?.value
        ? usernameRef?.current?.value
        : "";
      const passwordValue = passwordRef?.current?.value
        ? passwordRef?.current?.value
        : "";
      const amplifyUser = await Auth.signIn(usernameValue, passwordValue);
      console.log("Success! Verified User");
    } catch (error) {
      console.log("Error verifying: ", error);
      reportError({ message: getErrorMessage(error) });
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
      <p>DEBUG: useername: tylerquast password: joemama23</p>
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
            onClick={submitSignIn}
            className="bg-blue-300 text-white-100 font-bold py-2 px-4 rounded border block mx-auto w-full"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
