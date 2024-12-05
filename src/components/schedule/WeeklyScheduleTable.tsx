import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { scheduleData } from "@/data/scheduleData"
import { ScheduleHeader } from "./ScheduleHeader"
import { ScheduleBody } from "./ScheduleBody"
import { ScheduleNotes } from "./ScheduleNotes"
import { format } from "date-fns"
import { formatCurrentTime } from "@/lib/time"
import { ThemeToggle } from "../ThemeToggle"

export const WeeklyScheduleTable = () => {
  const today = format(new Date(), "EEEE, MMMM d, yyyy")
  const currentTime = formatCurrentTime()

  return (
    <Card className="shadow-lg dark:border-neutral-700 dark:shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <CardTitle className="text-xl">Weekly Schedule (6-8 Hours Daily)</CardTitle>
          <ThemeToggle />
        </div>
        <div className="text-sm text-muted-foreground">
          {today} • {currentTime}
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full border-collapse">
          <ScheduleHeader headers={scheduleData.headers} />
          <ScheduleBody timeBlocks={scheduleData.timeBlocks} />
        </table>
        <ScheduleNotes />
      </CardContent>
    </Card>
  )
}
