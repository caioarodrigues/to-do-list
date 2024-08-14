import request from 'supertest';
import app from '../../app';

describe('GET /task/list-all', () => {
  it('should return a list of tasks', async () => {
    const response = await request(app).get('/task/list-all')

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    // Outros assertions que você quiser fazer com o body da resposta
  });
});
