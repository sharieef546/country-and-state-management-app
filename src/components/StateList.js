import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StateList.css';

const StateList = ({ states, setStates }) => {
    const { country } = useParams();
    const [newState, setNewState] = useState('');
    const navigate = useNavigate();

    const handleAddState = () => {
        if (newState) {
            setStates({
                ...states,
                [country]: [...(states[country] || []), newState]
            });
            setNewState('');
        }
    };

    const handleDeleteState = (stateToDelete) => {
        if (window.confirm('Are you sure you want to delete this state? This will also delete all associated cities.')) {
            setStates({
                ...states,
                [country]: states[country].filter(state => state !== stateToDelete)
            });
        }
    };

    const handleManageCities = (state) => {
        navigate(`/cities/${state}`);
    };

    return (
        <div className="state-management">
            <h2>State Management for {country}</h2>
            <input
                type="text"
                value={newState}
                onChange={(e) => setNewState(e.target.value)}
                placeholder="Add a new state"
            />
            <button onClick={handleAddState}>Add State</button>
            <ul>
                {(states[country] || []).map((state) => (
                    <li key={state}>
                        {state}
                        <button onClick={() => handleDeleteState(state)}>Delete</button>
                        <button onClick={() => handleManageCities(state)}>Manage Cities</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StateList;