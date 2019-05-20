/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const Footer = props => {
  return (
    <div>
      <Container className="footer" fluid>
        <p className="lead">Jacksonville Food Truck Locater Website</p>
      </Container>
    </div>
  );
};

export default Footer;
