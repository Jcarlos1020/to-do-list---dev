const button = document.querySelector(".botão-itens")
const input = document.querySelector(".input-itens")
const listaCompleta = document.querySelector(".lista-itens")

let MinhaListaDeItens = []


function addNovaTarefa() {
    MinhaListaDeItens.push({ 
        tarefa: input.value,
        concluida: false
})

    input.value = ""

    mostrarTarefas()
}





function mostrarTarefas() {

    let novaLi = ""

    MinhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `
        
        <li class="itens ${item.concluida && "done"}">
    <img  src="./img/checked.png" alt="checked" onclick="concluirTarefas(${index})">
    <p> ${item.tarefa}</p>
    <img src="./img/trash.png" alt="lixo" onclick="deletarItens(${index})" >
         </li>`
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(MinhaListaDeItens))

}

function concluirTarefas(index) {
    MinhaListaDeItens[index].concluida = ! MinhaListaDeItens[index].concluida
    mostrarTarefas()
}



function deletarItens(index) {
    MinhaListaDeItens.splice(index, 1)
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasLocalStorange = localStorage.getItem("lista")

    if(tarefasLocalStorange) {
        MinhaListaDeItens = JSON.parse(tarefasLocalStorange) 
    }
   
    mostrarTarefas()
}


recarregarTarefas()

button.addEventListener("click", addNovaTarefa)