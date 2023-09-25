import styled, { css } from "styled-components";

export const Stats = styled.div`
${({ theme }) => css`
    background-color: ${theme.colors.cardBg};
    color: ${theme.colors.black};
  `}
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  height: 70px;
  width: 155px;
  padding: 15px;
  margin: 7px 5px ;
  border-radius: 10px;
`;


export const Description = styled.p`
 color: ${({ theme }) => theme.colors.info};
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
`;


export const Span = styled.span<{size:number}>`
${({ theme, size }) => css`
    color: ${size > 70 ? theme.colors.gold1 : (size > 40 ? theme.colors.silver1 : theme.colors.bronze1)};
  `}
  font-weight: bold;
  font-size: 1em;
  font-style: italic;
  line-height: 1.35;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    span {
      visibility: visible;
    }
  }
`;
export const TooltipText = styled.span`
  visibility: hidden;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px;
`;