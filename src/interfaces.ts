export interface BaseState {
	type: string
	name: string,
	class?: string,
	stats: {
		lvl: number,
		maxHp: number,
		hp: number,
		str: number,
		mgc: number
	}
}

export interface PublicProps {
	name: string
}

export interface BattleEvent {
	name: string
	event: string,
	origin: 'hero' | 'monster'
	str: number,
	target: string
}