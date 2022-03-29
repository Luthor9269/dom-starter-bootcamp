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
  button.addEventListener("keydown", e =>{
    console.log(e);
    let randomLength = Number(e.keyCode);
    console.log(randomLength)
    emojiSquare(button.innerText, randomLength)
  })
}

// creating emoji squares using loops
//takes in the button.innerText emoji at that point 
// uses the random length provided by the key that is keyd in 
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

