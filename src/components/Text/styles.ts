import styled from "styled-components";

export const CopyText = styled.p`
    font-size: 1.4rem;
    font-family: ${props => props.theme.headingFont};
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
        transition: background ${props => props.theme.transition};
    }

    p {
        font-size: 1.4rem;
        font-family: ${props => props.theme.headingFont};
        color: ${props => props.theme.textColor};
        transition: color ${props => props.theme.transition};
        text-align: left;
        line-height:1.65rem;
    }
`;