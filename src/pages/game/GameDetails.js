import React from "react";
import { useParams } from "react-router";

const GameDetails = () => {
  const { id } = useParams();

  return <h1>Game details with ID #{id}</h1>;
};

export default GameDetails;
