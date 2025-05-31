const mockPrisma = {
  user: {
    create: jest.fn(),
    findMany: jest.fn(),
  },
};

module.exports = {
  PrismaClient: jest.fn(() => mockPrisma),
  __mockPrisma: mockPrisma,
};
