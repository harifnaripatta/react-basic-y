import React from "react";
import Label from "./Label";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div className="list-item">
      <h4>{props.title}</h4>
      <p>{props.descr}</p>
      <div className="list-item-label">
        <Label isActive={props.isActive} />
      </div>
    </div>
  );
};

export default ListItem;
