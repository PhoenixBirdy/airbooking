const getFlightList = (flightsData, { direction } = {}) => {
  const list = new Set();
  flightsData.forEach((flight) => {
    list.add(flight[direction]);
  });
  return list;
};

const excludeSamePointAirport = (airportListSet, excludeAirport) =>
  airportListSet.has(excludeAirport)
    ? [...airportListSet].filter((airport) => airport !== excludeAirport)
    : [...airportListSet];

export { getFlightList, excludeSamePointAirport };
