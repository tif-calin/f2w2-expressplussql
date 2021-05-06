import app from '../lib/app.js';
import supertest from 'supertest';
import client from '../lib/client.js';
import { execSync } from 'child_process';

const request = supertest(app);

describe.skip('API Routes', () => {

  /*beforeAll(() => {
    execSync('npm run setup-db');
  });*/
  beforeAll(() => {
    execSync('npm run recreate-tables');
  });

  afterAll(async () => {
    return client.end();
  });

  const expected = [
    { 'id':expect.any(Number), 'isbn13':'978-0226001012', 'title':'Chaos of Disciplines', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51FYOr6-voL._SX323_BO1,204,203,200_.jpg', 'year':2001 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-0822325932', 'title':'Reyita', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/512SNPDXMHL._SX320_BO1,204,203,200_.jpg', 'year':2000 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-1479886753', 'title':'Fearing the Black Body', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51kAu+goXLL._SX331_BO1,204,203,200_.jpg', 'year':2019 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-0684838915', 'title':'The Trouble with Testosterone', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41tL2psyniL._SX325_BO1,204,203,200_.jpg', 'year':1998 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-1947534087', 'title':'Dark Emu', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/514mhdNEEEL._SX319_BO1,204,203,200_.jpg', 'year':2018 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-1612191294', 'title':'Debt', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41Hh11WkivL._SX331_BO1,204,203,200_.jpg', 'year':2011 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-0691178325', 'title':'The Mushroom at the End of the World', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51H+mQBE3JL._SX329_BO1,204,203,200_.jpg', 'year':2017 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-0465094271', 'title':'The Master Algorithm', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51hx36lKe6L._SX331_BO1,204,203,200_.jpg', 'year':2015 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-0679776390', 'title':'The Spell of the Sensuous', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/511reY7gVKL._SX322_BO1,204,203,200_.jpg', 'year':1997 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-1771642484', 'title':'The Hidden Life of Trees', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41uEMy1V0JL._SX348_BO1,204,203,200_.jpg', 'year':2015 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-0871568779', 'title':'The Unsettling of America', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/51qxoAVZ1xL._SX321_BO1,204,203,200_.jpg', 'year':1977 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-0963009609', 'title':'PiHKAL', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41LR44C2IjL._SX331_BO1,204,203,200_.jpg', 'year':1991 
    }, 
    { 'id':expect.any(Number), 'isbn13':'978-0963009692', 'title':'TiHKAL', 
      'image':'https://images-na.ssl-images-amazon.com/images/I/41HHS2jXbDL._SX331_BO1,204,203,200_.jpg', 'year':2002 
    }
  ];

  // If a GET request is made to /api/books, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data?
  it('GET /api/books', async () => {
    // act - make the request
    const response = await request.get('/api/books');

    // was response OK (200)?
    expect(response.status).toBe(200);

    // did it return the data we expected?
    expect(response.body).toEqual(expected);

  });

  // If a GET request is made to /api/books/:id, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data for the cat with that id?
  test('GET /api/books/:id', async () => {
    const response = await request.get('/api/books/2');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expected[1]);
  });
});