import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const AddPlayers = () => {
   const [value, handleChange] = useForm('newPlayer', {
       name: ''
   });
   const [newPlayers, setNewPlayers] = useState([]);
   
   const handleSubmit = e => {
       e.preventDefault()
       setNewPlayers([...newPlayers, value.name])
   }
    return(
        <div>
        <form onSubmit = {handleSubmit}>
            <input
            type = 'text'
            name = 'name'
            placeholder = 'name'
            value = {value.name}
            onChange = {handleChange}
            />
            <button>Add Player</button>
        </form>
            <h2>{newPlayers}</h2>
        </div>
    )
}