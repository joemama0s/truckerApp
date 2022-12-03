import { useRouter } from "next/router";
import Job_Table from "../../components/job_table";
import { Jobs } from "../../tmp_db";

export default function Job_Search() {
  const getHeadings = () => {
    return Object.keys(Jobs[0]);
  };
  const router = useRouter();
  return (
    <div className="container">
      <h1 className="text-3xl text-yellow-400 font-bold underline">
        View All Job Posts
      </h1>
      <Job_Table theadData={getHeadings()} tbodyData={Jobs} />
      <button
        onClick={() => {
          router.push("/driver_profile/1");
        }}
        className="blue-btn "
      >
        return to profile page
      </button>
    </div>
  );
}
