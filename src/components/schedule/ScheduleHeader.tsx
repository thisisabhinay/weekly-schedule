import { ScheduleData } from '@/types/schedule';

interface ScheduleHeaderProps {
  headers: ScheduleData['headers'];
}

export const ScheduleHeader = ({ headers }: ScheduleHeaderProps) => (
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