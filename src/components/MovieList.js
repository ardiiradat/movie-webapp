// components/MovieList.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonLoader from './Skeleton';

const MovieList = ({ movies }) => {
    const [loading, setLoading] = useState(true);
    const [imageErrorHandled, setImageErrorHandled] = useState(false);
    useEffect(() => {
        const moviesFetched = movies
        setTimeout(() => {
            if (moviesFetched) {
                setLoading(false);
                setImageErrorHandled(false);
            }
        }, 2000);
    }, []);
    const handleImageError = (event) => {
        if (!imageErrorHandled) {
            event.target.src = 'images/dummy-image.jpg'; // Replace the broken image with a dummy image
            setImageErrorHandled(true); // Set the flag to indicate that the error has been handled
        }
    };
    console.log('movies :>> ', movies);
  return (
    <>
        {movies.map((movie) => (
            <div className="w-1/5 my-5 flex flex-col items-center">
                {loading ? (
                <SkeletonLoader />
                ) : (
                <div className='text-center flex items-center flex-col p-3'>
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} onError={handleImageError}  alt='Movie Poster' width={400} height={500} />
                    <h1 className='text-center'>{movie.original_title} - {movie.vote_average}</h1>
                </div>
                )}
            </div>
        ))}
    </>
  );
};

export default MovieList;
