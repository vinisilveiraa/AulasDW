// 
const form = document.getElementById('formTarefa')
const input = document.getElementById('inputTarefa')
const lista = document.getElementById('listaTarefa')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const textoTarefa = input.value.trim();

    if(textoTarefa != ''){
        const li = document.createElement('li');
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.classList.add('remover');

        botaoRemover.addEventListener('click', function() {
            lista.removeChild(li);
        })
        
        li.appendChild(botaoRemover);

        lista.appendChild(li);
        input.value = '';
    }
})