import React from 'react'
import { Contents, Content, Item, Title } from './CandProfile.style'

const CandProfile = ({title, contents}) => {
    return (
        <Item>
            <Title>{title}</Title>
            <Contents>{contents.map((content) => (
                <Content>{content}</Content>
            ))}
            </Contents>
        </Item>
    )
}

export default CandProfile;