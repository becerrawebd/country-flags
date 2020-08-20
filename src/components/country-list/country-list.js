import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";
import { setCountryList } from "../../redux/actionCreators";
import api from "../../api/api";
import { Loading } from "..";

const StyledCountryList = styled.div`
  display: grid;
  grid-row-gap: 30px;
  padding-bottom: 70px;
  justify-content: center;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.text};
  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CountryList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const countryList = useSelector(
    ({ countryList, filterByName, filterByRegion }) => {
      return countryList.filter((country) => {
        const name = country.name.toLowerCase();
        const region = country.region;
        const filterName = filterByName.toLowerCase();
        return name.includes(filterName) && region.includes(filterByRegion);
      });
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    api.getAllCountries().then((data) => {
      dispatch(setCountryList(data));
      setIsLoading(false);
    });
  }, [dispatch]);

  return !isLoading ? (
    <StyledCountryList className="wrapper">
      {countryList.map((country) => (
        <Country countryInfo={country} key={country.alpha3Code} />
      ))}
    </StyledCountryList>
  ) : (
    <Loading>Loading countries...</Loading>
  );
};

export default CountryList;
