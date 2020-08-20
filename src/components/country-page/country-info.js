import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Details from "./details";

const CountryInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 40%;
      object-fit: contain;
      height: 400px;
    }
  }
`;

const CountryInfo = (props) => {
  const history = useHistory();
  const [borderCountryList, setBorderCountryList] = useState([]);
  const { name, borders = [], flag } = props.selectedCountryInfo;

  useEffect(() => {
    const borderCodes = borders.join(";");
    if (borders.length !== 0)
      fetch(`https://restcountries.eu/rest/v2/alpha?codes=${borderCodes}`)
        .then((response) => response.json())
        .then((countryList) => {
          setBorderCountryList(countryList);
        })
        .catch(() => history.push("/"));
  }, [name, history, borders]);

  return (
    <CountryInfoStyled>
      <img src={flag} alt="" />
      <Details
        countryInfo={props.selectedCountryInfo}
        borderCountryList={borderCountryList}
      />
    </CountryInfoStyled>
  );
};
export default CountryInfo;
