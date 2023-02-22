import Image from 'next/image';
import React from 'react'

async function getMovie(movieId){

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return await res.json()
}

async function MoviePage({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId);
  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8  flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image className='rounded-lg' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt="img not available" width={500} height={300} placeholder="blur" blurDataURL='/rolling.svg' style={{
                maxWidth:"100%",
                height:"auto"
            }}/>
            <div className='p-2'>
                <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
                <p className='text-lg mb-3'><span className='font-semibold mr-1'>Overview:</span>
                {movie.overview}</p>
                <p className='mb-3'><span className='font-semibold mr-1'>Release Date: {movie.release_date || movie.first_air_date}</span></p>
                <p className='mb-3'><span className='font-semibold mr-1'>Rating: {movie.vote_count}</span></p>
            </div>        
        </div>
    </div>
  )
}
  
export default MoviePage