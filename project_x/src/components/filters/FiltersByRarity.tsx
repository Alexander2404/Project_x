import { useState, useEffect } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { SetRarity } from '../../store/actions/filterActions';
import { RootState } from '../../store/store';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

const races = ['Epic', 'Free', 'Common', 'Rare', 'Legendary'];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FilterByRarity() {
  const [rarity] = useState<string[]>([]);
  const dispatch = useDispatch();
  const racesList = useSelector((state: RootState) => state.filters.rarity);
  useEffect(() => {
    console.log(rarity);
  }, [racesList]);

  const handleChange = (event: SelectChangeEvent<typeof rarity>) => {
    const {
      target: { value },
    } = event;

    dispatch(SetRarity(typeof value === 'string' ? value.split(',') : value));
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: '15px' }}>
      <InputLabel id='demo-multiple-checkbox-label'>Rarity</InputLabel>
      <Select
        labelId='demo-multiple-checkbox-label'
        id='demo-multiple-checkbox'
        multiple
        value={racesList}
        onChange={handleChange}
        input={<OutlinedInput label='Tag' />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {races.map((name: any) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={racesList.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
