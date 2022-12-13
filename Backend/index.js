// Imports
import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/fitoneRoutes';

// Connect with express on port {4000}
const app = express();
const PORT = 4000; // Frontend runs on Port 3000

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fitoneDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

// Routes
routes(app);

// Request and Respond GET to see if Port is running 
app.get('/', (req, res) => 
    res.send(`Application running on PORT: ${PORT}`)
);
// Give message if Port is valid
app.listen(PORT, () => 
    console.log(`Application running on PORT: ${PORT}`)
);

