import { createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  countryList: [],
  filterByName: "",
  filterByRegion: "",
  selectedCountryInfo: {},
};

const store = createStore(reducer, initialState);

export default store;
