export interface IFiltersState {
  sorting: string;
  rarity: string[];
  cardType: string;
}
export type IFilterActions = ISetCardType | ISetSorting | ISetRarity;
export interface ISetSorting {
  type: 'SET_SORTING';
  payload: string;
}
export interface ISetRarity {
  type: 'SET_RARITY';
  payload: string[];
}
export interface ISetCardType {
  type: 'SET_CARDTYPE';
  payload: string;
}
