import app from '../lib/app.js';
import supertest from 'supertest';
import client from '../lib/client.js';
import { execSync } from 'child_process';
import { describe, expect, it, beforeAll } from '@jest/globals';

const request = supertest(app);

describe('API Routes', () => {

  const expected = [
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0226001012', 
      'title':'Chaos of Disciplines', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51FYOr6-voL._SX323_BO1,204,203,200_.jpg', 
      'year':2001,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0822325932', 
      'title':'Reyita', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/512SNPDXMHL._SX320_BO1,204,203,200_.jpg', 
      'year':2000,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-1479886753', 
      'title':'Fearing the Black Body', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51kAu+goXLL._SX331_BO1,204,203,200_.jpg', 
      'year':2019,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0684838915', 
      'title':'The Trouble with Testosterone', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41tL2psyniL._SX325_BO1,204,203,200_.jpg', 
      'year':1998,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-1947534087', 
      'title':'Dark Emu', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/514mhdNEEEL._SX319_BO1,204,203,200_.jpg', 
      'year':2018,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-1612191294', 
      'title':'Debt', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41Hh11WkivL._SX331_BO1,204,203,200_.jpg', 
      'year':2011,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0691178325', 
      'title':'The Mushroom at the End of the World', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51H+mQBE3JL._SX329_BO1,204,203,200_.jpg', 
      'year':2017,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0465094271', 
      'title':'The Master Algorithm', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51hx36lKe6L._SX331_BO1,204,203,200_.jpg', 
      'year':2015,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0679776390', 
      'title':'The Spell of the Sensuous', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/511reY7gVKL._SX322_BO1,204,203,200_.jpg', 
      'year':1997,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-1771642484', 
      'title':'The Hidden Life of Trees', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41uEMy1V0JL._SX348_BO1,204,203,200_.jpg', 
      'year':2015,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0871568779', 
      'title':'The Unsettling of America', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51qxoAVZ1xL._SX321_BO1,204,203,200_.jpg', 
      'year':1977,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0963009609', 
      'title':'PiHKAL', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41LR44C2IjL._SX331_BO1,204,203,200_.jpg', 
      'year':1991,
      userId:expect.any(Number) 
    }, 
    { 
      'id':expect.any(Number), 
      'isbn13':'978-0963009692', 
      'title':'TiHKAL', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41HHS2jXbDL._SX331_BO1,204,203,200_.jpg', 
      'year':2002,
      userId:expect.any(Number) 
    }
  ];

  const newBook = {
    id: expect.any(Number),
    isbn13: '978-0745651903',
    title: 'The Tyranny of Science',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41hk8+-IhCL._SX317_BO1,204,203,200_.jpg',
    year: 2011,
    userId:expect.any(Number) 
  };

  const newBook2 = {
    id: expect.any(Number),
    isbn13: '978-1931498234',
    title: 'Wild Fermentation',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51BbudCTzCL._SX348_BO1,204,203,200_.jpg',
    year: 2003,
    userId:expect.any(Number) 
  };

  describe('/api/books', () => {

    let user;

    afterAll(async () => {
      return client.end();
    });

    beforeAll(async () => {
      execSync('npm run recreate-tables');
  
      const response = await request
        .post('/api/auth/signup')
        .send({
          name: 'Me the User',
          email: 'me@user.com',
          password: 'password'
        });
  
      expect(response.status).toBe(200); 

      user = response.body;
    });

    // get list of books
    it('GET /api/books', async () => {
      execSync('npm run setup-db');
      const response = await request.get('/api/books');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expected);

    });

    // get a specific book by id
    it('GET /api/books/:id', async () => {
      const response = await request.get('/api/books/2');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expected[1]);
    });

    // post a new book
    it('POST /api/books', async () => {
      newBook.userId = user.id;
      const response = await request.post('/api/books').send(newBook);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(newBook);
    });

    // update the new book
    it('PUT /api/books/:id', async () => {
      newBook2.userId = user.id;
      const book = (await request.post('/api/books').send(newBook2)).body;
      book.year = 9999;

      const response = await request.put(`/api/books/${book.id}`).send(book);

      expect(response.status).toBe(200);
      expect(response.body.year).toEqual(9999);
    });

    // 2 post requsts and get all
    it('GET /api/books and POST /api/books/:id', async () => {
      execSync('npm run setup-db');
      const book1 = (await request.post('/api/books').send(newBook)).body;
      const book2 = (await request.post('/api/books').send(newBook2)).body;

      const response = await request.get('/api/books');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([...expected, book1, book2]);
    });

    // delete a book
    it('DELETE /api/books/:id', async () => {
      execSync('npm run setup-db');
      await request.delete(`/api/books/${expected.length}`);

      const response = await request.get('/api/books');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.arrayContaining(expected.slice(0, -1)));
    });

    // get by name
    it('GET /api/books/name/:name', async () => {
      execSync('npm run setup-db');
      const response = await request.get('/api/books/name/Reyita');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expected[1]);
    });
  });
});