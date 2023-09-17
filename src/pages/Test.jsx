import React from 'react';
import useStore from '../store/module'
const Test = () => {
    const { bears, increasePopulation, removeAllBears } = useStore(state => state)
    return (
        <>
            <h1>{bears} around here ...</h1>
            <button onClick={increasePopulation}>one up</button>
            <button onClick={removeAllBears}>remove all</button>
            <h1>sda</h1>
        </>

    )
};

export default Test;