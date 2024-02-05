const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((month) => {
  return {
    label: month,
    value: month,
  };
});

const years = ["2024", "2025", "2026", "2027", "2028"];

export const yearOptions = years.map((year) => {
  return {
    label: year,
    value: year,
  };
});
