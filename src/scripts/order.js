import pointerdown from "./PointerDown"

export default function order() {
    const call = document.getElementById('call')
    const callClose = document.getElementById('callClose')
    const client = document.getElementById('client')
    const clientClose = document.getElementById('clientClose')
    const callButtonHeader = document.getElementById('callButtonHeader')
    const messageButtonHeader = document.getElementById('messageButtonHeader')
    const callButtonAside = document.getElementById('callButtonAside')
    const messageButtonAside = document.getElementById('messageButtonAside')

    pointerdown(call, callClose)
    pointerdown(client, clientClose)

    callButtonHeader.addEventListener('pointerup', (e) => {
        e.stopPropagation()
        call.style.display = 'block'
    })

    messageButtonHeader.addEventListener('pointerup', (e) => {
        e.stopPropagation()
        client.style.display = 'block'
    })

    callButtonAside.addEventListener('pointerup', (e) => {
        e.stopPropagation()
        call.style.display = 'block'
    })

    messageButtonAside.addEventListener('pointerup', (e) => {
        e.stopPropagation()
        client.style.display = 'block'
    })

}