import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import chart from '../../../resources/images/Dashboard/toolbar/chart.svg';
import calender from '../../../resources/images/Dashboard/toolbar/calender.svg';

export default function BasicSelect(prop: any) {
  console.log(prop.items);
  const [value, setValue] = React.useState(prop.value || '');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, width: prop.width || 175 }}>
      <FormControl fullWidth>
        {prop.label ? (
          <InputLabel id='demo-simple-select-label'>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <img src={chart} />
              Charts
            </div>
          </InputLabel>
        ) : null}

        <Select
          labelId={prop.label && 'demo-simple-select-label'}
          id='demo-simple-select'
          value={value}
          label={prop.label && 'XXXChart'}
          onChange={handleChange}
        >
          {prop.items.map((item: any) => {
            return (
              <MenuItem value={item.value}>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
                >
                  {prop.calender && <img src={calender} alt='date' />}
                  {item.text}
                </div>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
