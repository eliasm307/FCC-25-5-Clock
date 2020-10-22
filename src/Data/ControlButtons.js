import ReplaceTrailingOperator from "../Utils/ReplaceTrailingOperator"

// below is the configuration for all the control button objects which is used in logic and rendering 

export const controlButtons = [
  {
    id: "delete",
    keyCode: 0,
    value: "Delete",
    stringAction: (str) => { 

      let s = str.toString().trim();
   
      // no change if it is initial zero value
      if(s==="0") return s; 
      
      // remove last character
      s = s.substring(0, s.length-1)

      // if all characters removed then set to initial zero value
      if(s==="") s = "0";

      return s;
    },
    colWidth: 6 
  }, 
  {
    id: "clear",
    keyCode: 0,
    value: "Clear",
    stringAction: (str) => "0",
    colWidth: 6
  }, 
  {
    id: "add",
    keyCode: 0,
    value: "+",
    stringAction: (str) => ReplaceTrailingOperator(str) + " + "
  }, 
  {
    id: "subtract",
    keyCode: 0,
    value: "-",
    stringAction: (str) => {
      let s = str.trim();
    
      // do not repeat negative signs 
      if (/-$/.test(s)) return str;
      
      return str + " - ";
    }
  }, 
  {
    id: "divide",
    keyCode: 0,
    value: "/",
    stringAction: (str) => ReplaceTrailingOperator(str) + " / "     
  }, 
  {
    id: "multiply",
    keyCode: 0,
    value: "x",
    stringAction: (str) => ReplaceTrailingOperator(str) + " x "     
  },   
  {
    id: "left-bracket",
    keyCode: 0,
    value: "(",
    stringAction: (str) => str + " ( ",
    colWidth: 4     
  }, 
  {
    id: "right-bracket",
    keyCode: 0,
    value: ")",
    stringAction: (str) => ReplaceTrailingOperator(str) + " ) ",
    colWidth: 4  
  },
  {
    id: "equals",
    keyCode: 0,
    value: "=",
    colWidth: 4
  }
];
