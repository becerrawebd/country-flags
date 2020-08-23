import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  margin-bottom: 30px;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  height: 70px;
  h3 {
    cursor: pointer;
  }
`;

const SwitchStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
  align-items: center;
  cursor: pointer;
`;

const DarkModeSwitch = ({darkMode,setDarkMode}) => {

  const handleClick = () => {
    setDarkMode(darkMode ? false : true)
  }

  return (
    <SwitchStyled onClick={handleClick}>
      {darkMode ? (
        <i className="fas fa-moon size-icon"></i>
      ) : (
        <i className="far fa-moon size-icon"></i>
      )}
      <strong>{darkMode ? "Dark Mode" : "Light Mode"}</strong>
    </SwitchStyled>
  );
};

const Header = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <HeaderStyled>
      <h3 onClick={handleClick}>Where in the world?</h3>
      <DarkModeSwitch {...props} />
    </HeaderStyled>
  );
};

export default Header;
