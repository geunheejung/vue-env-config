// app.js (shared between server and client)
import { createSSRApp } from "vue";

export function createApp() {
  const vm = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="increment">{{ count }}</button>`,
    methods: {
      increment() {
        this.count += 1;
        console.log(this.$el.textContent);
        this.$nextTick(() => {
          console.log(this.$el.textContent);
        });
      },
    },
  });

  return vm;
}
