export default function ReplaceTrailingOperator(sExpression="") {

  console.log("ReplaceTrailingOperator for '" + sExpression + "'");

  let s = sExpression.toString().trim();  

  // loop and remove all operators that cant be chained naturally (note '-' needs to be escaped)
  while (/[/*\-+x(]$/.test(s)) {
    // console.log("ReplaceTrailingOperator", "expression: '" + s + "' HAS a trailing operator");
    
    // remove last character
    s = s.substring(0, s.length - 1).trim();

    // console.log("ReplaceTrailingOperator","s: '" + s + "'; /[/*-+x(]$/.test('" + s + "'):", /[/*-+x]$/.test(s));

  };

  console.log("ReplaceTrailingOperator", "all trailing operators removed from: '" + sExpression + "' resulting expression is '" + s + "'")
 
  return s;
  
}
