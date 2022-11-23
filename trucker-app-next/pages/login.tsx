import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Login() {
  const router = useRouter();
  let loading = false;
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // TODO Fix red underline
  function checkEmployeeLogin() {
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    router.push("/employer_profile/" + usernameRef.current.value);
  }

  function checkDriverLogin() {
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    router.push("/driver_profile/" + usernameRef.current.value);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1 className="text-3xl text-yellow-400 font-bold underline">
        Login Page!
      </h1>
      <p>
        Use ID 1 or 2 for username to go to a profile. All others will redirect,
        password not considered
      </p>

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
            onClick={checkDriverLogin}
            className="bg-blue-300 text-white-100 font-bold py-2 px-4 rounded border block mx-auto w-full"
          >
            Sign in as driver
          </button>
          <button
            onClick={checkEmployeeLogin}
            className="bg-blue-300 text-white-100 font-bold py-2 px-4 rounded border block mx-auto w-full"
          >
            Sign in as employer
          </button>
        </div>
      </div>
    </div>
  );
}
