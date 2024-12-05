/**
 * @jest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { ScheduleBody } from "../schedule/ScheduleBody"

describe("ScheduleBody", () => {
  const mockTimeBlocks = [
    {
      name: "Morning Block",
      days: [
        [
          { activity: { text: "Study", description: "Study time" }, duration: "1h" },
          { activity: { text: "Break" }, duration: "15m" }
        ]
      ]
    }
  ]

  beforeEach(() => {
    // Mock date to be a Monday at 9 AM
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2024-01-01T09:00:00"))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("renders time blocks and activities", () => {
    render(<ScheduleBody timeBlocks={mockTimeBlocks} />)

    expect(screen.getByText("Morning Block")).toBeInTheDocument()
    expect(screen.getByText(/Study/)).toBeInTheDocument()
    expect(screen.queryByText(/Break/)).not.toBeInTheDocument() // Break should be filtered
  })

  it("highlights current time block on current day", () => {
    render(<ScheduleBody timeBlocks={mockTimeBlocks} />)

    const cell = screen.getByText(/Study/).closest("td")
    expect(cell).toHaveClass("bg-[#fffbeb]")
  })
})
