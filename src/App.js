import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import CalculatorSection from "./Components/CalculatorSection";
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


const generateHistoryItem = () => {
  return {
    expression: "expression",
    result: Math.random() * 100
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExpression: "",
      currentResult: "",
      arrayHistory: [ 
      ]
    }
 
    this.handleSuccessfulEvaluation = this.handleSuccessfulEvaluation.bind(this);

  }

  handleSuccessfulEvaluation({expression, result}) {
    console.log("APP", "handling successufl evaluation of expression and result:", { expression, result }); 
    
    this.setState({
      arrayHistory: [
        { expression, result },
        ...this.state.arrayHistory
      ]
    }); 
  }

  render() {
    // console.log(date.toLocaleString(), "App pre-render, this.state.arrayHistory", this.state.arrayHistory);
 
    return (
      <>
        <Container fluid className="App">
          
          <h1>Javascript Calculator</h1> 
           
          <Row noGutters>

            <CalculatorSection
              handleSuccessfulEvaluation={this.handleSuccessfulEvaluation}
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
