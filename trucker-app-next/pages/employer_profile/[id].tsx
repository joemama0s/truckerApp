import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url: string) => {
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Employer_Profile = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/employer_profile/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <br></br>
      <Link href="/">Click me to Go Home</Link>
      <br></br>
      <p>Profile ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Buisness Type: {data.buisness_type}</p>
    </>
  );
};

export default Employer_Profile;
