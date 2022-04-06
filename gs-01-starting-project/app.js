
//Vanilla JS

// // grab the button input element and list element to append the added goal
// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl  = document.querySelector("ul");

// function addGoal(){
//     //grab the value from the input element
//     const enteredValue = inputEl.value;
//     //use document.createElement to create a list and set its content to the
//     //value of the input element
//     const listItemEl = document.createElement("li");
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl)
//     //reset the value of input element
//     inputEl.value = ""

// }

// //list to click event on the button element
// buttonEl.addEventListener("click", addGoal)

// Using Vue

Vue.createApp({
    data(){
        return {
            goals: [],
            enteredValue: "",
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
        }
    }
}).mount("#app");