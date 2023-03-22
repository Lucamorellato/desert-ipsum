import styled from "styled-components";

export const CopyText = styled.p`
    font-size: 1.4rem;
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.textColor};
    transition: color ${props => props.theme.transition};
    text-align: left;
    line-height:1.65rem;
`;

export const LoremContainerDiv = styled.div`
    width: 70%;
    margin: 0 auto;
    padding-bottom: 50px;
    div {
        background: ${props => (props.theme.backgroundDivColor)};
        padding: 20px 25px;
        border-radius: 5px;
        transition: all ${props => props.theme.transition};
        box-shadow: ${props => (props.theme.boxShadhow)};

    }

    p {
        font-size: 1.4rem;
        font-family: ${props => props.theme.font};
        color: ${props => props.theme.textColor};
        transition: color ${props => props.theme.transition};
        text-align: left;
        line-height:1.65rem;
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