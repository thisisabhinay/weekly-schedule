import { describe, it, expect } from 'vitest';
import { filterBreaks, formatDuration } from '../schedule';
import { DaySchedule } from '@/types/schedule';

describe('Schedule utilities', () => {
  describe('filterBreaks', () => {
    it('should filter out break activities', () => {
      const activities: DaySchedule[] = [
        { activity: { text: 'Study' }, duration: '1h' },
        { activity: { text: 'Break' }, duration: '15m' },
        { activity: { text: 'Code' }, duration: '2h' }
      ];

      const filtered = filterBreaks(activities);
      expect(filtered).toHaveLength(2);
      expect(filtered.map(a => a.activity.text)).not.toContain('Break');
    });

    it('should handle case-insensitive break detection', () => {
      const activities: DaySchedule[] = [
        { activity: { text: 'Study' }, duration: '1h' },
        { activity: { text: 'BREAK' }, duration: '15m' },
        { activity: { text: 'break time' }, duration: '15m' }
      ];

      const filtered = filterBreaks(activities);
      expect(filtered).toHaveLength(1);
      expect(filtered[0].activity.text).toBe('Study');
    });
  });

  describe('formatDuration', () => {
    it('should return flexible durations unchanged', () => {
      expect(formatDuration('Flexible timing')).toBe('Flexible timing');
      expect(formatDuration('Optional')).toBe('Optional');
      expect(formatDuration('As needed')).toBe('As needed');
    });

    it('should return standard durations unchanged', () => {
      expect(formatDuration('1h 30m')).toBe('1h 30m');
      expect(formatDuration('45m')).toBe('45m');
    });
  });
});