require('dotenv').config();
// APP IDEA
//
// League of Legends Drafts
// - vote which draft wins
//
//
// Future add ons
// - display which rank voted for which side
// - make your own drafts

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');
const handler = require('./handlers');
const routes = require('./routes');

const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({hello: 'world'})
});
app.use('/api/auth', routes.auth);
app.use('/api/polls', routes.poll);

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.use(handler.notFound);
app.use(handler.errors);

app.listen(port);