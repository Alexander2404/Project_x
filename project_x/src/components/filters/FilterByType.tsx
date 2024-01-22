import { Box, MenuItem, FormControl, Select, InputLabel, SelectChangeEvent } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { SetPage } from '../../store/actions/cardsActions';
import { SetCardType } from '../../store/actions/filterActions';
import { RootState } from '../../store/store';

const typeList = ['All', 'Spell', 'Weapon', 'Location', 'Hero', 'Minion'];

export default function FilterByType() {
  const dispatch = useDispatch();
  const cardClass = useSelector((state: RootState) => state.cards.cardClass);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(SetCardType(event.target.value as string));
    dispatch(SetPage(1));
  };

  return (
    <Box key={cardClass} sx={{ maxWidth: '100%', marginBottom: '15px' }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Type'
          onChange={handleChange}
          defaultValue={typeList[0]}
        >
          {typeList.map((text) => (
            <MenuItem value={text}>{text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
