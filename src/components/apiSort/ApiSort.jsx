import React, { useState, useEffect } from "react";
import "./apiSort.css";

const ApiSort = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
        const sortedData = jsonData.data.sort((a, b) =>
          a.first_name.localeCompare(b.first_name)
        );
        setData(sortedData); // Update data with the array from the response
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div className="container">
    <h1>API sort & fetch name and email</h1>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{`${item.first_name} ${item.last_name}`}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ApiSort;
