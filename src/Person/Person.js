import React from "react";

// const person = () => {
//   return <p>I am a Person and I am {Math.floor(Math.random()*22)} years old</p>;
// };

const person = (props) => {
  return (
    <div>
      <p>{props.children}</p>
      <p>I am {props.name} and my age is {props.age}.</p>
    </div>
  );
};
export default person;
