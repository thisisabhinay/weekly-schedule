import { DaySchedule } from '@/types/schedule';

export const filterBreaks = (activities: DaySchedule[]): DaySchedule[] => {
  return activities.filter(item => !item.activity.text.toLowerCase().includes('break'));
};

export const formatDuration = (duration: string): string => {
  if (duration.includes('Flexible') || duration.includes('Optional') || duration.includes('needed')) {
    return duration;
  }
  return duration;
};