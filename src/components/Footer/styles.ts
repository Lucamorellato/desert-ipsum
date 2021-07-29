import styled from "styled-components";

export const FooterContainer = styled.div`
    margin-top: auto;
    padding-bottom: 25px;
    p, a {
        font-size: 1rem;
        font-family: ${props => props.theme.bodyFont};
        color: ${props => props.theme.textColor};
        transition: color ${props => props.theme.transition};
        /* text-align: left; */
        line-height:1.65rem;
    }
    a:hover {
        color: ${props => props.theme.white};
    }
`;