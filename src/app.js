const { client } = require('./main');
const { findHandlers } = require('./class/fileExplorer');

require('dotenv').config();

client.login(process.env.TOKEN);

findHandlers().forEach((handler) => require(handler)(client));
