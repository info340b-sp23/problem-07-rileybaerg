import React from 'react';

export function TableHeader({ columnNames }) {
  return (
    <thead>
      <tr>
        {columnNames.map((columnName) => (
          <th key={columnName}>{columnName}</th>
        ))}
      </tr>
    </thead>
  );
}