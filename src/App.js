const Vue = require('vue');
const app = new Vue({
  template: `<div>Hello Vue SSR</div>`
})

const renderer = require('vue-server-renderer').createRenderer();

renderer