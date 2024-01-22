import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardsRender from '../cards/CardsRender';
import Filters from '../filters/Filters';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffd54f',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',

  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: '20px',
      }}
    >
      <Grid sx={{ width: '99%', display: 'flex', justifyContent: 'center' }} container spacing={2}>
        <Grid item xs>
          <Item>
            <Filters />
          </Item>
        </Grid>

        <Grid item xs={9.5} sx={{ maxWidth: '100%' }}>
          <Item>
            <CardsRender />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
