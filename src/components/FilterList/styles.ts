import styled from "styled-components";

export const FilterModal = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const SelectOrderBy = styled.select`
  max-width: 500px;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
`;

export const SelectOrderByOption = styled.option`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
`;

export const CheckBoxFilter = styled.input`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  width: 20px;
`;

export const CheckBoxFilterLabel = styled.label``;
