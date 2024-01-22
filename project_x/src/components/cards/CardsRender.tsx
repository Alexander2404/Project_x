import { useEffect } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';
import { getCardByName, getCards } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CircularProgress from '@mui/material/CircularProgress';
import PaginationRender from '../filters/Pagination';
import { FiltersSortingType } from '../../store/reducers/filtersReducer';
import Search from '../filters/Search';
import CardsGrid from './CardSGrid';
import { SetIsError } from '../../store/actions/cardsActions';

export default function CardsRender() {
  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => state.cards.page);
  const className = useSelector((state: RootState) => state.cards.cardClass);
  const cards = useSelector((state: RootState) => state.cards.cards);
  const searchByName = useSelector((state: RootState) => state.cards.searchName);
  const loading = useSelector((state: RootState) => state.cards.isLoading);
  const sorting = useSelector((state: RootState) => state.filters.sorting);
  const rarityList = useSelector((state: RootState) => state.filters.rarity);
  const type = useSelector((state: RootState) => state.filters.cardType);
  const error = useSelector((state: RootState) => state.cards.isError);

  useEffect(() => {
    if (searchByName === '') {
      dispatch(getCards(className, type, rarityList) as unknown as UnknownAction);

      console.log(cards);
    }
  }, [className, type, rarityList, searchByName]);
  useEffect(() => {
    if (rarityList.length !== 0 && cards.length === 0 && loading === false) {
      dispatch(SetIsError(true));
    } else {
      dispatch(SetIsError(false));
    }
  }, [type, cards, className, type, searchByName]);

  useEffect(() => {
    if (searchByName !== '') {
      dispatch(getCardByName(searchByName) as unknown as UnknownAction);
    }
  }, [searchByName]);

  return (
    <>
      <Search />
      {loading && <CircularProgress />}
      {error && <p>not found</p>}
      <CardsGrid
        cards={cards}
        page={page}
        sorting={sorting}
        filtersSortingType={FiltersSortingType}
      />
      <PaginationRender />
    </>
  );
}
