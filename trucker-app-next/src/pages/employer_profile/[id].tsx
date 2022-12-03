import { API } from "aws-amplify";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Job_Table from "../../../components/job_table";
import { Jobs } from "../../../tmp_db";
import { ListProfilesQuery, Profile } from "../../API";
import { listProfiles, searchProfiles } from "../../graphql/queries";

const fetcher = async (url: string) => {
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
  const [apiProfile, setApiProfile] = useState<Profile[]>([]);

  useEffect(() => {
    if (!query.id) {
      return;
    }
    let filter = {
      subID: {
        eq: query.id,
      },
    };
    const getProfileFromApi = async (): Promise<Profile[]> => {
      const userProfile = (await API.graphql({
        query: listProfiles,
        variables: { filter: filter },
      })) as {
        data: ListProfilesQuery;
        errors: any[];
      };

      if (userProfile.data.listProfiles?.items) {
        return userProfile.data.listProfiles.items as Profile[];
      } else {
        throw new Error("Could not get profile from api");
      }
    };

    getProfileFromApi().then((data) => setApiProfile(data));
  }, [query.id]);

  // if (error) return <div>{error.message}</div>;
  // if (!data) return <div>Loading...</div>;

  if (apiProfile.length == 0) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      <br></br>
      <Link href="/">Click me to Go Home</Link>
      <br></br>
      {/* TODO I hate this indexing at 0... Change it */}
      <p>Profile ID: {apiProfile[0].subID}</p>
      <p>Name: {apiProfile[0].name}</p>
      <h1> Current Outstanding Jobs </h1>
      {/* <Job_Table
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
      </button> */}
    </>
  );
};

export default Employer_Profile;
