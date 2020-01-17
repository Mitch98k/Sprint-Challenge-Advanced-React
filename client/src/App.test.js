import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  const component = render(<App />);
  console.log(component);
});

test("certain names are rendered", () => {
  const container = render(<App />);

  container.queryAllByText("lina magull");
  container.queryAllByText("carli lloyd");
  container.queryAllByText("alyssa naeher");
})


