import React from 'react'
import { Link } from 'react-router-dom';
import CandIntro from '../../molecules/CandIntro';
import { Background, Cell, Introduction } from './CandCell.style';

const CandCell = ({url, image, name, num, slogan}) => {
    return (
        <Link to={url}>
            <Cell>
                <Background background={image}>
                </Background>
                <Introduction>
                    <CandIntro name={name} num={num} slogan={slogan}></CandIntro>
                </Introduction>
            </Cell>
        </Link>
    );
}

export default CandCell;