import styled, { css } from "styled-components";
import { Maestry } from "../../interfaces/hero";

export const Card = styled.button<{ maestry: Maestry }>`
  ${({ theme, maestry }) => css`
    background: linear-gradient(
      0deg,
      ${maestry === "Silver"
          ? theme.colors.silver2
          : maestry === "Gold"
          ? theme.colors.gold2
          : theme.colors.bronze2}
        0%,
      ${maestry === "Silver"
          ? theme.colors.silver1
          : maestry === "Gold"
          ? theme.colors.gold1
          : theme.colors.bronze1}
        25%,
      ${maestry === "Silver"
          ? theme.colors.silver3
          : maestry === "Gold"
          ? theme.colors.gold3
          : theme.colors.bronze3}
        50%,
      ${maestry === "Silver"
          ? theme.colors.silver1
          : maestry === "Gold"
          ? theme.colors.gold1
          : theme.colors.bronze1}
        75%
    );
    box-shadow: 0 0 10px ${theme.colors.shadow};
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    /* transform: scale(1.1); */
  }
`;

export const Name = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;

export const Image = styled.img`
  width: 190px;
  height: 150px;
  border-radius: 10px;
  padding: 7px 5px;
  object-fit: cover;
`;
