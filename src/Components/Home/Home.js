import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OrchidCard from "../Orchids/OrchidCard";

const Home = () => {
  const BASE_URL = "https://67072c0ba0e04071d2294b5e.mockapi.io/players";
  const [orchids, setOrchids] = useState([]); // Sửa từ null thành mảng rỗng

  useEffect(() => {
    const fetchOrchids = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setOrchids(response.data);
      } catch (error) {
        console.error("Error fetching orchids", error);
      }
    };
    fetchOrchids();
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Mỗi hàng có 4 cột
          gap: 2, // Khoảng cách giữa các thẻ
          padding: 2, // Padding xung quanh grid
          alignItems: "stretch", // Đảm bảo các thẻ có chiều cao bằng nhau
        }}
      >
        {orchids.map((orchid) => (
          <OrchidCard key={orchid.id} orchid={orchid} />
        ))}
      </Box>
    </div>
  );
};

export default Home;
