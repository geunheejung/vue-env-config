import express from "express";
import { renderToString } from "vue/server-renderer";
import { createApp } from "./app.js";

const server = express();

server.get("/", (req, res) => {
  const app = createApp();

  // 2. <script type="module" src="/client.js"></script> 추가하여 클라이언트 항목을 로드한다.
  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  });
});

// 1. 클라이언트 파일을 제공한다.
server.use(express.static("."));

server.listen(3000, () => {
  console.log("ready");
});
