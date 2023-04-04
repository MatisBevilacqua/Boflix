import React, { useState, useEffect } from 'react';
import PocketBase, { Record } from 'pocketbase';
import Hello from './Hello';
import Player from './Player';
import Header from './Header';
const pb = new PocketBase('http://127.0.0.1:8090');

interface Movie {
    movie_img: string,
    movie_title: string,
    movie_link: string
}

export default function Home() {

    const [bannierre, setBanniere] = useState('http://127.0.0.1:8090/api/files/g6kpze9otzjrzo1/ec37pbtipjp9b4j/creed_FfbnH8S4fO.webp')
    const [movie, setMovie] = useState<Movie[]>([]);
    const [movieSelect, setMovieSelect] = useState(false);
    const [movieLinkSelect, setMovieLinkSelect] = useState('');

    useEffect(() => {
        (async () => {
            const data = await pb.collection('movie').getFullList({
                sort: '-created',
            })

            for (const movie in data) {
                pb.getFileUrl(data[movie], data[movie].movie, { 'thumb': '100x250' });
                setMovie((arr) => [...arr, {
                    movie_link: pb.getFileUrl(data[movie], data[movie].movie, { 'thumb': '100x250' }),
                    movie_img: pb.getFileUrl(data[movie], data[movie].movie_img, { 'thumb': '100x250' }),
                    movie_title: data[movie].movie_title
                }])
            }
        })();
    }, []);
    if(movieSelect){
        return <Player link={movieLinkSelect} />;
    }

    return (
        <div className='bg-black'>
            <Header/>
            <div style={{ background: `url(${bannierre})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className={`h-[80vh] min-h-[300px] flex pl-20 flex-col justify-center`}>
                <Hello name={pb.authStore.model?.username} />
                <p className='text-white text-[30px]'>Ravis de vous revoir parmis nous, qu'allez vous regardez aujourd'hui ?</p>
                <button className='w-[10vw] h-[5vh] min-w-[150px] bg-[#E50914] mt-5 text-white'>Faire un don</button>
            </div>

            <div className='p-20 gap-[20px] w-full bg-black flex items-center justify-center flex-wrap'>
                {movie && movie.map((movie_title, index) => (
                    <div onClick={() => {
                        setMovieSelect(true);
                        setMovieLinkSelect(movie[index].movie_link);
                    }} style={{ background: `url(${movie[index].movie_img})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className={`basis-[13%] h-[40vh] flex justify-center items-end bg-white}`}>
                        <div className='w-[100%] min-w-[200px] pt-5 pb-5 bg-black flex items-start justify-start'>
                            <h3 className='text-[22px] text-white'>{movie_title.movie_title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
