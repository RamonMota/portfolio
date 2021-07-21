import styled from "styled-components";


export const ContaunerPrincipal = styled.div`
    background: ${({theme}) => theme.body};
    height: 100vh;
    transition: 0.3s;
`;

export const Header = styled.header`
    position: absolute;
    top: 4vh;
    right: 9vh;
    margin: auto;
    transition: 1.5s;

    @media(max-width: 959px) {
      right: 8vh;
    };
`;

export const AreaTop = styled.div`
    display: flex;
`;

export const BtnTxt = styled.a`
    font: 300 20px 'Roboto',sans-serif;
    text-decoration: none;
    color: ${({theme}) => theme.text};
    text-decoration: none;
    margin-right: 3vh;
    transition: 1.5s;

    :hover {
        color: #27EADC;
    }
`;
export const Btn = styled.button`
    font: 300 16px 'Roboto',sans-serif;
    background-color: unset;
    border: solid 1.5px ${({theme}) => theme.text};
    border-radius: 50px;
    padding: 6px 26px;  
    color: ${({theme}) => theme.text};
    margin-top: -4px;
    transition: 1.5s;
`;

export const Main = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    padding: 0 5vh; 
    transition: 1.5s;

    @media(max-width: 959px) {
        padding: 0 3vh;
        align-items: flex-end;
        height: 90vh;
     };

`;
export const ConteudoPrincipal = styled.div`

    
    img {
        width: 70px;
        height: auto;
        display: block;
        margin-bottom: 10px;
        transition: 0.3s;
    }
    span {
        font: 800 25px 'Roboto',sans-serif;
        color: ${({theme}) => theme.text};
        transition: 1.5s;

        @media(max-width: 959px) {
            margin-left: -3px;
        };
    }
    h1 {
        font: 700 7.3vw 'Roboto',sans-serif;
        color: ${({theme}) => theme.text};
        margin: -15px 0 -15px -5px;
        transition: 1.5s;

        @media(max-width: 959px) {
            font: 700 12vw 'Roboto',sans-serif;
            margin: -2px 0 -2px -5px;
        };
    }
    h2 {
        font: 300 6vw 'Roboto',sans-serif;
        color: ${({theme}) => theme.text};
        margin-left: -6px;
        transition: 1.5s;

        @media(max-width: 959px) {
            font: 300 9vw 'Roboto',sans-serif;
        };
    }
`;
export const FooterSOcial = styled.div`
        position: absolute;
        bottom: 4vh;
        left: 5vh;
        transition: 1.5s;

        @media(max-width: 959px) {
            left: 3vh;
        };

    a {
        fill: ${({theme}) => theme.text};
        margin-right: 30px;
        transition: 1.5s;
    }
    svg {
        width: 25px;
        height: auto;
    }
`;
export const FooterLateral = styled.div`
        position: absolute;
        bottom: 45vh;
        right: 0;
        transform: rotate(-90deg);
        transition: 0.3s;

        @media(max-width: 959px) {
            position: fixed;
            transform: rotate(-90deg);
            right: -4vh;
            bottom: 60vh;
        };
    p{
        font: 300 15px 'Roboto',sans-serif;
        color: ${({theme}) => theme.text};
        
        
        white-space: nowrap;
        transition: 1.5s;
    }
    svg {
        fill: ${({theme}) => theme.text};
        width: 20px;
        margin-left: 10px;
        transition: 1.5s;
    }
`;