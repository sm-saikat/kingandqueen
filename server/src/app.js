const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors')
const routes = require('./routes');
const path = require('path');

const {CustomError} = require('./utils')
const passportConfg = require('./config/passportConfig')
const userControllers = require('./api/user/controllers')

app.set('trust proxy', 1);

// Midlewares
app.use(cors({
    origin: ['http://localhost:3001', 'https://lively-folder-413216.uc.r.appspot.com'],
    credentials: true
}));

// stripe webhook route
app.post('/stripe-webhook', express.raw({type: 'application/json'}), userControllers.stripeWebhook);

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(passportConfg.initialize());

// Static directory
app.use(express.static('src/public'))

// Routes
app.use(routes);

app.get('/health', (req, res)=>{
    res.status(200).json({
        health: 'ok'
    })
})

app.use(express.static(path.join(__dirname, '../../client/admin-panel/dist')));
// Admin panel route
app.get('/admin*', (req, res) => {
    res.sendFile(
        path.join(__dirname, "../../client/admin-panel/dist/index.html"),
        (err) => {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

// Global Error Handler
app.use((error, _req, res, _next)=>{
    console.log(error);

    if(!(error instanceof CustomError)){
        return res.status(500).json({
            message: 'Something went wrong.'
        });
    }
    
    let response = {
        message: error.message,
    };
    if(error.data) response.data = error.data;
    res.status(error.status).json(response);
})


module.exports = app;