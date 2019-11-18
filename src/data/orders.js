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

export const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];
