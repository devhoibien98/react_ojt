import React from "react";
import orchids from "../../data/orchids";
import OrchidCard from "./OrchidCard";

const Orchids = () => {
  return (
    <div>
      {orchids.map((orchid) => (
        <OrchidCard key={orchid.id} orchid={orchid} />
      ))}
    </div>
  );
};
export default Orchids;
