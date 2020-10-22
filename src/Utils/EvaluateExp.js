import { evaluate, isNumeric, create, all } from "mathjs";

let mathDefaultPrecision = 6;

const oMath = create(all, {
  number: 'number',    // Choose 'number' (default), 'BigNumber', or 'Fraction'
  precision: mathDefaultPrecision           // 64 by default, only applicable for BigNumbers
})

export default function EvaluateExp(sExpression, precision=mathDefaultPrecision) { 
  let sResult;

  // if non-default precision is requested
  if(isNumeric(precision) && precision!==mathDefaultPrecision) {
    oMath.config({
      precision: Math.round(precision)
    });
  }
  
  try {
    sResult = oMath.evaluate(sExpression.replace("x", "*"));
    console.log("evaluateExp", "Evaluating expression:", sExpression, "=", sResult)
    return isNumeric( sResult) ? sResult : "NaN" ; 
  } 
  catch(e) {
    // console.log("MathJS error:", e);
    return "Invalid expression";
  }

}
