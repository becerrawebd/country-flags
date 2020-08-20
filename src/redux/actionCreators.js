function setCountryList(countryList) {
  return {
    type: "SET_COUNTRY_LIST",
    payload: countryList,
  };
}

function setFilterByName(name) {
  return {
    type: "SET_FILTER_BY_NAME",
    payload: name,
  };
}

function setFilterByRegion(region) {
  return {
    type: "SET_FILTER_BY_REGION",
    payload: region,
  };
}

function setSelectedCountryInfo(countryInfo) {
  return {
    type: "SET_SELECTED_COUNTRY_INFO",
    payload: countryInfo,
  };
}

export {
  setCountryList,
  setFilterByName,
  setFilterByRegion,
  setSelectedCountryInfo,
};
