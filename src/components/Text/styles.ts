import styled from "styled-components";

export const CopyText = styled.p`
    font-size: 1.3rem;
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.textColor};
    transition: color ${props => props.theme.transition};
    text-align: left;
    line-height:1.65rem;
`;

export const LoremContainerDiv = styled.div`
    width: 70%;
    margin: 0 auto;
    padding-bottom: 70px;
    z-index: 1;
    position:relative;
    div {
        background: ${props => (props.theme.backgroundDivColor)};
        padding: 20px 25px;
        border-radius: 5px;
        transition: background ${props => props.theme.transition}, box-shadow ${props => props.theme.transition};
        box-shadow: ${props => (props.theme.boxShadhow)};
    }

    p {
        font-size: 1.2rem;
        font-family: ${props => props.theme.font};
        color: ${props => props.theme.textColor};
        transition: color ${props => props.theme.transition};
        text-align: left;
        line-height:1.4rem;
    }
    p:last-of-type {
        margin: 0;
    }

    @media (max-width: ${props => props.theme.mediaQuery}px) {
        width: 90%;
        div {
            padding: 10px 10px;
        }
        p {
            font-size: 1rem;
            line-height: 1.25rem;
        }
    }
`;