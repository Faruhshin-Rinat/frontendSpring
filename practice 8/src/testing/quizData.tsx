export type tTasks = {
  question: string;
  answer: string;
}[];

export type tQuizzes = {
  id: number;
  type: 'M' | 'S' | 'C';
  title: string;
  multiple?: boolean;
  tasks: tTasks;
}[];

export const quiz: tQuizzes = [
  {
    id: 1,
    type: 'M',
    title: 'Сопоставьте игрока и его команду.',
    tasks: [
      { question: 'donk', answer: 'Team Spirit' },
      { question: 'ZywOo', answer: 'Team Vitality' },
      { question: 'device', answer: 'Astralis' },
      { question: 'karrigan', answer: 'FaZe Clan' },
    ],
  },
  {
    id: 2,
    type: 'M',
    title: 'Сопоставьте игрока и страну, которую он представляет.',
    tasks: [
      { question: 's1mple', answer: 'Украина' },
      { question: 'ZywOo', answer: 'Франция' },
      { question: 'device', answer: 'Дания' },
      { question: 'XANTARES', answer: 'Турция' },
    ],
  },
  {
    id: 3,
    type: 'S',
    title: 'Отсортируйте игроков по убыванию рейтинга.',
    tasks: [
      { question: 'donk', answer: '1' },
      { question: 'ZywOo', answer: '2' },
      { question: 's1mple', answer: '3' },
      { question: 'm0NESY', answer: '4' },
      { question: 'device', answer: '5' },
    ],
  },
  {
    id: 4,
    type: 'S',
    title: 'Отсортируйте игроков по убыванию количества MVP.',
    tasks: [
      { question: 'ZywOo', answer: '1' },
      { question: 'device', answer: '2' },
      { question: 'sh1ro', answer: '3' },
      { question: 'NiKo', answer: '4' },
      { question: 'Magisk', answer: '5' },
    ],
  },
  {
    id: 5,
    type: 'C',
    multiple: false,
    title: 'У кого из этих игроков самый высокий рейтинг?',
    tasks: [
      { question: 'ZywOo', answer: '0' },
      { question: 'donk', answer: '1' },
      { question: 's1mple', answer: '0' },
      { question: 'm0NESY', answer: '0' },
    ],
  },
  {
    id: 6,
    type: 'C',
    multiple: true,
    title: 'Отметьте всех игроков, играющих на роли снайпера.',
    tasks: [
      { question: 'donk', answer: '0' },
      { question: 'ZywOo', answer: '1' },
      { question: 'NiKo', answer: '0' },
      { question: 's1mple', answer: '1' },
      { question: 'device', answer: '1' },
    ],
  },
];

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}