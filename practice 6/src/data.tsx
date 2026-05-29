import vitality from './images/vitality.jpg';
import spirit from './images/spirit.jpg';
import navi from './images/navi.jpg';
import furia from './images/furia.jpg';
import mouz from './images/mouz.jpg';

import monesy from './images/monesy.jpg';
import donk from './images/donk.jpg';
import simple from './images/simple.jpg';
import kyousuke from './images/kyousuke.jpg';
import device from './images/device.jpg';

import playerMonesy from './images/player-monesy.jpg';
import major from './images/major.jpg';
import katowice from './images/katowice.jpg';

const teams = [
  { src: vitality, name: 'Team Vitality',  description: 'Французская киберспортивная организация' },
  { src: spirit,   name: 'Team Spirit',    description: 'Российская киберспортивная организация'  },
  { src: navi,     name: 'Natus Vincere',  description: 'Украинская киберспортивная организация'  },
  { src: furia,    name: 'FURIA Esports',  description: 'Бразильская киберспортивная организация' },
  { src: mouz,     name: 'Mousesports',    description: 'Немецкая киберспортивная организация'    },
];

const galleryImages = [
  { src: monesy,   alt: 'monesy'   },
  { src: donk,     alt: 'donk'     },
  { src: simple,   alt: 'simple'   },
  { src: kyousuke, alt: 'kyousuke' },
  { src: device,   alt: 'device'   },
];

const player = {
  src: playerMonesy,
  name: 'Илья "m0nesy" Осипов',
  text: 'Выдающийся профессиональный игрок в Counter-Strike из России, известный своей феноменальной реакцией и ролью агрессивного снайпера. В команде NAVI он стал легендой киберспорта, выиграв многочисленные трофеи и установив рекорды.',
};

const csDescription = 'Counter-Strike — это культовая и фундаментальная дисциплина в мире киберспорта, представляющая собой многогранный командный тактический шутер от первого лица. Её суть заключается в противостоянии двух команд — террористов и спецназа, — где каждая сторона имеет строгие цели на карте: заложить или обезвредить бомбу, освободить или удержать заложников, либо же полностью уничтожить противника. Уникальность и долголетие игры зиждится на идеально сбалансированной конкурентной экосистеме, где малейшая тактическая ошибка может решить исход раунда.';

const tournaments = [
  {
    src: major,
    title: 'StarLadder Budapest Major 2025',
    text: 'Престижный турнир по Counter-Strike, проходивший в столице Венгрии. На этом соревновании сильнейшие команды мира боролись за титул чемпионов.',
  },
  {
    src: katowice,
    title: 'IEM Katowice 2025',
    text: 'Турнир по киберспорту в Польше, проходящий на знаменитой «Spodek» арене. Это одно из самых престижных соревнований по Counter-Strike 2.',
  },
];

export { teams, galleryImages, player, csDescription, tournaments };