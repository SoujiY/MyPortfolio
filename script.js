//let try to wrap this in the function
//define array of text we want it to appear
const texts = ['a Junior Web Developer', 'a Persistent Learner'];
//this count will go to each word one by one
let count = 0;
//this to check which index of word we are using
let index = 0;
//this will be the current selected text at that time
let currentText = '';
// this will specify the individual letter that will be increment by1
let letter = '';

//function for typing affect
// we wan't to call this directly, self invoke function. so we wrap this in the parenthesist straigh the way, not calling the function separately
(function type(){
//compare the count with the length of the text
//when it counted through the length of the text, reset the count back to 0(loop over)
    if(count === texts.length ){
        count = 0;
    }
//increment each letter from 0
//The .slice(index) returns a new array that contains the elements of the original array    
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

//access HTML DOM to append the texts content in class"typing" to what willbe appearing in "letter"
    document.querySelector('.typing').textContent = letter;
//when went through the whole currentText, increment the count by 1(move to next text).
//and reset the index back to 0
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
// setTime out to invoke the "type" function every 150 milli second
    setTimeout(type, 150)     
}());

//function for Nav Bar
const toggleButton =  document.getElementsByClassName('toggleButton')[0];
const navbarLinks = document.getElementsByClassName('navLink')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
//