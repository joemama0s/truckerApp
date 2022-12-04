import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useUser } from "../lib/auth_context";
import { Auth } from "aws-amplify";
import Select from "react-select";
import Link from "next/link";

function Signup() {
  const options = [
    { value: "driver", label: "Driver" },
    { value: "employer", label: "Employer" },
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

  async function submitSignUp() {
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
      setInputUsername(usernameValue);
      setInputPassword(passwordValue);
      setInputEmail(emailValue);
    } catch (error) {
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
    } catch (error) {
      reportError({ message: getErrorMessage(error) });
    }
  }

  // TODO CONVERT THIS TO A SPINNER OR SOMETHING AND MAKE THIS ACTUALLY WORK
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="">
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
        <div className="flex flex-col min-h-screen overflow-hidden">
          {/*  Page content */}
          <main className="flex-grow">
            <section className="bg-gradient-to-b from-gray-100 to-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                  {/* Page header */}
                  <div className="max-w-3xl mx-auto text-6xl text-center pb-12 md:pb-20">
                    <h1 className="h1">Welcome. Start moving product today.</h1>
                  </div>

                  {/* Form */}
                  <div className="max-w-sm mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor="name"
                        >
                          Username <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Usename"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="email"
                        >
                          Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-3 mb-4">
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select a Profile Type
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      >
                        <option selected>Select a Profile Type</option>
                        <option value="driver">Driver</option>
                        <option value="employer">Employer</option>
                      </select>
                    </div>
                    <div className="max-w-sm mx-auto">
                      <button
                        className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800   "
                        onClick={submitSignUp}
                      >
                        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Sign Up
                        </span>
                      </button>
                    </div>
                    <div className="text-sm text-gray-500 text-center mt-3">
                      By creating an account, you agree to the{" "}
                      <a className="underline" href="#0">
                        terms & conditions
                      </a>
                      , and our{" "}
                      <a className="underline" href="#0">
                        privacy policy
                      </a>
                      .
                    </div>
                    <div className="flex items-center my-6">
                      <div
                        className="border-t border-gray-300 flex-grow mr-3"
                        aria-hidden="true"
                      ></div>
                      <div className="text-gray-600 italic">Or</div>
                      <div
                        className="border-t border-gray-300 flex-grow ml-3"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3">
                        <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                          <svg
                            className="w-4 h-12 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                          </svg>
                          <span className="flex-auto pl-16 pr-8 -ml-16">
                            Continue with Google
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="text-gray-600 text-center mt-6">
                      Already using Simple?{" "}
                      <Link
                        href="/login"
                        className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                      >
                        Sign in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
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
              onClick={submitSignUp}
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
