const calendarRange = (meetingSchedules) => {
  // create a deep copy
  const meetingsCopy = JSON.parse(JSON.stringify(meetingSchedules));

  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // initalize result array with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    let currentMeeting = sortedMeetings[i];
    let lastMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMeeting.endTime) {
      lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime);
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

/*
input:
[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 9,  endTime: 10 },
  { startTime: 10, endTime: 12 }
]
merged:
[
  { st: 0, et: 1},
  { st: 3, et: 8},
  { st: 9, et: 12}
]
output:
[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
*/
