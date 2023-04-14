import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function TextExample(props) {
  return (
    <>
      <div className="col">
        <Card>
          <div className="row">
            <div className="col-12 img_height">
              <img className="img-fluid" src={props.featureJob.company_logo} />
            </div>
          </div>
          <Card.Body>
            <Card.Title>{props.featureJob.job_title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.featureJob.company_name}
            </Card.Subtitle>
            <button className="btn job_type">
              {props.featureJob.job_type}
            </button>
            
              <div className="row">
                <div className="col-12">
                <Card.Text>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  <span>{props.featureJob.company_location}</span>{" "}
                  <i className="fa-solid fa-dollar-sign"></i>{" "}
                  <span>{props.featureJob.salary}</span>
                </Card.Text>
                </div>
              </div>
            
            <a
              href={"details/" + props.featureJob.id}
              className="btn btn-gradient text-white fw-bold"
            >
              View Details
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
