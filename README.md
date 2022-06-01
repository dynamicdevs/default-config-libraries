<br>
<div align="center">
<a href="https://www.dynamicdevs.io/">
<img src="https://assets.dynamicdevs.io/engineering/dd-logo-regular.svg" alt="Dynamic Devs logo" height="60"/>
</a>
<br>
<h3> General Projects Configurations </h3> 
<p align="center">
<a href="https://www.dynamicdevs.io/">dynamics.io</a>
</p>
</div>


## About The Project

The main purpose of this project is to unify all the main configuration necessary for the upcoming projects. It will provide a boilerplate with all the tools and best practices to ensure the correct structure of the projects such as code standars, linters, and similars.

## Built With

- Javascript
- [Tailwind][tailwind] concepts. 

## Project Structure

The project has the following structure.

```
───tailwind/
│   ├───default/
│   │   ├───screens.js
│   │   ├───shadows.js
│   │   └───spacings.js
│   └───horizon/
│       ├───amethyst/
│       │   ├───colors.js
│       │   └───index.js
│       ├───galaxy/
│       │   ├───colors.js
│       │   └───index.js
│       ├───ocean/
│       │   ├───colors.js
│       │   └───index.js
│       ├───colors.js
│       ├───font-family.js
│       ├───font-size.js
│       └───index.js
└───README.md
```

## Getting Started

A git submodule is a record within a host git repository that points to a specific commit in another external repository. See [GIT Submodules][submodules] for more information.

Use the `git submodule add [path to submodule] [subdirectory name]` command

    git submodule add https://github.com/dynamicdevs/default-config-libraries settings

## Tailwind configuration

### Prerequisites

Install [Tailwind][tailwind-install] in your proyect.

### Horizon

Currently, the Design System of Dynamic Devs is Horizon, through which we define the design guidelines. In these settings Colors, Fonts, Spaces, and Shadows are defined.

### Themes Colors

#### **Amethyst**

Inspired by a color variation of quartz, this semiprecious stone is often used in jewelry, moreover, it is considered a symbol of royalty.

<img src="https://dynamicdevscommon.blob.core.windows.net/engineering/theme-amethyst.png" alt="drawing" width="500"/>

#### **Set Amethyst Theme**

Import tailwind settings on `tailwind.config.js`

	const themeHorizon = require('../../settings/tailwind/horizon/amethyst');

Set theme with themeHorizon

	module.exports = {
		mode: 'jit',
		content: [
			join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
			...createGlobPatternsForDependencies(__dirname),
		],
		theme: themeHorizon,
		plugins: [],
	}

#### **Galaxy**

Inspired by the galaxy, represents wisdom, tranquility, protection, good fortune, and hope. This is the main color of Dynamic Devs.

<img src="https://dynamicdevscommon.blob.core.windows.net/engineering/theme-galaxy.png" alt="drawing" width="500"/>

#### **Set Galaxy Theme**

Import tailwind settings on `tailwind.config.js`

	const themeHorizon = require('../../settings/tailwind/horizon/galaxy');

Set theme with themeHorizon

	module.exports = {
		mode: 'jit',
		content: [
			join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
			...createGlobPatternsForDependencies(__dirname),
		],
		theme: themeHorizon,
		plugins: [],
	}

#### **Ocean**

Inspired by the oceans of the earth, which symbolize formlessness and the unfathomable. It is also a symbol of stability.

<img src="https://dynamicdevscommon.blob.core.windows.net/engineering/theme-ocean.png" alt="drawing" width="500"/>

#### **Set Ocean Theme**


Import tailwind settings on `tailwind.config.js`

	const themeHorizon = require('../../settings/tailwind/horizon/ocean');

Set theme with themeHorizon

	module.exports = {
		mode: 'jit',
		content: [
			join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
			...createGlobPatternsForDependencies(__dirname),
		],
		theme: themeHorizon,
		plugins: [],
	}


## Contributors

<br>

<a href="https://github.com/dynamicdevs/default-config-libraries/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dynamicdevs/default-config-libraries" />
</a>

## Community

Join to the conversation and help the community.

- [Youtube][youtube]
- [Spotity][spotify]
- [Twitch][twitch]

## Contact

Dynamic Devs - business@dynamicdevs.io

<br>

***

<p align="center">
<a href="https://ko-fi.com/D1D6C947W">
<img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Kofi button"/>
</a>
</p>

[tailwind-install]:https://tailwindcss.com/docs/installation
[tailwind]:https://tailwindcss.com/
[submodules]:https://git-scm.com/book/en/v2/Git-Tools-Submodules
[kofi]:https://ko-fi.com/D1D6C947W
[dynamicdevs]:https://www.dynamicdevs.io/
[youtube]: https://www.youtube.com/channel/UCD2cpIbELBfK_-9p8PoCGWg
[spotify]: https://open.spotify.com/show/4fvKHii2mWHkX8mz28klz8?si=d95553238ea04ec4
[twitch]: https://www.twitch.tv/dynamicdevs
