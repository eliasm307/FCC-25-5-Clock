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
      className="col-lg-6 section-container"
    > 
      <Row noGutters > 
        <h2>Controls</h2>  
      </Row>

      <Row noGutters className="">  
        
        <Col md={true} className="control-container">  
          <PeriodControl
            title="Break Controls"
            idPrefix="break"
          />
        </Col> 

        <Col md={true} className="control-container">  
          <PeriodControl
            title="Session Controls"
            idPrefix="session"
          />
        </Col>

        

      </Row>
  
      <Row noGutters>  

        <Col md={true} className="control-container">  
          <Timer
            title="Session"
          /> 
          <TimerControl
            title="Timer Controls"
            idPrefix="break"
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
