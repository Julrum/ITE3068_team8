import React from 'react'
import { Intro, Name, Number, Slogan } from './CandIntro.style';

const CandIntro = ({name, num, slogan}) => {
    return (
        <Intro>
            <Name>{name}</Name>
            <Number>기호 {num}번</Number>
            <Slogan>{slogan}</Slogan>
        </Intro>
    );
}

export default CandIntro;