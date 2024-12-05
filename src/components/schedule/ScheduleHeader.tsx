/**
 * @module ScheduleHeader
 * @description Header component for the weekly schedule table
 */
import { ScheduleData } from "@/types/schedule"

interface ScheduleHeaderProps {
  /** Array of header labels for the schedule table */
  headers: ScheduleData["headers"]
}

/**
 * ScheduleHeader Component
 * Renders the header row of the schedule table
 * @param {ScheduleHeaderProps} props - Component props
 * @returns {JSX.Element} Rendered table header
 */
export const ScheduleHeader = ({ headers }: ScheduleHeaderProps) => (
  <thead>
    <tr>
      {headers.map((header, index) => (
        <th
          key={index}
          className="border border-neutral-200 dark:border-neutral-700 p-2 bg-gray-100 dark:bg-neutral-800/80 font-semibold text-sm"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
)
