import { readdir } from 'fs/promises'
import { join } from 'path'

export async function getFiles(dir: string): Promise<string[]> {
	const filesInFolder = await readdir(dir, { withFileTypes: true })
	const files = []

	for (const file of filesInFolder) {
		if (file.isDirectory()) {
			const subFiles = await getFiles(join(dir, file.name))
			for (const subFile of subFiles) files.push(subFile)
		} else files.push(join(dir, file.name))
	}

	return files
}
