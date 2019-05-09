/*jshint esversion: 6 */

import React, { useState } from "react";
import { useToggle } from "@availity/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroupItem, Row, Col } from "reactstrap";

const ExtendedList = props => {
  const [selected, setSelected] = useState({});
  const [isOpen, toggleOpen] = useToggle();

  const handleClick = index => {
    toggleOpen(!isOpen);
    setSelected({ index });
    console.log("table selected");
  };

  return (
    <div>
      <Container>
        <ListGroupItem>
        <b onClick={handleClick}>
          {props.data ? props.data.Name : null}
          </b>
          <Row>
            <Col>{isOpen ? props.data.Address : null}</Col>
            <Col>{isOpen ? props.data.Hours : null}</Col>
          </Row>
        </ListGroupItem>
      </Container>
    </div>
  );
};

export default ExtendedList;