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

const Driver_Profile = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/driver_profile/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-3xl text-yellow-400 font-bold underline">
        Driver Profile Page
      </h1>
      <br></br>
      <p>Profile ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Truck: {data.truck}</p>
      <p>Verified: {data.verified}</p>
      <p>Rating: {data.rating}</p>
      <button
        onClick={() => {
          router.push("/job_search/");
        }}
        className="bg-blue-400 text-black-100 font-bold py-2 px-4 rounded border block"
      >
        View Job Postings
      </button>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="bg-blue-400 text-black-100 font-bold py-2 px-4 rounded border block"
      >
        Go Home
      </button>
    </>
  );
};

export default Driver_Profile;
