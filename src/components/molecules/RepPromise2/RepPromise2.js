import React from 'react'
import { Promise, RepPromiseList } from './RepPromise2.style';

const RepPromise2 = ({data}) => {
    return (
        <RepPromiseList>
            {data.map((promise) => (
            <Promise>{promise}</Promise>
            ))}
        </RepPromiseList>
    )

}

export default RepPromise2;