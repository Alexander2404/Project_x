import { Box, MenuItem, FormControl, Select, InputLabel, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SetSorting } from '../../store/actions/filterActions';
import { FiltersSortingType } from '../../store/reducers/filtersReducer';
import { RootState } from '../../store/store';

const sortingTypesList = [
  FiltersSortingType.SORTING_BY_ASCENDING,
  FiltersSortingType.SORTING_BY_DESCENDING,
];

export default function Sorting() {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filters.sorting);
  function handleSorting(e: SelectChangeEvent) {
    dispatch(SetSorting(e.target.value));
  }
  return (
    <Box key={sort} sx={{ maxWidth: '100%', marginBottom: '15px' }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Sorting by:</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Sorting by:'
          onChange={handleSorting}
          defaultValue={sort}
        >
          {sortingTypesList.map((text) => (
            <MenuItem value={text}>{text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
