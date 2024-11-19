import React from "react";
import { useState } from "react";

const Tools = (props) => {
  const arr = props;
  const [state, setState] = useState("All");
  //   console.log(arr);

  const onListChange = (event) => {
    console.log(event.target.value);
    const newArr = arr.map((item) => {
      console.log(item);
    });
    console.log(newArr);
    // const newList = arr.filter((item) => {
    //   if (value === "All") {
    //     return true;
    //   }
    //   if (value === "active") {
    //     return isActive === true;
    //   }
    //   if (value === "non-active") {
    //     return isActive === false;
    //   }
    // });
    // setState(newList);
  };

  return (
    <div>
      <div>
        <select onChange={onListChange}>
          <option value="All">All</option>
          <option value="active">active</option>
          <option value="non-active">non-active</option>
        </select>
      </div>
    </div>
  );
};

export default Tools;
