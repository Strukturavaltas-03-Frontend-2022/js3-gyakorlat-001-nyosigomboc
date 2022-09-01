const huDateTime = new Intl.DateTimeFormat('hu-HU');
const huCurrency = new Intl.NumberFormat('hu-HU', {
  style: 'currency',
  currency: 'HUF',
});

const HU = {
  date(dateParam) {
    return huDateTime.format(dateParam);
  },
  currency(amount) {
    return huCurrency.format(amount);
  },
  list(items = []) {
    if (items.length <= 2) {
      return items.join(' és ');
    }
    return (items.slice(0, -2)
      .concat(this.list(items.slice(-2))))
      .join(', ');
  },
};

export default HU;
