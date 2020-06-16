import { canGreet, canManageState, canGetStats, canAttack } from '../methods'

export const RedMage = (name: string) => {
	const state = {
      type: 'hero',
		name,
		class: 'Red Mage',
		stats: {
         lvl: 1,
         maxHp: 100,
			hp: 100,
			str: 10,
			mgc: 10
		}
	}
	return {
      name,
		...canGreet(state),
		...canGetStats(state),
      ...canManageState(state),
      ...canAttack(state),
      // ...canShowCurrentHp(state)
	}
}