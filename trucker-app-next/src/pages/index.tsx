import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1 className="yellow-header">Its trucker time baby</h1>
      <button
        onClick={() => {
          router.push("/login");
        }}
        className="blue-btn"
      >
        Login
      </button>
      <button
        onClick={() => {
          router.push("/signup");
        }}
        className="blue-btn"
      >
        Sign Up
      </button>
    </div>
  );
}
