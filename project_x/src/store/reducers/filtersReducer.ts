import { IFilterActions, IFiltersState } from '../../types/filters';

export enum FiltersSortingType {
  SORTING_BY_DESCENDING = 'Mana: hight to low',
  SORTING_BY_ASCENDING = 'Mana: low to hight',
}

const initialState: IFiltersState = {
  sorting: FiltersSortingType.SORTING_BY_ASCENDING,
  rarity: [],
  cardType: 'All',
};

export const filtersReducer = (state = initialState, action: IFilterActions): IFiltersState => {
  switch (action.type) {
    case 'SET_SORTING':
      return { ...state, sorting: action.payload };
    case 'SET_RARITY':
      return { ...state, rarity: action.payload };
    case 'SET_CARDTYPE':
      return { ...state, cardType: action.payload };
    default:
      return state;
  }
};
