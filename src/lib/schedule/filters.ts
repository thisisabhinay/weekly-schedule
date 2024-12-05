/**
 * @module schedule-filters
 * @description Schedule filtering utilities
 */

import { DaySchedule } from '@/types/schedule';

/**
 * Filters out break activities from a schedule
 * @param {DaySchedule[]} activities - List of scheduled activities
 * @returns {DaySchedule[]} Filtered list without breaks
 */
export const filterBreaks = (activities: DaySchedule[]): DaySchedule[] => {
  return activities.filter(item => !item.activity.text.toLowerCase().includes('break'));
};