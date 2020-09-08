const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-button')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode() {
    const textNode = textNode.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }    
//adds button functions
textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('button')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    }
})
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}
//restarts game after winning or death
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}
//the game
const textNodes = [
{
    id: 1,
    text: 'You are a knight for the city of Louavilla.  You have been tasked by your Queen to deliver an important message to King of St Mathis.  Will you accept the challenge?',
    options: [
        {
            text: 'ACCEPT THE CHALLENGE!',
            setState: {onMission: True},
            nextText: 2
        },
        {
            text: "Don't accept the challenge",
            alert('YOU ARE EXECUTED IN THE TOWN SQUARE FOR BEING A COWARD'),
            nextText -1
        }
    ]
},
{
    id: 2,
    text: 'It is time to choose your weapon.  What will you choose?'
    options: [
        {
            text: 'Choose the Sword'
            requiredState: (currentState) => currentState.onMission,
            setState: {sword: true},
            nextText: 3
        },
        {
            text: 'Choose the Axe'
            requiredState: (currentState) => currentState.onMission,
            setState: {Axe: true},
            nextText: 3
        }
    ]

},
{
    id: 3,
    text: 'After choosing your weapon, it is now time to choose your path'
    options: [
        {
            text: 'Take the road.'
            nextText: 4
        },
        {
            text: 'Take the bridge across the river'
            nextText: 5 
        },
        {
            text: 'Take the path through the woods'
            nextText: 6
        }
    ]
},
{
    id: 4,
    text: 'Walking along the road you come across a band of thieves.  What will you do?'
    options: [
        {
            text: 'Run away in fear!'
            nextText: -1
        },
            text: 'Fight thieves.'
            nextText: 7
    ]
}
startGame()
