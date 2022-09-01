const objectConverter = {
  arrayToMap(array) {
    return new Map(array.entries());
  },
  arrayToSet(array) {
    return new Set(array.values());
  },
  setToMap(set) {
    return this.arrayToMap(this.setToArray(set));
  },
  setToArray(set) {
    return [...set];
  },
  mapToArray(map) {
    return [...map.values()];
  },
  mapToSet(map) {
    return new Set(map.values());
  },
};

export default objectConverter;
