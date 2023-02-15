# Problem Statement

The details of the task are as follows:

Implement a ZoomingAndScrolling chart with infinite scrolling capability.

1. Set up a new project on CodeSandbox, using the template from the following link
   https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/React/Light/

2. populate the chart by retrieving the data from the "trips" table using HTTP rest API from https://demo.questdb.io/. x should be "pickup_datetime" and y should be "trip_distance"
   https://questdb.io/docs/develop/query-data/#http-rest-api

3. provide infinite scroll functionality for the graph chart; the concept of infinite refers to the ability to dynamically load new data as needed than loading all the data at once. Reference:
   https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LoadDataOnDemand/React/Light/



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

# Steps 
 1. Get Data From https://demo.questdb.io/exec with REST API
 2. Set Chart Configuration
 3. Supply Data 
 4. Implement Infinite Zooming & Scrolling