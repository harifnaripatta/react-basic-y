import React from "react";
import "./Label.css";

const Label = (props) => {
  const style = props.isActive
    ? { backgroundColor: "green", color: "white" }
    : { backgroundColor: "red", color: "white" };
  return (
    <label className="label" style={style}>
      {props.isActive ? "Active" : "Non Active"}
    </label>
  );
};

export default Label;
