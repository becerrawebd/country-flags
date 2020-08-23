import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const DetailsStyled = styled.div`
  text-align: left;
  .border-countries {
    strong {
      display: block;
    }
    .buttons {
      margin: 10px 0;
      .button {
        padding: 5px 20px;
        margin-bottom: 10px;
        border: none;
        outline: none;
        background: ${(props) => props.theme.colors.backgroundCard};
        color: ${(props) => props.theme.colors.text};
        box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin-right: 7px;
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    .info-columns {
      display: flex;
      justify-content: space-between;
    }
    .border-countries {
      .buttons {
        display: inline-block;
        margin: 10px 0;
      }
    }
  }
`;

const Details = (props) => {
  const history = useHistory();
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies = [],
    languages = [],
  } = props.countryInfo;

  const handleClick = (e) => {
    const alpha3Code = e.target.getAttribute("data-id");
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
      .then((response) => response.json())
      .then((countryInfo) => {
        history.push(`/country/${countryInfo.alpha3Code}`);
      })
      .catch((err) => history.push("/"));
  };

  return (
    <DetailsStyled>
      <h2>{name}</h2>
      <div className="info-columns">
        <div className="info-col-1">
          <p>
            {nativeName === "" ? (
              <strong>No native name</strong>
            ) : (
              <strong>Native Name:</strong>
            )}
            {" " + nativeName}
          </p>
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
            {subregion === "" ? (
              <strong>No sub region</strong>
            ) : (
              <strong>Sub Region:</strong>
            )}
            {" " + subregion}
          </p>
          <p>
            {capital === "" ? (
              <strong>No capital</strong>
            ) : (
              <strong>Capital:</strong>
            )}
            {" " + capital}
          </p>
        </div>
        <div className="info-col-2">
          <p>
            {topLevelDomain === "" ? (
              <strong>No top level domain</strong>
            ) : (
              <strong>Top Level Domain:</strong>
            )}
            {" " + topLevelDomain}
          </p>
          <p>
            {currencies.length === 0 ? (
              <strong>No currencies</strong>
            ) : (
              <strong>Currencies: </strong>
            )}
            {currencies.map(
              (currency, idx) =>
                `${currency.name}${currencies.length - 1 !== idx ? ", " : ""}`
            )}
          </p>
          <p>
            {languages.length === 0 ? (
              <strong>No languages</strong>
            ) : (
              <strong>Languages: </strong>
            )}
            {languages.map(
              (language, idx) =>
                `${language.name}${languages.length - 1 !== idx ? ", " : ""}`
            )}
          </p>
        </div>
      </div>
      <div className="border-countries">
        {props.borderCountryList.length === 0 ? (
          <strong>No border countries</strong>
        ) : (
          <>
            <strong>Border Countries:</strong>
            <div className="buttons">
              {props.borderCountryList.map((country) => (
                <button
                  className="button"
                  key={country.name}
                  onClick={handleClick}
                  data-id={country.alpha3Code}
                >
                  {country.name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </DetailsStyled>
  );
};

export default Details;
