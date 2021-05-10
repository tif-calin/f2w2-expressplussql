/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import client from './client.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

// heartbeat route
app.get('/', (req, res) => {
  res.send('culi\'s reading list API');
});

// API routes for /api/auth
app.post('/api/auth/signup', async (req, res) => {
  try {
    const user = req.body;
    const data = await client.query(`
      INSERT INTO users (name, email, password)
      VALUES ( $1, $2, $3)
      RETURNING id, name, email;
    `, [user.name, user.email, user.password]);

    res.json(data.rows[0]);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// API routes for /api/books
app.get('/api/books', async (req, res) => {
  // use SQL query to get data...
  try {
    const data = await client.query(`
      SELECT  id,
              isbn13,
              title,
              image,
              year
      FROM    books;
    `);

    // send back the data
    res.json(data.rows); 
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

app.post('/api/books', async (req, res) => {
  try {
    const book = req.body;

    const data = await client.query(`
      INSERT into books (isbn13, title, image, year)
      VALUES ($1, $2, $3, $4)
      RETURNING id, isbn13, title, image, year;
    `, [book.isbn13, book.title, book.image, book.year]
    );

    res.json(data.rows[0]);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/books/:id', async (req, res) => {
  try {
    const book = req.body;

    const data = await client.query(`
    UPDATE books
    SET isbn13 = $1,
        title = $2,
        image = $3,
        year = $4
    WHERE id = $5
    RETURNING id, isbn13, title, image, year;
    `, [book.isbn13, book.title, book.image, book.year, req.params.id]);

    res.json(data.rows[0]);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/books/:id', async (req, res) => {
  try {
    const data = await client.query(`
      DELETE FROM books
      WHERE id = $1
      RETURNING id, isbn13, title, image, year;
    `, [req.params.id]);

    res.json(data.rows[0] || null);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/books/:id', async (req, res) => {
  // use SQL query to get data...
  try {
    const data = await client.query(`
      SELECT  id,
              isbn13,
              title,
              image,
              year
      FROM    books
      WHERE   id = $1;
    `, [req.params.id]);

    // send back the data
    res.json(data.rows[0] || null); 
  }
  catch(err) {
    console.log(err);
    res.status(500).json({ error: err.message });  
  }
});

export default app;