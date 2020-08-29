import React from "react";
import { useNavigate, useParams } from "react-router";
import Button from "@material-ui/core/Button";

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Game details with ID #{id}</h1>
      <Button
        onClick={() => navigate(-1)}
        variant={"outlined"}
        color={"primary"}
      >
        Go back
      </Button>
    </>
  );
};

export default GameDetails;
