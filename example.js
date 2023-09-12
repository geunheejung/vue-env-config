import { createSSRApp } from "vue";

// Vue's server-rendering API is exposed under `vue/server-renderer`
import { renderToString } from "vue/server-renderer";

const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{ count }}</button>`,
});

// Vue 앱 인스턴스를 가져와 앱의 렌더링된 HTML로 확인되는 Promise를 반환한다.
renderToString(app).then((html) => {
  console.log(html);
});
