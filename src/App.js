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
const defaultTimeRemainingVal = defaultSessionVal * 60; 

let timeout; 
let soundDuration;

const App = (props) => {
 
  // state variables
  const [arrayHistory, setArrayHistory] = React.useState([]); 
  const [breakVal, setBreakVal] = React.useState(defaultBreakVal); 
  const [sessionVal, setSessionVal] = React.useState(defaultSessionVal); 
  const [timerRunning, setTimerRunning] = React.useState(false); 
  const [timeRemaining, setTimeRemaining] = React.useState(defaultTimeRemainingVal); 
  const [isSession, setIsSession] = React.useState(true); 
  
  // refs
  const soundElement = React.useRef(null);

  // run once
  React.useEffect(() => {
    
    // get sound element and save it in a variable
    // soundElement = document.getElementById("beep");

    console.log("APP", "get sound element", soundElement.current);

    // get timer end sound duration 
    soundDuration = soundElement.current.duration;
 
    /* 

    // add event listener for when sound is loaded 
    soundElement.current.oncanplaythrough = () => {
      // get timer end sound duration 
      soundDuration = soundElement.current.duration;

      console.log("APP", "sound can play through, got sound element and duration", { soundDuration, soundElement });
      
      // remove this event listener after first run
      soundElement.current.oncanplaythrough = null;

    };
    */
 
  }, [])

  // timer control 
  React.useEffect(() => { 

    const handlePeriodEnd = () => {

      // setTimerRunning(false);
      // play period end sound immediately
      playPeriodEndSound();
 
      return setTimeout(() => {

        try {
          // setTimerRunning(true);

          // if it is currently a session then it is a break next
          // else it will be a session next
          isSession ? setTimeRemaining(breakVal * 60) 
                    : setTimeRemaining(sessionVal * 60);

          // toggle is session flag
          setIsSession(!isSession); 

        }
        catch (error) {
          console.log("handlePeriodEnd ERROR", error)
        }
        
     }, soundDuration * 1000);
   
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

    // update timer state
    setTimerRunning(newTimerRunningState);
  }

  

  const stopPeriodEndSound = () => {
    console.log("APP", "stopPeriodEndSound beep")
    // const sound = document.getElementById("beep");

    try {
      soundElement.current.pause(); 
      soundElement.current.currentTime = 0;
      
    } catch (error) {
      console.log("stopPeriodEndSound ERROR", error)
    } 
  }

  const playPeriodEndSound = () => {
     console.log("APP", "playPeriodEndSound beep", soundElement.current)
    // const sound = document.getElementById("beep");
    try {
      stopPeriodEndSound();
      soundElement.current.currentTime = 0;
      
      // Playing audio in chrome
      // from https://stackoverflow.com/questions/56398641/react-error-when-using-audio-play-function
      var playPromise = soundElement.current.play(); 

      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
            console.log("audio played auto");
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("playback prevented");
          });
      }

    }
    catch (error) {
      console.log("playPeriodEndSound ERROR", error)
    }
    
  }

  const handleReset = (e) => {
    console.log("handleReset");
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

        <audio
          id="beep"
          src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
          type="audio/ogg"
          ref={soundElement}
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
            isSession={isSession}
            setTimeRemaining={setTimeRemaining}
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
