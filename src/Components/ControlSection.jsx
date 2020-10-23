import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap"; 
import PeriodControl from "./PeriodControl";  

import "./ControlSection.scss";  
 
import TimerControl from "./TimerControl";
import Timer from "./Timer";
 
const ControlSection = ({ className }) => { 
  
  const [displayText, setDisplayText] = React.useState("0"); 
 

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
          /> 
        </Col>
        
        <Col md={true} className="control-container">  
          <PeriodControl
            title="Break"
            idPrefix="break"
          />
        </Col> 

        <Col md={true} className="control-container">  
          <PeriodControl
            title="Session"
            idPrefix="session"
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
