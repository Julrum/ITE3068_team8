import React from 'react'
import InfoContent from '../../../atoms/Information/InfoContent';
import { List } from './InfoContents.style';

const InfoContents = () => {
    const items = ['대한민국 제20대 대통령 선거는 대한민국의 제20대 대통령을 선출하는 대한민국의 대통령 선거이다. 궐위나 헌법개정에 따른 임기단축, 선거법 개정이 없는 한 2022년 3월 9일에 실시될 예정이다.',
    '2017년 5월 10일에 취임한 제19대 대통령 문재인의 후임자로 이어갈 차기 대한민국 대통령을 선출하는 선거이다. 개정된 선거법으로 만 18세에 해당하는 2004년 3월 10일생 까지 선거참여가 가능하다.',
    '1982년 3월 9일생까지 피선거권이 있다.',
    '후보자 중 자치단체장의 경우 선거법에 따라 선거일 이전에 공직에서 사임해야 한다.'];

    return <List>
        {items.map((item) => (
        <InfoContent text={item}></InfoContent>
        ))}

    </List>
        
}

export default InfoContents;