#Hustler Collective RESTful Simple Application for User Login/Register.

This app simple Login/Register with authention is built on Nodejs MEAN Stack performing CRUD operations.

To run this app please follow the following steps.

Step:1 Locally you need NodeJS installed and MongoDB running.
Step:2 Run the command 'npm install' from the project root folder.
Step:3 Then run 'node server.js'.
Step:4 Browse to http://localhost:3000 to access the application.

Flow of the Applcation.
When we run node server.js then it read all the file from the top and store depandanies in golbal variables and Express in app variable.
Using 'express-jwt' package and config.json "secret": "Hustler Collective task" string to build unique Hash code for authentication you can check it validation https://jwt.io/ .
