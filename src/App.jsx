import React from "react";
import Header from "./Header";
import ListItem from "./ListItem";
import Tools from "./Tools";
import { useState } from "react";
import Usage from "./Usage";

const App = () => {
  const arr = [
    {
      title: "apponitment for october",
      descr: "the patient is rescheduled to october",
      isActive: false,
    },
    {
      title: "apponitment for november",
      descr: "the patient is rescheduled to november",
      isActive: true,
    },
    {
      title: "apponitment for december",
      descr: "the patient is rescheduled to december",
      isActive: false,
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <Tools {...arr} />
        <div>
          {/* <ListItem
            title={obj.title}
            descr={obj.descr}
            isActive={obj.isActive}
          /> */}
          {arr.map((obj) => (
            <ListItem
              key={obj.title}
              title={obj.title}
              descr={obj.descr}
              isActive={obj.isActive}
            />
          ))}
        </div>
      </div>
      Footer
      <Usage />
    </div>
  );
};

export default App;
