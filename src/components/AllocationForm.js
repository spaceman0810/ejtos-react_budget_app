import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const AllocationForm = (props) => {
    const { dispatch,remaining,budget  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }
			
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
			  const [currency, setCurrency] = useState('');

			  const handleCurrencyChange = (event) => {
				setCurrency(event.target.value);
				dispatch({ type: 'SET_CURRENCY', payload: event.target.value });
			  };


    return (
        <div>
            <div className='row'>

            <div className="input-group mb-4" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
						<option value="Sales" name="sales">Sales</option>
						<option value="Finance" name="finance">Finance</option>
						<option value="HR" name="hr">HR</option>
						<option value="IT" name="it">IT</option>
						<option value="Admin" name="admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
						<option value="Reduce" name="Reduce">Reduce</option>
                  </select>
				

				<div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect03">Currency</label>
                  </div>
				 			  
				 <select className="custom-select" id="inputGroupSelect03" value={currency} onChange={handleCurrencyChange}>
						<option value=" $ ">$ Dollar</option>
						<option defaultValue value=" £ ">£ Pound</option>
						<option value=" € ">€ Euro</option>
						<option value=" ₹ ">₹ Ruppee</option>
						
				  </select>
				  
				  <div>
				  <label style={{ marginLeft: '2rem' }}>{currency}</label>	
				     <input
					    required='required'
                        type='number'
                        id='cost'
						name='cost'
                        value={cost}
                        style={{ marginLeft: '0.5rem' , size: 2}}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>	</div>

				
								  
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button> 
                </div>
             </div>

        </div>
    );
};

export default AllocationForm;
