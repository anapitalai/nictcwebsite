const users = require('./users/users.service.js');
const uploads = require('./uploads/uploads.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(uploads);
  app.configure(messages);
};
