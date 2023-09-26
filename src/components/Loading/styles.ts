import styled, { keyframes } from 'styled-components';

// Define a animação do spinner
export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilize o componente do spinner usando Styled Components
export const SpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  border: 10px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  border-top: 10px solid ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`;
