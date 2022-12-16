const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World!",
      image: "https://picsum.photos/300/300"
    }
  },
}).mount('#app')