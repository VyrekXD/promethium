interface Metadata {
	isNsfw?: boolean
	isDevOnly?: boolean
	isGuildsOnly?: boolean
	category?: string
}

export function Metadata(metadata: Metadata) {
	return function (target: any): any {
		const obj = { ...target.metadata, ...metadata }
		return class extends target {
			metadata = obj
		}
	}
}
