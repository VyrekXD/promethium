import { Command } from 'detritus-client'

export class BaseCommand<
	ParsedArgsFinished = Command.ParsedArgs
> extends Command.Command<ParsedArgsFinished> {
	permissionsIgnoreClientOwner = true
	triggerTypingAfter = 2000
}
