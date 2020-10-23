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
 

const App =(props) => {
 
  const [arrayHistory, setArrayHistory] = React.useState([]); 
  const [breakVal, setBreakVal] = React.useState(5); 
  const [sessionVal, setSessionVal] = React.useState(25); 
  const [timerRunning, setTimerRunning] = React.useState(false); 
  const [timeRemaining, setTimeRemaining] = React.useState(25*60); 
 
  async function countDownUntil(exitCondition) {
    console.log("APP", "-----------------\nCountownUntil start");
    return await new Promise(resolve => {

      console.log("APP", "CountownUntil promise start, wait 0.5s");

      // wait half a second before starting 
      setTimeout(() => {
        console.log("APP", "timeout function after 0.5s");

        const interval = setInterval(() => {
 
          console.log("APP", "CountdownUntil loop interval, current  state:", "state:", {timerRunning,  timeRemaining});
  
          // check if timer should still run 
          if (exitCondition || timeRemaining === 0) {
            console.log("APP", "CountdownUntil loop interval, EXITING, current timerRunning state:", "state:", { timerRunning, timeRemaining });
            
            resolve();
            clearInterval(interval);
            return
          };

          console.log("APP", "CountdownUntil loop interval, DECREMENTING TIME, current timerRunning state:", "state:", { timerRunning, timeRemaining });

          //decrement time remaining if timer is still running
          setTimeRemaining(timeRemaining - 1);
  
        }, 1000);
        
      }, 500);
 
    });
  }

  const setTimerState = async (newTimerRunningState = !timerRunning) => {
    
    console.log("--------APP", "current timerRunning state:", timerRunning, "requestedTimerRunning:", newTimerRunningState);

    if (timerRunning) {
      setTimerRunning(false);
    }
    else {
      setTimerRunning(true);
      await countDownUntil(!timerRunning);
       
    }
  }
 
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
