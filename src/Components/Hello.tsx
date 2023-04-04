import React from 'react'

interface HelloName{
    name: string
}

export default function Hello({ name } :HelloName) {
    return (
        <h1 className='text-[#FFF] text-[60px] font-bold'>Hey, {name} !</h1>
    )
}
