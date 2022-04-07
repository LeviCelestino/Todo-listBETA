// Variáveis que eu quero que fiquem globais
const pegarElementoUl = document.getElementById('ul')
let input = document.getElementById('ler')
const tarefas = []

// Escreve no Front END

function mostraTarefa(){



    // Zera a UL para que nao haja clone de output do laço for
    // Exemplo: input = 1 output = 1
    //          input = 2 output = 1 1 2
    //          input = 3 output = 1 1 2 2 3
    pegarElementoUl.innerHTML = ''


    // Procura tarefa no Array tarefas
    for(tarefa of tarefas){
        // Cria um elemento li
        const li = document.createElement('li')
        // Cria um texto com a variavel do array tarefas
        const textoTarefa = document.createTextNode(tarefa)

        // Adiciona o texto na li
        li.appendChild(textoTarefa)

        // Adiciona o li na ul
        pegarElementoUl.appendChild(li)
        
        // Criar link

        const aDel = document.createElement('a')

        // Criar texto do botao

        const aValue = document.createTextNode("X")
        // Colocar o texto do botão no Botão

        aDel.appendChild(aValue)
        // Colocar o botão com o Texto na Li

        li.appendChild(aDel)
    
        // Criar IndexOf para saber onde pegar cada item do array

        const position = tarefas.indexOf(tarefa)
        // Depois de ter criado a posição de cada item do
        // array vamos setar um atributo na tag "a" que
        // criamos

        aDel.setAttribute("onclick",`deletaTarefa(${position})`)
      
    }

    }
function adicionarArray(){
    // adiciona meus inputs no array
    tarefas.push(input.value)
    console.log(input.value)
    // Zera o value do input após eu chamar a função 
    input.value = ""
    mostraTarefa()
}

function deletaTarefa(position){
    tarefas.splice(position, 1)
    mostraTarefa()

}