import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;
