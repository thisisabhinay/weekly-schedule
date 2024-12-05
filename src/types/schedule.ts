/**
 * @module schedule-types
 * @description Type definitions for the schedule system
 */

/**
 * Represents an activity with optional description
 * @interface ActivityDescription
 */
export interface ActivityDescription {
  /** Text label for the activity */
  text: string;
  /** Optional detailed description shown in hover card */
  description?: string;
}

/**
 * Represents a scheduled activity with duration
 * @interface DaySchedule
 */
export interface DaySchedule {
  /** Activity details */
  activity: ActivityDescription;
  /** Duration string (e.g., "1h 30m", "Flexible") */
  duration: string;
}

/**
 * Represents a time block in the schedule
 * @interface TimeBlock
 */
export interface TimeBlock {
  /** Name of the time block */
  name: string;
  /** Activities for each day of the week */
  days: DaySchedule[][];
}

/**
 * Complete schedule data structure
 * @interface ScheduleData
 */
export interface ScheduleData {
  /** Column headers for the schedule table */
  headers: string[];
  /** Time blocks containing activities */
  timeBlocks: TimeBlock[];
}

/**
 * Props for hoverable text component
 * @interface HoverableTextProps
 */
export interface HoverableTextProps {
  /** Text to display */
  text: string;
  /** Optional description shown in hover card */
  description?: string;
}