name 'mb-dumpsters'
author 'TGIANN'
version '0.1.0' -- x-release-please-version
license 'GPL-3.0-only'
description 'Search dumpsters for loot'
repository 'https://github.com/aifivem/ai-dumpsters'
fx_version 'cerulean'
game 'gta5'
node_version '22'

client_script 'dist/client.js'
server_script 'dist/server.js'


dependencies {
	'/onesync',
	'ai-core',
	'ai-target',
}

files {
	'locales/*.json',
	'data/settings.json',
}
