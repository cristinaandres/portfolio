import React from 'react'
import Bubble from './Bubble'

const BubbleRow = ({ amount }: { amount: number }) => {
    return (
        <>
            <div className='flex gap-1'>
                {Array.from({ length: amount }, (_, index) => (
                    <Bubble key={index} />
                ))}

            </div>
        </>
    )
}

export default BubbleRow