/**
 * @module time-formatters
 * @description Time formatting utilities
 */

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