import { useEffect, useState } from "react";
import SingleFeatured from "../SingleFeatured/SingleFeatured";

export default function FeaturedJob() {

    const [featureJobs, setfeatureJob] = useState([])

    useEffect(() => {
        fetch("apply_job.json")
          .then((Response) => Response.json())
          .then((data) => setfeatureJob(data.jobs));
      }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Featured Jobs</h1>
          </div>
          <div className="col-12">
            <p className="text-center">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
        </div>
        <div className="row row-cols-2 g-4">
        {featureJobs.map((featureJob) => (
            <SingleFeatured key={featureJob.id} featureJob={featureJob} />
          ))}
        </div>
      </div>
    </>
  );
}
