import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import players from "../../data";
import PlayerCard from './PlayerCard';

const featured = [0, 2, 3, 4];

function Content() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 3, md: 6 }}>
        {featured.map((id, index) => (
          <Grid key={id} size={{ xs: 12, md: 6 }}>
            <PlayerCard player={players[id]} id={id} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Content;
