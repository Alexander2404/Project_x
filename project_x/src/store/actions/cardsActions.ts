import { ICard } from '../../types/card';

export const SetCards = (cards: ICard[]) => ({
  type: 'SET_CARDS',
  payload: cards,
});
export const SetCardClass = (cardClass: string) => ({
  type: 'SET_CARD_CLASS',
  payload: cardClass,
});
export const SetSearchByName = (searchName: string) => ({
  type: 'SET_SEARCH_BY_NAME',
  payload: searchName,
});
export const SetTotalPages = (totalPages: number) => ({
  type: 'SET_TOTAL_PAGES',
  payload: totalPages,
});
export const SetPage = (page: number) => ({
  type: 'SET_PAGE',
  payload: page,
});
export const SetIsDetails = (details: boolean) => ({
  type: 'SET_IS_DETAILS',
  payload: details,
});
export const SetCardDetails = (card: {}) => ({
  type: 'SET_CARD_DETAILS',
  payload: card,
});
export const SetIsLoading = (loading: boolean) => ({
  type: 'SET_IS_LOADING',
  payload: loading,
});
export const SetIsError = (error: boolean) => ({
  type: 'SET_IS_ERROR',
  payload: error,
});
