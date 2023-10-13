// const britishPie = require('../images/British-Pie.jpg');
// const orange = require('../images/orange.jpg');
// const potatoes = require('../images/potatoes.jpg');
// const rice = require('../images/rice.jpg');

const items = [
  {
    id: 'm1',
    name: 'British Pie',

    price: 8.9,
    useByDate: new Date(2024, 6, 25),
  },

  {
    id: 'm2',
    name: 'Orange',

    price: 7.1,
    useByDate: new Date(2024, 0, 13),
  },

  {
    id: 'm3',
    name: 'Rice',

    price: 3.4,
    useByDate: new Date(2025, 1, 15),
  },

  {
    id: 'm4',
    name: 'Potatoes',

    price: 4.2,
    useByDate: new Date(2025, 5, 20),
  },
];

const getAllItems = (req, res, next) => {
  res.send({ items });
};

exports.getAllItems = getAllItems;
