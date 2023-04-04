import React, { useState } from 'react';
import PocketBase from 'pocketbase';
import Login from './Login';
const pb = new PocketBase('http://127.0.0.1:8090');


export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [noAccount, setNoAccount] = useState(false);


    const data = {
        "username": username,
        "email": email,
        "password": password,
        "passwordConfirm": passwordConfirm
    }

    const sendData = async () => {
        try {
            await pb.collection('users').create(data);
            setIsLogin(true);
        } catch (err) {
            console.log(err);
        }
    }

    if (isLogin || noAccount) {
        return <Login/>;
    }

    return (
        <div className="w-screen h-screen bg-default flex justify-center items-center">
            <div className='w-[25vw] min-w-[300px] min-h-[500px] h-[35vw] bg-[rgba(0,0,0,.75);] pr-[2vw] pl-[2vw]'>
                <div className='w-[100%] h-[100%] flex justify-center flex-col gap-[30px]'>
                    <h1 className='text-[#E50914] text-[30px] font-bold'>S'enregistrer</h1>
                    <input placeholder="Nom d'utilisateur" type="text" className='outline-none h-[55px] pl-[10px] rounded-sm' onChange={(e) => {
                        setUsername(e.target.value)
                    }}></input>

                    <input placeholder="Adresse email" type="email" className='outline-none h-[55px] pl-[10px] rounded-sm' onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>

                    <input placeholder="Mot de passe" type="password" className='outline-none h-[55px] pl-[10px] rounded-sm' onChange={(e) => {
                        setPassword(e.target.value)
                    }}></input>

                    <input placeholder="Confirmer votre mot de passe" type="password" className='outline-none h-[55px] pl-[10px] rounded-sm' onChange={(e) => {
                        setPasswordConfirm(e.target.value)
                    }}></input>

                    <button className='text-white h-[55px] pl-[10px] bg-[#E50914] rounded-sm' onClick={sendData}>S'enregistrer</button>

                    <p className='text-white'>Vous avez déja un compte ? <button className="text-[#E50914]" onClick={() => {
                        setNoAccount(true);
                    }}>Se connecter</button></p>
                </div>
            </div>
        </div>
    )
}
