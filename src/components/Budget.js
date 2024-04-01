import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);
        setNewBudget(newBudget);
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }

    const handleKeyDown = (event) => {
        let newBudget;
        if (event.key === 'ArrowUp') {
            newBudget = prevBudget => prevBudget + 10;
        } else if (event.key === 'ArrowDown') {
            newBudget = prevBudget => prevBudget - 10;
        }
        setNewBudget(newBudget);
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }

    return (
        <div>                  
            <div className='alert alert-secondary'>
                <span>Budget: {currency}</span>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onKeyDown={handleKeyDown}></input>
            </div>
        </div>
    );
};

export default Budget;
