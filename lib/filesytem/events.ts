import { ClusterClient } from 'detritus-client'
import { emitWarning } from 'process'

import { getFiles } from './get-files.js'

export async function loadEvents(client: ClusterClient, dir: string): Promise<number | void> {
	let i = 0
	const files = await getFiles(dir)

	if (!files.length) return emitWarning(`The is no events on the folder: §b${dir}§r`)

	for (const file of files) {
		if (!file.endsWith('.js')) continue

		const Event = await import(`file://${file}`)
		const EventName = Event.name

		i++
		client.on(EventName, Event.run.bind(null, client))
	}

	return i
}
