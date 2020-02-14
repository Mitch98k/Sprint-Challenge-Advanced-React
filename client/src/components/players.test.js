import React from 'react';
import {render} from '@testing-library/react';
import {Players} from './players';
test('app renders without crashing', () => {
    render(<Players />)
})