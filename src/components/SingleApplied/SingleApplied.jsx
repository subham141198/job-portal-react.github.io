import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function SingleApplied(props) {
    console.log(props)
  return (
    <div className="col">
      <Card>
      <div className="row">
            <div className="col-12 img_height">
              <img className="img-fluid" src={props.appliedJob.company_logo} />
            </div>
          </div>
        <Card.Body>
          <Card.Title>{props.appliedJob.job_title}</Card.Title>
          <Card.Text>
          {props.appliedJob.company_name}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.appliedJob.job_type}</ListGroup.Item>
          <ListGroup.Item>{props.appliedJob.contact_information['address']}</ListGroup.Item>
          <ListGroup.Item>{props.appliedJob.salary}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link className="btn btn-gradient text-white" href={"details/" + props.appliedJob.id}>View Details</Card.Link>
          
        </Card.Body>
      </Card>
    </div>
  );
}


