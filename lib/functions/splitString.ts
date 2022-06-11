// Some code is from discord.js module
//https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/util/Util.js
export function splitMessage(
	text: string,
	{ maxLength = 2_000, char = '\n', prepend = '', append = '' } = {}
) {
	if (typeof text !== 'string')
		throw new Error(`Expected a string, got ${text} instead.`)
	if (!text.length) throw new Error(`Expected a string, got ${text} instead.`)
	if (text.length <= maxLength) return [text]

	let splitText: any = [text]
	if (Array.isArray(char)) {
		while (
			char.length > 0 &&
			splitText.some((elem: any) => elem.length > maxLength)
		) {
			const currentChar = char.shift()
			if (currentChar instanceof RegExp) {
				splitText = splitText.flatMap((chunk: any) =>
					chunk.match(currentChar)
				)
			} else {
				splitText = splitText.flatMap((chunk: any) =>
					chunk.split(currentChar)
				)
			}
		}
	} else {
		splitText = text.split(char)
	}
	if (splitText.some((elem: any) => elem.length > maxLength))
		throw new Error('Max length')

	const messages = []
	let msg = ''
	for (const chunk of splitText) {
		if (msg && (msg + char + chunk + append).length > maxLength) {
			messages.push(msg + append)
			msg = prepend
		}
		msg += (msg && msg !== prepend ? char : '') + chunk
	}
	return messages.concat(msg).filter((m) => m)
}
