const express = require('express');
const usersRouter = require('./src/users');
const config = require('./config');

const app = express();
const port = config.servers.api.port || process.env.PORT || '3000';

app.use('/', express.static(__dirname + '/dist'));

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});