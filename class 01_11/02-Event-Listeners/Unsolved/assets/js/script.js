var count = 0;

// TODO: Add a comment describing the functionality of the following document.querySelector() methods:
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');
//Two buttons one to increase by 1 and to decrease by 1
//#count produce the current counter

// TODO: Add a comment describing the functionality of the following code:
function setCounterText() {
  countEl.textContent = count;
  //setup a counter to increase or decrease
}
// TODO: Add a comment describing the functionality of the following event listener:
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
  //when click incrase counter by one
});

// TODO: Add a comment describing the functionality of the following event listener:
decrementEl.addEventListener('click', function() 
//decrease counter by 1
{
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
