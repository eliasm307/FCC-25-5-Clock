import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import ControlSection from "./Components/ControlSection";
import HistorySection from "./Components/HistorySection";
import Timer from "./Components/Timer";

import "./global-styles.scss"; 

/*
TODO
 
*/

const date = new Date();

const defaultBreakVal = 5;
const defaultSessionVal = 25;
let defaultTimeRemainingVal = defaultSessionVal * 60;

defaultTimeRemainingVal = 5;

let timeout;

let soundElement;
let soundDuration;
  
const App =(props) => {
 
  const [arrayHistory, setArrayHistory] = React.useState([]); 
  const [breakVal, setBreakVal] = React.useState(defaultBreakVal); 
  const [sessionVal, setSessionVal] = React.useState(defaultSessionVal); 
  const [timerRunning, setTimerRunning] = React.useState(false); 
  const [timeRemaining, setTimeRemaining] = React.useState(defaultTimeRemainingVal); 
  const [isSession, setIsSession] = React.useState(true); 
  
  

  // run once
  React.useEffect(() => {
    
    // get sound element and save it in a variable
    soundElement = document.getElementById("beep");

    // console.log("APP", "get sound element", { soundElement});

    // add event listener for wehn sound is loaded 
    soundElement.oncanplaythrough = () => {
      // get timer end sound duration 
      soundDuration = soundElement.duration;

      console.log("APP", "sound can play through, got sound element and duration", { soundDuration, soundElement });
      
      // remove this event listener after first run
      soundElement.oncanplaythrough = null;

    };
 
  }, [])

  // timer control 
  React.useEffect(() => {

    // console.log("APP", "useEffect ", { timerRunning, timeRemaining });

    // if timer is set to running then set a timeout to decrement timeRemaining in 1 second

    const handlePeriodEnd = () => {

      // setTimerRunning(false);
      // play period end sound immediately
      playPeriodEndSound();
 
      return setTimeout(() => {
       
        // setTimerRunning(true);

       // if it is currently a session then it is a break next
       // else it will be a session next
       isSession ? setTimeRemaining(breakVal * 60) 
                 : setTimeRemaining(sessionVal * 60);
   
       // toggle is session flag
       setIsSession(() => !isSession);

       
 
     }, Math.max(soundDuration * 1000, 500));
   
    }
    
    
    // clear any existing timeouts
    clearTimeout(timeout)

    if (timerRunning) {

      if (timeRemaining === 0) {
        // time remaining is completed, run the period end handler
        timeout = handlePeriodEnd();
      }
      else {
        // else decrease timer by 1 second after 1 second
        timeout = setTimeout(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 1000);
      }
 
    }
     
  }, [timerRunning, timeRemaining, breakVal, isSession, sessionVal]);
 

  

  const setTimerState = (newTimerRunningState = !timerRunning) => {
    
    // console.log("APP", "current timerRunning state:", timerRunning, "requestedTimerRunning:", newTimerRunningState);

    // cancel any pending timeout if the timer state is switched off
    // if (!newTimerRunningState) clearTimeout(timeout);

    // update timer state
    setTimerRunning(newTimerRunningState);
  }

  const playPeriodEndSound = () => {
    // console.log("APP", "playPeriodEndSound beep")
    // const sound = document.getElementById("beep");
    soundElement.currentTime = 0;
    soundElement.play(); 
  }

  const stopPeriodEndSound = () => {
    // console.log("APP", "stopPeriodEndSound beep")
    // const sound = document.getElementById("beep");
    soundElement.pause(); 
    soundElement.currentTime = 0;
    
  }

  const handleReset = (e) => {
    clearTimeout(timeout);
    stopPeriodEndSound();
    setTimerState(false);
    setSessionVal(defaultSessionVal);
    setBreakVal(defaultBreakVal);
    setTimeRemaining(defaultTimeRemainingVal);
    setIsSession(true);

  };

  return (
    <>
      <Container fluid className="app-container">
        
        <h1>25 + 5 Clock</h1> 

        <Timer
          title="Session"
          breakVal={breakVal}
          sessionVal={sessionVal}
          timeRemaining={timeRemaining}
          timerRunning={timerRunning}
          isSession={isSession}
        /> 
          
        <Row noGutters>

          <ControlSection 
            breakVal={breakVal}
            setBreakVal={setBreakVal}
            sessionVal={sessionVal}
            setSessionVal={setSessionVal}
            arrayHistory={arrayHistory}
            setArrayHistory={setArrayHistory}
            setTimerState={setTimerState}
            timerRunning={timerRunning}
            handleReset={handleReset}
          />

          <HistorySection
            arrayHistory={arrayHistory}
          />

        </Row>
          
      </Container>
    </>
  );



}
 
export default App
