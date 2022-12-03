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
      // TODO I DONT LOVE THIS
      const usernameValue = usernameRef?.current?.value
        ? usernameRef?.current?.value
        : "";
      const passwordValue = passwordRef?.current?.value
        ? passwordRef?.current?.value
        : "";
      const amplifyUser = await Auth.signIn(usernameValue, passwordValue);
      if (amplifyUser.attributes["custom:profileType"] === "employer") {
        router.push("/employer_profile/" + amplifyUser.attributes["sub"]);
      } else if (amplifyUser.attributes["custom:profileType"]) {
        router.push("/driver_profile/" + amplifyUser.attributes["sub"]);
      } else {
        throw new Error("Unknown profile type");
      }
    } catch (error) {
      // TODO ADD ERROR LOGGING TO USER
      reportError({ message: getErrorMessage(error) });
    }
  }

  // TODO CONVERT THIS TO A SPINNER OR SOMETHING AND MAKE IT ACTUALLY WORK
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1 className="text-3xl text-yellow-400 font-bold underline">
        Login Page!
      </h1>
      <p>DEBUG: useername: joemama password: joemama23</p>
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
