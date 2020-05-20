// Type definitions for koa-response-middleware 2.x
// Project: https://github.com/soonfy/koa-response-middleware
// Definitions by: soonfy <https://github.com/soonfy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

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

 =============================================== */

import * as Koa from 'koa';

declare function handleResponse(options?: {

  /**
   * reset request headers
  */
 headers?: object,

 /**
  * response info when response success
  */
 successInfo?: object,

  /**
   * error message when occur error
   */
  errorMessage?: string,

  /**
   * isStatusCode: response body 是否包含 status code
   * isStamp: response body 是否包含 stamp
   */
  isOptions?: {
    isStatusCode?: boolean,
    isStamp?: boolean,
  }
}): Koa.Middleware;

declare namespace handleResponse { }

export = handleResponse;
