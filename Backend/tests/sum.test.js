// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Page, component and functional imports
import index from '../index';
import sum from './sum';

// Mongoose db imports
import express from 'express';
import mongoose from 'mongoose';

// Essential imports
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

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
