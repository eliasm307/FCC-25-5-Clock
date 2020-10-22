import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap"; 

import "./ControlSection.scss";   

const TimerControl = ({ className, title, idPrefix }) => { 
  
  const [displayText, setDisplayText] = React.useState("0"); 
 

  return ( 
    <div id="">  
      <Row
        noGutters
        className="control-label"
      > 
        {title}
      </Row>

      <Row noGutters>
        <Col className="px-1"> 
          <Button
            id="start_stop"
            variant="outline-light"
          >
            Start/Stop
          </Button>
        </Col>  

        <Col className="px-1">
          <Button
            id="reset" 
            variant="outline-light" 
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
