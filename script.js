function adicionar() {
    if (document.querySelector('.res')) {
        document.querySelector('.res').remove()
    }
    
    const input = document.querySelector('input');
    const lista = document.querySelector('#lista')

    const ul = document.createElement('ul')
    lista.appendChild(ul)

    // Quantidade desejada
    const qntd = document.createElement('input')
    qntd.setAttribute("type", "number")
    qntd.style.width = "2rem"
    qntd.style.margin =  "10px"

    //Valor do produto
    const valor = document.createElement('input')
    valor.setAttribute("type", "number")
    valor.setAttribute("placeholder", "Valor")
    valor.style.width = "3rem"
    
    var res = document.createElement('div')
    res.classList.add('res')

    const li = document.createElement('li')
    li.innerHTML = input.value

    if (input.value === "") {
        res.style.color = "red"
        res.style.fontSize = "1.5rem"
        res.innerHTML = "Por favor, digite um item"
        ul.appendChild(res)

    } else {
        ul.appendChild(li)
        li.appendChild(qntd)
        li.appendChild(valor)
        input.value = ""
    }
   
    // Botão de check
    const check = document.createElement('button')
    check.innerHTML = "✔️"
    check.style.cursor = "pointer"
    li.appendChild(check)

    check.addEventListener('click', () => {
        li.style.textDecoration = "line-through"
        li.style.opacity = ".5"
        check.setAttribute('disabled', true)
        qntd.setAttribute('disabled', true)
        valor.setAttribute('disabled', true)
        check.style.cursor = "inherit"
    })

    // Botão de excluir
    const btnRemover = document.createElement('button')
    btnRemover.innerHTML = "🗑️"
    btnRemover.style.cursor = "pointer"
    li.appendChild(btnRemover)

    btnRemover.addEventListener('click', () => {
        li.remove()
    })

}

function salvar() {
    const input = document.querySelector('input');
    const lista = document.querySelector('#lista')
    const valor = input.value

    const inserirArray = document.createElement("array")

    lista.appendChild(inserirArray)
    
    var arrayLista = inserirArray[""];
    arrayLista.push(valor)

    console.log(arrayLista)



}