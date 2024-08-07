# Projects related to DOM

# Project 1

```JavaScript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function(button) {
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```


## Project 2 Solution

```JavaScript

const form = document.querySelector('form');
// this usecase will give you empty
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //  show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML = `<span>Under weigth :${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.textContent = `Normal Weight: ${bmi}`;
    } else {
      results.textContent = `Over Weight : ${bmi}`;
    }
  }
});


```


## Project 3 Solution

``` JavaScript 

const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```


## Project 4 Solution

``` JavaScript 

// generate a random color
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

let intervalId;

const startChangingColor = function(){

  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
  }
  
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }
  
}
const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null
}


document.querySelector('#start').addEventListener
('click', startChangingColor)

document.querySelector('#stop').addEventListener
('click', stopChangingColor)


```


## Project 4 Solution

``` JavaScript 

const insert = document.getElementById('insert')


window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class ="color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === "" ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
  </div>
  `
})



```