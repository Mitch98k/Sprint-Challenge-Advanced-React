import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddPlayers } from './AddPlayers';

test('typing into add player box changes the state, clicking the button renders the name typed', () => {
    const { getByText, getByPlaceholderText  } = render(<AddPlayers />);
    const nameInput = getByPlaceholderText(/name/i);

    fireEvent.change(nameInput, {
        target: { name: 'name', value: 'shaylyn smith'}
    });
    const submitButton = getByText(/add player/i);

    fireEvent.click(submitButton);

    getByText(/shaylyn smith/i);
});