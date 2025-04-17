/* CONST define uma variavel como constante (nao pode ser alterado
neste caso, nao pode trocar de elemento do html) 
    
documento.getElementById('elementohtml') pega um elemento html pelo id para ser programado no js */
const form = document.getElementById('formTarefa')
const input = document.getElementById('inputTarefa')
const lista = document.getElementById('listaTarefa')

/* addEventListener adiciona uma "escuta" a um evento do elemento html
submit e o evento que ocorre quando o formulario e enviado
function(event) cria a funcao que sera executada quando o evento ocorrer
event e a variavel que armazena as informacoes do evento que ocorreu */
form.addEventListener('submit', function(event) {
    // evita que o formulario seja enviado e a pagina recarregada
    event.preventDefault();
    
    // armazena o valor do input na variavel
    // trim() remove os espaços em branco do inicio e do fim do texto
    const textoTarefa = input.value.trim();

    if(textoTarefa != ''){
        // Cria um elemento HTMl do tipo li
        const li = document.createElement('li');
        // adiciona o texto do input no elemento li
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        // Adiciona a classe remover ao botão criado
        botaoRemover.classList.add('remover');

        botaoRemover.addEventListener('click', function() {
            // remove o elemento li da lista se o botão for clicado
            lista.removeChild(li);
        })
        // Adiciona o botão remover ao elemento li
        
        li.appendChild(botaoRemover);
        // adiciona o elemento li a lista de tarefas
        lista.appendChild(li);
        // limpa o valor do input
        input.value = '';
    }
})