//create a Vue App

const app = Vue.createApp({
  data() {
    return {
      name: "John Doe",
      age: 25,
      imageLink:
        "https://images.pexels.com/photos/5036212/pexels-photo-5036212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
  methods: {
    ageIn5years() {
      return this.age + 5;
    },
    favNumber() {
      return Math.random(0, 1);
    },
  },
});

app.mount("#assignment");
