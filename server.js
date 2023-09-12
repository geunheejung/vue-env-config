import express from "express";

import { createSSRApp } from "vue";

// Vue's server-rendering API is exposed under `vue/server-renderer`
import { renderToString } from "vue/server-renderer";

const server = express();

server.get("/", (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`,
  });

  // Vue 앱 인스턴스를 가져와 앱의 렌더링된 HTML로 확인되는 Promise를 반환한다.
  renderToString(app).then((html) => {
    // html은 Vue 인스턴스가 렌더링된 이후 HTML로 반환된 결과
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  });
});

server.listen(3000, () => {
  console.log("ready");
});
