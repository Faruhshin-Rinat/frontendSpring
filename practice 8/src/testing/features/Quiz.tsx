import { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { quiz } from '../quizData';
import { RootState } from '../../store';
import Matching from './Matching';
import Sorting from './Sorting';
import Choice from './Choice';

function Quiz() {
  const [resetKey, setResetKey] = useState(0);
  const [results, setResults] = useState<string[] | null>(null);
  const lists = useSelector((state: RootState) => state.lists.lists);

  const handleCheck = () => {
    const res = quiz.map((item, index) => {
      const userData = lists[index] || [];

      if (item.type === 'C') {
        const correctOptions = item.tasks
          .filter((t) => t.answer === '1')
          .map((t) => t.question);
        let ok: boolean;
        if (item.multiple) {
          ok =
            userData.length === correctOptions.length &&
            correctOptions.every((c) => userData.includes(c));
        } else {
          ok = userData[0] === correctOptions[0];
        }
        return `Задание ${index + 1}. ${ok ? 'Верно.' : 'Неверно.'}`;
      }

      let correct = 0;
      if (item.type === 'M') {
        item.tasks.forEach((task, i) => {
          if (userData[i] === task.answer) correct += 1;
        });
      } else {
        const answerByQuestion = new Map(item.tasks.map((t) => [t.question, t.answer]));
        userData.forEach((question, p) => {
          if (answerByQuestion.get(question) === String(p + 1)) correct += 1;
        });
      }
      const total = item.tasks.length;
      return correct === total
        ? `Задание ${index + 1}. Все ответы верные.`
        : `Задание ${index + 1}. Верных ответов: ${correct}.`;
    });
    setResults(res);
  };

  const handleRestart = () => {
    setResults(null);
    setResetKey((k) => k + 1);
  };

  return (
    <Container maxWidth="md">
      {quiz.map((item, index) => (
        <Box key={`${item.id}-${resetKey}`} component="section" sx={{ m: 2, p: 2 }}>
          <Typography variant="h5" gutterBottom>
            {index + 1}. {item.title}
          </Typography>
          {item.type === 'M' && <Matching index={index} tasks={item.tasks} />}
          {item.type === 'S' && <Sorting index={index} tasks={item.tasks} />}
          {item.type === 'C' && (
            <Choice index={index} multiple={item.multiple ?? false} tasks={item.tasks} />
          )}
        </Box>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button variant="contained" onClick={handleCheck}>Проверить</Button>
        <Button variant="contained" onClick={handleRestart}>Начать снова</Button>
      </Box>

      {results && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>Результаты теста</Typography>
          {results.map((line, i) => (
            <Typography key={i} variant="body1">{line}</Typography>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Quiz;