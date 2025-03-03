import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './CountryList';
import StateList from './StateList';
import CityList from './CityList';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState({}); // { countryName: [state1, state2, ...] }
    const [cities, setCities] = useState({}); // { stateName: [city1, city2, ...] }

    const handleAddCountry = (newCountry) => {
        setCountries([...countries, newCountry]);
        setStates({ ...states, [newCountry]: [] });
    };

    const handleEditCountry = (oldCountry, newCountry) => {
        setCountries(countries.map(country => country === oldCountry ? newCountry : country));
        const newStates = { ...states };
        newStates[newCountry] = newStates[oldCountry];
        delete newStates[oldCountry];
        setStates(newStates);
    };

    const handleDeleteCountry = (countryToDelete) => {
        setCountries(countries.filter(country => country !== countryToDelete));
        const newStates = { ...states };
        delete newStates[countryToDelete];
        setStates(newStates);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <CountryList
                        countries={countries}
                        onAddCountry={handleAddCountry}
                        onEditCountry={handleEditCountry}
                        onDeleteCountry={handleDeleteCountry}
                    />
                } />
                <Route path="/states/:country" element={
                    <StateList states={states} setStates={setStates} />
                } />
                <Route path="/cities/:state" element={
                    <CityList cities={cities} setCities={setCities} />
                } />
            </Routes>
        </Router>
    );
};

export default App;