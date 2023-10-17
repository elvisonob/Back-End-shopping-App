const items = [
  {
    id: 'm1',
    name: 'British Pie',
    images: 'http://localhost:8080/images/British-Pie.jpg',
    price: 8.9,
    useByDate: new Date(2024, 6, 25),
  },

  {
    id: 'm2',
    name: 'Orange',
    images: 'http://localhost:8080/images/orange.jpg',
    price: 7.1,
    useByDate: new Date(2024, 0, 13),
  },

  {
    id: 'm3',
    name: 'Rice',
    images: 'http://localhost:8080/images/potatoes.jpg',
    price: 3.4,
    useByDate: new Date(2025, 1, 15),
  },

  {
    id: 'm4',
    name: 'Potatoes',
    images: 'http://localhost:8080/images/rice.jpg',
    price: 4.2,
    useByDate: new Date(2025, 5, 20),
  },
];

const getAllItems = (req, res, next) => {
  res.send({ items });
};

exports.getAllItems = getAllItems;
