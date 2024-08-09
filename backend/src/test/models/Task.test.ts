import {
  describe, expect, it, jest,
} from '@jest/globals';
import Task from '../../models/Task.model';

describe('Testing Task object', () => {
  const taskObject = {
    id: 1,
    title: 'Test title',
    description: 'Test description',
    completed: false,
    createdAt: new Date(),
    dueDate: new Date(),
  };

  it('should create a new Task object', () => {
    const { id, title, description, completed, createdAt, dueDate } = taskObject;
    const task = new Task(1, 'Test title', 'Test description', new Date(), new Date());

    expect(task).toBeInstanceOf(Task);
  });
});