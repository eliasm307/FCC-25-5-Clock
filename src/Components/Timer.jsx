import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap"; 

import "./Timer.scss";  

import { numberButtons } from "../Data/NumberButtons";
import { controlButtons } from "../Data/ControlButtons";

const Timer = ({ className, title, idPrefix }) => {
  // console.log("controlSection: Start"); 
  
  const [displayText, setDisplayText] = React.useState("0");
  const [previewText, setPreviewText] = React.useState("0");
  const [lastResult, setLastResult] = React.useState("0");
  const [evaluatedExpression, setEvaluatedExpression] = React.useState(0);

  
  // rendering a dummy p element for display as FCC tests didnt work well with textarea

  return ( 
    <div className="timer-container">  
      <Row
        id= "timer-label"
        noGutters
      >
        {title}
      </Row>

      <Row noGutters> 
        <Col className="m-1"> 
          <p
            id="time-left"
          >
            25:00
          </p>
        </Col>  

      </Row>
      
    </div>
    
  );
};

Timer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string, 
};

Timer.defaultProps = {
  children: null,
  className: null, 
};

export default Timer;
