import { formatters, KufaConsole } from 'kufa'

export function startKufa(name: string) {
	const customConsole = new KufaConsole({
		timeZone: 'America/Mexico_City',
		onlyHours: true,
		traceFun: true,
		format: false || `[§a%time%§r] [%prefix%§r] %message%`,
		log_prefix: false || `§2LOG`,
		warn_prefix: false || `§6WARN`,
		error_prefix: false || `§4ERROR`,
		depth: 2,
		parser: (ctx) => {
			ctx.str = `§4[${name}]§r ${ctx.str}`
		},
		formatters: [formatters.chalk, formatters.colors]
	})

	console = customConsole
}
