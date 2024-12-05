export interface ActivityDescription {
  text: string;
  description?: string;
}

export interface DaySchedule {
  activity: ActivityDescription;
  duration: string;
}

export interface TimeBlock {
  name: string;
  days: DaySchedule[][];
}

export interface ScheduleData {
  headers: string[];
  timeBlocks: TimeBlock[];
}

export interface HoverableTextProps {
  text: string;
  description?: string;
}