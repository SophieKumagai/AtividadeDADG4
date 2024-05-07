function findAll(){
    var json = JSON.stringify(listaPokemon);
    return json
}

function findByType(type){
    var json=""
    for (let i = 0; i < listaPokemon.length; i++) {
        if(listaPokemon[i].tipo1==type || listaPokemon[i].tipo2==type){
            json+=listaPokemon[i]
        }
    }
    return json
}
function findOneByName(nome){
    var json=""
    for (let i = 0; i < listaPokemon.length; i++) {
        if(listaPokemon[i].nome==nome){
            json+=listaPokemon[i]
            return json
        }
    }
    return "Não encontrado :("
}

function insertPokemon(nome, tipo1, tipo2, peso, altura){
    listaPokemon.push({nome, tipo1, tipo2, peso, altura})
    var json = JSON.stringify({nome, tipo1, tipo2, peso, altura});
    return json
}

function updatePokemon(nome, tipo1, tipo2){
    for (let i = 0; i < listaPokemon.length; i++) {
        if(listaPokemon[i].nome==nome){
            listaPokemon[i].tipo1=tipo1
            listaPokemon[i].tipo2=tipo2
            var json = JSON.stringify(listaPokemon[i]);
            return json
        }
    }
}
function deletePokemon(nome){
    for (let i = 0; i < listaPokemon.length; i++) {
        if(listaPokemon[i].nome==nome){
            var json = JSON.stringify(listaPokemon[i])
            listaPokemon[i].pop()
            return json
        }
    }
}