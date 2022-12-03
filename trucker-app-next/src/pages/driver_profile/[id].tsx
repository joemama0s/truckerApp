import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ListProfilesQuery, Profile } from "../../API";
import { listProfiles, searchProfiles } from "../../graphql/queries";
import { API } from "aws-amplify";

const Driver_Profile = () => {
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
      <h1 className="text-3xl text-yellow-400 font-bold underline">
        Driver Profile Page
      </h1>
      <br></br>

      {/* TODO I hate this indexing.... Change it */}
      <p>Profile ID: {apiProfile[0].subID}</p>
      <p>Name: {apiProfile[0].name}</p>
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
