import { Box } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        height: '72px',
        width: '100%',
        bgcolor: '#795548',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    ></Box>
  );
}
