const emojis = ["😎","😎","💋","💋","😊","😊","🔥","🔥","👻","👻","♥️","♥️","😍","😍","👽","👽"];

const game = document.querySelector(".game");

let shuf_emoji = emojis.sort(()=> (Math.random() > 0.5) ? 2 : -1);
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML= shuf_emoji[i];
  game.appendChild(box);
  box.addEventListener("click",function(){
    this.classList.add('boxOpen');
   
   let boxOpen = document.querySelectorAll(".boxOpen")
  let boxMatch = document.querySelectorAll(".boxMatch");
    setTimeout(function() {
      if(boxOpen.length > 1){
        if(boxOpen[0].innerHTML == boxOpen[1].innerHTML)
     {
       boxOpen[0].classList.add("boxMatch");
       boxOpen[1].classList.add("boxMatch");
       boxOpen[1].classList.remove("boxOpen");
       boxOpen[0].classList.remove("boxOpen");
       

       
       
     }else{
       boxOpen[1].classList.remove("boxOpen");
       boxOpen[0].classList.remove("boxOpen");
     }
      }
    }, 600);
  })
}