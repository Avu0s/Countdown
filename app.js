const countdown = ()=>{
    const aug = 'August 22, 2022 00:00:00'
    const augDate = new Date(aug).getTime()
    const now = new Date().getTime()
    const diff = augDate - now
    
    const sec = 1000
    const min = sec * 60
    const hr = min * 60
    const day = hr * 24

    const textDay = Math.floor(diff / day)
    const textHr = Math.floor((diff % day) / hr)
    const textMin = Math.floor((diff % hr) /min)
    const textSec = Math.floor((diff % min) / sec)

    const days = document.querySelector('#days').textContent = textDay
    const hours = document.querySelector('#hours').textContent = textHr
    const mins = document.querySelector('#mins').textContent = textMin
    const secs = document.querySelector('#secs').textContent = textSec
} 

setInterval(countdown,1000)


