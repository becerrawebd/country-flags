import styled from "styled-components";

const Container = styled.div`
  position: relative;
  text-align: center;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

export default Container;
