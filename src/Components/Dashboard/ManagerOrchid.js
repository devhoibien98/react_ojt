import React, { useState, useEffect } from "react";

import axios from "axios";
import Dashboard from "./Dashboard";

const ManagerOrchid = () => {
  const [orchids, setOrchids] = useState([]); // State to hold the list of orchids

  // Function to fetch orchids from the API
  const fetchOrchids = async () => {
    try {
      const response = await axios.get(
        "https://67072c0ba0e04071d2294b5e.mockapi.io/players"
      );
      // Sort orchids by ID in descending order
      const sortedOrchids = response.data.sort((a, b) => b.id - a.id);
      setOrchids(sortedOrchids); // Update the orchids state with the sorted data
    } catch (error) {
      console.error("Error fetching orchids:", error);
    }
  };

  useEffect(() => {
    fetchOrchids(); // Fetch orchids when the component mounts
  }, []);

  return (
    <div>
      <Dashboard orchids={orchids} refreshOrchids={fetchOrchids} />
    </div>
  );
};

export default ManagerOrchid;
