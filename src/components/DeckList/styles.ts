import { FunnelSimple } from "@phosphor-icons/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SearchContainer = styled.div`
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
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

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const FilterIcon = styled(FunnelSimple)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const FilterModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const FilterModalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;


export const SelectOrderBy = styled.select`
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

