import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListOrchid = () => {
  const [api, setAPI] = useState([]);
  const baseURL = "https://67072c0ba0e04071d2294b5e.mockapi.io/players";

  const fetchAPI = () => {
    fetch(`${baseURL}?sortBy=id&order=desc`)
      .then((resp) => resp.json())
      .then((data) => setAPI(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="orchid-container">
      {api.length > 0 ? (
        api.map((orchid) => (
          <div className="orchid-card" key={orchid.id}>
            <img
              src={orchid.image}
              alt={orchid.name}
              className="orchid-image"
            />
            <h3>{orchid.name}</h3>
            <strong>{orchid.orchidName}</strong>
            <br />
            <Link to={`/orchid/${orchid.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p>No orchids available.</p>
      )}
    </div>
  );
};

export default ListOrchid;
