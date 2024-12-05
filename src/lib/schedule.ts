/**
 * @module schedule
 * @description Utilities for managing schedule data and operations
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

/**
 * Formats duration string maintaining special cases
 * @param {string} duration - Duration string to format
 * @returns {string} Formatted duration string
 */
export const formatDuration = (duration: string): string => {
  if (duration.includes('Flexible') || duration.includes('Optional') || duration.includes('needed')) {
    return duration;
  }
  return duration;
};