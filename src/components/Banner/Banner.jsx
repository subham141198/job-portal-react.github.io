export default function Banner() {
  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-6 pt-3">
            <div className="banner_container">
            <h3 className="banner-sub-title">One Step Closer To Your Dream Job</h3>
            <p className="banner-text-color">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid rounded-3" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
