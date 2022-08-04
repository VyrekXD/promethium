//https://github.com/detritusjs/client/blob/master/examples/ts/example-bots/commands/interactions/commands/basecommand.ts
/* eslint-disable*/

import { Constants, Interaction, Structures } from 'detritus-client'

const { ApplicationCommandTypes, ApplicationCommandOptionTypes } = Constants

export class BaseInteractionCommand<
	ParsedArgsFinished = Interaction.ParsedArgs
> extends Interaction.InteractionCommand<ParsedArgsFinished> {
	error = 'Command'
}

export class BaseCommandOption<
	ParsedArgsFinished = Interaction.ParsedArgs
> extends Interaction.InteractionCommandOption<ParsedArgsFinished> {
	type = ApplicationCommandOptionTypes.SUB_COMMAND
}

export class BaseCommandOptionGroup<
	ParsedArgsFinished = Interaction.ParsedArgs
> extends Interaction.InteractionCommandOption<ParsedArgsFinished> {
	type = ApplicationCommandOptionTypes.SUB_COMMAND_GROUP
}

export class BaseSlashCommand<
	ParsedArgsFinished = Interaction.ParsedArgs
> extends BaseInteractionCommand<ParsedArgsFinished> {
	error = 'Slash Command'
	type = ApplicationCommandTypes.CHAT_INPUT
}

export interface ContextMenuMessageArgs {
	message: Structures.Message
}

export class BaseContextMenuMessageCommand extends BaseInteractionCommand<ContextMenuMessageArgs> {
	error = 'Message Context Menu'
	type = ApplicationCommandTypes.MESSAGE
}

export interface ContextMenuUserArgs {
	member?: Structures.Member
	user: Structures.User
}

export class BaseContextMenuUserCommand extends BaseInteractionCommand<ContextMenuUserArgs> {
	error = 'User Context Menu'
	type = ApplicationCommandTypes.USER
}
