/**
 * @jest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WeeklyScheduleTable } from '../schedule/WeeklyScheduleTable';

describe('WeeklyScheduleTable', () => {
  beforeEach(() => {
    render(<WeeklyScheduleTable />);
  });

  it('renders the main heading', () => {
    expect(screen.getByText('Weekly Schedule (6-8 Hours Daily)')).toBeInTheDocument();
  });

  it('displays all time blocks', () => {
    expect(screen.getByText(/Morning Block/)).toBeInTheDocument();
    expect(screen.getByText(/Afternoon Block/)).toBeInTheDocument();
    expect(screen.getByText(/Evening Block/)).toBeInTheDocument();
  });

  it('shows the current date and time', () => {
    const header = screen.getByRole('banner');
    expect(header).toHaveTextContent(/\d{1,2}:\d{2}/); // Time format
    expect(header).toHaveTextContent(/(?:January|February|March|April|May|June|July|August|September|October|November|December)/); // Month
  });
});