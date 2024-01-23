// pages/index.js
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Navbar from '@/components/Navbar';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([]);

  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&api_key=30d55b4714bc4869d20f77cdb47ad032`
        );
        setDefaultMovies(response.data.results || []);
      } catch (error) {
        console.error('Error fetching default movies:', error);
      }
    };

    fetchDefaultMovies();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=30d55b4714bc4869d20f77cdb47ad032&query=${query}`
      );
      setMovies(response.data.results || []);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className='container flex flex-wrap m-auto'>
          <MovieList movies={movies.length > 0 ? movies : defaultMovies} />
      </div>
    </>
  );
};

export default HomePage;
