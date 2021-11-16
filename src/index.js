import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Box from "./App";
import reportWebVitals from "./reportWebVitals";
import { Canvas, useFrame } from "@react-three/fiber";

ReactDOM.render(
  <React.StrictMode>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
