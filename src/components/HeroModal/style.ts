import { X } from "@phosphor-icons/react";
import styled, { css } from "styled-components";
import Modal from "react-modal";

export const Container = styled(Modal)`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  `}
  width: 80%;
  height: 90%;
  margin: 40px auto;
  padding: 0.5rem;
  border-radius: 0.25rem;
  position: relative;
  outline: none;
  display: flex;
  flex-direction: column;
`;


export const AddButton = styled.button`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const RemoveButton = styled.button`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const Cover = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

export const CloseButton = styled(X)`
  ${({ theme }) => css`
    background-color: ${theme.colors.danger};
    color: ${theme.colors.text};
  `}
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;


export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-align: center;
`;

export const Name = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.info};
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
`;
