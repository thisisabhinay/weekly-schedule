import { test, expect } from '@playwright/test';

test.describe('Weekly Schedule', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays the schedule table with correct structure', async ({ page }) => {
    // Check main components
    await expect(page.getByText('Weekly Schedule (6-8 Hours Daily)')).toBeVisible();
    
    // Verify time blocks
    const timeBlocks = ['Morning Block', 'Afternoon Block', 'Evening Block'];
    for (const block of timeBlocks) {
      await expect(page.getByText(block, { exact: false })).toBeVisible();
    }
  });

  test('shows hover cards for activities with descriptions', async ({ page }) => {
    // Find an activity with a description and hover over it
    const activity = page.getByText('Course Learning Notes');
    await activity.hover();
    
    // Verify the hover card appears with the description
    await expect(page.getByText(/like taking notes during a lecture/i)).toBeVisible();
  });

  test('displays current date and time', async ({ page }) => {
    const header = page.locator('.text-muted-foreground');
    await expect(header).toContainText(new Date().getFullYear().toString());
    await expect(header).toContainText(/\d{1,2}:\d{2}/);
  });
});