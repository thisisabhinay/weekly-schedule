import { WeeklyScheduleTable } from '@/components/schedule/WeeklyScheduleTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <WeeklyScheduleTable />
      </div>
    </div>
  );
}

export default App;