import { Interaction } from 'detritus-client'

export function CommandOptions(options: Interaction.InteractionCommandOptions) {
	return function (target: any): any {
		return class extends target {
			constructor() {
				super(options)
			}
		}
	}
}
