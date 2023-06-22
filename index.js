const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')



let humanScorenumber = 0
let machineScorenumber = 0

const playHuman = (humanChoice) => {
    console.log(humanChoice)

    playThegame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}



const playThegame = (human, machine) => {
    console.log(' Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    }
    
    else if (
        (human === 'scissors' && machine === 'paper')||
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors')  
        
        ) {


        humanScorenumber++
        humanScore.innerHTML = humanScorenumber
        result.innerHTML = 'Você Ganhou!'

    } else {  
        machineScorenumber++
        machineScore.innerHTML = machineScorenumber
        result.innerHTML = 'Você perdeu! '
    }
}