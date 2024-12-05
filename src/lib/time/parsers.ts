/**
 * @module time-parsers
 * @description Time string parsing utilities
 */

/**
 * Parses a duration string into minutes
 * @param {string} duration - Duration string in format "Xh Ym" or special values
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