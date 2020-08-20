import React from "react";
import styled from "styled-components";
import InputFilter from "./input-filter";
import SelectFilter from "./select-filter";

const FiltersStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Filters = () => {
  return (
    <FiltersStyled className="wrapper">
      <InputFilter />
      <SelectFilter />
    </FiltersStyled>
  );
};

export default Filters;
