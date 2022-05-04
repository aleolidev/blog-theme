import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import * as relativeTime from 'dayjs/plugin/relativeTime';
import { date } from "../translations/translations"
import { capitalize } from '../utils/utils';

export const Date = ({ lang, originalDate, modifiedDate, fontSize, hideDash, color }) => {
    dayjs.extend(relativeTime)
    
    const localeObject = {
        name: date.localeLangs[lang],
        relativeTime: date.dateRelativeFormat[lang]
    }
    
    dayjs.locale(localeObject, null, false)

    let formattedTime = capitalize(dayjs((modifiedDate ? modifiedDate : originalDate)).fromNow());

    return (
        typeof window !== 'undefined' && // Avoid printing incorrect date taken from build status
        <DateWrapper fontSize={ fontSize } hideDash={ hideDash } color={ color }>
            { modifiedDate 
            ?
                <time datetime={ originalDate } datetime-updated={ modifiedDate }>
                    { formattedTime }
                </time>
            :
                <time datetime={ originalDate }>
                    { formattedTime }
                </time>
            }
        </DateWrapper>
    )
}

const DateWrapper = styled.span`
    margin: 0;
    font-size: ${props => props.fontSize ? props.fontSize : "1rem" };
    color: ${props => props.color ? props.color : props.theme.colors.dark3};
    font-weight: 400!important;
    
    ${({hideDash}) => !hideDash && `
    
        &:before {
            content: '—';
            margin: 0 1rem 0 .5rem;  
            font-size: ${props => props.fontSize ? props.fontSize : "1rem" };
        }
    
        @media ${props => props.theme.breakpoints.mobile} {    
            &:before {
                margin: 0 1rem 0 .6rem;
            }
        }
    `};
`