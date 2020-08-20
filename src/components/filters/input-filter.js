import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setFilterByName } from "../../redux/actionCreators";

const InputFilterStyled = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.backgroundCard};
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  color: ${(props) => props.theme.colors.text};
  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.backgroundCard};
    color: ${(props) => props.theme.colors.text};
  }
  .search {
    font-size: 15px;
    margin-left: 30px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

const InputFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(setFilterByName(value));
  };

  return (
    <InputFilterStyled>
      <FontAwesomeIcon icon={faSearch} className="search" />
      <input
        onChange={handleChange}
        type="text"
        name="input"
        id="input"
        placeholder="Search for a country"
      />
    </InputFilterStyled>
  );
};

export default InputFilter;
