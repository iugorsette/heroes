import styled, { css } from "styled-components";

export const FilterModal = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  `}
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: 1rem;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const SelectOrderBy = styled.select`
  cursor: pointer;
  all: unset;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  `}
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  &:focus {
    outline: none;
  }
`;

export const SelectOrderByOption = styled.option`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.25rem;
`;

export const CheckBoxFilterLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const CheckBoxFilter = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  all: unset;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  &:checked {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
