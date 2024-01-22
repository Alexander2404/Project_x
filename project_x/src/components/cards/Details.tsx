import '../cards/style.css';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { SetIsDetails } from '../../store/actions/cardsActions';

export default function Details() {
  const isDetails = useSelector((state: RootState) => state.cards.isDetails);
  const cardDetails = useSelector((state: RootState) => state.cards.cardDetails);
  let cardText = cardDetails?.text;
  const dispatch = useDispatch();
  const regExp = /<\/?[b-i]+>/gi;

  if (cardText !== undefined && cardText !== null) {
    cardText = cardDetails.text
      .replace(/\*|\\n|@|{|}|__|_|#|\$/g, ' ')
      .replace(regExp, ' ')
      .replace(/[/?[a-zA-Z]+]/gi, '');
  }
  useEffect(() => {
    console.log(isDetails);
  }, [isDetails]);
  if (isDetails === true) {
    return (
      <>
        <div className='detailsBg'></div>
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            marginLeft: '96%',
            position: 'fixed',
            zIndex: ' 1000',
          }}
        >
          <IconButton onClick={() => dispatch(SetIsDetails(false))}>
            <CloseIcon sx={{ color: '#ffeb3b', fontSize: '50px', zIndex: '1000' }}></CloseIcon>
          </IconButton>
        </Box>
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            marginLeft: '35%',
            marginTop: '12%',
            position: 'fixed',
            zIndex: ' 1000',
          }}
        >
          <Box sx={{ width: '800px', display: 'flex' }}>
            <Box sx={{ width: '250px', height: '100px', marginRight: '12%' }}>
              <img style={{ display: 'block', width: '300px' }} src={cardDetails.img} alt='' />
            </Box>
            <Box sx={{ marginTop: '50px' }}>
              <h2 style={{ color: 'white', lineHeight: '0' }}>{cardDetails.name}</h2>
              <p style={{ color: 'white', fontSize: '22px' }}>{cardText}</p>
              <ul>
                <li>Class: {cardDetails.playerClass}</li>
                <li>Type: {cardDetails.type}</li>
                <li>Rarity: {cardDetails.rarity}</li>
                {cardDetails.health !== undefined ?? <li>Health: {cardDetails.health}</li>}
              </ul>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
