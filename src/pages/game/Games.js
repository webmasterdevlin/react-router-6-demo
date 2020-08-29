import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Paper, Typography } from "@material-ui/core";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setGames(result))
      .finally(() => setLoading(false));
  }, []);

  const navigate = useNavigate();

  if (loading)
    return (
      <Container>
        <h1>Loading..</h1>
      </Container>
    );

  return (
    <>
      <h1>Games</h1>
      {games.map((game) => (
        <Box mb={4} key={game.id}>
          <Paper key={game.id}>
            <Box mx={3} py={3}>
              <Typography gutterBottom variant="h5" component="h2">
                {game.title}
              </Typography>

              <Button
                onClick={() => navigate("/game-details/" + game.id)}
                color={"primary"}
              >
                See Details
              </Button>
            </Box>
          </Paper>
        </Box>
      ))}
    </>
  );
};

export default Games;
