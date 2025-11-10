'use strict'

const novoContato = {
    "nome": "Kauan Lopes Pereira",
    "celular": "11 9 4321-9876",
    "foto": "https://img.freepik.com/fotos-premium/estatua-de-zeus-na-grecia-antiga-na-hora-dourada-do-por-do-sol-deuses-gregos-hercules-e-mitologia_495753-1234.jpg?w=1060",
    "email": "Kauan@Email.com",
    "endereco": "Rua dos madres, 755",
    "cidade": "Valinhos"
}

const atualizadoContato = {
    "nome": "Kauan Lopes Pereira atualizado",
    "celular": "11 9 4321-9876",
    "foto": "https://img.freepik.com/fotos-premium/estatua-de-zeus-na-grecia-antiga-na-hora-dourada-do-por-do-sol-deuses-gregos-hercules-e-mitologia_495753-1234.jpg?w=1060",
    "email": "Kauan@Email.com",
    "endereco": "Rua dos madres, 755",
    "cidade": "Santos"
}

export async function lerContatos() {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const response = await fetch(url)

    const contatos = await response.json()

    console.log(contatos)

    return contatos
}

export async function criarContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function deletarContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: "DELETE"
    }

    const response = await fetch(url, options)

    return response.ok
}

// getContatos()
// criarContato(novoContato)
// atualizarContato(11, atualizadoContato)
// deletarContato(9)