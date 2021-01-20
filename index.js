//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
var node = document.createElement("p"); 
node.setAttribute("id", "clear") 
node.setAttribute("style", "display: block;")              
var textnode = document.createTextNode("x");         
node.appendChild(textnode);                              
document.getElementById("a-1").appendChild(node).className = "square";

node.addEventListener("click", function() {
  if (node.textContent ==='x'){
      node.textContent ='o'
  } else (node.textContent ='x')
});






//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];





//resolve // QUESTION 2 here

const dropDown = document.createElement("select")
const button = document.createElement("button")
button.textContent ="Select and Remove";
dropDown.setAttribute("id", "colorWheel")
button.setAttribute("id", "remove")
dropDown.setAttribute("style", "display: block;")
button.setAttribute("style", "display: block;")

let words;

for ( let i=0; i< colors.length; i++){
  var rainbow = colors[i];
  words = document.createElement("OPTION");
    words.textContent = rainbow ;
    words.value = rainbow ;
   dropDown.appendChild(words);
   dropDown.insertBefore(words,dropDown.lastChild);
}


document.getElementById("a-2").appendChild(dropDown)
document.getElementById("a-2").appendChild(button)

button.addEventListener("click", function removecolor(){
  var erase = document.getElementById("colorWheel")
   erase.remove(erase.selectedIndex);
  })



//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)



const calculateSphere = () =>{
let radius = document.getElementById("radius")
let volume = document.getElementById("volume")
let area = document.getElementById("area")
  
  radius=parseInt(radius.value)
  

  let volAnswer = ((4/3) * 3.14 * Math.pow(radius, 3))
  let areaAnaswer = (4 * 3.14 * Math.pow(radius, 2))
  
  volume.value=volAnswer
  area.value=areaAnaswer


 }




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here
const button1 = document.createElement("button")
button1.textContent ="Question One";

const button2 = document.createElement("button")
button2.textContent ="Question Two";

const button3 = document.createElement("button")
button3.textContent ="Question Three";

document.getElementById("a-4").appendChild(button1)
document.getElementById("a-4").appendChild(button2)
document.getElementById("a-4").appendChild(button3)

/*
node.addEventListener("click", function() {
  if (node.textContent ==='x'){
      node.textContent ='o'
  } else (node.textContent ='x')
});
*/


button1.addEventListener("click", function removeAnswer1(){
  let invisible = document.getElementById("clear")
  if (invisible.style.display == "block") {
  //invisible.style.opacity = 0
    invisible.style.display = "none"
    button1.textContent = "Show Question 1"
  } else {
      invisible.style.display = "block"
      button1.textContent =" Hide Question One";
}
})


button2.addEventListener("click", function removeAnswer2(){
  if(colorWheel.style.display == "block"){
   var cRemove = document.getElementById("colorWheel");
   cRemove.style.display = "none"
   var dRemove = document.getElementById("remove");
   dRemove.style.display = "none"
   button2.textContent = "Show Question 2"
  } else{
     var cRemove = document.getElementById("colorWheel");
     cRemove.style.display = "block"
     var dRemove = document.getElementById("remove");
     dRemove.style.display = "block"
     button2.textContent =" Hide Question Two";
  }
})

let radius
let volume
let area

button3.addEventListener("click", function removeAnswer3(){
  var eraseRadius = document.getElementById("radius");
  var eraseVol = document.getElementById("volume");
  var eraseArea = document.getElementById("area");

  if (eraseRadius.value) {
    radius = document.getElementById("radius").value;
    volume = document.getElementById("volume").value;
    area = document.getElementById("area").value
    eraseRadius.value =''; 
    eraseVol.value ='';
    eraseArea.value ='';
    //console.log("click")
    button3.textContent = "Show Question 3";
  } else {
    eraseVol.value = volume
    eraseRadius.value = radius
    eraseArea.value = area
    button3.textContent =" Hide Question Three";
    //console.log("click" + '2')
    //console.log(volume)
  }
});

