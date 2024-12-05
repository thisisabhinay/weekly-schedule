/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScheduleHeader } from '../schedule/ScheduleHeader';

describe('ScheduleHeader', () => {
  const mockHeaders = ['Time', 'Monday', 'Tuesday', 'Wednesday'];

  it('renders all header cells', () => {
    render(<ScheduleHeader headers={mockHeaders} />);
    
    mockHeaders.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it('applies correct styling to header cells', () => {
    render(<ScheduleHeader headers={mockHeaders} />);
    
    const headerCells = screen.getAllByRole('columnheader');
    headerCells.forEach(cell => {
      expect(cell).toHaveClass('border', 'p-2', 'bg-gray-100', 'font-semibold', 'text-sm');
    });
  });
});