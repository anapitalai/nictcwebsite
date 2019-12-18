const assert = require('assert');
const app = require('../../src/app');

describe('\'messsage\' service', () => {
  it('registered the service', () => {
    const service = app.service('messsage');

    assert.ok(service, 'Registered the service');
  });
});
