import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import * as relativeTime from 'dayjs/plugin/relativeTime';
import { date } from "../translations/translations"
import { capitalize } from '../utils/utils';

export const Date = ({ lang, originalDate, modifiedDate }) => {
    dayjs.extend(relativeTime)
    
    const localeObject = {
        name: date.localeLangs[lang],
        relativeTime: date.dateRelativeFormat[lang]
    }
    
    dayjs.locale(localeObject, null, false)

    let formattedTime = capitalize(dayjs((modifiedDate ? modifiedDate : originalDate)).fromNow());

    return (
        typeof window !== 'undefined' && // Avoid printing incorrect date taken from build status
        <DateWrapper>
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

const DateWrapper = styled.div`
    margin: .75em 0 0 0;
    font-size: 1em;
    color: ${props => props.theme.colors.gray1};
    
    &:before {
        content: '—';
        margin: 0 1rem 0 .5rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {    
        margin: 0.5em 0 0 0;

        &:before {
            margin: 0 1rem 0 .6rem;
        }
    }
`