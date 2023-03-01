# Work Day Scheduler
deployed link:
video demo:


## Description
The Work Day Scheduler allows a user to save events for each hour of a typical business day. It runs in the browser and features dynamically updated HTML and CSS powered by jQuery.


## User Story
- AS AN employee with a busy schedule
- I WANT to add important events to a daily planner
- SO THAT I can manage my time effectively


## Acceptance Criteria:
- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with timeblocks for standard business hours
- WHEN I view the timeblocks for that day
- THEN each timeblock is color coded to indicate whether it is in the past, present, or future
- WHEN I click into a timeblock
- THEN I can enter an event
- WHEN I click the save button for that timeblock
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist


## Usage:
- This work day scheduler displays typical business hours of the day - 8AM-5PM.
- At the top of the page, the current date is displayed.
- Each time block is color coded to indicate whether it occurs in the past(gray), present(red), or future(green).
- Each time block has an input field and save button where users can store their daily schedule.
- Once an event is saved, it will store in their local storage.
- This scheduler is desktop and mobile compatible.


## Future Development:
- Automatically clear local storage at the end of the day so each day starts with a clean schedule
- Expand to a work week scheduler, showing Monday-Friday
- Allow user input events to be emailed and/or pushed to mobile device calendars
