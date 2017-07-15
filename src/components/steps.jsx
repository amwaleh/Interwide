import React from "react";
import { render } from "react-dom";
import Steps from "react-steps";

const json = [
  {
    text: "First finished step",
    isActive: false,
    isDone: true,
  },
  {
    text: "Second finished step",
    isActive: false,
    isDone: true,
  },
  {
    text: "Active step",
    isActive: true,
    isDone: false,
  },
  {
    text: "Unfinished step",
    isActive: false,
    isDone: false,
  },
];

const Example = ({ children }) => (
  <div style={{
    color: "#fff !important",
    borderRadius: "5px",
    padding: "1em",
    margin: "1em",

  }}
  >
    {children}
  </div>
);


const Step = ({ data }) => (
  <div>
    <Example>
      <Steps items={data} type={"circle"} />
    </Example>
  </div>
);


export default Step;
