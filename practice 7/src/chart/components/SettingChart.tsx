import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export type tSeries = {
  'Максимальный рейтинг': boolean;
  'Средний рейтинг': boolean;
  'Минимальный рейтинг': boolean;
};

type CheckboxProps = {
  series: tSeries;
  setSeries: React.Dispatch<React.SetStateAction<tSeries>>;
  isBar: boolean;
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({
      ...series,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBar(event.target.value === 'bar');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 2,
        m: '20px 0',
      }}
    >
      <FormControl>
        <FormLabel id="label-radio-group">Тип диаграммы:</FormLabel>
        <RadioGroup name="group-radio" value={isBar ? 'bar' : 'dot'} onChange={handleRadioChange}>
          <FormControlLabel value="bar" control={<Radio />} label="Гистограмма" />
          <FormControlLabel value="dot" control={<Radio />} label="Линейная" />
        </RadioGroup>
      </FormControl>

      <Divider orientation="vertical" flexItem />

      <FormControl>
        <FormLabel id="label-checkbox-group">На диаграмме показать:</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Максимальный рейтинг']}
              onChange={handleChange}
              name="Максимальный рейтинг"
            />
          }
          label="максимальный рейтинг"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Средний рейтинг']}
              onChange={handleChange}
              name="Средний рейтинг"
            />
          }
          label="средний рейтинг"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Минимальный рейтинг']}
              onChange={handleChange}
              name="Минимальный рейтинг"
            />
          }
          label="минимальный рейтинг"
        />
      </FormControl>
    </Box>
  );
}

export default SettingChart;
