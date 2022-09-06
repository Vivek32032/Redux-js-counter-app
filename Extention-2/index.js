let store = Redux.createStore(reducer);

let counter = store.getState();

let h2 = document.querySelector('.counter-value');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');

let step5 = document.querySelector('.step-5');
let step10 = document.querySelector('.step-10');
let step15 = document.querySelector('.step-15');

let max15 = document.querySelector(".max-15");
let max100 = document.querySelector(".max-100");
let max200 = document.querySelector(".max-200");

let steps = [step5, step10, step15];
let maxValues = [max15, max100, max200];

let stepSelected = 1;
let maxValue = Infinity;

step5.addEventListener('click', () => {
  stepSelected = 5;
  addActiveClass(step5,steps)
});
step10.addEventListener('click', () => {
  stepSelected = 10;
 addActiveClass(step10,steps)
});
step15.addEventListener('click', () => {
  stepSelected = 15;
 addActiveClass(step15, steps)
});

max15.addEventListener("click", () => {
  maxValue = 15;
  addActiveClass(max15, maxValues)
});
max100.addEventListener("click", () => {
  maxValue = 100;
  addActiveClass(max100, maxValues)
});
max200.addEventListener("click", () => {
  maxValue = 200;
 addActiveClass(max200, maxValues)
});

function addActiveClass(value="",arr=[]){
    arr.forEach((ele) =>{
      console.log(ele)
        if(ele ==="" ){
            ele.classList.remove('active')
        }
        else if(ele === value){
            ele.classList.add("active");
        }else{
            ele.classList.remove('active')
        }
    })
}

increment.addEventListener('click', () => {
  counter = store.getState();
  if(counter + stepSelected <= maxValue) {
    store.dispatch({ type: 'increment', step: stepSelected });
  }
});
decrement.addEventListener('click', () => {
  store.dispatch({ type: 'decrement', step: stepSelected });
});
reset.addEventListener('click', () => {
  store.dispatch({ type: 'reset' });
  stepSelected = 1;
  maxValue = Infinity;
  addActiveClass()
});

store.subscribe(() => {
  counter = store.getState();
  h2.innerText = counter;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + (action.step || 1);
      break;
    case 'decrement':
      if (state > 0) {
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