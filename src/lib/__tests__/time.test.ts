/**
 * @jest-environment jsdom
 */
import { describe, it, expect, beforeEach, vi } from "vitest"
import {
  parseDuration,
  calculateTotalDuration,
  formatBlockDuration,
  getCurrentTimeBlock
} from "../time"

describe("Time utilities", () => {
  describe("parseDuration", () => {
    it("should parse hours and minutes correctly", () => {
      expect(parseDuration("2h 30m")).toBe(150)
      expect(parseDuration("1h")).toBe(60)
      expect(parseDuration("45m")).toBe(45)
    })

    it("should handle flexible durations", () => {
      expect(parseDuration("Flexible")).toBe(0)
      expect(parseDuration("Optional")).toBe(0)
      expect(parseDuration("As needed")).toBe(0)
    })
  })

  describe("calculateTotalDuration", () => {
    it("should sum up multiple durations correctly", () => {
      expect(calculateTotalDuration(["1h", "30m", "45m"])).toBe(135)
    })

    it("should handle mixed flexible and fixed durations", () => {
      expect(calculateTotalDuration(["1h", "Flexible", "30m"])).toBe(90)
    })
  })

  describe("formatBlockDuration", () => {
    it("should format minutes into hours and minutes", () => {
      expect(formatBlockDuration(90)).toBe("1h 30m")
      expect(formatBlockDuration(60)).toBe("1h")
      expect(formatBlockDuration(30)).toBe("30m")
    })

    it("should handle zero duration", () => {
      expect(formatBlockDuration(0)).toBe("Flexible")
    })
  })

  describe("getCurrentTimeBlock", () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    it("should return correct time block for morning", () => {
      vi.setSystemTime(new Date("2024-01-01T09:00:00"))
      expect(getCurrentTimeBlock()).toBe("Morning Block")
    })

    it("should return correct time block for afternoon", () => {
      vi.setSystemTime(new Date("2024-01-01T14:00:00"))
      expect(getCurrentTimeBlock()).toBe("Afternoon Block")
    })

    it("should return correct time block for evening", () => {
      vi.setSystemTime(new Date("2024-01-01T19:00:00"))
      expect(getCurrentTimeBlock()).toBe("Evening Block")
    })
  })
})
