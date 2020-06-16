import { canGetStats, canAttack, canManageState } from '../methods'

export const Slime = (name: string) => {
   const state = {
      type: 'monster',
      name,
      class: 'Slime',
		stats: {
         lvl: 1,
         maxHp: 20,
			hp: 20,
			str: 2,
			mgc: 0
		}
   }
   return {
      name,
      ...canManageState(state),
      ...canGetStats(state),
      ...canAttack(state),
      // ...canShowCurrentHp(state)
   }
}