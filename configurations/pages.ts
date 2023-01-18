/* eslint-disable sort-keys/sort-keys-fix */
const pages = {
  tab: 'Notes',
  tags: ['lancejpollard', 'software engineer'],
  url: '/',
  ca: {
    url: '/ca',
    tab: 'Cellular Automata',
    tags: ['cellular automata'],
    '2d': {
      url: '/ca/2d',
      tab: '2D Cellular Automata',
      tags: ['cellular automata'],
      '2': {
        url: '/ca/2d/2',
        tab: '2D Cellular Automata Notes #2',
        tags: ['cellular automata'],
      },
      '3': {
        url: '/ca/2d/3',
        tab: '2D Cellular Automata Notes #3',
        tags: ['cellular automata'],
      },
      'game-of-life': {
        url: '/ca/2d/game-of-life',
        tab: `Conway's Game of Life`,
        note: `This is Conway's Game of Life, a 2D cellular automaton, implemented in TypeScript.`,
        tags: ['cellular automata'],
      },
    },
  },
  code: {
    url: '/code',
    tab: 'Code Notes',
    tags: ['code', 'programming'],
    ideal: {
      url: '/code/ideal',
      tab: 'Ideal State in Programming',
      tags: ['code', 'programming', 'ideal'],
    },
  },
  math: {
    url: '/math',
    tab: 'Math Notes',
    tags: ['math'],
    symmetries: {
      url: '/math/symmetries',
      tab: 'Symmetries in Math',
      tags: ['math'],
    },
    foundations: {
      url: '/math/foundations',
      tab: 'Foundations of Mathematics',
      tags: ['math', 'mathematical foundations'],
    },
  },
}

export default pages
