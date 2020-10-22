import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap"; 

import "./ControlSection.scss";  

import { numberButtons } from "../Data/NumberButtons";
import { controlButtons } from "../Data/ControlButtons";

const TimerControl = ({ className, title, idPrefix }) => {
  // console.log("controlSection: Start"); 
  
  const [displayText, setDisplayText] = React.useState("0");
  const [previewText, setPreviewText] = React.useState("0");
  const [lastResult, setLastResult] = React.useState("0");
  const [evaluatedExpression, setEvaluatedExpression] = React.useState(0);

  
  // rendering a dummy p element for display as FCC tests didnt work well with textarea

  return ( 
    <div id="">  
      <Row noGutters>
        {title}
      </Row>

      <Row noGutters>
        <Col className="m-1"> 
          <Button
            id="start_stop"
            className="w-100"
          >
            Start/Stop
          </Button>
        </Col>  

        <Col className="m-1">
          <Button
            id="reset"
            className="w-100"
          >
            Reset
          </Button>
        </Col> 

      </Row>
      
    </div>
    
  );
};

TimerControl.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string, 
};

TimerControl.defaultProps = {
  children: null,
  className: null, 
};

export default TimerControl;
