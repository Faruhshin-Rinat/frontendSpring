import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { tTasks, shuffle } from '../quizData';
import { addList } from './quizSlice';
import SortableList from './SortableList';

interface ComponentProps {
  index: number;
  tasks: tTasks;
}

function Sorting({ index, tasks }: ComponentProps) {
  const [items] = useState<string[]>(() => shuffle(tasks.map((t) => t.question))); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addList({ index, items }));
  }, []);

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid size={8}>
        <SortableList index={index} answers={items} />
      </Grid>
    </Grid>
  );
}

export default Sorting;
