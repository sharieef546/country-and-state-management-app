import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CityList.css';

const CityList = ({ cities, setCities }) => {
    const { state } = useParams();
    const [newCity, setNewCity] = useState('');

    const handleAddCity = () => {
        if (newCity) {
            setCities({
                ...cities,
                [state]: [...(cities[state] || []), newCity]
            });
            setNewCity('');
        }
    };

    const handleDeleteCity = (cityToDelete) => {
        if (window.confirm('Are you sure you want to delete this city?')) {
            setCities({
                ...cities,
                [state]: cities[state].filter(city => city !== cityToDelete)
            });
        }
    };

    return (
        <div className='city-management'>
            <h2>City Management for {state}</h2>
            <input
                type="text"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                placeholder="Add a new city"
            />
            <button onClick={handleAddCity}>Add City</button>
            <ul>
                {(cities[state] || []).map((city) => (
                    <li key={city}>
                        {city}
                        <button onClick={() => handleDeleteCity(city)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CityList;