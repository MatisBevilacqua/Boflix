import React from 'react'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
import logo from '../assets/img/logo.png'

export default function Header() {
    return (
        <div className='flex items-center pl-[25px] bg-[#000000]'>
            <img src={logo} className='w-[100px]'></img>
            <h3 className='text-white text-[40px] translate-x-[-22px] font-bold'>oflix</h3>
        </div>
    )
}
