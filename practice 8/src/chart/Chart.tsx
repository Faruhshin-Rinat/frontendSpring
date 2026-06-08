import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { teams, countries, roles } from './groupdata';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';

type tSelect = 'Команда' | 'Страна' | 'Роль';

function Chart() {
  const [group, setGroup] = React.useState<tSelect>('Команда');
  const [groupData, setGroupData] = React.useState(teams);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as tSelect;
    setGroup(value);
    if (value === 'Команда') {
      setGroupData(teams);
    } else if (value === 'Страна') {
      setGroupData(countries);
    } else {
      setGroupData(roles);
    }
  };

  return (
    <div>
      <Navbar active="3" />
      <Box sx={{ width: '200px', m: 'auto' }}>
        <FormControl fullWidth>
          <InputLabel> Группировать по </InputLabel>
          <Select id="select-group" value={group} label="Группировать по" onChange={handleChange}>
            <MenuItem value="Команда"> Команде </MenuItem>
            <MenuItem value="Страна"> Стране </MenuItem>
            <MenuItem value="Роль"> Роли </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupChart data={groupData} />
      <GroupGrid data={groupData} />
      <Footer />
    </div>
  );
}

export default Chart;
