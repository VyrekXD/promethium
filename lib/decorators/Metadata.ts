interface Metadata {
	isNsfw?: boolean
	isDevOnly?: boolean
	isGuildsOnly?: boolean
	category?: string
}

export function Metadata(metadata: Metadata) {
	return function (target: any): any {
		return class extends target {
			metadata = {
				isNsfw: metadata.isNsfw ?? false,
				isDevOnly: metadata.isDevOnly ?? false,
				isGuildsOnly: metadata.isGuildsOnly ?? false,
				category: metadata.category ?? ''
			}
		}
	}
}
