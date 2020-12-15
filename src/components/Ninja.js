import React from "react";

const Ninja = (props) => {
  console.log(props.ninjas);
  const ninjaList = props.ninjas.map((ninja, i) => {
    return (
      <div key={i}>
        <div>No. {i + 1}</div>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <br></br>
      </div>
    );
  });
  return <div className="">{ninjaList}</div>;
};

export default Ninja;
