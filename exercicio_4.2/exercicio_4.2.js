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
  var resultado = JSON.stringify(
    {
      nome: "Snorlax",
      tipo1: "Normal",
      tipo2: null,
      peso: 460.0,
      altura: 2.1
      },
      {
      nome: "Gyarados",
      tipo1: "Água",
      tipo2: "Voador",
      peso: "235,0 kg",
      altura: "6,5 m"
      },
      {
      nome: "Lapras",
      tipo1: "Água",
      tipo2: "Gelo",
      peso: "220,0 kg",
      altura: "2,5 m"
      }
  )

    resultText.textContent= resultado
    alert(resultText.textContent);
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