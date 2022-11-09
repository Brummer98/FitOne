// Imports
import express from 'express';

// Connect with express on port {3000}
const app = express();
const PORT = 3000;

// Request and Respond GET to see if Port is running 
app.get('/', (req, res) => 
    res.send(`Application running on PORT: ${PORT}`)
);
// Give message if Port is valid
app.listen(PORT, () => 
    console.log(`Application running on PORT: ${PORT}`)
);

