// pre-create all hte variables here 

let wake = document.querySelector("#wakeywakey");
let start = document.querySelector(".starting-screen");
let awake = document.querySelector(".awake");
// variables for all 
let gotUp = document.querySelector(".gotUp");
let sleep = document.querySelector(".sleep");;
let attack = document.querySelector(".attack");;
let spare = document.querySelector(".spare");;
let attackAttack = document.querySelector(".attack-attack");;
let attackSpare = document.querySelector(".attack-spare");;
let spareSpare = document.querySelector(".spare-spare");;
let spareAttack = document.querySelector(".spare-attack");;
let attackAttackAttack = document.querySelector(".attack-attack-attack");;
let attackAttackSpare = document.querySelector(".attack-attack-spare");;
let attackSpareSpare = document.querySelector(".attack-spare-spare");;
let attackSpareAttack = document.querySelector(".attack-spare-attack");;
let attackAttackAttackEnd = document.querySelector(".attack-attack-attackEnd");;
let attackAttackSpareEnd = document.querySelector(".attack-attack-spareEnd");;
let attackSpareAttackEnd = document.querySelector(".attack-spare-attackEnd");;
let attackSpareSpareEnd = document.querySelector(".attack-spare-spareEnd");;
let spareAttackEnd = document.querySelector(".spare-attackEnd");;
let spareSpareEnd = document.querySelector(".spare-spareEnd");;
// all event variables
let getUp = document.querySelector(".getUp");
let zzz = document.querySelector(".zzz");
let engage = document.querySelector(".engage");
let Escape = document.querySelector(".escape");
let restart = document.querySelectorAll(".restart");
let engageEngage = document.querySelector(".engage-engage");
let engageEscape = document.querySelector(".engage-escape");
let escapeEngage = document.querySelector(".escape-engage");
let escapeEscape = document.querySelector(".escape-escape");
let engageEngageEngage = document.querySelector(".engage-engage-engage");
let engageEngageEscape = document.querySelector(".engage-engage-escape");
let engageEscapeEngage = document.querySelector(".engage-escape-engage");
let engageEscapeEscape = document.querySelector(".engage-escape-escape");
let escapeEscapeEscape = document.querySelector(".escape-escape-escape");
let escapeEscapeTooLate = document.querySelector(".escape-escape-tooLate");
let engageEngageEngageEnd = document.querySelector(".engage-engage-engageEnd");
let engageEngageEscapeEnd = document.querySelector(".engage-engage-escapeEnd");
let engageEscapeEscapeEnd = document.querySelector(".engage-escape-escapeEnd");
let engageEscapeEngageEnd = document.querySelector(".engage-escape-engageEnd");
//actual events
// starting event
wake.addEventListener("click", function(){
start.style.display = "none";
awake.style.display = "block";
document.body.style.backgroundImage = "url('https://www.shutterstock.com/image-photo/sand-dunes-sahara-desert-amazing-260nw-2231527715.jpg')";
});
// getting up
getUp.addEventListener("click", function(){
awake.style.display = "none";
gotUp.style.display = "block";
 document.body.style.backgroundImage = "url('https://cdn.gencraft.com/prod/user/5da4fadc-3044-4472-a24d-25bb1f2e68ba/99b5e257-cb0e-4426-927b-3095691f373f/image/image1_0.jpg?Expires=1718419519&Signature=OTfB7iiJ1qZr4pOxI74ApSxIshzpuvJKkVEx-A8PuR0J4hBnjF3Jp4t~2zekrlfL4fCg3ISdus0~ywBuHmonekhE0KJTJgWiVlgb1wjCvF-P-p8h68B0evvzOPbClFp2tFOTTCzdhW0mdnRs2iFq2rhU8tioJ2MX8-9FFrXIYQkW54VibUvTn72xC4XCN~tsJUBHhBS9Nk84ZuQ7p6N01BE~0CwF3hnI19Dv6Ivm6v1yXZGCFIFYp-jLhOWFlPCffxXnbUvRO8Oi2lW6sb~Se3XK~IdS76Z6U9Y00KzZN2-d3eRnTD-G3D~cWG-akVTqZaOBSM3XA4aE7dIEFzlziw__&Key-Pair-Id=K3RDDB1TZ8BHT8')"
});
//going back to sleep
zzz.addEventListener("click", function(){
awake.style.display = "none";
sleep.style.display = "block";
document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/00/67/59/84/360_F_67598442_OxBE0ebTm3e8PmKahHA11APG5RRuylUC.jpg')"
});
//attack the knights
engage.addEventListener("click", function(){
gotUp.style.display = "none";
attack.style.display = "block";
document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/ed/8d/02/ed8d02b40635ae49cf5dae36f5030100.jpg')"
});
//https://i.pinimg.com/originals/ed/8d/02/ed8d02b40635ae49cf5dae36f5030100.jpg
// run away form the knights
Escape.addEventListener("click", function(){
gotUp.style.display = "none";
spare.style.display = "block";
 document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/ed/8d/02/ed8d02b40635ae49cf5dae36f5030100.jpg')"
});
// attack the knights and the plant monster
engageEngage.addEventListener("click", function(){
attack.style.display = "none";
attackAttack.style.display = "block";
document.body.style.backgroundImage = "url('https://www.shutterstock.com/image-photo/inside-geodesic-dome-600nw-94628557.jpg')"

});
// attack the kngihts but no hte plant monster
engageEscape.addEventListener("click",function(){
attack.style.display = "none";
attackSpare.style.display = "block";
document.body.style.backgroundImage = "url('https://www.shutterstock.com/image-photo/inside-geodesic-dome-600nw-94628557.jpg')"

});
// attack both the knight and hte plant mosnter dan move forward
engageEngageEngage.addEventListener("click", function(){
attackAttack.style.display = "none";
attackAttackAttack.style.display = "block";
document.body.style.backgroundImage = "url('https://www.rs4doorsandgates.com/wp-content/uploads/2022/04/hollow-metal-doors.jpg')"

});
// attack both the knights nad hte plant moster but choose to wait defeated plant
engageEngageEscape.addEventListener("click", function(){
attackAttack.style.display = "none";
attackAttackSpare.style.display = "block";
 document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/closeup-head-giant-snake-forest_747552-35966.jpg')"

});
// attack ht knights but no hte plant moster and choose to move forward
engageEscapeEngage.addEventListener("click", function(){
attackSpare.style.display = "none";
attackSpareAttack.style.display = "block";
document.body.style.backgroundImage = "url('https://www.rs4doorsandgates.com/wp-content/uploads/2022/04/hollow-metal-doors.jpg')"

});
// attack hte knights but not hte plnt moster but choose to wait restin plant
engageEscapeEscape.addEventListener("click", function(){
attackSpare.style.display = "none";
attackSpareSpare.style.display = "block";
document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/closeup-head-giant-snake-forest_747552-35966.jpg')"

});
// avoid hte knights and attack hte plant mosnter
escapeEngage.addEventListener("click", function(){
spare.style.display = "none";
spareAttack.style.display = "block";
document.body.style.backgroundImage = "url('https://www.rs4doorsandgates.com/wp-content/uploads/2022/04/hollow-metal-doors.jpg')"

});
// avoid the knights and avoid hte plant monster
escapeEscape.addEventListener("click", function(){
spare.style.display = "none";
spareSpare.style.display = "block";
document.body.style.backgroundImage = "url('https://www.rs4doorsandgates.com/wp-content/uploads/2022/04/hollow-metal-doors.jpg')"

});
// avoid the knights and the plant moster and wiat back
escapeEscapeEscape.addEventListener("click", function(){
spareSpare.style.display = "none";
spareSpareEnd.style.display = "block";
document.body.style.backgroundImage = "url('https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/waiting-on-a-friend-joseph-feely.jpg')"
//https://img.freepik.com/premium-photo/closeup-head-giant-snake-forest_747552-35966.jpg
});
// avoid hte knights nad hte mosters and move forward
escapeEscapeTooLate.addEventListener("click", function(){
spareAttack.style.display = "none";
spareAttackEnd.style.display = "block";
document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/00/67/59/84/360_F_67598442_OxBE0ebTm3e8PmKahHA11APG5RRuylUC.jpg')"

});
// attack till hte end dDestroy
engageEngageEngageEnd.addEventListener("click", function(){
attackAttackAttack.style.display = "none";
attackAttackAttackEnd.style.display = "block";
 document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/futuristic-man-holding-gun-destroyed-city-digital-art-style-illustration-painting-fantasy-concept-man-with-gun_743201-7032.jpg')"

});
// attack till the end but wait Run
engageEngageEscapeEnd.addEventListener("click", function(){
attackAttackSpare.style.display = "none";
attackAttackSpareEnd.style.display ="block";
document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/01/99/42/28/360_F_199422875_2RLcAaIQ6S2G0yis7okytByh1SaB2ZNv.jpg')"

});
// attack kngihts avoid plant wait Destroy
engageEscapeEscapeEnd.addEventListener("click", function(){
attackSpareSpare.style.display = "none";
attackSpareSpareEnd.style.display = "block";
document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/futuristic-man-holding-gun-destroyed-city-digital-art-style-illustration-painting-fantasy-concept-man-with-gun_743201-7032.jpg')"

});
// attack knights avoid pants and more formard Destroy
engageEscapeEngageEnd.addEventListener("click", function(){
attackSpareAttack.style.display = "none";
attackSpareAttackEnd.style.display = "block";
document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/futuristic-man-holding-gun-destroyed-city-digital-art-style-illustration-painting-fantasy-concept-man-with-gun_743201-7032.jpg')"

});
// big restart function
for(let i = 0; i< restart.length; i++){
restart[i].addEventListener("click", function(){
start.style.display = "block";
attackAttackAttackEnd.style.display = "none";
attackAttackSpareEnd.style.display = "none";
attackSpareAttackEnd.style.display = "none";
attackSpareSpareEnd.style.display = "none";
spareAttackEnd.style.display = "none";
spareSpareEnd.style.display = "none";
sleep.style.display = "none";
console.log('WORK');
document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/00/67/59/84/360_F_67598442_OxBE0ebTm3e8PmKahHA11APG5RRuylUC.jpg')"

});
}