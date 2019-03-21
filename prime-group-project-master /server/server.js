
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const landingRouter = require('./routes/landing.router');
const favoriteRouter = require('./routes/favorite.router');
const searchRouter = require('./routes/search.router');
const resultsRouter = require('./routes/results.router');
const viewCampsRouter = require('./routes/viewcamps.router');
const updateItineraryRouter = require('./routes/updateitinerary.router');
const itineraryRouter = require('./routes/itinerary.router');
const sharedAccessRouter = require('./routes/sharedaccess.router');
const userProfileInfoRouter = require('./routes/userprofileinfo.router');
const campRegistrationRouter = require('./routes/campregistration.router');
const sharedItineraryRouter = require('./routes/shareditinerary.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/landing', landingRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/search', searchRouter);
app.use('/api/results', resultsRouter);
app.use('/api/viewcamps', viewCampsRouter);
app.use('/api/updateitinerary', updateItineraryRouter);
app.use('/api/itinerary', itineraryRouter);
app.use('/api/sharedaccess', sharedAccessRouter);
app.use('/api/userprofileinfo', userProfileInfoRouter);
app.use('/api/campregistration', campRegistrationRouter);
app.use('/api/sharedItinerary', sharedItineraryRouter);




// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
