import React from 'react'
import TitleIcon from '../../../atoms/Information/TitleIcon'
import { StyledTitle } from './Title.style'
import image from '../../../../assets/image/election.png'
import TitleText from '../../../atoms/Information/TitleText'

const Title = () => {
    return <StyledTitle>
        <TitleIcon image={image}></TitleIcon>
        <TitleText></TitleText>
    </StyledTitle>
}

export default Title;