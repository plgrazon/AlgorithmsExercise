const calendarRange = (meetingSchedules) => {
  // create a deep copy
  const meetingCopy = JSON.parse(JSON.stringify(meetingSchedules));

  const sortedMeetings = meetingsCopy.sort(a, b) => {
    return a.startTime - b.startTime;
  });

  return sortedMeetings;
}
