// create button through DOM
const button = document.createElement("button");
//Text for box
button.innerText = "Create Boxes";
//Append button into html
document.body.appendChild(button);
//add eventlistener when button is clicked, run the function
button.addEventListener("click", createBoxes);

function createBoxes() {
  // first root container
  const element = document.createElement("div");
  element.classList.add("container");
  //second root row
  const innerElement = document.createElement("div");
  innerElement.classList.add("row");
  //third root word
  const firstSpan = document.createElement("span");
  firstSpan.classList.add("word");
  firstSpan.innerText = "Hello";
  //append word into row
  innerElement.appendChild(firstSpan);
  //create element
  const secondSpan = document.createElement("span");
  //giving class to the element
  secondSpan.classList.add("word");
  //adding text
  secondSpan.innerText = "papaya";
  //append word into row
  innerElement.appendChild(secondSpan);
  element.appendChild(innerElement);

  const secondInnerElement = document.createElement("div");
  secondInnerElement.classList.add("row");
  //third root word
  const thirdSpan = document.createElement("span");
  thirdSpan.classList.add("word");
  thirdSpan.innerText = "banana";
  //append word into row
  secondInnerElement.appendChild(thirdSpan);
  const fourthSpan = document.createElement("span");
  fourthSpan.classList.add("word");
  fourthSpan.innerText = "world";
  //append word into row
  secondInnerElement.appendChild(fourthSpan);
  element.appendChild(secondInnerElement);
  console.log(element);

  //push all this into the html file
  document.body.appendChild(element);
}
