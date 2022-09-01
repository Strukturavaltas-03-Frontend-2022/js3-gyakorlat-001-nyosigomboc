const huDateLong = new Intl.DateTimeFormat('hu-HU', { dateStyle: 'long', timeStyle: 'medium' });
const huDateShort = new Intl.DateTimeFormat('hu-HU', { dateStyle: 'medium', timeStyle: 'short' });

const customDateFormats = (d = new Date()) => ({
  long: huDateLong.format(d),
  short: huDateShort.format(d),
});

export default customDateFormats;
