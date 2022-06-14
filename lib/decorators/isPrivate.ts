import { Collections } from 'detritus-client'

export function isPrivate(guildsIds: string[]) {
	return function (target: any): any {
		return class extends target {
			guildIds = new Collections.BaseSet([...guildsIds])
		}
	}
}
