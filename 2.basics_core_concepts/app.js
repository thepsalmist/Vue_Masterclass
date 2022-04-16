// create vue app
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course",
      courseGoalB: "Master the course",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

//connection with HTML
app.mount("#user-goal");
