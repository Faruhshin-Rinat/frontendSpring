import { useEffect, useState } from 'react';
import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { tTasks, shuffle } from '../quizData';
import { addList } from './quizSlice';
import SortableList from './SortableList';

interface ComponentProps {
  index: number;
  tasks: tTasks;
}

function Matching({ index, tasks }: ComponentProps) {
  const [answers] = useState<string[]>(() => shuffle(tasks.map((t) => t.answer))); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addList({ index, items: answers })); 
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <List>
          {tasks.map((item, i) => (
            <ListItem key={i}>
              <ListItemButton sx={{ border: '1px solid gray', borderRadius: '5px', textAlign: 'right' }}>
                <ListItemText primary={item.question} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid size={6}>
        <SortableList index={index} answers={answers} />
      </Grid>
    </Grid>
  );
}

export default Matching;
