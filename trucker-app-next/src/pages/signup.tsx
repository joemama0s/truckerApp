import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useUser } from "../lib/auth_context";
import { Auth } from "aws-amplify";
import Select from "react-select";

function Signup() {
  const options = [
    { value: "driver", label: "Driver" },
    { value: "employee", label: "Employee" },
  ];

  const { user, setUser } = useUser();

  const [profileType, setProfileType] = useState<string>("");
  const [enteringCode, setEnteringCode] = useState<boolean>(false);
  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [errorString, setErrorString] = useState<string>("");

  const router = useRouter();

  let loading = false;

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const verificationRef = useRef<HTMLInputElement>(null);

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  const reportError = ({ message }: { message: string }) => {
    setErrorString(message);
  };

  // TODO Remove any
  const handleBoxChange = (value: any) => {
    setProfileType(value.value);
  };

  async function submitSignIn() {
    // Clears the error on button click
    setProfileType("");

    try {
      if (enteringCode) {
        await verify();
      } else {
        if (profileType === "") {
          throw new Error("Please Select Profile Type");
        }
        await signUp();
        setEnteringCode(true);
      }
    } catch (err) {
      console.error(err);
      reportError({ message: getErrorMessage(err) });
    }
  }

  async function signUp() {
    // TODO I DONT LOVE THIS
    const usernameValue = usernameRef?.current?.value
      ? usernameRef?.current?.value
      : "";
    const passwordValue = passwordRef?.current?.value
      ? passwordRef?.current?.value
      : "";
    const emailValue = emailRef?.current?.value ? emailRef?.current?.value : "";
    try {
      // TODO add email input
      const { user } = await Auth.signUp({
        username: usernameValue,
        password: passwordValue,
        attributes: {
          email: emailValue,
          "custom:profileType": profileType,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is    confirmed
          enabled: true,
        },
      });
      console.log(user);
      console.log("Successfully added user");
      setInputUsername(usernameValue);
      setInputPassword(passwordValue);
      setInputEmail(emailValue);
    } catch (error) {
      console.log("error signing up:", error);
      throw error;
    }
  }

  // TODO This for some reason default signs into joemama???
  // May need to clear session storage after some amount of time because it may be using stored cookies
  async function verify() {
    const code = verificationRef?.current?.value
      ? verificationRef?.current?.value
      : "";
    try {
      await Auth.confirmSignUp(inputUsername, code);
      const amplifyUser = await Auth.signIn(inputUsername, inputPassword);
      console.log("Success! Verified User");
    } catch (error) {
      console.log("Error verifying: ", error);
      reportError({ message: getErrorMessage(error) });
    }
  }

  // TODO CONVERT THIS TO A SPINNER OR SOMETHING AND MAKE THIS ACTUALLY WORK
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container">
      {errorString ? (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Error!</p>
          <p>{errorString}</p>
        </div>
      ) : (
        <></>
      )}
      {!enteringCode ? (
        <div className="bg-blue-300 text-center w-1/3 px-3 py-4 text-white-100 mx-auto rounded">
          <input
            type="text"
            placeholder="Username"
            className="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
            ref={usernameRef}
          />
          <input
            type="text"
            placeholder="Email"
            className="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
            ref={emailRef}
          />
          <input
            type="text"
            placeholder="Password NOT CONSIDERED"
            className="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
            ref={passwordRef}
          />
          <Select
            onChange={handleBoxChange}
            className="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
            options={options}
          />
          <button
            onClick={submitSignIn}
            className="bg-blue-300 text-white-100 font-bold py-2 px-4 rounded border block mx-auto w-full"
          >
            Sign Up
          </button>
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

export default Signup;
