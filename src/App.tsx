import "./styles.css";
import Container from "./Container";
import CustomTextField from "./CustomTextField";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Container>
        <CustomTextField name={"text1"} />
        <CustomTextField name={"text2"} />
      </Container>
    </div>
  );
}
