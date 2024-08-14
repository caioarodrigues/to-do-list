import request from 'supertest';
import app from '../../app';

describe('GET /task/list-all', () => {
  it('should return a list of tasks', async () => {
    const response = await request(app).get('/task/list-all')

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /task/:id', () => {
  it('should return a task by id', async () => {
    const response = await request(app).get('/task/30ba')

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should not return a task by id (not existing)', async () => {
    const response = await request(app).get('/task/sss')

    expect(response.status).toBe(404);
    expect(response.body).toBeInstanceOf(Object);
  });

});

describe('POST /task', () => {
  it('should create a new task', async () => {
    const response = await request(app)
      .post('/task')
      .send({
        title: 'Task 1',
        description: 'Description of task 1',
        completed: false,
        dueDate: '2024-09-30',
        createdAt: '2024-09-20',
      });

    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should not create a new task (missing due date field)', async () => {
    const response = await request(app)
      .post('/task')
      .send({
        title: 'Task 1',
        description: 'Description of task 1',
        completed: false,
      });

    expect(response.status).toBe(500);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should not create a new task (missing all fields)', async () => {
    const response = await request(app).post('/task');

    expect(response.status).toBe(500);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should not create a new task (missing title field)', async () => {
    const response = await request(app)
      .post('/task')
      .send({
        description: 'Description of task 1',
        completed: false,
        dueDate: '2024-09-30',
        createdAt: '2024-09-20',
      });

    expect(response.status).toBe(500);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe('PUT /task/:id', () => {
  it("should update a task", async () => {
    const response = await request(app)
      .put("/task/30ba")
      .send({
        title: "Task 1",
        description: "NEW Description of task 1",
        completed: true,
        dueDate: "2024-09-30",
        createdAt: "2024-09-20",
      });

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  it("should not update a task (missing due date field)", async () => {
    const response = await request(app)
      .put("/task/30ba")
      .send({
        title: "Task 1",
        description: "NEW Description of task 1",
        completed: true,
        createdAt: "2024-09-20",
      });

    expect(response.status).toBe(500);
    expect(response.body).toBeInstanceOf(Object);
  });

  it("should not update a task (missing all fields)", async () => {
    const response = await request(app).put("/task/30ba");

    expect(response.status).toBe(500);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe('DELETE /task/:id', () => {
  it('should not delete a task (not existing)', async () => {
    const response = await request(app).delete('/task/sss');

    expect(response.status).toBe(500);
    expect(response.body).toBeInstanceOf(Object);
  });
});