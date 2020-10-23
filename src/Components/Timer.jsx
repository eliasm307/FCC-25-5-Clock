import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap"; 

import "./Timer.scss";   

const Timer = ({
  className,
  title,
  idPrefix,
  timeRemaining,
  timerRunning,
}) => { 

  return ( 
    <div className="timer-container">  
      <Row
        id="timer-label"
        className={"control-label "}
        noGutters
      >
        <span>{title}</span>
      </Row>

      <Row noGutters> 
        <Col className=""> 
          <p
            id="time-left"
            className={!timerRunning ? "text-danger" : "text-success"}
          >
            {timeRemaining}
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
