import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setFilterByRegion } from "../../redux/actionCreators";

const SelectStyled = styled.select`
  width: 200px;
  height: 50px;
  background: ${(props) => props.theme.colors.backgroundCard};
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.text};
  padding: 0 20px;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  font-size: 1rem;
  option {
    background: ${(props) => props.theme.colors.backgroundCard};
    color: ${(props) => props.theme.colors.text};
  }
`;

const SelectFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const indexSelected = e.target.selectedIndex;
    const region = e.target.options[indexSelected].value;
    dispatch(setFilterByRegion(region));
  };

  return (
    <SelectStyled onChange={handleChange}>
      <option value="">All Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </SelectStyled>
  );
};

export default SelectFilter;
