"use client"
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?s=fire&apikey=3e1858df');
        const result = await response.json();
        setMovies(result.Search);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return ( 
    <>
        <Navbar/>
        <div className="container flex flex-wrap m-auto">
        <MovieList movies={movies}/>
        </div>
    </>
   );
}

export default App;