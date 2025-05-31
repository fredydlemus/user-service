const request = require('supertest');
const app = require('../app');
const { __mockPrisma } = require('../../__mocks__/prismaClient');

jest.mock('@prisma/client', () => require('../../__mocks__/prismaClient'));

describe('User Controller', () =>{
    beforeEach(() =>{
        jest.clearAllMocks();
    });

    test('should return a list of users', async () => {
        __mockPrisma.user.findMany.mockResolvedValue([
            { id: 1, name: 'John Doe', email: 'jonh@email.com' },
        ]);

        const res = await request(app).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(__mockPrisma.user.findMany).toHaveBeenCalled();
    });

    test('should create a new user', async () =>{
        const newUser = { id: 2, name: 'Bob', email: 'bob@example.com' };
        __mockPrisma.user.create.mockResolvedValue(newUser);

    const res = await request(app).post('/api/users').send({
      name: 'Bob',
      email: 'bob@example.com',
    });

     expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(newUser);
    expect(__mockPrisma.user.create).toHaveBeenCalledWith({
      data: {
        name: 'Bob',
        email: 'bob@example.com',
      },
    });
    })
})