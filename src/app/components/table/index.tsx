'use client';
import { FC } from 'react';
import { TableRow } from './tableRow';
import { TableColumn } from './tableColumn';
import { TableColumns } from './types';

interface Params {
  isLoading?: boolean;
  columns?: TableColumns[];
  rows?: any[];
}

export const Table: FC<Params> = ({ isLoading, columns, rows }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>{columns?.map((column, index) => <TableColumn key={index} column={column} />)}</tr>
        </thead>
        <tbody>{rows?.map((row, index) => <TableRow key={index} row={row} columns={columns ?? []} />)}</tbody>
      </table>
    </div>
  );
};
