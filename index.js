/**
 * koa response middleware for Koa@2.x
 * including http response headers, response body, error handler
 *
 * @param {Object} [options]
 * @return {Function} koa response middleware
 * @api public
 */
module.exports = (options = {}) => async (ctx, next) => {
  const { headers } = options;
  ctx.response.set(headers);
  try {
    await next();
    if (ctx.method.toLowerCase !== 'option') {
      if (typeof ctx.body === 'undefined') {
        // 404
        ctx.throw(404);
      }
      try {
        // ajax
        let body;
        if (typeof ctx.body === 'object') {
          body = ctx.body;
        } else if (typeof ctx.body === 'string') {
          body = JSON.parse(ctx.body);
        }
        const { status: statusCode } = ctx;
        const { successInfo, isOptions } = options;
        const isObject = {};
        if (isOptions) {
          const { isStatus, isStamp } = isOptions;
          if (isStatus) {
            isObject.statusCode = statusCode;
          }
          if (isStamp) {
            isObject.stamp = Math.floor(Date.now() / 1000);
          }
        }
        ctx.body = { ...isObject, ...successInfo, ...body };
      } catch (error) {
        // html, image...
      }
    }
  } catch (error) {
    // 4xx
    // 5xx
    const { errorMessage } = options;
    ctx.throw(error.status, errorMessage || error.message);
  }
};
