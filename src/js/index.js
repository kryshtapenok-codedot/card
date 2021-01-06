const wrapper = document.querySelectorAll(".cardWrap");
let degrise = 0;



wrapper.forEach(element => {
  let state = {
    mouseX: 0,
    mouseY: 0,
    height: element.clientHeight,
    width: element.clientWidth,
  };

  

  element.addEventListener("mousemove", ele => {
    
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
    state.mouseY = ele.pageY - element.offsetTop - state.height / 2;
    if (card.classList.contains('do-flip')==true){
      degrise = 180;
    }
    else{
      degrise=0;
    }
    // parallax angle in card
    const angleX = (state.mouseX / state.width) * 30;
    const angleY = (state.mouseY / state.height) * -30 + degrise;
    card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) ` ;
    

    // parallax position of background in card
    const posX = (state.mouseX / state.width) * -40;
    const posY = (state.mouseY / state.height) * -40;
    cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
  });

  element.addEventListener("mouseout", () => {
    
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
  
    card.style.transform = `rotateY(0deg) rotateX(`+ degrise+ `deg) `;
    cardBg.style.transform = `translateX(0px) translateY(0px)`;

  });
});

const cards = document.querySelectorAll('.card');
cards.forEach((card) => card.addEventListener("click", () =>{
  card.classList.toggle("do-flip");
  card.style.transform = "rotateX(50deg)";
}));
