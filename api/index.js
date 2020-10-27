import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import path from 'path';
import config from 'dotenv';
import morgan from 'morgan';

import todoRoutes from './routes/TodoRoutes.js';
import authRoutes from './routes/AuthRoutes.js';

import checkForSessionCookie from './middleware/confirmLoggedIn.js';
import authAndAttachUserMiddleware from './middleware/authorizeAndAttachUser.js';

import database from './db/models';

config.config();

var port = process.env.PORT || 8000;
var app = express();

if (process.env.NODE_ENV == 'production') {
  app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
} else {
  app.use(morgan('dev'));
}

app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:5500' //change back to 5500 later?
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/api/todos', checkForSessionCookie, authAndAttachUserMiddleware, todoRoutes);
app.use('/auth', checkForSessionCookie, authRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'This is the todolist API, but this was not a valid route.',
}));

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

/* database.sequelize.sync({ force: true }).then(() =>
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  }),
); */