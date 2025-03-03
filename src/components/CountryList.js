import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CountryList.css';

const CountryList = ({ countries, onAddCountry, onEditCountry, onDeleteCountry }) => {
    const [newCountry, setNewCountry] = useState('');
    const navigate = useNavigate();

    const handleAddCountry = () => {
        if (newCountry) {
            onAddCountry(newCountry);
            setNewCountry('');
        }
    };

    const handleEditCountry = (country) => {
        const updatedName = prompt('Enter new country name:', country);
        if (updatedName && window.confirm('Are you sure you want to update this country?')) {
            onEditCountry(country, updatedName);
        }
    };

    const handleDeleteCountry = (country) => {
        if (window.confirm('Are you sure you want to delete this country? This will also delete all associated states and cities.')) {
            onDeleteCountry(country);
        }
    };

    const handleManageStates = (country) => {
        navigate(`/states/${country}`);
    };

    return (
        <div className='country-management'>
            <h2>Country Management</h2>
            <input
                type="text"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                placeholder="Add a new country"
            />
            <button onClick={handleAddCountry}>Add Country</button>
            <ul>
                {countries.map((country) => (
                    <li key={country}>
                        {country}
                        <button onClick={() => handleEditCountry(country)}>Edit</button>
                        <button onClick={() => handleDeleteCountry(country)}>Delete</button>
                        <button onClick={() => handleManageStates(country)}>Manage States</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;