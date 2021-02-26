import axios from "axios";
import React, { Component, useEffect, useState } from "react";

function Index() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setData(res.data);
    });
  }, [count]);

  return (
    <div>
      <h1>Hello Table</h1>
      <button onClick={() => setCount(count + 1)}>Test Count</button>
      <ul>
        {data.map((items) => (
          <li>{items.url}</li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
