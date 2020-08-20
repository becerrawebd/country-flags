import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import CountryInfo from "./country-info";
import { Loading } from "..";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCountryInfo } from "../../redux/actionCreators";

const CountryPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  height: 100%;
`;

const ButtonBackStyled = styled.button`
  width: 100px;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: pointer;
  border: none;
  outline: none;
  height: 30px;
  margin-bottom: 50px;
  background: ${(props) => props.theme.colors.backgroundCard};
  color: ${(props) => props.theme.colors.text};
`;

const CountryPage = (props) => {
  const history = useHistory();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const selectedCountryInfo = useSelector(
    ({ selectedCountryInfo }) => selectedCountryInfo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      selectedCountryInfo === {} ||
      selectedCountryInfo.alpha3Code !== params.id
    ) {
      api.getCountry(params.id).then((data) => {
        dispatch(setSelectedCountryInfo(data));
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [params.id, selectedCountryInfo, dispatch]);

  const handleClick = () => {
    history.push("/");
  };

  return !isLoading ? (
    <CountryPageStyled className="wrapper">
      <ButtonBackStyled onClick={handleClick}>
        <i className="fas fa-arrow-left"></i> Back
      </ButtonBackStyled>
      <CountryInfo selectedCountryInfo={selectedCountryInfo} />
    </CountryPageStyled>
  ) : (
    <Loading>Loading country information....</Loading>
  );
};

export default CountryPage;
