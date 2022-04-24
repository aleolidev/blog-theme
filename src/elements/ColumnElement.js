import styled from "styled-components"

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between' };
    margin: ${props => props.specialMargin ? `${props.specialMargin}` : 0};

    :nth-child(1) {
        margin: 0;
    }
`