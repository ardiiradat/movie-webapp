import Image from 'next/image';
import React from 'react';

const MovieList = (props) => {
    console.log(props)
    return ( 
        <>
            {props.movies.map((movie, index)=>
                <div key={index} className="w-2/6 my-5 flex flex-col items-center">
                    <Image src={movie.Poster} alt='Movie Poster' width={100} height={100}/>
                    <h1>{movie.Title} - {movie.Year}</h1>
                </div>
            )}
        </>
    );
}

export default MovieList ;