import { Box, IconButton, FormControl, Input } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { SetIsError, SetSearchByName } from '../../store/actions/cardsActions';
import { RootState } from '../../store/store';
import ClearIcon from '@mui/icons-material/Clear';

import InputAdornment from '@mui/material/InputAdornment';

export default function Search() {
  const [fieldValue, setFieldValue] = useState('');
  const dispatch = useDispatch();
  function handleField(e: React.ChangeEvent<HTMLInputElement>) {
    setFieldValue(e.target.value);
  }
  function clearField() {
    setFieldValue('');
    dispatch(SetSearchByName(''));
    dispatch(SetIsError(false));
  }
  return (
    <Box
      sx={{
        display: 'flex',

        justifyContent: 'space-between',
        maxWidth: '510px',
        margin: '0 auto',
        marginBottom: '32px',
      }}
    >
      <FormControl
        sx={{
          bgcolor: 'white',
          padding: '8px',
          borderRadius: '10px',
          m: 1,
          width: '50ch',
        }}
        variant='standard'
      >
        <Input
          id='standard-adornment-weight'
          value={fieldValue}
          onChange={handleField}
          endAdornment={
            <InputAdornment position='end'>
              {fieldValue !== '' && (
                <IconButton
                  sx={{ marginRight: '-5px', marginTop: '-1px' }}
                  edge='end'
                  onClick={clearField}
                >
                  <ClearIcon />
                </IconButton>
              )}
              <IconButton sx={{ marginRight: '-5px' }} edge='end'>
                <SearchIcon
                  color='primary'
                  onClick={() => {
                    dispatch(SetSearchByName(fieldValue));
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
