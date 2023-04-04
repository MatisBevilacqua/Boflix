import React from 'react'

interface MovieLink {
    link: string
}

export default function Player({ link }: MovieLink) {
    return (
        <div>
            <video className='w-screen h-screen' src={link} controls>
            </video>
        </div>
    )
}
