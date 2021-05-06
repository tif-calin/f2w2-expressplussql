/* eslint-disable no-console */
import client from '../lib/client.js';
// import our seed data:
import books from './books.js';

run();

async function run() {

  try {

    await Promise.all(
      books.map(book => {
        return client.query(`
          INSERT INTO books (isbn13, title, image, year)
          VALUES ($1, $2, $3, $4, $5, $6);
        `,
        [book.isbn13, book.title, book.image, book.year]);
      })
    );
    

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}