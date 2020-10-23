import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap"; 

import "./PeriodControl.scss";  

import { numberButtons } from "../Data/NumberButtons";
import { controlButtons } from "../Data/ControlButtons";

const PeriodControl = ({
  className,
  title,
  idPrefix,
  periodVal = -1,
  periodSetter }) => { 

  const handlePeriodChange = (delta) => {

    if ((delta === 1 && periodVal < 60)
      || (delta === -1 && periodVal > 1)) {
      
      // apply period change if period will still be within limits
      periodSetter(periodVal + delta);
      
    } 
  }

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

        <Col
          xs={12} 
          className="period-label"
        > 
          <span
            id={idPrefix + "-length"}
          >
            {periodVal}
          </span>
          <span>
            {" " + (periodVal === 1 ? "Minute" : "Minutes")}
          </span>
        </Col> 

      </Row>

      <Row noGutters>
        
        <Col className="px-1"> 
          <Button
            id={idPrefix + "-decrement"}
            variant="outline-danger"
            onClick={(e)=>handlePeriodChange(-1)}
          >
            -
          </Button>
        </Col> 

        <Col className="px-1">
          <Button
            id={idPrefix + "-increment"} 
            variant="outline-success"
            onClick={(e)=>handlePeriodChange(1)}
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
