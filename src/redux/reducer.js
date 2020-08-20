const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    case "SET_FILTER_BY_NAME": {
      return { ...state, filterByName: action.payload };
    }
    case "SET_FILTER_BY_REGION": {
      return { ...state, filterByRegion: action.payload };
    }
    case "SET_SELECTED_COUNTRY_INFO": {
      return { ...state, selectedCountryInfo: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
