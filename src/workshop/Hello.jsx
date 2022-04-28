import { useState } from "react";

const Hello = () => {
  const [name, updateName] = useState("");

  const handleName = (event) => {
    updateName(event.target.value);
  };

  return (
    <div>
      <form>
        Name : <input type="text" onChange={handleName} />
      </form>
      {name ? <b>Hi, {name}</b> : "Please enter your name"}
    </div>
  );
};

export default Hello;
