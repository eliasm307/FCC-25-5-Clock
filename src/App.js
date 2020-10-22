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
 

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      arrayHistory: []
    }
  

  }
 

  render() {
    // console.log(date.toLocaleString(), "App pre-render, this.state.arrayHistory", this.state.arrayHistory);
 
    return (
      <>
        <Container fluid className="app-container">
          
          <h1>25 + 5 Clock</h1> 

          <Timer
            title="Session"
          /> 
           
          <Row noGutters>

            <ControlSection 
            />

            <HistorySection
              arrayHistory={this.state.arrayHistory}
            />

          </Row>
           
        </Container>
      </>
    );

  }

}
 
export default App
