# Country, State, and City Management Application

## Project Overview

This project is a Country, State, and City Management application built using ReactJS and JavaScript. The application allows users to manage a hierarchical structure of countries, states, and cities, providing functionalities to add, edit, and delete each level.

## Features

- **Country Management**: Add, edit, and delete countries. When a country is deleted, all associated states and cities are also removed.
- **State Management**: Add, edit, and delete states for a specific country. Deleting a state removes all associated cities.
- **City Management**: Add and delete cities within a specific state.
- **Confirmation Dialogs**: Users are prompted with confirmation alerts before performing delete and update actions.

## Technologies Used

- **ReactJS**: For building the component-based user interface.
- **JavaScript (ES6)**: For handling state management, event handling, and data manipulation.

## File Structure

```
country-state-city-management
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── CountryList.js
│   │   ├── StateList.js
│   │   └── CityList.js
│   ├── index.js
│   └── App.css
├── package.json
├── README.md
└── .gitignore


Explanation of the File Structure:
public: Contains static files that are served by the web server.

index.html: The main HTML file that serves as the entry point for the React application.
favicon.ico: The favicon for the application.
src: Contains the source code for the React application.

components: Contains the React components used in the application.
App.js: The main component that manages the overall state and routing.
CountryList.js: The component for managing countries.
StateList.js: The component for managing states within a specific country.
CityList.js: The component for managing cities within a specific state.
index.js: The entry point for the React application, where the ReactDOM.render method is called.
App.css: The main CSS file for styling the application.
package.json: Contains metadata about the project and its dependencies.

README.md: Provides an overview of the project, setup instructions, and usage information.

.gitignore: Specifies files and directories that should be ignored by Git.

This file structure ensures that the project is organized and easy to navigate, with separate directories for static files, source code, and configuration files.
```

The project uses the following external libraries/packages:

react
react-dom
react-router-dom
These libraries are essential for building the React application and handling routing between different components. Other than these, no additional external libraries or npm packages are used in the provided code snippets.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Start the application using `npm start`.

## Usage

- Users can add a new country by clicking the "Add Country" button.
- Each country can be managed individually, allowing users to add, edit, or delete states and cities.
- Confirmation dialogs ensure that users confirm their actions before any destructive changes are made.

## Conclusion

This application provides a simple and intuitive interface for managing countries, states, and cities, ensuring that users can easily navigate and manipulate the hierarchical data structure.
