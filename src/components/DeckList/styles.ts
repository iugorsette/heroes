import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  font-size: 1.25rem;
  padding: 0.50rem 2rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;