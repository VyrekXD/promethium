interface Metadata {
	isNsfw: boolean
	isDevOnly: boolean
	isGuildsOnly: boolean
}

export function Metadata(metadata: Metadata) {
	return function (target: any): any {
		return class extends target {
			isNsfw = metadata.isNsfw ?? false
			isDevOnly = metadata.isDevOnly ?? false
			isGuildsOnly = metadata.isGuildsOnly ?? false
		}
	}
}
