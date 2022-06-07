import { KufaConsole } from 'kufa'

declare global {
	type Console = KufaConsole

	namespace NodeJS {
		interface Global {
			Console: KufaConsole
		}
	}
}
