const HoursGroup = () => {
  const schedule: {[key: string]: string} = {
    "Monday": "9:00 AM - 5:00 PM",
    "Tuesday": "9:00 AM - 5:00 PM",
    "Wednesday": "9:00 AM - 5:00 PM",
    "Thursday": "9:00 AM - 5:00 PM",
    "Friday": "9:00 AM - 5:00 PM",
    "Saturday": "9:00 AM - 5:00 PM",
    "Sunday": "Closed"
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl">Open hours:</p>
      <div className="grid grid-cols-2 gap-4 p-4 max-w-md mx-auto text-xl">
        {Object.keys(schedule).map(day => (
          <>
            <div key={day} className="font-bold">{day}</div>
            <div key={`${day}_`} className={`${schedule[day].toLowerCase() === "closed" && "text-red-500"}`}>
              {schedule[day]}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
export default HoursGroup