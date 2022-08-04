import { Command } from 'detritus-client'

export class PrefixedBaseCommand<
	ParsedArgsFinished = Command.ParsedArgs
> extends Command.Command<ParsedArgsFinished> {
	permissionsIgnoreClientOwner = true
	triggerTypingAfter = 2000
}
