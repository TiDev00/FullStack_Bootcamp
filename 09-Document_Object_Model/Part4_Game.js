// Restart Game Button
var restart = document.querySelector("button")

// Grab all the squares
var squares = document.querySelectorAll("td")

// Clear Squares Function
function clear(){
  for (i = 0; i < squares.length; i++){
    squares[i].textContent = ''
  }
}

restart.addEventListener('click',clear)

// Create a function that will check the square marker
function mark(){
  if (this.textContent === ''){
    this.textContent = 'X'
  }
  else if (this.textContent === 'X') {
    this.textContent = 'O'
  } else if (this.textContent === 'O'){
    this.textContent = ''
  }
}

// Use a for loop to add Event listeners to all the squares
for (i=0; i < squares.length; i++){
  squares[i].addEventListener('click',mark)
}
