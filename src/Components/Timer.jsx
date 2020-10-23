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
  isSession,
}) => { 


  const formatSecondsAsTime = (iSeconds) => {
    
    let sMinutes = Math.floor(iSeconds / 60) + "";
    let sSeconds = iSeconds % 60 + "";

    // console.log("Timer", {iSeconds, sMinutes, sSeconds})

    return sMinutes.padStart(2, "0") + ":" + sSeconds.padStart(2, "0")
  }

  // https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg

  // https://actions.google.com/sounds/v1/alarms/beep_short.ogg

  return ( 
    <div className="timer-container">  
      <Row
        id="timer-label"
        className={"control-label "}
        noGutters
      >
        <span>{isSession ? "Session" : "Break"}</span>
      </Row>

      <Row noGutters> 
        <Col className=""> 
          <p
            id="time-left"
            className={!timerRunning ? "text-danger" : "text-success"}
          >
            {formatSecondsAsTime(timeRemaining)}
          </p>
          <audio
            id="beep"
            src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
            type="audio/ogg" />
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
