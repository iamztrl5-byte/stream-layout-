/* ==========================================
   JØXTV PRE STREAM SYSTEM
   JAVASCRIPT ENGINE v2.0
========================================== */


// ==========================================
// BOOT SYSTEM
// ==========================================


const statusText = document.querySelector(".status");

const bootMessages = [
    "INITIALIZING STREAM SYSTEM",
    "LOADING AUDIO MODULE",
    "CONNECTING CHAT",
    "CHECKING OBS",
    "SYSTEM READY"
];


let bootIndex = 0;


function bootSequence(){


    if(bootIndex < bootMessages.length){


        statusText.innerHTML =
        bootMessages[bootIndex];


        bootIndex++;


        setTimeout(
            bootSequence,
            2000
        );


    } else {


        statusText.innerHTML =
        "PRE STREAM ONLINE";


    }

}



bootSequence();





// ==========================================
// CHAT SIMULATA
// ==========================================


const chatBox =
document.getElementById("chatMessages");



const fakeMessages = [

{
user:"Marco",
text:"Bella live 🔥"
},

{
user:"Ale",
text:"Pronto per partire?"
},

{
user:"Luca",
text:"Setup assurdo 😈"
},

{
user:"Sara",
text:"Finalmente online 💜"
},

{
user:"System",
text:"Waiting for viewers..."
}


];



let messageIndex = 0;



function addMessage(){


const data =
fakeMessages[messageIndex];



const div =
document.createElement("div");



div.className =
"message";



div.innerHTML = `

<b>${data.user}</b>

${data.text}

`;



chatBox.appendChild(div);



if(chatBox.children.length > 5){

chatBox.removeChild(
chatBox.firstChild
);

}



messageIndex++;



if(messageIndex >= fakeMessages.length){

messageIndex = 0;

}


}




setInterval(
addMessage,
3500
);







// ==========================================
// GLITCH EFFECT LOGO
// ==========================================


const logo =
document.querySelector(".logo");



setInterval(()=>{


logo.style.transform =
"translateX(3px)";


setTimeout(()=>{


logo.style.transform =
"translateX(-3px)";


},80);



setTimeout(()=>{


logo.style.transform =
"translateX(0)";


},160);



},5000);







// ==========================================
// RANDOM CAMERA STATUS
// ==========================================


const cameraStatus =
document.querySelector(".camera-footer span");



const states = [

"ONLINE",

"STANDBY",

"READY"

];



setInterval(()=>{


cameraStatus.innerHTML =

states[
Math.floor(
Math.random()*states.length
)
];


},5000);







// ==========================================
// TIME SYSTEM
// ==========================================


function updateTime(){


const now =
new Date();



const time =
now.toLocaleTimeString(
"it-IT"
);



const online =
document.querySelector(".online");



online.innerHTML =

`
<span class="dot"></span>

SYSTEM ONLINE

${time}

`;

}



setInterval(
updateTime,
1000
);

updateTime();







// ==========================================
// BACKGROUND PARTICLES
// ==========================================


const particles =
document.querySelector(".particles");



for(let i=0;i<40;i++){


const p =
document.createElement("span");


p.style.position="absolute";

p.style.width="3px";

p.style.height="3px";

p.style.background="#c084fc";

p.style.borderRadius="50%";

p.style.left =
Math.random()*1920+"px";


p.style.top =
Math.random()*1080+"px";


p.style.opacity =
Math.random();


p.style.boxShadow =
"0 0 15px #a855f7";



particles.appendChild(p);



}



console.log(
"JØXTV PRE STREAM SYSTEM ONLINE"
);
