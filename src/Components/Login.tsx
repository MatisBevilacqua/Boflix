import React, { useState } from 'react';
import PocketBase from 'pocketbase';
import Home from './Home';
import Register from './Register';
const pb = new PocketBase('http://127.0.0.1:8090');


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [noAccount, setNoAccount] = useState(true);

    const sendData = async () => {
        try{
            await pb.collection('users').authWithPassword(email, password);
            setIsLogin(true);
        }catch{
            pb.authStore.clear();
        }
    }

    if(isLogin){
        return <Home/>;
    }

    if(!noAccount){
        console.log(noAccount);
        return <Register/>;
    }

    return (
        <div className="w-screen h-screen bg-default flex justify-center items-center">
            <div className='w-[25vw] min-w-[400px] min-h-[500px] h-[25vw] bg-[rgba(0,0,0,.75);] pr-[2vw] pl-[2vw]'>
                <div className='w-[100%] h-[100%] flex justify-center flex-col gap-[30px]'>
                    <h1 className='text-[#E50914] text-[30px] font-bold'>Se connecter</h1>
                    <input placeholder="Adresse email" type="email" className='outline-none h-[55px] pl-[10px] rounded-sm' onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>

                    <input placeholder="Mot de passe" type="password" className='outline-none h-[55px] pl-[10px] rounded-sm' onChange={(e) => {
                        setPassword(e.target.value)
                    }}></input>
                    <button className='text-white h-[55px] pl-[10px] bg-red-600 rounded-sm' onClick={sendData}>S'enregistrer</button>

                    <p className='text-white'>Vous n'avez pas de compte ? <button className="text-[#E50914]" onClick={() => {
                        setNoAccount(false);
                    }}>S'enregistrer</button></p>
                </div>
            </div>
        </div>
    )
}
