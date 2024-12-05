/**
 * @module ScheduleBody
 * @description Body component for the weekly schedule table
 */
import { TimeBlock } from "@/types/schedule"
import { HoverableText } from "./HoverableText"
import { filterBreaks } from "@/lib/schedule"
import { getCurrentTimeBlock } from "@/lib/time"

interface ScheduleBodyProps {
  /** Array of time blocks containing schedule data */
  timeBlocks: TimeBlock[]
}

/**
 * ScheduleBody Component
 * Renders the main content of the schedule table
 * @param {ScheduleBodyProps} props - Component props
 * @returns {JSX.Element} Rendered table body
 */
export const ScheduleBody = ({ timeBlocks }: ScheduleBodyProps) => {
  const currentBlock = getCurrentTimeBlock()
  const currentDay = new Date().getDay()

  return (
    <tbody>
      {timeBlocks.map((block, blockIndex) => (
        <tr key={blockIndex}>
          <td className="border border-neutral-200 dark:border-neutral-700 p-2 bg-gray-50 dark:bg-neutral-800/50 font-medium text-sm whitespace-pre-line">
            {block.name}
          </td>
          {block.days.map((day, dayIndex) => {
            const activities = filterBreaks(day)
            const isCurrentTimeBlock = block.name.includes(currentBlock)
            const isCurrentDay = dayIndex === currentDay - 1
            const shouldHighlight =
              isCurrentTimeBlock && isCurrentDay && currentDay >= 1 && currentDay <= 5

            return (
              <td
                key={dayIndex}
                className={`border border-neutral-200 dark:border-neutral-700 p-2 text-sm ${
                  shouldHighlight ? "bg-[#fffbeb] dark:bg-[#fef3c720]" : ""
                }`}
              >
                {activities.map((item, itemIndex, filteredArray) => (
                  <div key={itemIndex} className="whitespace-pre-line">
                    <HoverableText
                      text={`${item.activity.text} (${item.duration})`}
                      description={item.activity.description}
                    />
                    {itemIndex < filteredArray.length - 1 && "\n"}
                  </div>
                ))}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
