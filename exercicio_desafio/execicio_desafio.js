// adicionando som
let audio = new Audio('../assets/batalha.mp3');

window.addEventListener('load', () => {
    audio.play();
})

const columns = document.querySelectorAll(".column");
const resultCollumn = document.querySelectorAll(".aBottom");
 
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
    resultText.textContent= JSON.stringify(
      {
        "list_aggregate":[{ "_id": "Venenoso", "count": 33 },{ "_id": "Água", "count": 32 },{ "_id": "Normal", "count": 24 },{ "_id": "Grama", "count": 14 },{ "_id": "Terra", "count": 14 },{ "_id": "Psíquico", "count": 14 },{ "_id": "Inseto", "count": 12 },{ "_id": "Fogo", "count": 12 },{ "_id": "Elétrico", "count": 9 },{ "_id": "Lutador", "count": 8 },{ "_id": "Pedra", "count": 7 },{ "_id": "Gelo", "count": 5 },{ "_id": "Fantasma", "count": 3 },{ "_id": "Dragão", "count": 3 }]
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