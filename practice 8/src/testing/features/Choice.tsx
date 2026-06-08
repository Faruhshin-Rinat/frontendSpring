import { useEffect } from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { tTasks } from '../quizData';
import { addList, setDraggedItems } from './quizSlice';
import { RootState } from '../../store';

interface ComponentProps {
  index: number;
  multiple: boolean;
  tasks: tTasks;
}

function Choice({ index, multiple, tasks }: ComponentProps) {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.lists.lists[index]) || [];

  const options = tasks.map((t) => t.question);

  useEffect(() => {
    dispatch(addList({ index, items: [] }));
  }, []);

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDraggedItems({ index, items: [event.target.value] }));
  };

  const handleCheckbox = (option: string) => () => {
    const next = selected.includes(option)
      ? selected.filter((o) => o !== option)
      : [...selected, option];
    dispatch(setDraggedItems({ index, items: next }));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <FormControl>
        {multiple ? (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox checked={selected.includes(option)} onChange={handleCheckbox(option)} />
                }
                label={option}
              />
            ))}
          </FormGroup>
        ) : (
          <RadioGroup value={selected[0] || ''} onChange={handleRadio}>
            {options.map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        )}
      </FormControl>
    </Box>
  );
}

export default Choice;