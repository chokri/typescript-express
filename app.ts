import express = require('express');
import { userInfo } from 'os';
import { IndexRouter } from './routes/index';

const app: express.Application = express();

app.use('/', IndexRouter);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});