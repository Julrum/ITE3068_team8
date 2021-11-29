import React from 'react'
import { Link } from 'react-router-dom';
import CandIntro from '../../molecules/CandIntro';
import { Background, Cell, Introduction } from './CandCell.style';

const CandCell = ({url, image, color, name, num, slogan}) => {
    return (
        <Link to={url}>
            <Cell>
                <Background background={image} color={color}>
                </Background>
                <Introduction>
                    <CandIntro name={name} num={num} slogan={slogan}></CandIntro>
                </Introduction>
            </Cell>
        </Link>
    );
}

export default CandCell;