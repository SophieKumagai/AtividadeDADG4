// adicionando som
// let audio = new Audio('../assets/batalha.mp3');


// window.addEventListener('load', () => {
//     audio.play();
// })

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
  if(verifyOrder(["alternativa1","alternativa2", "alternativa5","alternativa6", "alternativa4", "alternativa3"], orderInfo)){
    alert("Right order!");
    let crudMethod = new CrudMethod(); 
    var resultado= 
    "{nome: \"Bulbasaur\", tipo1: \"Planta\", tipo2: \"Veneno\", peso: \"6,9 kg\", altura: \"0,7 m\", ataque: 49, defesa: 49, nivel: 5}";
    console.log(resultado);
    resultText.innerHTML = resultado
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