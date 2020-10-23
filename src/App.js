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

let timeout;
  
const App =(props) => {
 
  const [arrayHistory, setArrayHistory] = React.useState([]); 
  const [breakVal, setBreakVal] = React.useState(5); 
  const [sessionVal, setSessionVal] = React.useState(25); 
  const [timerRunning, setTimerRunning] = React.useState(false); 
  const [timeRemaining, setTimeRemaining] = React.useState(() => 25 * 60); 
  
  React.useEffect(() => {

    // console.log("APP", "useEffect ", { timerRunning, timeRemaining });

    // if timer is set to running then set a timeout to decrement timeRemaining in 1 second
    if (timerRunning) {
      timeout = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
    
      }, 1000);
    }
    
    
  }, [timerRunning, timeRemaining])

  const setTimerState = (newTimerRunningState = !timerRunning) => {
    
    // console.log("APP", "current timerRunning state:", timerRunning, "requestedTimerRunning:", newTimerRunningState);

    // cancel any pending timeout if the timer state is switched off
    if (!newTimerRunningState) clearTimeout(timeout);

    // update timer state
    setTimerRunning(newTimerRunningState);
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
            timerRunning={timerRunning}
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
