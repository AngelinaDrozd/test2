const axios = require('axios');

describe('Currency API', () => {
  test('should return list of available currencies', async () => {
    const response = await axios.get('https://currencyapi.net/api/v1/currencies');
    expect(response.status).toEqual(200);
    expect(response.data).toBeDefined();
    expect(Array.isArray(response.data)).toBe(true);
  });
});
 