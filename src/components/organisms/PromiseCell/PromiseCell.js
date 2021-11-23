import React from 'react'
import RepPromise from '../../molecules/RepPromise'
import arrow_image from '../../../assets/image/outline_navigate_next_black_48dp.png'
import { Area, ArrowImage, Cell, Promise } from './PromiseCell.style'

const PromiseCell = ({area, data}) => {
    return <Cell>
        <Promise>
            <RepPromise data={data}></RepPromise>
        </Promise>
        <ArrowImage background={arrow_image}></ArrowImage>
        <Area>{area}</Area>
    </Cell>
}

export default PromiseCell;