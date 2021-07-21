import styled from "styled-components";

export const Icon = styled.img`
  filter: ${({theme}) => theme.filter};
  height: 25px;
  width: 25px;
`;

export const Btntheme = styled.button`
  position: absolute;
  top: 4vh;
  right: 4vh;
  background-color: inherit;
  border: none;
  transition: 1.5s;
  cursor: pointer;
  
    @media(max-width: 959px) {
      right: 2vh;
    };
`;
