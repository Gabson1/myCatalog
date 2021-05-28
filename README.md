# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# MyCatalog
Author: Gabriel Ayham Semaan 
<br />
Supervisor: Samer Murad

Description: MyCatalog is a Value Asset Manager. It allows its users to
store valuable assets, like gold or watches, in tables. In addition, MyCatalog
boasts a number of features & functionalities that reduce redundant tasks and
gives the user a better way to manage their assets.
Users can, for example, add an integration that fetches the recent price for
gold. Another example would be, a user can receive SMS or Email notifications 
when the price of their gold drops by 10%.

### Scripts

Development: <br />
``npm run start`` fires up the react application
``npm run server:watch`` fires up the nodejs/expressjs server in watch mode

Production: <br />
``npm run server`` fires up the nodejs/expressjs server and serves the frontend 
``npm run build`` bundles the react app into es5 browser supported vanilla javascript




### Setting up and starting the project

<strong>Adding the remote repository on your local machine</strong> <br />
If you don't have a Github account:
1. Clone the repository <br />
``git clone https://github.com/MisterSemaan/myCatalog.git``
2. Remove the git file <br />
`` cd myCatalog && rm -rf .git``

If you do have a Github account
1. Go to the url <br />
https://github.com/MisterSemaan/myCatalog
2. Click the 'Fork' button on the top-right corner

<strong>Installing dependencies</strong> <br />
1. Go into the local repository <br />
``cd myCatalog``
2. Client and Server directories have their own package.json files
- Go into client directory and install dependencies
``cd client && npm install``
- Go into server directory and install dependencies
``cd erver && npm install``

<strong>Connecting to your mongoDB atlas account</strong> <br />
1. Go to the following url and create a new account<br />
https://www.mongodb.com/
2. Follow the instructions of setting up your cluster
3. Create a new database and call it ``mycatalog``
4. Go to the connections tab and choose ``Connect your application``
5. Copy the connection string
6. Go into your server directory and create a ``.env`` file <br />
``cd server && touch .env``
7. Create a new key and name it ``MOGO_URI``
8. Paste your connection string as the respective value to the key ``MONGO_URI``
9. Replace the 'password' field with your mongoDB account password

<strong>Creating the react env file</strong> <br />
1. Go into your client directory and create a ``env.json`` file <br />
``cd client && touch env.json``
2. Paste the following code into your ``env.json`` file
```
{
  "backendUrl": "http://localhost:5000",
  "host": "localhost",
  "port": 3000,
  "jwtSecret": "",
  "apiUserRoute": "/api/user",
  "apiAuthRoute": "/api/auth",
  "apiCatalogRoute": "/api/catalog",
  "newsApiKey": ""
}
```
For the 'jwtSecret' field, choose any word, phrase combination and paste it into the empty value field.
For the 'newsApiKey' do the following:
1. Go to the url <br />
https://newsapi.org/
2. Click on 'Get API Key'
3. Follow the instructions 
4. Paste the key into the empty value field 

<strong>Starting the application</strong> <br />
1. Go into the client directory and run <br />
``cd client && npm run start``
2. Go into the server directory and run <br />
``cd server && npm run server``
