import React, { useState } from "react";
import "./keypad.css";

function KeyPadComponent({ createExpression }) {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  let statement, value;

  function calculate() {
    try {
      value = Number.isInteger(eval(result))
        ? eval(result)
        : eval(result).toFixed(2);
      statement = result + "=" + (value || "") + "";
      setExpression(statement);
      createExpression(statement);
    } catch (e) {
      setResult("error");
    }
  }

  function reset() {
    setResult("");
    setExpression("");
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function onClick(button) {
    setResult(result + button);
  }

  return (
    <div className="button-pad">
      <div className="screen">
        {result && !expression && <p>{result}</p>}
        {expression && <p>{expression}</p>}
      </div>
      <button name="(" onClick={(e) => onClick(e.target.name)}>
        (
      </button>
      <button name="CE" onClick={(e) => backspace(e.target.name)}>
        CE
      </button>
      <button name=")" onClick={(e) => onClick(e.target.name)}>
        )
      </button>
      <button name="C" onClick={(e) => reset(e.target.name)}>
        C
      </button>
      <br />

      <button name="1" onClick={(e) => onClick(e.target.name)}>
        1
      </button>
      <button name="2" onClick={(e) => onClick(e.target.name)}>
        2
      </button>
      <button name="3" onClick={(e) => onClick(e.target.name)}>
        3
      </button>
      <button name="+" onClick={(e) => onClick(e.target.name)}>
        +
      </button>
      <br />

      <button name="4" onClick={(e) => onClick(e.target.name)}>
        4
      </button>
      <button name="5" onClick={(e) => onClick(e.target.name)}>
        5
      </button>
      <button name="6" onClick={(e) => onClick(e.target.name)}>
        6
      </button>
      <button name="-" onClick={(e) => onClick(e.target.name)}>
        -
      </button>
      <br />

      <button name="7" onClick={(e) => onClick(e.target.name)}>
        7
      </button>
      <button name="8" onClick={(e) => onClick(e.target.name)}>
        8
      </button>
      <button name="9" onClick={(e) => onClick(e.target.name)}>
        9
      </button>
      <button name="*" onClick={(e) => onClick(e.target.name)}>
        x
      </button>
      <br />

      <button name="." onClick={(e) => onClick(e.target.name)}>
        .
      </button>
      <button name="0" onClick={(e) => onClick(e.target.name)}>
        0
      </button>
      <button name="=" onClick={(e) => calculate(e.target.name)}>
        =
      </button>
      <button name="/" onClick={(e) => onClick(e.target.name)}>
        /
      </button>
      <br />
    </div>
  );
}


export default KeyPadComponent;
