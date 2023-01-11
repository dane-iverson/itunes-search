iTunes Search

This is a web application that allows users to search the iTunes Store for media content and add items to a list of favourites. The user can enter a search term and select the type of media to search for, and the results will be displayed on the interface. The user can also create a list of their favourite content and remove items from the list as needed.

Installation
To install and run the app on your local machine, follow these steps:

Clone the repository:
git clone https://github.com/dane-iverson/itunes-search.git

Navigate to the root directory of the app:
cd itunes-search

Install the dependencies(navigate to client and server folder):
npm install

Start the application:
npm start (make sure to be in server folder)

Open a web browser and navigate to http://localhost:3000 to use the app.
    
Security
To ensure the security of this app, the following measures have been taken:

The app uses the Helmet library to secure the Express app by setting various HTTP headers.
The app does not store any sensitive data, such as user login information or API keys.

Testing
To run the tests for the app, use the following command:
npm test(server folder for server tests)
npm test(client folder for client tests)

File Structure
The file structure of the project is organized as follows:

client: Contains all of the code for the frontend of the app, including the React components, CSS styles, and tests.
server: Contains all of the code for the backend of the app, including the Express routes, tests, and the code that interfaces with the iTunes Search API.
public: Contains any static assets that need to be served by the app, such as images or fonts.

Code Documentation
The code for this app is thoroughly commented and adheres to the Google JavaScript Style Guide for indentation, variable and component names, and other coding conventions.