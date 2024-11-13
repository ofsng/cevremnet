// Çevrem.net Tests - user.test.js
// Kullanıcı işlemleri için birim testleri.

const request = require('supertest');
const app = require('../server'); // Express uygulamanızın girişi

describe('User Routes', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email', 'testuser@example.com');
  });

  it('should not register a user with existing email', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toEqual(400);
  });
});
