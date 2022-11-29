import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Job_Table from "../../../components/job_table";
import { Jobs } from "../../../tmp_db";

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
  const router = useRouter();
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/employer_profile/${query.id}`,
    fetcher
  );
  const getHeadings = () => {
    return Object.keys(Jobs[0]);
  };

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
      <h1> Current Outstanding Jobs </h1>
      <Job_Table
        theadData={getHeadings()}
        tbodyData={Jobs.filter((p) => p.id === Number(query.id))}
      />
      <button
        onClick={() => {
          router.push("/create_job/");
        }}
        className="blue-btn"
      >
        Create new job
      </button>
    </>
  );
};

export default Employer_Profile;
