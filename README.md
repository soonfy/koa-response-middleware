# koa-response-middleware

koa response middleware for [Koa@2.x], including http status, response header, response body, error handler.

## Installation

```bash
npm install koa-response-middleware -S
```

## Usage

```js
import * as Koa from 'koa';
import * as handleResponse from 'koa-response-middleware';

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
```

## API

* `headers` **{Object}** set http response headers.
* `successInfo` **{Object}** wrap http response success body
* `errorMessage` **{String}** http response error message
* `isOptions` **{Object}** wrap http response status code and stamp into response body
* `isOptions.isStatusCode` **{Boolean}** wrap http response status code into response body
* `isOptions.isStamp` **{Boolean}** wrap http response stamp into response body

## License

[MIT]

[Koa@2.x]: https://github.com/koajs/koa
[MIT]: LICENSE
