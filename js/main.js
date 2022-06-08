const { response } = require("express")

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const homeName = document.querySelector('input').value

    try{
        const response = await fetch()
        const data = await response.json()

        console.log(data),
        document.querySelector('h2').innerText = data.residentName

    }catch (error) {
        console.log('error')
    }
}