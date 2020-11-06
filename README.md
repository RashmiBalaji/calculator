# calculator
A web-page calculator application for multiple socket connections

The client side of the project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was created using React with socket.io-client for the front-end, Express with socket.io for the back-end server and mongodb with Mongoose for the database. 

# Running the application
Ensure to install mongodb and mongoose globally (before running the project) by using the following commands (for mac) using homebrew. Since the web application is not hosted/deployed, there is a need for this installation.
`brew update`
`brew install mongodb`
`brew install mongoose`

After the installations, run the mongodb with mongoose database on a terminal.
`brew services start mongodb` ~ if using brew
`mongo` ~ directly
Running the above commands run the database, so that the entires done in a given machine on different sockets can be stored, fetched and rendered.

After cloning the repository/ downloading the project files, switch to `client` folder of the project and run npm i to install all dependencies. 
`cd client`
`npm i`

Switch to the project root directory and then to the `server` directory 
`cd server`

Start and run the server. The server is configured to run on `localhost:3001`
`node index.js`

On a different Terminal tab, switch to `client` folder and run npm start to start the React web application. 
`npm start`

This automatically loads the app on the localhost. In case of any issues, open http://localhost:3000 to view it in the browser.
