const Koa = require('koa')

const app = new Koa()

// x-response time & logger
app.use ( async( ctx, next ) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`)
    console.log(`${ctx.method} ${ctx.url} - ${ms}`)
});

app.use ( async (ctx) => {
    ctx.body = "Hello World"
});

app.listen(3000, () => {
    console.log('Koa app started on port 3000!')
});

