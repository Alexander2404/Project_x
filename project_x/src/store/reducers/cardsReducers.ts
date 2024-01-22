import { ICards, ICardsActions } from '../../types/card';

const initialState: ICards = {
  cards: [],
  cardClass: 'paladin',
  searchName: '',
  totalPages: 0,
  page: 1,
  isDetails: false,
  cardDetails: {},
  isLoading: false,
  isError: false,
};

export const cardsReducer = (state = initialState, action: ICardsActions): ICards => {
  switch (action.type) {
    case 'SET_CARD_CLASS':
      return { ...state, cardClass: action.payload };
    case 'SET_CARDS':
      return { ...state, cards: action.payload };
    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_SEARCH_BY_NAME':
      return { ...state, searchName: action.payload };
    case 'SET_IS_DETAILS':
      return { ...state, isDetails: action.payload };
    case 'SET_CARD_DETAILS':
      return { ...state, cardDetails: action.payload };
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_IS_ERROR':
      return { ...state, isError: action.payload };
    default:
      return state;
  }
};
