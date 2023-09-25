import styled, { css } from "styled-components";

export const List = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  `}

  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.text};
    color: ${theme.colors.background};
  `}

  border-radius: 0.5rem;
  text-decoration: none;
  list-style: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  &:hover {
    transform: scale(1.1);
    opacity: 0.5;
  }
`;
