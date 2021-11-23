import React from 'react'
import { Promise, RepPromiseList } from './RepPromise.style';

const RepPromise = ({data}) => {
    return (
        <RepPromiseList>
            {data.map((promise) => (
            <Promise>{promise}</Promise>
            ))}
        </RepPromiseList>
    )

}

export default RepPromise;