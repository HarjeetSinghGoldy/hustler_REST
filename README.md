#Hustler Collective RESTful Simple Application for User Login/Register.

This app simple Login/Register with authention is built on Nodejs MEAN Stack performing CRUD operations.

To run this app please follow the following steps.<br />

Step:1 Locally you need NodeJS installed and MongoDB running.<br />
Step:2 Run the command 'npm install' from the project root folder.<br />
Step:3 Then run 'node server.js'.<br />
Step:4 Browse to http://localhost:3000 to access the application.<br />


# Flow of the Applcation.<br />

1) When we run node server.js then it read all the file from the top and store depandanies in golbal variables and Express in app variable.<br />
2) Using 'express-jwt' package and config.json "secret": "Sylvester tech task" string to build unique Hash code for authentication you can check it validation https://jwt.io/ .<br />
