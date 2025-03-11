const HoursGroup = () => {
  const schedule: {[key: string]: string} = {
    "Monday": "8:00 AM - 10:00 PM",
    "Tuesday": "8:00 AM - 10:00 PM",
    "Wednesday": "8:00 AM - 10:00 PM",
    "Thursday": "8:00 AM - 10:00 PM",
    "Friday": "8:00 AM - 10:00 PM",
    "Saturday": "8:00 AM - 10:00 PM",
    "Sunday": "9:00 AM - \u00A0\u00A09:00 PM" // For styling alignment consistency
  }

  const getDayOfWeek = () => Object.keys(schedule)[ (new Date().getDay() + 6) % 7 ];

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl">Open hours:</p>
      <div className="grid grid-cols-2 gap-4 p-4 max-w-md mx-auto text-xl">
        {Object.keys(schedule).map(day => (
          <>
            <div key={day} className={`font-bold ${getDayOfWeek() === day ? "text-gray-200" : "text-gray-400"}`}>{day}</div>
            <div key={`${day}_`}
              className={`
                ${schedule[day].toLowerCase() === "closed" && "text-red-500"}
                ${getDayOfWeek() === day ? "text-gray-200 font-bold" : "text-gray-500"}`
              }>
              {schedule[day]}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
export default HoursGroup