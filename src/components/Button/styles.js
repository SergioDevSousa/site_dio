import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    color: #ffffff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    margin: 5px;

    &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #E4105D;

        
        

        &::after {
          content: "";
          position: absolute;
          border: 1px solid #e4105d;
          top: -6px;
          left: -5px;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          border-radius: 22px;
        }
      `}
`;
