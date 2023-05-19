import React from 'react';
import { SenatorTable } from './SenatorTable';

export function App({ senatorsList }) {
  return (
    <div className="container">
      <h1>US Senators (Jan 2022)</h1>
      <SenatorTable senatorsList={senatorsList} />
    </div>
  );
}