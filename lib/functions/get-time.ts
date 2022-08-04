export async function getTime(promise: Promise<any>) {
	try {
		const start = Date.now()

		await promise

		const end = Date.now()

		return (end - start) / 1000
	} catch (e) {
		throw e
	}
}
