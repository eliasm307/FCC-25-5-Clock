import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap"; 

import "./PeriodControl.scss";  

import { numberButtons } from "../Data/NumberButtons";
import { controlButtons } from "../Data/ControlButtons";

const PeriodControl = ({ className, title, idPrefix }) => {
  // console.log("controlSection: Start"); 
  
  const [displayText, setDisplayText] = React.useState("0"); 
  
  // rendering a dummy p element for display as FCC tests didnt work well with textarea

  return ( 
    <div className="container-period-control">  
      <Row
        id={idPrefix + "-label"} 
        className="control-label"
        noGutters
      >
        <span>{title}</span>
      </Row>

      <Row noGutters>
        <Col className="px-1"> 
          <Button
            id={idPrefix + "-decrement"}  
            variant="outline-danger"
          >
            -
          </Button>
        </Col> 

        <Col
          xs={6} 
          className="period-label"
        > 
          <p
            id={idPrefix + "-length"}
          >
            {idPrefix + "-length"}
          </p>
        </Col> 

        <Col className="px-1">
          <Button
            id={idPrefix + "-increment"} 
            variant="outline-success"
          >
            +
          </Button>
        </Col> 

      </Row>
      
    </div>
    
  );
};

PeriodControl.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string, 
};

PeriodControl.defaultProps = {
  children: null,
  className: null, 
};

export default PeriodControl;
