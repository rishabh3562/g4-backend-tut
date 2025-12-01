import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/v1/users/");
      console.log(res);
      setdata(res.data);
    } catch (error) {
      console.log("some error occurred", error);
    }
  };
  return (
    <>
      <div>dafsadf</div>
    </>
  );
};

export default App;
