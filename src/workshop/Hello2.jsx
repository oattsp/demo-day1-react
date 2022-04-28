import React, { useState } from "react";

const Hello2 = () => {
  const [name, updateName] = useState("");
  const [age, updateAge] = useState("0");

  const updateNameHandle = (event) => {
    updateName(event.target.value);
  };

  const updateAgeHandle = (event) => {
    updateAge(event.target.value);
  };

  return (
    <div>
      <form>
        <Name name={name} onChangeName={updateNameHandle} />
        <br />
        <br />
        <Age age={age} onChangeAge={updateAgeHandle} />
        <br />
        <br />
        <Show name={name} age={age} />
      </form>
    </div>
  );
};

const Name = ({ name, onChangeName }) => {
  return (
    <React.Fragment>
      Name : <input value={name} type="text" onChange={onChangeName} />
    </React.Fragment>
  );
};

const Age = ({ age, onChangeAge }) => {
  return (
    <React.Fragment>
      Age : <input value={age} type="text" onChange={onChangeAge} />
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
