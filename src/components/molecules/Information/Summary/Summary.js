import React from 'react'
import SummaryIcon from '../../../atoms/Information/SummaryIcon'
import SummaryText from '../../../atoms/Information/SummaryText'
import { Cell } from './Summary.style'

const Summary = ({image, text}) => {
    return (
        <Cell>
            <SummaryIcon image={image} />
            {text.map((item) => 
                <SummaryText text={item} />
            )}
        </Cell>
    )
}

export default Summary;