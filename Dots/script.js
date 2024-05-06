const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;


next.addEventListener('click', () => {
    currentActive++;                        //incrementing the currentActive by one while pressing next btn
    if (currentActive > circles.length) {   //if a counter > circles length(CL)
        currentActive = circles.length;     //assigning CL to the counter
    }
    update();
});

prev.addEventListener('click', () => {       
    currentActive--;                        //decrementing the currentActive by one while pressing prev btn
    if (currentActive < 1) {                //if a counter < 1
        currentActive = 1;                  //assign value 1 to the counter
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {          //adding and removing class 'active' after iterating through each circle
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    
    const activeCircles = document.querySelectorAll('.circle.active'); //circles that have 'active' class
    progress.style.width = ((activeCircles.length-1) / (circles.length-1)) * 100 + '%'; //updating CSS 
    //dividing the number of completed steps with the number of total steps 
    
    
    if (currentActive === 1) {                      //because 1 is an initial value
        prev.setAttribute('disabled', 'disabled');  //the prev button is 'disabled'
    } else {
        prev.removeAttribute('disabled');          //removing 'disabled' attribute
    }
}
