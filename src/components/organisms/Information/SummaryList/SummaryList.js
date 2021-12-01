import React from 'react'
import image1 from '../../../../assets/image/vote.jpg'
import image2 from '../../../../assets/image/time.png'
import image3 from '../../../../assets/image/id_card.png'
import { List } from './SummaryList.style'
import Summary from '../../../molecules/Information/Summary'

const SummaryList = () => {
    return <List>
        <Summary image={image1} text={['선거일', '2022. 3. 9 (수)']}></Summary>
        <Summary image={image2} text={['투표 시간', '06:00 ~ 18:00']}></Summary>
        <Summary image={image3} text={['선거권', '만 19세 이상']}></Summary>
    </List>
}

export default SummaryList;