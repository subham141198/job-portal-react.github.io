import { useParams, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Details() {
  const [applied, setapplied] = useState([])
  let jobdata = [];
  const { detail_id } = useParams();
  const datas = useLoaderData();
  for (let job in datas.jobs) {
    if (datas.jobs[job].id == detail_id) {
      jobdata = datas.jobs[job];
    }
  }
  useEffect(() => {
    setapplied(jobdata)
    localStorage.setItem('items', JSON.stringify(applied));
  },[applied])
  


  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Job details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-7 descrip-wrapper">
            <div className="row">
              <div className="col-12">
                <span className="fw-bold">Job Description: </span>
                <p>{jobdata.job_description}</p>
              </div>
              <div className="col-12">
                <span className="fw-bold">Job Rseponsibilities: </span>
                <p>
                  {jobdata.job_responsibilities.map((jobRespon) => jobRespon)}
                </p>
              </div>
              <div className="col-12">
                <span className="fw-bold">Educational Requirements: </span>
                <p>{jobdata.educational_requirement}</p>
              </div>
              <div className="col-12">
                <span className="fw-bold">Experience: </span>
                <p>{jobdata.experience}</p>
              </div>
            </div>
          </div>
          <div className="col-5  ">
            <div className="details-wrapper p-3">
              <div className="heading">
                <h3>Job Details</h3>
              </div>
              <hr />
              <div className="basic-details">
                <i className="fa-solid fa-dollar-sign"></i>
                <span className="fw-bold">Salary:</span>
                <p>{jobdata.salary}</p>
                <i className="fa-solid fa-dollar-sign"></i>
                <span className="fw-bold">Job Title:</span>
                <p>{jobdata.job_title}</p>
              </div>
              <div className="heading">
                <h3>Contact Details</h3>
              </div>
              <hr />
              <div className="contact-details">
                <i className="fa-solid fa-phone"></i>
                <span className="fw-bold"> Phone: </span>
                <p>{jobdata.contact_information.phone}</p>
                <i className="fa-solid fa-envelope"></i>
                <span className="fw-bold"> Email:</span>
                <p>{jobdata.contact_information.email}</p>
                <i className="fa-solid fa-address-card"></i>
                <span className="fw-bold"> Address: </span>
                <p>{jobdata.contact_information.address}</p>
              </div>
            </div>
            <div className="button-contianer mt-3">
            <Link className="w-100 text-right btn btn-gradient text-white" to="/apply">Apply Now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
