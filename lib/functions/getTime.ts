export async function getTime(promise: Promise<any>) {
	const start = Date.now()

	await promise

	const end = Date.now()

	return (end - start) / 1000
}
