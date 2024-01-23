
import React, { useState } from 'react';

function Navbar ({ onSearch  }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };  
    return ( 
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MovieImdb</span>
            </a>
            <div>
                <input className="dark:text-stone-950 mr-4 rounded-md text-xs p-2" type="text" value={query} onChange={handleInputChange} />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
        </nav>
     );
}

export default Navbar ;