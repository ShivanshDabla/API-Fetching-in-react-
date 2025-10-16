import React, { useEffect, useState } from "react";


const App = () => {

  const [user, setuser] = useState([])
  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "https://reqres.in/api/users";

    
      let response = await fetch(url, {
        headers: {
          "x-api-key": "reqres-free-v1", // required header
      }
      });

      response = await response.json();
      setuser(response.data);
  }
  console.log(user)

  return (
  <div><h1>fetch data from API</h1>

  {
    user && user.map((item , idx )=>(
      <div key={idx}>
      <ul>
        <li>Name:{item.first_name}</li>
        <li>Id:{item.id}</li>
        <li>Email:{item.email}</li>
      </ul>
      </div>
    ))
  }

  </div>
  )
};


export default App;
