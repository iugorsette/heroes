import styled from "styled-components";
import Modal from "react-modal";
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const SelectFighter = styled.img`
  border: none;
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 0.25rem;
`;

export const SelectFighterOption = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  border-radius: 0.25rem;
  cursor: pointer;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SelectFighterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const SelectFighterOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DuelModal = styled(Modal)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const DuelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DuelTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const Result = styled.h1<{win:boolean}>`
    color: ${({ theme, win }) => win ? theme.colors.success : theme.colors.danger};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
