// load modules
require('dotenv').config();

import express from 'express';

// load custom config and modules
import middlewares from './configs/middlewares';
import errorHandlingMiddleware from './configs/error-handling-middleware';

const app = express();

// set up middlewares 
middlewares(app);

// set up your routes here
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our Rest API'
    });
})

// set up error handling and 404 middleware 
errorHandlingMiddleware(app);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});