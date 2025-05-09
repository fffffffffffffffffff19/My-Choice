/** Character management
 * @param {String} create - Create a new character with name, age, and origin planet.
 * @param {String} delete - Delete a character by its ID.
 * @param {String} reset  - Reset a character to its creation state by its ID.
 * @param {String} select - Select a character from your list by its ID.
 * @param {String} status - Check the status of a selected character.
 */

const { SlashCommandBuilder } = require('discord.js');

module.exports = new SlashCommandBuilder()
    .setName('char')
    .setDescription('Commands related to character')
    .addSubcommandGroup((group) =>
        group
            .setName('manager')
            .setDescription('Character management.')
            .addSubcommand((subCommand) =>
                subCommand
                    .setName('create')
                    .setDescription('Command to create a new character.')
                    .addStringOption((option) =>
                        option
                            .setName('name')
                            .setDescription('The name of your new character.')
                            .setMaxLength(25)
                            .setMinLength(1)
                            .setRequired(true),
                    )
                    .addIntegerOption((option) =>
                        option
                            .setName('age')
                            .setDescription('The age of your character.')
                            .setMinValue(1)
                            .setMaxValue(99999)
                            .setRequired(true),
                    )
                    .addStringOption((option) =>
                        option
                            .setName('planet')
                            .setDescription('The planet they come from.')
                            .setMaxLength(10)
                            .setMinLength(1)
                            .setRequired(true),
                    ),
            )
            .addSubcommand((subCommand) =>
                subCommand
                    .setName('delete')
                    .setDescription('Delete a character.')
                    .addIntegerOption((option) =>
                        option
                            .setName('id')
                            .setDescription('The ID of the character you want to delete.')
                            .setMinValue(1)
                            .setRequired(true),
                    ),
            )
            .addSubcommand((subCommand) =>
                subCommand
                    .setName('reset')
                    .setDescription('Reset the character to creation state.')
                    .addIntegerOption((option) =>
                        option
                            .setName('id')
                            .setDescription('The ID of the character you want to reset.')
                            .setMinValue(1)
                            .setRequired(true),
                    ),
            ),
    )
    .addSubcommand((subCommand) =>
        subCommand
            .setName('select')
            .setDescription('Select a character from your list.')
            .addIntegerOption((option) =>
                option
                    .setName('id')
                    .setDescription('The ID of the character you want to select.')
                    .setMinValue(1)
                    .setRequired(true),
            ),
    )
    .addSubcommand((subCommand) =>
        subCommand.setName('status').setDescription('Show the selected character’s profile.'),
    );
