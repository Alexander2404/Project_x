import { MenuItem, FormControl, Select, InputLabel, SelectChangeEvent } from '@mui/material';

import { useDispatch } from 'react-redux';
import { SetCardClass, SetPage } from '../../store/actions/cardsActions';
import { SetCardType, SetRarity, SetSorting } from '../../store/actions/filterActions';
import { FiltersSortingType } from '../../store/reducers/filtersReducer';

const classList = [
  'paladin',
  'shaman',
  'mage',
  'demon hunter',
  'death knight',
  'dream',
  'druid',
  'hunter',
  'neutral',
  'priest',
  'rogue',
  'warlock',
  'warrior',
];

export default function FilterByClass() {
  const dispatch = useDispatch();
  function handleClass(e: SelectChangeEvent) {
    dispatch(SetCardClass(e.target.value));
    dispatch(SetPage(1));
    dispatch(SetRarity([]));
    dispatch(SetCardType('All'));
    dispatch(SetSorting(FiltersSortingType.SORTING_BY_ASCENDING));
  }
  return (
    <FormControl sx={{ marginBottom: '15px', marginTop: '15px' }} fullWidth>
      <InputLabel id='demo-multiple-checkbox-label'>Class</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Type'
        onChange={handleClass}
        defaultValue='paladin'
      >
        {classList.map((text) => (
          <MenuItem value={text}>{text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
