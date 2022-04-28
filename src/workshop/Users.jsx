import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(1);

  // Call data from https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users/"+counter)
    .then(function (response) {
      // handle success
      console.log(response);
      setUser(response.data);
    });
  }, [counter]);

  return <div>
      Demo with API 
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <h2>{user.name}</h2>
      </div>;
};

export default Users;
