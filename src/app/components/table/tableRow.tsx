'use client';
import { FC } from 'react';
import { TableColumns } from './types';
import Link from 'next/link';

interface Props {
  row: any;
  columns: TableColumns[];
}
export const TableRow: FC<Props> = ({ columns, row }) => {
  return (
    <tr className="bg-white border-b">
      {columns.map((column) =>
        column.linkAddress ? (
          <td>
            <Link className="block px-6 py-4" href={row[column.linkAddress]}>
              {row[column.field]}
            </Link>
          </td>
        ) : (
          <td className="px-6 py-4">{row[column.field]}</td>
        ),
      )}
    </tr>
  );
};
