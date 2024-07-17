let contador = 0
// pegando o valor do input e do botão
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')




// função chamada no botão adicionar
function addTarefa(){

    // PEGAR O VALOR DIGITADO NO INPUT
    let valorinput = input.value
    //SE NÃO FOR VAZIO, NULO E INDEFINIDO
    if((input !=="") && (input !==null) && (input !==undefined)){
        ++ contador
        let novoItem = ` <div id="${contador}"class="item">
            <div id="icone_${contador}" onclick="marcarTarefa(${contador})" class="item-icone"><i class="bi-bi-circle"></i></div>
            <div onclick="marcarTarefa(${contador})" class="item-nome"> ${valorinput} </div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})">  <i class="bi bi-trash-fill"></i>Deletar</button>
            </div>
        </div>`
        //COLOCANDO MAIS UM ITEM NO MAIN
        main.innerHTML +=novoItem

        //ZERAR O CAMPINHO
        input.value=""
        input.focus()

        


    }

}

function deletar(id){
    tarefa = document.getElementById(id)
    tarefa.remove()

}

function marcarTarefa(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    console.log(classe)

    if (classe == "item"){
        item.classList.add('clicado')
        var icone = document.getElementById(`icone_${id}`)
        icone.classList.remove("bi-bi-circle")
        icone.classList.add("bi-check-circle-fill")

        item.parentNode.appendChild(item)
    }else{
        item.classList.remove('clicado')
        var icone = document.getElementById(`icone_${id}`)
        icone.classList.remove("bi-check-circle-fill")
        icone.classList.add("bi-bi-circle")        

    }
    
}
// TECLA ENTER PARA FACILITAR

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        btnAdd.click()
    }   
})