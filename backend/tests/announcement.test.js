// Cevrem.net Tests - announcement.test.js
// Duyuru işlemleri için birim testleri.

const request = require('supertest');
const app = require('../server'); // Express uygulamanızın girişi

describe('Announcement Routes', () => {
  let token;

  beforeAll(async () => {
    // Kullanıcı kaydı ve giriş işlemi
    const res = await request(app)
      .post('http://localhost:5001/api/users/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
      });
    token = res.body.token;
  });

  it('should create a new announcement', async () => {
    const res = await request(app)
      .post('/api/announcements')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Announcement',
        content: 'This is a test announcement',
        category: 'General',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Announcement');
  });

  it('should get all announcements', async () => {
    const res = await request(app).get('/api/announcements');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
