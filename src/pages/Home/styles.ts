import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  margin: 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 50px;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  padding-left: 100px;

  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;
