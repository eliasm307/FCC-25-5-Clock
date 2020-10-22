import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import ControlSection from "./Components/ControlSection";
import HistorySection from "./Components/HistorySection";

import "./global-styles.scss"; 

/*
TODO

- Add ui to set precision (not necessary?)
- Add controls to clear history 
- Add keyboard bindings so typing automatically focusses on text area and puts character in last position of caret
- Invalid expressions should not go into history

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
        <Container fluid className="App">
          
          <h1>25 + 5 Clock</h1> 
           
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
