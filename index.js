let store = Redux.createStore(reducer);

let counter = store.getState();

let h2 = document.querySelector('.counter-value');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');

increment.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
})
decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" })
})
reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" })
})

store.subscribe( () => {
  counter = store.getState();
  h2.innerText = counter;
})


function reducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + (action.step || 1);
      break;
    case 'decrement':
      if(state > 0 ) {
        return state - (action.step || 1);
      } else {
        return 0;
      }
      break;
    case 'reset':
      return 0;
      break;
    default:
      return state;
      break;
  }
}