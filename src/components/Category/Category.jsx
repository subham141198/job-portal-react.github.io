import { useEffect, useState } from "react";
import SingleCategroy from "../SingleCatagory/SingleCategroy";


export default function Category() {
  const [categories, setcategory] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((Response) => Response.json())
      .then((data) => setcategory(data.jobs));
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center"> Job Category List</h1>
            </div>
            <div className="col-12">
                <p className="text-center"> Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        </div>
        <div className="row row-col-4">
          {categories.map((category) => (
            <SingleCategroy key={category.job_id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}
