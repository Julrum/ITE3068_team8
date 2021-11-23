import React from 'react'
import RepPromise from '../../molecules/RepPromise2'
import plus_image from '../../../assets/image/outline_add_circle_outline_black_48dp.png'
import { Area, PlusImage, Cell, Promise } from './PromiseCell2.style'

const PromiseCell = ({open, area, data}) => {
    return <Cell>
        <Area>{area}</Area>
        <Promise>
            <RepPromise data={data}></RepPromise>
        </Promise>
        <PlusImage onClick={() => open()} background={plus_image}></PlusImage>
    </Cell>
}

export default PromiseCell;