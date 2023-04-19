document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const alienName = document.querySelector('input').value
    try {
        const response = await fetch(`https://tiny-ruby-bandicoot-sari.cyclic.app/api/${alienName}`)
        const data = await resposnse.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}