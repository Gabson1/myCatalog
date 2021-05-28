jest.dontMock('./index');
const { loadConfig } = require('./index');

describe('When trying to get the configuration', () => {
  it('should return the configuration', async () => {
    const successfulFetch = jest.fn(() => Promise.resolve({
      json: jest.fn(() => Promise.resolve({ test: 'data' })),
      statusCode: 200,
      ok: true,
    }));

    window.fetch = successfulFetch;

    const config = await loadConfig();
    expect(config).toEqual({ test: 'data' });
  });
});
