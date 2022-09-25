# Note Taker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description
This Note Taker application allows a user to write and save notes. It includes a server with routes to access the front end, as well as api routes to communicate with the database.

The user is able to create a new note, which only then a save button becomes available. Once the note is saved, a unique ID is applied to the note through a calculation implemented in `/routes/apiRoutes/noteRoutes.js`. Upon clicking a saved note, it will apply the unique ID to display the selected note on the screen. The user is also able to delete any saved notes.

This project is also deployed on [heroku](https://murmuring-headland-68396.herokuapp.com/)

#### Screenshot
![Screenshot](/public/assets/images/screenshot.png)

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License(s)](#licenses)
4. [Questions](#questions)

## Installation
Clone the repo and open the project. In terminal, execute the command `npm i`. This will install all the dependencies required for this application to work.

## Usage
Once the dependancies are installed, you need to execute `npm start` to start the server. Once the server is running, a message will appear saying,
```
API server now on port xxxx!
```
Open your browser and go to `localhost:xxxx` where 'xxxx' is the port being used to host the server. 

## License(s)
MIT

## Questions
My name is Arslan Tahir, the creator of this project. If you have any issues, comments, concerns, or questions regarding this project, feel free to contact me at tahir.arslan@gmail.com.

If you would like to check out my other projects, feel free to explore my !(GitHub Page)[https://github.com/tahir-arslan/].
    