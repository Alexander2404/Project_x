import { Box, Pagination } from '@mui/material';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { SetPage, SetTotalPages } from '../../store/actions/cardsActions';

export default function PaginationRender() {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards.cards);
  const totalPages = useSelector((state: RootState) => state.cards.totalPages);
  const page = useSelector((state: RootState) => state.cards.page);

  useEffect(() => {
    getTotalPage();
  }, [page, cards]);
  function getTotalPage() {
    dispatch(SetTotalPages(Math.ceil(cards.length / 30)));
  }
  return (
    <Box sx={{ m: '24px 6px', display: 'flex', justifyContent: 'center' }}>
      {cards.length > 0 ? (
        <Pagination
          count={totalPages}
          size='small'
          color='primary'
          page={page}
          siblingCount={1}
          onChange={(_, num) => {
            dispatch(SetPage(num));
          }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '298px',
            marginTop: 'auto',
          }}
        />
      ) : (
        ''
      )}
    </Box>
  );
}
