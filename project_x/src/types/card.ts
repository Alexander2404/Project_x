export interface ICards {
  cards: ICard[];
  cardClass: string;
  searchName: string;
  totalPages: number;
  page: number;
  isDetails: boolean;
  cardDetails: {};
  isLoading: boolean;
  isError: boolean;
}
export interface ICard {
  artist: string | null | undefined;
  attack: number | null | undefined;
  cardId: string | null | undefined;
  cardSet: string | null | undefined;
  collectible: boolean | null | undefined;
  durability: number | null | undefined;
  cost: number;
  dbfId: number;
  flavor: string | null | undefined;
  health: number | null | undefined;
  img: string;
  locale: string | null | undefined;
  mechanics: [{}] | null | undefined;
  name: string;
  playerClass: string;
  rarity: string;
  text: string | null | undefined;
  type: string;
  spellSchool: string | null | undefined;
  howToGet: string | null | undefined;
  elite: boolean | null | undefined;
  race: string | null | undefined;
}
export type ICardsActions =
  | ISetCards
  | ISetCardClass
  | ISetSearchByName
  | ISetPage
  | ISetTotalPages
  | ISetIsDetails
  | ISetCardDetails
  | ISetIsLoading
  | ISetIsError;
interface ISetCards {
  type: 'SET_CARDS';
  payload: ICard[];
}

interface ISetCardClass {
  type: 'SET_CARD_CLASS';
  payload: string;
}

interface ISetSearchByName {
  type: 'SET_SEARCH_BY_NAME';
  payload: string;
}

interface ISetPage {
  type: 'SET_PAGE';
  payload: number;
}

interface ISetTotalPages {
  type: 'SET_TOTAL_PAGES';
  payload: number;
}

interface ISetIsDetails {
  type: 'SET_IS_DETAILS';
  payload: boolean;
}
interface ISetCardDetails {
  type: 'SET_CARD_DETAILS';
  payload: {};
}
interface ISetIsLoading {
  type: 'SET_IS_LOADING';
  payload: boolean;
}
interface ISetIsError {
  type: 'SET_IS_ERROR';
  payload: boolean;
}
