/**
 *
 * @param { number } price
 */
const formatCurrency = (price) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });

  return formatter.format(price);
};

export const formateNumber = (number, maxFraction = 0) => {
  const formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: maxFraction });

  return formatter.format(number);
};

export default formatCurrency;
