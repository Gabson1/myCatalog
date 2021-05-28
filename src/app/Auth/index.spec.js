import { AuthClient } from './index';
// import * as configProvider from '../configProvider';

// const mock = jest.fn(() => ({
//   auth: {
//     domain: 'test',
//     clientId: 'test',
//     callbackUrl: 'http://env-integration.brickbuy.com/callback',
//   },
// }));

// configProvider.getConfig = mock;

const mockConfig = {
  domain: 'test',
  clientId: 'test',
  callbackUrl: 'http://env-integration.brickbuy.com/callback',
};

describe('Authentication', () => {
  let authClient = null;

  beforeAll(() => {
    authClient = new AuthClient(jest.fn(), mockConfig);
  });

  describe('When calls signup method', () => {
    it('should return result as expected', async () => {
      const mockJsonPromise = Promise.resolve({ result: 'signup result' });

      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
        ok: true,
      });

      global.fetch = jest.fn(() => mockFetchPromise);

      const result = await authClient.signup(
        'test@gg.com',
        'paasword123',
      );

      expect(global.fetch).toHaveBeenCalledWith(
        'https://test/dbconnections/signup',
        {
          body: JSON.stringify({
            connection: 'Username-Password-Authentication',
            email: 'test@gg.com',
            password: 'paasword123',
            client_id: 'test',
            user_metadata: {
              locale: 'en-US',
            },
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          mode: 'cors',
        },
      );
      expect(result).toEqual({ result: 'signup result' });
    });
  });
});
