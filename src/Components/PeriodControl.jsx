import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap"; 

import "./ControlSection.scss";  

import { numberButtons } from "../Data/NumberButtons";
import { controlButtons } from "../Data/ControlButtons";

const PeriodControl = ({ className, title, idPrefix }) => {
  // console.log("controlSection: Start"); 
  
  const [displayText, setDisplayText] = React.useState("0");
  const [previewText, setPreviewText] = React.useState("0");
  const [lastResult, setLastResult] = React.useState("0");
  const [evaluatedExpression, setEvaluatedExpression] = React.useState(0);

  
  // rendering a dummy p element for display as FCC tests didnt work well with textarea

  return ( 
    <div id="">  
      <Row
        id={idPrefix + "-label"}
        noGutters
      >
        {title}
      </Row>

      <Row noGutters>
        <Col className="m-1"> 
          <Button
            id={idPrefix + "-decrement"}
            className="w-100"
          >
            -
          </Button>
        </Col> 

        <Col className="m-1"> 
          <p
            id={idPrefix + "-length"}
          >
            {idPrefix + "-length"}
          </p>
        </Col> 

        <Col className="m-1">
          <Button
            id={idPrefix + "-increment"}
            className="w-100"
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
