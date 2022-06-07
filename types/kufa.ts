import { KufaConsole } from 'kufa'

declare global {
	interface Console {
		//eslint-disable-next-line
		on(event: string, handler: () => void): any
	}

	namespace NodeJS {
		interface Global {
			Console: KufaConsole
		}
	}
}
