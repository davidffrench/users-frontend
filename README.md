# Users Front End

This project allows the management of users through a responsive web app. It displays a grid list of users with the ability to creat, update and delete users. I had no prior experience using React, Redux, Webpack and Babel before this project. It is built using the following technologies:
* React (Component based UI library)
* Redux (State container for JavaScript apps)
* Webpack (Module bundler)
* Babel (Compiler for writing next generation JavaScript)
* Material UI (Material design for React)
* Immutable.js (Immutable data structures, encourages pure components)

## Pre-requisites

To get started, you'll need to have the following requirements installed

- Git
- Node.js<sup>1</sup>
- npm
- Backend server running<sup>2</sup>

<sup>1</sup>See https://nodejs.org/

<sup>2</sup>See https://github.com/davidffrench/users-api

## Getting started
	
	git clone <this repo>
	npm install - (can take 1-2 minutes)
	npm start
	open browser to http://localhost:8081/

## Running tests

`npm test`

## SonarQube
In addition to ESLint, I've also included some configuration for SonarQube in `sonar-project.properties`.

Note: This needs the JS plugin of version 2.12 or later for jsx support

1. Download plugin .jar from http://sonarsource.bintray.com/Distribution/sonar-javascript-plugin/sonar-javascript-plugin-2.15.jar 
2. Upload the downloaded jar file in your SonarQube Server and put it in the directory : $SONARQUBE_HOME/extensions/plugins.
    * Note - *If another version of the same plugin is already there, you need to remove/backup it as only one version of a given plugin must be available in the extensions/plugins directory.*
3. Once done, you will need to restart your SonarQube Server.

See http://docs.sonarqube.org/display/SONAR/Get+Started+in+Two+Minutes for more details on how to setup SonarQube locally.

## Docker
Can't use right now.

Unfortunately i had issues getting docker-compose working correctly. The issue is down the networking between the containers with the API container connecting to the mongoDB container. This was resolved by specifying the docker container name on mongoose connect but then it won't work through non docker installation. There is also an issue with the seed script not running on setup.

Since the work was done, I have included the docker-compose.yml file in the users-api repo.

## Potential next steps
- Fix bugs
- Implement authentication and login screen
- Better handling of screen sizes with number of columns in grid list
- Better error handling for API calls on client

## Known bugs
- React doesn't rerender the grid list after user delete - need to refresh to update for deleted user. Based on switching to setState inside the component
- On new user create - issue with updating the user state onChange of valid form. Workaround right now is to focus and blur on another field after filling all fields
- Unable to upload picture for new user
  - This leads to issues with new user displaying on grid list
- Ability to clear filter selection. easily done but issue with space for another button in the app bar on mobile. need to extend autocomplete component to reduce size.

