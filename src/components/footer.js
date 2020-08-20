import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 30px;
  color: ${(props) => props.theme.colors.text};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Challenge by
        <strong>
          {" "}
          <a
            href="https://frontendmentor.io/challenges"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor.
          </a>
        </strong>{" "}
        Coded by
        <strong>
          {" "}
          <a
            href="https://github.com/becerrawebd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diego Becerra.
          </a>
        </strong>
      </p>
    </FooterStyled>
  );
};

export default Footer;
