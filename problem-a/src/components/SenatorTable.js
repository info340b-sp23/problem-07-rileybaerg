import React from 'react'; //import React library
import { TableHeader } from './TableHeader';
import { SenatorRow } from './SenatorRow';
//import senatorsList from '../data/senators.json';

// const EXAMPLE_SENATORS = [
//   { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
//   { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
// ];

export function SenatorTable(props) {
  const columnNames = ['Name', 'State', 'Phone', 'Twitter']
  const senatorsList = props.senatorsList;
  return (
    <table className="table table-bordered">
      <TableHeader columnNames={columnNames} />
      <tbody>
        {senatorsList.map((senator) => (
          <SenatorRow key={senator.id} senatorData={senator} />
        ))}
      </tbody>
    </table>
  );
}