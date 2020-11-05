import React, { useEffect, useState } from "react";
import "./App.css";
import KeyPad from "./Components/keypad/keypad.js";

import socket from "./Service/Socket.js";
require('dotenv').config();

const baseURL = process.env.PORT || "http://localhost:3001";

const App = () => {
  const [operations, setOperations] = useState([]);

  //To handle entries and to ensure updation to all connected sockets
  useEffect(() => {
    socket.on("send calc", (data) => {
      setOperations(data);
    });
    return () => {
      socket.off("send calc");
    };
  }, [operations]);

  //Code to display messages on first render
  useEffect(() => {
    fetch(`${baseURL}/`)
      .then((response) => response.json())
      .then((response) => setOperations(response));
  }, []);

  //function to handle form input at the entered user connection
  function newOperation(input) {
    socket.emit("send calc", input);
  }

  const operationsList = operations.map((operation) => (
    <>
      <li>{operation.resultString}</li>
    </>
  ));

  return (
    <>
      <nav className="heading">
        <h1>Calculator</h1>
      </nav>
      <div>
        <div className="main-container">
          <KeyPad
            className="form-element"
            value={operations}
            createExpression={newOperation}
          />

          <div className="result-view">
            <div>Calculation Stream</div>
            <ul className="list-element">{operationsList}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
