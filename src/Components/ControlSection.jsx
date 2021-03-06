import React from "react";
import PropTypes from "prop-types"; 

import { Row, Col } from "react-bootstrap"; 
import PeriodControl from "./PeriodControl";  

import "./ControlSection.scss";  
 
import TimerControl from "./TimerControl"; 
 
const ControlSection = ({
  className, 
  breakVal,
  setBreakVal,
  sessionVal,
  setSessionVal,
  ArrayHistory,
  setArrayHistory,
  setTimerState,
  timerRunning,
  handleReset,
  isSession,
  setTimeRemaining,
}) => { 
   
  return (
    
    <section
      id="control-section"
      className="col-lg-6 section-container"
    > 
      <Row noGutters > 
        <h2>Controls</h2>  
        
      </Row>

      <Row noGutters className="">   
        
      <Col className="col-12 control-container">
          <TimerControl
            title="Timer Controls"
            idPrefix="break"
            setTimerState={setTimerState}
            handleReset={handleReset}
            timerRunning={timerRunning}
            
          /> 
        </Col>
        
        <Col md={true} className="control-container">  
          <PeriodControl
            title="Session"
            idPrefix="session"
            periodVal={sessionVal}
            periodSetter={(newPeriodVal) => {
              if (isSession) setTimeRemaining(newPeriodVal*60);
              setSessionVal(newPeriodVal);
            }}
          />
        </Col>
        
        <Col md={true} className="control-container">  
          <PeriodControl
            title="Break"
            idPrefix="break"
            periodVal={breakVal}
            periodSetter={(newPeriodVal) => {
              if (!isSession) setTimeRemaining(newPeriodVal*60);
              setBreakVal(newPeriodVal);
            }}
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
