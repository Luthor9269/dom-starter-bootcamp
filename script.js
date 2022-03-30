////// still cant remove the elements that i want to remove or want to empty

// creating an emoji array
const emojiArray = ["✌","😂","😝","😁","😈","🦊"];
let currentEmoji = "";
//get random number 
let randomNumber = () => {
  let randomNumber = Math.floor(Math.random()*emojiArray.length);
  return randomNumber;
}
// create button using the array
for(let i = 0; i<emojiArray.length;i+=1){
  const button = document.createElement('button')
  button.innerText = `${emojiArray[i]}`;
  document.body.appendChild(button)
  // // need to define it as an anonymous function because if we dont do that the function will be executed when the js file runs 
  // button.addEventListener("click", () => emojiSquare(button.innerText))
  // setting emoji type without displaying it first
    let randomLength = 1;
    button.addEventListener("keydown", (event)=>{
    if(event.key === "ArrowUp") randomLength +=1
    if(event.key === "ArrowDown") randomLength -=1
    console.log(event.key) 
    console.log(randomLength)
    let currentEmoji = button.innerText
    emojiSquare(currentEmoji, randomLength)
    })
}

// creating emoji squares using loops
//takes in the button.innerText emoji at that point 
// uses the random length provided by the key that is keyed in 
function emojiSquare(emoji,randomLength) {
  const p = document.createElement('p');
  p.setAttribute(`id`, 'para');
  for(let i=0; i<randomLength;i+=1){
    const br = document.createElement('word');
    br.innerText = `${emoji}\n` ;
    for(let h=0; h<randomLength; h+=1){
      const br2 = document.createElement('word')
      br2.innerText = `${emoji}` ;
      p.appendChild(br2)
    }
    p.appendChild(br);
  }
  document.body.append(p);
}

// function randomise(){
// let randomEmoji = emojiArray[randomNumber()];
// let randomNumb = Math.floor(Math.random()*50+1);
// emojiSquare(randomEmoji, randomNumb)
// }
// // create new function that gets random emoji and random number of square length
// const newDiv = document.createElement(`div`)
// const randomButton = document.createElement('button');
// randomButton.innerText = `Randomise the emoji and number of square`;
// newDiv.appendChild(randomButton)
// document.body.appendChild(newDiv);
// randomButton.addEventListener(`click`, () => randomise())








// // call function
// const display = document.createElement(‘div’);
// document.body.appendChild(display);
// document.addEventListener(‘keydown’, (event) => {
//   // console.log(event);
//   console.log(event.key);
//   let numberOfEmoji = 0;
//   if(event.key === 'ArrowUp') numberOfEmoji = 12;
//   if(event.key === ‘ArrowDown’) numberOfEmoji = 16;
//   if(event.key === ‘c’) numberOfEmoji = 20;
//   if(event.key === ‘d’) numberOfEmoji = 5;
//   if(event.key === ‘e’) numberOfEmoji = 30;
//   const p = document.createElement(‘p’);
//   for(let i = 0; i < numberOfEmoji; i += 1) {
//     p.innerText += emojiType;
//   }
//   display.appendChild(p);
// });

// //// 1. Base Emoji button displaying 
// //create root
// const div = document.createElement("div");
// //create buttons
// const smileyButton = document.createElement("button");
// smileyButton.innerText = "😄";
// div.appendChild(smileyButton);
// const shadeButton = document.createElement("button");
// shadeButton.innerText = "😎";
// div.appendChild(shadeButton);
// const ohNoButton = document.createElement("button");
// ohNoButton.innerText = "😦";
// div.appendChild(ohNoButton);
// document.body.appendChild(div)
// smileyButton.addEventListener("click", () => emojiSquare(smileyButton.innerText));
// shadeButton.addEventListener("click", () => emojiSquare(shadeButton.innerText));
// ohNoButton.addEventListener("click", () => emojiSquare(ohNoButton.innerText));

