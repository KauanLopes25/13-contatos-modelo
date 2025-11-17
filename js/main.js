'use strict'

import { lerContatos, criarContato } from "./contatos.js"

async function getUsersData() {
    const users = await lerContatos()
    return users
}

async function dataUserSeparation() {
    const dataUserAll = await getUsersData()
    if (dataUserAll) {
        for (let i = 0; i <= dataUserAll.length; i++) {
            createUserCard(dataUserAll[i].foto, dataUserAll[i].nome, dataUserAll[i].celular)
        }
    } else {
        console.log('Nenhum dado encontrado')
    }
}

function createUserCard(dataImage, dataName, dataNumber) {
    const cardContato = document.createElement('div')
    const image = document.createElement('img')
    const userName = document.createElement('h2')
    const number = document.createElement('p')

    cardContato.className = "card-contato"
    image.src = dataImage
    userName.textContent = dataName
    number.textContent = dataNumber

    cardContato.appendChild(image)
    cardContato.appendChild(userName)
    cardContato.appendChild(number)

    const container = document.querySelector(".container")

    container.appendChild(cardContato)
    console.log(getUsersData())
}

function accessToCreateNewUser() {
    const main = document.querySelector(".card-show")
    main.className = "form-show"
}

function cancelCreateNewUser() {
    const main = document.querySelector(".form-show")
    main.className = "card-show"
}

async function createNewUser() {
    const name = document.querySelector("#nome").value
    const email = document.querySelector("#email").value
    const phone = document.querySelector('#celular').value
    const address = document.querySelector('#endereco').value
    const city = document.querySelector('#cidade').value

    const contact = {
        "nome": name,
        "celular": phone,
        "foto": null,
        "email": email,
        "endereco": address,
        "cidade": city
    }

    const createUser = await criarContato(contact)

    const main = document.querySelector(".form-show")
    main.className = "card-show"
}

const btnCreateNewUser = document.querySelector("#novo-contato")
const btnSaveNewUser = document.querySelector("#salvar")
const btnCancel = document.querySelector('#cancelar')

btnCreateNewUser.addEventListener('click', accessToCreateNewUser)
btnSaveNewUser.addEventListener('click', createNewUser)
btnCancel.addEventListener('click', cancelCreateNewUser)

dataUserSeparation()