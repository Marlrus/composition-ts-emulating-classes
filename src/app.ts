import { RedMage } from './models/redMage'
import { Slime } from './models/slime'
import { findByName } from './utility.fns'
import { BattleEvent } from './interfaces'

const marlrus = RedMage('Marlrus')
console.log('marlrus')
console.log(marlrus)

const createSlimes = (quantity: number) => {
	const monsters = []
	for(let i = quantity; i > 0; i--){
		monsters.push(Slime(`Slime${i}`))
	}		
	return monsters
}

const heroes = [
	marlrus
]

console.log('heroes')
console.log(heroes)

const monsters = createSlimes(2)

console.log('monsters')
console.log(monsters)

const processAttack = (event: BattleEvent) => {
	console.log(`${event.name} used ${event.event} on ${event.target}`)
	
	let targets;
	event.origin === 'hero'? targets = monsters : targets = heroes
	//create new state
	const newStates = targets
		.map(target => target.getState())
		.map(
			target => target.name === event.target
				? {...target, stats: {hp: target.stats.hp - event.str }}
				: target
		)
	//update States
	targets
		.map(target=> target.updateState( findByName(newStates, target.name)))
}

console.log(marlrus.greet())

//interactivity
const marlrusAttButton = document.getElementsByClassName('marlrus-att')!
for(const button of marlrusAttButton){
	button.addEventListener('click', ()=> {
		processAttack(marlrus.attack(button.id))
		console.log(findByName(monsters, button.id)!.getStats())
	})
}


const slimeAttButton = document.getElementsByClassName('slime-att')!
for(const button of slimeAttButton){
	button.addEventListener('click', ()=> {
		monsters.forEach(monster=> processAttack(monster.attack(button.id)))
		console.log(findByName(heroes, button.id)!.getStats())
	})
}