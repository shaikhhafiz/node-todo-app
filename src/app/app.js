const express = require('express');
const app = express();
const { PORT } = require('./core/app.config');
const port = PORT || 3000;

require('../app/core/database.config');
const todoRouter = require('./modules/todo/TodoRouter');
const userRouter = require('./modules/user/UserRouter');

app.use(express.urlencoded());
app.use(express.json());

app.use('/todos', todoRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
