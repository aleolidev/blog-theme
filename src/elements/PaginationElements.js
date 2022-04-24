import styled from "styled-components"

export const PaginationWrapper = styled.div`
    padding: ${props => props.padding ? props.padding : '0 0 1rem 0'};
    display: flex;
    align-items: center;
    justify-content: center;

    a:nth-child(1) {
        padding: 0.625rem 0.75rem;
        background-color: ${props => !props.isFirst ? props.theme.colors.main1 : "transparent"};
        border-radius: 0.5rem;
        color: ${props => !props.isFirst ? props.theme.colors.light1 : props.theme.colors.dark1};
        font-weight: ${props => !props.isFirst ? '700' : '400'};
        font-size: 0.875rem;
        width: fit-content;
        transition: filter 0.3s ease;
        cursor: pointer;
        
        &:hover,
        &:focus {
            filter: brightness(110%);
        }
        pointer-events: ${props => (props.isFirst ? "none" : "auto")};
        cursor: ${props => (props.isFirst ? "default" : "pointer")};
    
    }

    a:nth-child(2) {
        padding: 0.625rem 0.75rem;
        background-color: ${props => !props.isLast ? props.theme.colors.main1 : "transparent"};
        border-radius: 0.5rem;
        color: ${props => !props.isLast ? props.theme.colors.light1 : props.theme.colors.dark1};
        font-weight: ${props => !props.isLast ? '700' : '400'};
        font-size: 0.875rem;
        width: fit-content;
        transition: filter 0.3s ease;
        cursor: pointer;
        
        &:hover,
        &:focus {
            filter: brightness(110%);
        }
        pointer-events: ${props => (props.isLast ? "none" : "auto")};
        cursor: ${props => (props.isLast ? "default" : "pointer")};
    
    }
`

export const PaginationElement = styled.a`
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    margin: 0 1.5rem;

    &:hover, 
    &:focus {
        text-decoration: underline;
    }
`