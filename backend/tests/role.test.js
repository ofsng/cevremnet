// Çevrem.net Tests - role.test.js
// Rol işlemleri için birim testleri.

const request = require('supertest');
const app = require('../server'); // Express uygulamanızın girişi

describe('Role Routes', () => {
  it('should create a new role', async () => {
    const res = await request(app)
      .post('/api/roles')
      .send({
        name: 'Admin',
        permissions: ['create', 'update', 'delete'],
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Admin');
  });

  it('should get all roles', async () => {
    const res = await request(app).get('/api/roles');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
