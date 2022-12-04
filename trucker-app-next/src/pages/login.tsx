import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { Auth } from "aws-amplify";
import { useUser } from "../lib/auth_context";
import { CognitoUser } from "@aws-amplify/auth";

export default function Login() {
  const router = useRouter();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errorString, setErrorString] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user, setUser } = useUser();

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  const reportError = ({ message }: { message: string }) => {
    setErrorString(message);
  };

  async function submitSignin() {
    try {
      setLoading(true);
      await submitLogin();
    } catch (err) {
      console.error(err);
      reportError({ message: getErrorMessage(err) });
      setLoading(false);
    }
    setLoading(false);
  }

  // TODO USE THIS FOR MORE OPTIMIZED ERROR LOGGING
  // throw new Error("Please Select Profile Type");
  async function submitLogin() {
    console.log("starting submit login");
    try {
      // TODO I DONT LOVE THIS
      const usernameValue = usernameRef?.current?.value
        ? usernameRef?.current?.value
        : "";
      const passwordValue = passwordRef?.current?.value
        ? passwordRef?.current?.value
        : "";
      const amplifyUser = await Auth.signIn(usernameValue, passwordValue);
      console.log(amplifyUser);
      console.log(amplifyUser.attributes["custom:profileType"]);
      // TODO This should be employer. Remove this and make it imployer
      if (amplifyUser.attributes["custom:profileType"] === "employee") {
        router.push("/employer_profile/" + amplifyUser.attributes["sub"]);
      } else if (amplifyUser.attributes["custom:profileType"] === "driver") {
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
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-6xl font-extrabold text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome back. Sign in to continue driving
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="mb-6">
                      <label
                        htmlFor="default-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ref={usernameRef}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="default-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <Link
                        href="/reset-password"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Having trouble signing in?
                      </Link>
                    </div>
                    <input
                      type="password"
                      id="default-input"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ref={passwordRef}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <div className="flex justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-gray-600 ml-2">
                          Keep me signed in (This doesnt do anything)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="max-w-sm mx-auto">
                  <button
                    className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800   "
                    onClick={submitSignin}
                  >
                    <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Sign In
                    </span>
                  </button>
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
                <form>
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
                </form>
                <div className="text-gray-600 text-center mt-6">
                  Don’t you have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
