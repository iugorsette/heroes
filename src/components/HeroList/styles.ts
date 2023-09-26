import { FunnelSimple } from "@phosphor-icons/react";
import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ContentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
  width: 100%;
  padding: 0 40px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
  max-width: 500px;
  padding: 0.5rem;
  margin: 0 50px;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

export const FilterButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  `}
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }

`;

export const FilterIcon = styled(FunnelSimple)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
