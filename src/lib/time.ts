/**
 * @module time
 * @description Utilities for handling time-related operations in the schedule
 */

/**
 * Parses a duration string into minutes
 * @param {string} duration - Duration string in format "Xh Ym" or special values like "Flexible"
 * @returns {number} Total minutes, or 0 for flexible durations
 */
export const parseDuration = (duration: string): number => {
  if (duration.includes('Flexible') || duration.includes('Optional') || duration.includes('needed')) {
    return 0;
  }

  const hours = duration.match(/(\d+)h/);
  const minutes = duration.match(/(\d+)m/);
  
  return (hours ? parseInt(hours[1]) * 60 : 0) + (minutes ? parseInt(minutes[1]) : 0);
};

/**
 * Calculates total duration from an array of duration strings
 * @param {string[]} durations - Array of duration strings
 * @returns {number} Total duration in minutes
 */
export const calculateTotalDuration = (durations: string[]): number => {
  return durations.reduce((total, duration) => total + parseDuration(duration), 0);
};

/**
 * Formats minutes into a readable duration string
 * @param {number} minutes - Duration in minutes
 * @returns {string} Formatted duration string
 */
export const formatBlockDuration = (minutes: number): string => {
  if (minutes === 0) return 'Flexible';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (hours === 0) return `${remainingMinutes}m`;
  if (remainingMinutes === 0) return `${hours}h`;
  return `${hours}h ${remainingMinutes}m`;
};

/**
 * Determines the current time block based on the time of day
 * @returns {string} Current time block name or empty string if outside blocks
 */
export const getCurrentTimeBlock = (): string => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) return 'Morning Block';
  if (hour >= 12 && hour < 17) return 'Afternoon Block';
  if (hour >= 17 && hour < 22) return 'Evening Block';
  return '';
};

/**
 * Formats the current time in 12-hour format with AM/PM
 * @returns {string} Formatted time string
 */
export const formatCurrentTime = (): string => {
  return new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};