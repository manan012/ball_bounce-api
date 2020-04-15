# ball_bounce-api

### To install packages
`npm install`

### To start the app
`npm start` or `node server,js`

This api has two two routes:
- api/calculate : This is post method. Height and restitution is passed as a raw json data. Use postman for accessing the api.
  - Dummy request data: {"height" : "5","restitution" : "0.4"}
- api/history : This is a get method. Previous history and calculations is stored in `data.json` file. Use this routes to access the history.

#### For LocalHost access:  
- `http://localhost:3000/api/calculate` : POST method
- `http://localhost:3000/api/history` : GET method
