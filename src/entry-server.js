const Vue = require('vue');
const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  const app = new Vue({
    template: `<div>Hello Vue SSR</div>`
  })

  const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(__dirname + '/template/index.template.html', 'utf-8')
  });

  const htmlContext = {
    title: 'Eric Blog',
    meta: `
      <meta type="keywords">
      <meta type="discribution">
    `
  }
  renderer.renderToString(app, htmlContext, (err, html) => {
    if (err) {
      throw err
    }
    // console.log(html)
    ctx.body = html
  })
})

app.listen(8888)

