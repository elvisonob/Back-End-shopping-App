const items = [
  {
    id: 'm1',
    name: 'British Pie',
    image: 'https://shopping-backend-application.onrender.com/images/British-Pie.jpg',
    price: 8.9,
    useByDate: new Date(2024, 6, 25).getFullYear().toString(),
  },

  {
    id: 'm2',
    name: 'Orange',
    image: 'https://shopping-backend-application.onrender.com/images/orange.jpg',
    price: 7.1,
    useByDate: new Date(2024, 0, 13).getFullYear().toString(),
  },

  {
    id: 'm3',
    name: 'Rice',
    image: 'https://shopping-backend-application.onrender.com/images/rice.jpg',
    price: 3.4,
    useByDate: new Date(2025, 1, 15).getFullYear().toString(),
  },

  {
    id: 'm4',
    name: 'Potatoes',
    image: 'https://shopping-backend-application.onrender.com/images/potatoes.jpg',
    price: 4.2,
    useByDate: new Date(2025, 5, 20).getFullYear().toString(),
  },
];

const getAllItems = (req, res, next) => {
  res.send({ items });
};

exports.getAllItems = getAllItems;
