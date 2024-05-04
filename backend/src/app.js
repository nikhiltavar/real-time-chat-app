const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const { Kafka } = require('kafkajs');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Configure Redis session store
const redisClient = redis.createClient(config.redis);
const sessionStore = new RedisStore({ client: redisClient });

app.use(
  session({
    secret: 'secret_key',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);

// Routes
app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);

module.exports = app;
