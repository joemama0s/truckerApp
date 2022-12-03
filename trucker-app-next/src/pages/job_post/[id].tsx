import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Job_Post = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/jobs/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <br></br>
      <Link href="/">Click me to Go Home</Link>
      <br></br>
      <p>Post: {query.id}</p>
      <p>Name: {data.name}</p>
      <p>Company: {data.company_name}</p>
      <p>Staring Location: {data.starting_location}</p>
      <p>Destination: {data.ending_location}</p>
    </>
  );
};

export default Job_Post;
