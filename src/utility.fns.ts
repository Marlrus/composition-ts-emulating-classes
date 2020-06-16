import { PublicProps } from './interfaces'

export const deepClone = <T>(obj: T): T => {
	return JSON.parse(JSON.stringify(obj))
}

export const findByName = <T extends PublicProps>(arr: T[], name: string) => {
	return arr.find(target => target.name === name)
}
