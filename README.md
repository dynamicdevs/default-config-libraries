# SETTINGS: default config libraries

## Install

Use the `git submodule add [path to submodule] [subdirectory name]` command

    git add submodule https://github.com/dynamicdevs/default-config-libraries settings

## Tailwind configuration

### Prerequisites 

Install [Tailwind][tailwind] in your proyect.

### Set Dynamic Theme

Import tailwind settings on `tailwind.config.js`

	const themeDynamic = require('../../settings/tailwind/theme-dynamic');

Set theme with themeDynamic

	module.exports = {
		mode: 'jit',
		content: [
			join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
			...createGlobPatternsForDependencies(__dirname),
		],
		theme: themeDynamic,
		plugins: [],
	}



[tailwind]:[https://tailwindcss.com/docs/installation]