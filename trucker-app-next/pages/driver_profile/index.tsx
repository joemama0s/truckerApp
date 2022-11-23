import Link from "next/link";
import { useRouter } from "next/router";

const Driver_Profile = () => {
  const router = useRouter();

  return (
    <>
      <p>No driver profile ID selected</p>
      <br></br>
      <Link href="/">Click me to Go Home</Link>
    </>
  );
};

export default Driver_Profile;
