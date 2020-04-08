const monthEnum = [
  { id: 0, name: 'January' },
  { id: 1, name: 'February' },
  { id: 2, name: 'March' },
  { id: 3, name: 'April' },
  { id: 4, name: 'May' },
  { id: 5, name: 'June' },
  { id: 6, name: 'July' },
  { id: 7, name: 'August' },
  { id: 8, name: 'September' },
  { id: 9, name: 'October' },
  { id: 10, name: 'November' },
  { id: 11, name: 'December' }
];

const yearEnum = () => {
  const startYear = 1990;
  const endYear = 2030;
  const years = [];
  for (let i = startYear; i <= endYear; i += 1) {
    years.push(i);
  }
  return years;
};

const getDateRange = ({ year, month }) => {
  const startDate = new Date(year, month);
  const endDate = new Date(year, month + 1);
  return {
    from: startDate,
    to: endDate
  };
};

export {
  monthEnum,
  yearEnum,
  getDateRange
};
