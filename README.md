# HabitTracker

A simple habit tracking application. Designed as a course project for the course Human Computer Interaction at the University of Helsinki.

This is a working code prototype to test the usability of the designed layout, not all planned features are implemented in the app nor are the current functions finished and tested.

&nbsp;

## Running the application

This React-app was created with Vite, with JSON Server as the 'backend'. To run the application:

1. Install [Node.js](https://nodejs.org/en).
    - Open command line and make sure node is installed with e.g. `node -v`

2. Download the project code.
    - run `git clone git@github.com:hjeronen/habitTracker.git`
    - or download zip-folder

3. On command line, navigate to project root folder (where the file 'package.json' is) and install dependencies with `npm install`.

4. Start JSON Server with `npx json-server --port=3001 --watch db.json`, install it by selecting 'y' if necessary.

4. Run `npm run dev`, and the app should open up at http://localhost:5173/.

&nbsp;

## User guide

All the tracked habits and the day's overall progress can be viewed on the home page:

<img src="https://github.com/hjeronen/habitTracker/assets/73843204/00cad4b8-8f63-4f76-b724-72944b3de3c6" width="60%">

&nbsp;

User can add data to habits on the Home page. It is possible to input data to only some of the tracked data values, 0 values are ignored and all data for the day will be added up:

<img src="https://github.com/hjeronen/habitTracker/assets/73843204/9dc98b51-c914-405b-acfd-8ae1576272c5" width="60%">

&nbsp;

User can view their progress by clicking the habit - at the moment, the habit page shows daily progress in the tracked data values and graphs for the cumulative progress for the selected data value and daily data points (for days when data has been recorded):

<img src="https://github.com/hjeronen/habitTracker/assets/73843204/3ddede62-9d36-42af-b477-cceb207e67f5" width="60%">

&nbsp;

It is also possible to view individual data points and delete them if necessary:

<img src="https://github.com/hjeronen/habitTracker/assets/73843204/1436d63d-f5c2-4da4-8fb9-3048bae1d9bc" width="60%">

&nbsp;

Setting up tracking for a new habit has four steps:

1. Defining the name for the habit:
   
   <img src="https://github.com/hjeronen/habitTracker/assets/73843204/95e60bd0-b5a1-4e04-a640-c9c84694a654" width="60%">

&nbsp;

2. Defining tracked data values - if no data values are defined, the habit can be tracked by marking it simply as 'done/undone':
   
   <img src="https://github.com/hjeronen/habitTracker/assets/73843204/d3ded9b1-a9f0-46d1-8a37-bceab99d9956" width="60%">

&nbsp;

3. Setting the all time targets, the daily goals and tracked milestones for the selected data values (milestones are not actually tracked in the current state of the app):
   
   <img src="https://github.com/hjeronen/habitTracker/assets/73843204/d4ae40b9-fef7-4d4d-a9b2-cc975e17ffe7" width="60%">

&nbsp;

4. Confirming the settings and creating tracking for the habit:
   
   <img src="https://github.com/hjeronen/habitTracker/assets/73843204/caca6a6e-247b-489a-ab1f-014426764a42" width="60%">

&nbsp;

## Notes

The app is not actually finished, there is no error checking for user input and some features are not implemented (e.g. tracking the milestones, also user cannot add more graphs). This app was created only to demonstrate and test in practice the design for the user interface.

