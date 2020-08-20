import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCountryInfo } from "../../redux/actionCreators";

const CountryStyled = styled.div`
  min-height: 300px;
  background: ${(props) => props.theme.colors.backgroundCard};
  color: ${(props) => props.theme.colors.text};
  overflow: hidden;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.03);
  border-radius: 7px;
  cursor: pointer;
  .img-container {
    overflow: hidden;
    height: 150px;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 150px;
  }
  &:hover {
    img {
      transform: scale(1.1);
      overflow: hidden;
      transition: all 0.5s ease-out;
    }
  }
`;

const CountryDetails = styled.div`
  text-align: left;
  margin: 20px 20px;
  h2 {
    margin: 0;
  }
`;

const Country = (props) => {
  const {
    alpha3Code,
    flag,
    name,
    population,
    region,
    capital,
  } = props.countryInfo;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedCountryInfo(props.countryInfo));
    history.push(`/country/${alpha3Code}`);
  };

  return (
    <CountryStyled onClick={handleClick}>
      <div className="img-container">
        <img loading="lazy" src={flag} alt="country-flag" />
      </div>
      <CountryDetails>
        <h2>{name}</h2>
        <p>
          {population === 0 ? (
            <strong>No population</strong>
          ) : (
            <strong>Population:</strong>
          )}
          {" " + Number(population).toLocaleString()}
        </p>
        <p>
          {region === "" ? (
            <strong>No region</strong>
          ) : (
            <strong>Region:</strong>
          )}
          {" " + region}
        </p>
        <p>
          {capital === "" ? (
            <strong>No capital</strong>
          ) : (
            <strong>Capital:</strong>
          )}
          {" " + capital}
        </p>
      </CountryDetails>
    </CountryStyled>
  );
};

export default Country;
