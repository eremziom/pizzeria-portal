export const demoOrders = [
  {
    id: 1,
    table: 2,
    menu: {
      drinks: 'cola',
      main: 'pizza',
      options: {
        pan: 'thin',
        sauce: 'tomato',
        addings: ['olives', 'rucola', 'salami'],
      },
    },
    price: '24$',
    dest: 'local',
  },
  {
    id: 2,
    table: 4,
    menu: {
      drinks: 'tea',
      main: 'pasta',
      options: {
        kind: 'spaghetti',
        sauce: 'white',
        addings: ['olives', 'becon'],
      },
    },
    price: '18$',
    dest: 'delivery',
  },
];
