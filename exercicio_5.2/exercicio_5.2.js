// adicionando som
let audio = new Audio('../assets/batalha.mp3');


window.addEventListener('load', () => {
    audio.play();
})

const columns = document.querySelectorAll(".column");
const resultCollumn = document.querySelectorAll(".aBottom");
const resultText = document.querySelector("#returnText");

document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});
 
document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});
 
columns.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition(item, e.clientY);
 
    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging);
    } else {
      item.prepend(dragging);
    }
  });
});
function getNewPosition(column, posY) {
  const cards = column.querySelectorAll(".alternativa:not(.dragging)");
  let result;
 
  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;
 
    if (posY >= boxCenterY) result = refer_card;
  }
 
  return result;
}
function getItemsOrder() {
  //Informação com cada coluna

  let orderInfo = '';
  resultCollumn.forEach((column) => {
    const cards = column.querySelectorAll(".alternativa");
    const order = [...cards].map(card => card.id).join(",");
    orderInfo += `${order}\n`;
  });
  if(verifyOrder(["alternativa1","alternativa2", "alternativa3","alternativa4", "alternativa5", "alternativa6"], orderInfo)){
    alert("Right order!");
    resultText.textContent= JSON.stringify({
      "List":[
        {
          "nome": "Dragonite",
          "tipo1": "Dragão",
          "tipo2": "Voador",
          "peso": "210,0 kg",
          "altura": "2,2 m",
          "ataque": 134,
          "defesa": 95,
          "nivel": 50
        },
        {
          "nome": "Kingler",
          "tipo1": "Água",
          "peso": "60,0 kg",
          "altura": "1,3 m",
          "ataque": 130,
          "defesa": 115,
          "nivel": 50
        },
        {
          "nome": "Flareon",
          "tipo1": "Fogo",
          "peso": "25,0 kg",
          "altura": "0,9 m",
          "ataque": 130,
          "defesa": 60,
          "nivel": 50
        },
        {
          "nome": "Machamp",
          "tipo1": "Lutador",
          "peso": "130,0 kg",
          "altura": "1,6 m",
          "ataque": 130,
          "defesa": 80,
          "nivel": 50
        },
        {
          "nome": "Rhydon",
          "tipo1": "Terra",
          "tipo2": "Pedra",
          "peso": "120,0 kg",
          "altura": "1,9 m",
          "ataque": 130,
          "defesa": 120,
          "nivel": 50
        }
      ]
  }
)
  }
  else{
    alert("Wrong order!");
  }
}
function verifyOrder(value, order){
  let orderList = order.split(',');
  for(let i = 0; i < value.length-1; i++){
    if(value[i] != orderList[i]){
      return false;
    }
  }
  return true;
}