const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello, GitHub Actions!'));

test('GET /', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello, GitHub Actions!');
});

