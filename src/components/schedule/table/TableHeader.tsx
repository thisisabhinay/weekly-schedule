/**
 * @module TableHeader
 * @description Header component for the schedule table
 */

import { ScheduleData } from '@/types/schedule';

interface TableHeaderProps {
  /** Array of header labels for the schedule table */
  headers: ScheduleData['headers'];
}

/**
 * TableHeader Component
 * @param {TableHeaderProps} props - Component props
 * @returns {JSX.Element} Rendered table header
 */
export const TableHeader = ({ headers }: TableHeaderProps) => (
  <thead>
    <tr>
      {headers.map((header, index) => (
        <th
          key={index}
          className="border p-2 bg-gray-100 font-semibold text-sm"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);