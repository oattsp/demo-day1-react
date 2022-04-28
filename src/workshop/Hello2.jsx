import React, { useState } from "react";

const Hello2 = () => {
  const [name, updateName] = useState("...");
  const [age, updateAge] = useState("...");

  const updateNameHandle = (event) => {
    updateName(event.target.value);
  };

  const updateAgeHandle = (event) => {
    updateAge(event.target.value);
  };

  return (
    <div>
      <form>
        <Name onChangeName={updateNameHandle} />
        <br />
        <br />
        <Age onChangeAge={updateAgeHandle} />
        <br />
        <br />
        <Show name={name} age={age} />
      </form>
    </div>
  );
};

const Name = ({ onChangeName }) => {
  return (
    <React.Fragment>
      Name : <input type="text" onChange={onChangeName} />
    </React.Fragment>
  );
};

const Age = ({ onChangeAge }) => {
  return (
    <React.Fragment>
      Age : <input type="text" onChange={onChangeAge} />
    </React.Fragment>
  );
};

const Show = ({ name, age }) => {
  return (
    <React.Fragment>
      Hi, {name} with age = {age}
    </React.Fragment>
  );
};

export default Hello2;
