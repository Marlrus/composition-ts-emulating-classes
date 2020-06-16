import { merge } from 'lodash'
import { deepClone } from './utility.fns'
import { BaseState, BattleEvent } from './interfaces'

export const canGreet = <T extends BaseState>(state: T) => ({
	greet() { return `Greetings fellow warriors, my name is ${state.name}`}
})

export const canGetStats = (state: any) => ({
	getStats() {  
		return `Stats for ${state.name}:
Lvl: ${state.stats.lvl} ${state.class}
HP: ${state.stats.hp}
STR: ${state.stats.str}
MGC: ${state.stats.mgc}`
	}
})

export const canManageState = <T>(state: T) => ({
	getState() { return deepClone(state) },
	updateState<T>(newState: T): T {
		// if(newState.stats.hp <= 0) console.log(`${state.name} has fainted.`)
		return merge(state, newState)
	}
})

export const canShowCurrentHp = <T extends BaseState>(state: T) => ({
	showCurrentHp(){
		return `Current HP: ${state.stats.hp}/${state.stats.maxHp}`
	}
})

export const canAttack = <T extends BaseState>(state: T) => ({
	attack(target: string): BattleEvent {
		return {
			name: state.name,
			event: 'attack',
			origin: state.type as 'hero' | 'monster',
			str: state.stats.str,
			target
		}
	}
})
