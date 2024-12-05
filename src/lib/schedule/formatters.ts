/**
 * @module schedule-formatters
 * @description Schedule formatting utilities
 */

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