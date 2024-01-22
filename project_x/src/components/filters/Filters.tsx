import FilterByClass from './FilterByClass';
import FilterByType from './FilterByType';
import FilterByRarity from './FiltersByRarity';
import Sorting from './Sorting';
import { useDispatch } from 'react-redux';
import { SetCardClass } from '../../store/actions/cardsActions';
import { SetCardType, SetRarity, SetSorting } from '../../store/actions/filterActions';
import { FiltersSortingType } from '../../store/reducers/filtersReducer';
import { Button } from '@mui/material';

export default function Filters() {
  const dispatch = useDispatch();
  function resetFilters() {
    dispatch(SetCardClass('paladin'));

    dispatch(SetRarity([]));
    dispatch(SetCardType('All'));
    dispatch(SetSorting(FiltersSortingType.SORTING_BY_ASCENDING));
  }
  return (
    <>
      <FilterByClass />
      <FilterByType />
      <Sorting />
      <FilterByRarity />
      <Button onClick={resetFilters} variant='contained'>
        Reset
      </Button>
    </>
  );
}
