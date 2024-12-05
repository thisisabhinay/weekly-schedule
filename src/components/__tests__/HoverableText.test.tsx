/**
 * @jest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HoverableText } from '../schedule/HoverableText';

describe('HoverableText', () => {
  it('renders plain text when no description is provided', () => {
    render(<HoverableText text="Test Text" />);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('renders hoverable text with description', async () => {
    const user = userEvent.setup();
    render(
      <HoverableText 
        text="Hover Me" 
        description="Description Text"
      />
    );

    const trigger = screen.getByText('Hover Me');
    expect(trigger).toHaveClass('border-dotted');
    
    // Hover over the text
    await user.hover(trigger);
    
    // Check if description appears
    expect(await screen.findByText('Description Text')).toBeInTheDocument();
  });
});