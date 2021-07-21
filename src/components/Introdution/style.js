import styled from "styled-components";

export const Opening = styled.div`
    background: ${({theme}) => theme.body};
    z-index: 9;
    position: absolute;
    width: 100%;
    height: 100vh;

    align-items: center;
    display: flex;

    h1 {
        padding: 14px 4px 4px 4px;
        font-size: calc(1.8em + 6vw);
        text-align: left;
        font-family: sans-serif;
        color: ${({theme}) => theme.text};
        padding: 10vh 10vh 10vh 180px;
        font-weight: 400;

        @media(max-width: 959px) {
            padding: 10vh 1rem;
        };
    }
    
    .row {
        display: block;
        overflow: hidden;
    }
    
    .row + .row {
        margin-top: 1px;
    }
    
    .row span {
        display: block;
        animation: frames 3s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    }
    
    .row:nth-child(2) span {
        animation-delay: .05s;
    }
    
    
    .row span:before {
        content: attr(title);
        animation: switch 0.5s steps(1) infinite;
    }
    
    @keyframes frames {
        0% { transform: translateY(120%) rotate(-5deg); }
        20%, 80% { transform: translateY(0) rotate(0); }
        100% { transform: translateY(-120%) rotate(5deg); }
    }
    
    @keyframes switch {
        50%, 100% { content: attr(data-alt) }
    }

`;      
        