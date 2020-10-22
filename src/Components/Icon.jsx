
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { ReactComponent as YourSvg } from '../SVG/loaf-rocket-1.svg';

import { Row, Col, Button } from "react-bootstrap"; 

import "./Timer.scss";  

import { numberButtons } from "../Data/NumberButtons";
import { controlButtons } from "../Data/ControlButtons";

const Icon = ({ className, title, idPrefix }) => {
  // console.log("controlSection: Start"); 
  
  const [displayText, setDisplayText] = React.useState("0");
  const [previewText, setPreviewText] = React.useState("0");
  const [lastResult, setLastResult] = React.useState("0");
  const [evaluatedExpression, setEvaluatedExpression] = React.useState(0);

  
  // rendering a dummy p element for display as FCC tests didnt work well with textarea

  return ( 
    <img src={"http://s.cdpn.io/3/kiwi.svg"}/>
    
  );
};

Icon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string, 
};

Icon.defaultProps = {
  children: null,
  className: null, 
};

export default Timer;
