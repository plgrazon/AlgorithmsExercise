const calendarRange = (meetingSchedules) => {
  // create a deep copy
  const meetingsCopy = JSON.parse(JSON.stringify(meetingSchedules));

  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // initalize result array with the earliest meeting
  return mergedMeetings = [sortedMeetings[0]];
}

/*
[
{ startTime: 0,  endTime: 1 },
{ startTime: 3,  endTime: 5 },
{ startTime: 4,  endTime: 8 },
{ startTime: 10, endTime: 12 },
{ startTime: 9,  endTime: 10 },
]
*/
