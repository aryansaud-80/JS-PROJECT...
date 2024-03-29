const btn1 = document.getElementById('myButton');

const btn2 = document.getElementById('myButton2');


const colorCode = document.querySelector('.code');

//// const copyClipboard= document.querySelector('.css-code');

let hex1="#ff0011";
let hex2="#ffaadd";



function colorGenerator(){
  let hexColor = "0123456789abcdef";
  let color="";

  for(let i=0; i<6; i++){
    color += hexColor[Math.floor(Math.random()*16)];
  }
  hexCode = `#${color}`;
  return hexCode;
}


btn1.addEventListener('click', ()=>{
  hex1=colorGenerator();

  btn1.innerText = `${hex1}`;

  btn1.style.backgroundColor = `${hex1}`;

  document.body.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2}`;

  
  colorCode.innerText = `background-image: linear-gradient(to right, ${hex1}, ${hex2});`
  // //console.log(hex1);
});

btn2.addEventListener('click', ()=>{
  hex2=colorGenerator();

  btn2.innerText = `${hex2}`;
  btn2.style.backgroundColor = `${hex2}`;

  document.body.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2}`;

  colorCode.innerText = `background-image: linear-gradient(to right, ${hex1}, ${hex2});`
  // //console.log(hex2);
});


colorCode.addEventListener('mouseup', ()=>{
  navigator.clipboard.writeText(colorCode.innerText);

  alert('Code is copied successfully');
});