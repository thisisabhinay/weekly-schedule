/**
 * @module time-blocks
 * @description Time block management utilities
 */

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