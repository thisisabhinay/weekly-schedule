import { TimeBlock } from '@/types/schedule';
import { HoverableText } from './HoverableText';
import { filterBreaks } from '@/lib/schedule';
import { getCurrentTimeBlock } from '@/lib/time';

interface ScheduleBodyProps {
  timeBlocks: TimeBlock[];
}

export const ScheduleBody = ({ timeBlocks }: ScheduleBodyProps) => {
  const currentBlock = getCurrentTimeBlock();
  const currentDay = new Date().getDay();
  
  return (
    <tbody>
      {timeBlocks.map((block, blockIndex) => (
        <tr key={blockIndex}>
          <td className="border p-2 bg-gray-50 font-medium text-sm whitespace-pre-line">
            {block.name}
          </td>
          {block.days.map((day, dayIndex) => {
            const activities = filterBreaks(day);
            const isCurrentTimeBlock = block.name.includes(currentBlock);
            const isCurrentDay = dayIndex === currentDay - 1; // Adjust for Sunday being 0
            const shouldHighlight = isCurrentTimeBlock && isCurrentDay && currentDay >= 1 && currentDay <= 5;
            
            return (
              <td 
                key={dayIndex} 
                className={`border p-2 text-sm ${shouldHighlight ? 'bg-[#fffbeb]' : ''}`}
              >
                {activities.map((item, itemIndex, filteredArray) => (
                  <div key={itemIndex} className="whitespace-pre-line">
                    <HoverableText
                      text={`${item.activity.text} (${item.duration})`}
                      description={item.activity.description}
                    />
                    {itemIndex < filteredArray.length - 1 && '\n'}
                  </div>
                ))}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};