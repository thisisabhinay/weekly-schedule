import { TimeBlock } from '@/types/schedule';

export const parseDuration = (duration: string): number => {
  if (duration.includes('Flexible') || duration.includes('Optional') || duration.includes('needed')) {
    return 0;
  }

  const hours = duration.match(/(\d+)h/);
  const minutes = duration.match(/(\d+)m/);
  
  return (hours ? parseInt(hours[1]) * 60 : 0) + (minutes ? parseInt(minutes[1]) : 0);
};

export const calculateTotalDuration = (durations: string[]): number => {
  return durations.reduce((total, duration) => total + parseDuration(duration), 0);
};

export const formatBlockDuration = (minutes: number): string => {
  if (minutes === 0) return 'Flexible';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (hours === 0) return `${remainingMinutes}m`;
  if (remainingMinutes === 0) return `${hours}h`;
  return `${hours}h ${remainingMinutes}m`;
};

export const getCurrentTimeBlock = (): string => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) return 'Morning Block';
  if (hour >= 12 && hour < 17) return 'Afternoon Block';
  if (hour >= 17 && hour < 22) return 'Evening Block';
  return '';
};

export const formatCurrentTime = (): string => {
  return new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};