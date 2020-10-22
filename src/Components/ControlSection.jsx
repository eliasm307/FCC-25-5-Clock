import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap"; 
import PeriodControl from "./PeriodControl";  

import "./ControlSection.scss";  

import { numberButtons } from "../Data/NumberButtons";
import { controlButtons } from "../Data/ControlButtons";
import TimerControl from "./TimerControl";
import Timer from "./Timer";

const ControlSection = ({ className }) => {
  // console.log("controlSection: Start"); 
  
  const [displayText, setDisplayText] = React.useState("0");
  const [previewText, setPreviewText] = React.useState("0");
  const [lastResult, setLastResult] = React.useState("0");
  const [evaluatedExpression, setEvaluatedExpression] = React.useState(0);

 

 
  // rendering a dummy p element for display as FCC tests didnt work well with textarea

  return (
    
    <section
      id="control-section"
      className="col-lg-6"
    > 
      <Row noGutters > 
        <h2>Controls</h2>  
      </Row>

      <Row noGutters id="container-display">  
        
        <Col md={true} className="mb-3">  
          <PeriodControl
            title="Break Controls"
            idPrefix="break"
          />
        </Col> 

        <Col md={true} className="mb-3">  
          <PeriodControl
            title="Session Controls"
            idPrefix="session"
          />
        </Col>

        <Col md={true} className="mb-3">  
          <TimerControl
            title="Timer Controls"
            idPrefix="break"
          />
        </Col>

      </Row>
  
      <Row noGutters>
        <Col id="container-timer"> 
          <Timer
          />
        </Col> 
      </Row>
  
    </section> 
    
  );
};

ControlSection.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string, 
};

ControlSection.defaultProps = {
  children: null,
  className: null, 
};

export default ControlSection;
