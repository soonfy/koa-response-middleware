const Koa = require('koa');
const handleResponse = require('../index');

const app = new Koa();

app.use(handleResponse({
  headers: {
    server: 'xxx.com',
  },
  successInfo: {
    version: '1.0.0',
  },
  errorMessage: 'please contact xxx<xxx@gmail.com>',
  isOptions: {
    isStatus: true,
    isStamp: true,
  },
}));

app.use((ctx) => {
  ctx.body = {
    name: 'handle response',
  };
});

app.listen(3000);
