import { Lightbulb, Moon } from "@phosphor-icons/react";
import styled from "styled-components";

export const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 100%;
  padding: 0.25rem;
  margin: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    filter: blur(0.1rem);
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const LightIcon = styled(Lightbulb)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const DarkIcon = styled(Moon)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  padding: 7px 5px;
  object-fit: cover;
`;

export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const LogoBg = styled.div`
  position: absolute;
  z-index: auto;
  top: 70px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: 100px;
  height: 10px;
  border-radius: 50%;
`;
