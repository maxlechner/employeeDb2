import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Link, Route } from "react-router-dom";
import Search from "./Search";
import Discover from "./Discover";


function About( props ) {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome Page</h1>
          <p>
            Welcome to employee tracker app!
          </p>
          <Link to="/discover" role="button" className="btn btn-link">
          Employee list
          </Link>
          <Route exact path={`${props.match.url}/discover`} component={Discover} />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default About;
